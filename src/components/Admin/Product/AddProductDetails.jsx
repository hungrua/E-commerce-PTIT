import { Box, FormControl, FormHelperText, FormLabel, IconButton, Input, Select, MenuItem, InputLabel, FormGroup, Grid, TextField, NativeSelect, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import LaptopWindowsOutlinedIcon from '@mui/icons-material/LaptopWindowsOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';

import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';

import { useDispatch, useSelector } from 'react-redux';
import { addProductDetails, editProductDetails, getProductDetailsById } from '../../../redux/reducer/ProductSlice';


const AddProductDetails = ({ setDisplayAddProduct, category,productId }) => {
    const dispatch = useDispatch()
    const [soldStatus, setSoldStatus] = useState(false)
    const [screenSize, setScreenSize] = useState("")
    const [ram,setRam] = useState("")
    const [currentSetProductDetails, setCurrentSetProductDetails] = useState({})

    var productDetails = useSelector((state) => state.product.currentSetProductDetails)
    useEffect(() => {
        setCurrentSetProductDetails(productDetails)
        setRam(productDetails.ram)
        setScreenSize(productDetails.screenSize)
        setSoldStatus(productDetails.isAvailable)
    }, [dispatch,productDetails])

    const handleCloseAddProductDetails = () => {
        setDisplayAddProduct(false)
        dispatch(getProductDetailsById(-1))
    }
    const handleChangeSoldStatus = (e) => {
        setSoldStatus(e.target.value)
        handleOnChangeProperties("isAvailable", e.target.value)
    }
    const handleChangeScreenSize = (e) => {
        setScreenSize(e.target.value)
        handleOnChangeProperties("screenSize", e.target.value)
    }

    const handleChangeRam = (e) => {
        setRam(e.target.value)
        handleOnChangeProperties("ram", e.target.value)
    }

    const handleOnChangeProperties = (field, value) => {
        setCurrentSetProductDetails((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSaveProductDetails = ()=>{
        let newProductDetails= {
            id:productId,
            itemDetails:[
                currentSetProductDetails
            ]
        }
        console.log(newProductDetails)
        if(currentSetProductDetails.id===null) dispatch(addProductDetails(newProductDetails))   
        else dispatch(editProductDetails(newProductDetails))
        handleCloseAddProductDetails()
        
    }


    return (
        <div>
            <Box sx={style.coverer}>
                <Box sx={style.addUserModal}>
                    <Box style={{ display: 'flex', justifyContent: "flex-end" }}>
                        <IconButton
                            onClick={handleCloseAddProductDetails}
                        >
                            <CancelOutlinedIcon color='error' />
                        </IconButton>
                    </Box>
                    <Typography variant='h5' ml={5}>Loại sản phẩm</Typography>
                    <form>
                        <Grid sx={style.form} container rowSpacing={2} columnSpacing={2}>
                            {/* CPU  */}
                            <Grid item xs={12} sm={6} md={3} sx={style.inputContainer}>
                                <FormControl fullWidth={true} >
                                    <FormLabel sx={style.formLabel} >
                                        <ColorLensOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                        <Box>Màu sắc</Box>
                                    </FormLabel>
                                    <TextField
                                        value={currentSetProductDetails.color}
                                        onChange={(e) => handleOnChangeProperties("color", e.target.value)}
                                        fullWidth={true} variant='outlined'
                                    />
                                    <FormHelperText></FormHelperText>
                                </FormControl>
                            </Grid>
                            {/* Card */}
                            {(category == 1 || category == 2) && (
                                <React.Fragment>
                                    <Grid item xs={12} sm={6} md={3} sx={style.inputContainer}>
                                        <FormControl fullWidth={true} >
                                            <FormLabel sx={style.formLabel} >
                                                <SaveOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                                <Box>Dung lượng bộ nhớ</Box>
                                            </FormLabel>
                                            <TextField
                                                value={currentSetProductDetails.diskSize}
                                                onChange={(e) => handleOnChangeProperties("diskSize", e.target.value)}
                                                fullWidth={true} variant='outlined' />
                                            <FormHelperText></FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={category == 1 ? 3 : 6} sx={style.inputContainer} >
                                        <FormControl fullWidth={true}>
                                            <FormLabel sx={style.formLabel} >
                                                <AnalyticsOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                                <Box>RAM</Box>
                                            </FormLabel>
                                            <Select
                                                sx={style.select}
                                                value={ram}
                                                onChange={(e) => {
                                                    handleChangeRam(e)
                                                }}
                                            >
                                                <MenuItem value='4GB' >4G</MenuItem>
                                                <MenuItem value='6GB' >6G</MenuItem>
                                                <MenuItem value='8GB' >8G</MenuItem>
                                                <MenuItem value='16GB' >16G</MenuItem>
                                                <MenuItem value='32GB' >32G</MenuItem>
                                            </Select>
                                            <FormHelperText></FormHelperText>
                                        </FormControl>
                                    </Grid>
                                </React.Fragment>
                            )
                            }
                            {/* Kích thước màn hình */}
                            {category == 1 && <Grid item xs={12} sm={6} md={3} sx={style.inputContainer} >
                                <FormControl fullWidth={true}>
                                    <FormLabel sx={style.formLabel} >
                                        <LaptopWindowsOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                        <Box>Kích thước màn hình</Box>
                                    </FormLabel>
                                    <Select
                                        sx={style.select}
                                        value={screenSize}
                                        onChange={(e) => {
                                            handleChangeScreenSize(e)
                                        }}
                                    >
                                        <MenuItem value='13.3 inches' >13.3 inches</MenuItem>
                                        <MenuItem value='14 inches' >14 inches</MenuItem>
                                        <MenuItem value='15.6 inches' >15.6 inches</MenuItem>
                                    </Select>
                                    <FormHelperText></FormHelperText>
                                </FormControl>
                            </Grid>}
                            {/* Tình trạng  */}
                            <Grid item xs={12} sm={6} md={category == 3 ? 3 : 6} sx={style.inputContainer} >
                                <FormControl fullWidth={true}>
                                    <FormLabel sx={style.formLabel} >
                                        <AnalyticsOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                        <Box>Tình trạng</Box>
                                    </FormLabel>
                                    <Select
                                        sx={style.select}
                                        value={soldStatus}
                                        onChange={handleChangeSoldStatus}
                                    >
                                        <MenuItem value={true} >Có sẵn</MenuItem>
                                        <MenuItem value={false} >Hết hàng</MenuItem>
                                    </Select>
                                    <FormHelperText></FormHelperText>
                                </FormControl>
                            </Grid>
                            {/* Gía bán sản phẩm  */}
                            <Grid item xs={12} sm={6} md={6} sx={style.inputContainer}>
                                <FormControl fullWidth={true} >
                                    <FormLabel sx={style.formLabel} >
                                        <PaidOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                        <Box>Giá bán (VND)</Box>
                                    </FormLabel>
                                    <TextField fullWidth={true} variant='outlined'
                                        value={currentSetProductDetails.price}
                                        onChange={(e) => {
                                            handleOnChangeProperties("price", e.target.value)
                                        }}
                                    />
                                    <FormHelperText></FormHelperText>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </form>
                    <Box style={{ display: 'flex', justifyContent: "flex-end" }}>
                        <Button
                            onClick={()=> handleSaveProductDetails()}
                        
                        variant='contained' color='success'>Save</Button>
                    </Box>
                </Box>
            </Box>
        </div>
    )
}
/** @type {import("@mui/material").SxProps} */
const style = {
    coverer: {
        position: "fixed",
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1111,
        background: "rgba(0, 0, 0, 0.5)"
    },
    addUserModal: {
        backgroundColor: "white",
        width: "80%",
        position: 'absolute',
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        boxShadow: 5,
        padding: '10px',
        maxHeight: "80%",
        overflowY: "auto"
    },
    form: {
        padding: 4
    },
    inputsContainer: {
        display: 'flex',
        width: "100%",
        justifyContent: "space-evenly"
    },
    inputContainer: {
        display: "flex",
        alignItems: "end"
    },
    select: {
        // marginTop:"8px"
    },
    formLabel: {
        display: "flex",
        alignItems: "center",
        marginBottom: "8px",
        formLabelIcon: {
            marginRight: '5px',
            marginBottom: '5px'
        }
    }
}
export default AddProductDetails