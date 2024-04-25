import { Box, FormControl, FormHelperText, FormLabel, IconButton, Input, Select, MenuItem, InputLabel, FormGroup, Grid, TextField, NativeSelect, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import LaptopWindowsOutlinedIcon from '@mui/icons-material/LaptopWindowsOutlined';
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import WarehouseOutlinedIcon from '@mui/icons-material/WarehouseOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import MemoryIcon from '@mui/icons-material/Memory';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import AutofpsSelectIcon from '@mui/icons-material/AutofpsSelect';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import UsbIcon from '@mui/icons-material/Usb';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import ScaleOutlinedIcon from '@mui/icons-material/ScaleOutlined';
import BatteryChargingFullOutlinedIcon from '@mui/icons-material/BatteryChargingFullOutlined';
import DragDropImage from '../DragDropImage';
import { useDispatch, useSelector } from 'react-redux';
// import { fetchBrand } from '../../../redux/reducer/ProductSlice';
// import { fetchCategory } from '../../../redux/reducer/CategorySlice';

const AddProductDetails = ({ setDisplayAddProduct, category }) => {
    const dispatch = useDispatch()
    const [soldStatus, setSoldStatus] = useState("Có sẵn")
    const [frequencyScreen, setFrequencyScreen] = useState("")

    const [currentSetProduct, setCurrentSetProduct] = useState({})

    var categories = useSelector((state) => state.category.categories)
    var brands = useSelector((state) => state.product.brand)
    // useEffect(() => {
    //     dispatch(fetchCategory())
    //     dispatch(fetchBrand())
    // }, [dispatch])

    const handleCloseAddProduct = () => {
        setDisplayAddProduct(false)
    }
    const handleChangeSoldStatus = (e) => {
        setSoldStatus(e.target.value)
    }
    const handleChangeFrequencyScreen = (e) => {
        setFrequencyScreen(e.target.value)
        handleOnChangeProperties("frequencyScreen", e.target.value)
    }
    const handleOnChangeProperties = (field, value) => {
        setCurrentSetProduct((prev) => ({
            ...prev,
            [field]: value,
        }));
    };
    return (
        <div>
            <Box sx={style.coverer}>
                <Box sx={style.addUserModal}>
                    <Box style={{ display: 'flex', justifyContent: "flex-end" }}>
                        <IconButton
                            onClick={handleCloseAddProduct}
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
                                    <TextField fullWidth={true} variant='outlined' />
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
                                            <TextField fullWidth={true} variant='outlined' />
                                            <FormHelperText></FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={category == 2?3:6} sx={style.inputContainer} >
                                        <FormControl fullWidth={true}>
                                            <FormLabel sx={style.formLabel} >
                                                <AnalyticsOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                                <Box>RAM</Box>
                                            </FormLabel>
                                            <Select
                                                sx={style.select}
                                                value={frequencyScreen}
                                                onChange={(e) => {
                                                    handleChangeFrequencyScreen(e)
                                                }}
                                            >
                                                <MenuItem value='4G' >4G</MenuItem>
                                                <MenuItem value='6G' >6G</MenuItem>
                                                <MenuItem value='8G' >8G</MenuItem>
                                                <MenuItem value='16G' >16G</MenuItem>
                                                <MenuItem value='32G' >32G</MenuItem>
                                            </Select>
                                            <FormHelperText></FormHelperText>
                                        </FormControl>
                                    </Grid>
                                </React.Fragment>
                            )
                            }
                            {/* Kích thước màn hình */}
                            {category == 2 && <Grid item xs={12} sm={6} md={3} sx={style.inputContainer} >
                                <FormControl fullWidth={true}>
                                    <FormLabel sx={style.formLabel} >
                                        <LaptopWindowsOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                        <Box>Kích thước màn hình</Box>
                                    </FormLabel>
                                    <Select
                                        sx={style.select}
                                        value={frequencyScreen}
                                        onChange={(e) => {
                                            handleChangeFrequencyScreen(e)
                                        }}
                                    >
                                        <MenuItem value='13.3 inch' >13.3 inch</MenuItem>
                                        <MenuItem value='14 inch' >14 inch</MenuItem>
                                        <MenuItem value='15.6 inch' >15.6 inch</MenuItem>
                                    </Select>
                                    <FormHelperText></FormHelperText>
                                </FormControl>
                            </Grid>}
                            {/* Tình trạng  */}
                            <Grid item xs={12} sm={6} md={category == 3?3:6} sx={style.inputContainer} >
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
                                        <MenuItem value='Có sẵn' >Có sẵn</MenuItem>
                                        <MenuItem value='Hết hàng' >Hết hàng</MenuItem>
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
                        <Button variant='contained' color='success'>Save</Button>
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