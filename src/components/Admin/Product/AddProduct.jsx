import { Box, FormControl, FormHelperText, FormLabel, IconButton, Input, Select, MenuItem, InputLabel, FormGroup, Grid, TextField, NativeSelect, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
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
import { fetchCategory } from '../../../redux/reducer/CategorySlice';

const AddProduct = ({ setDisplayAddProduct }) => {
    const dispatch = useDispatch()
    const [category, setCategory] = useState(1)
    const [brand, setBrand] = useState("Samsung")
    const [soldStatus, setSoldStatus] = useState("Có sẵn")
    const [frequencyScreen, setFrequencyScreen] = useState("")

    const [currentSetProduct, setCurrentSetProduct] = useState({})
    
    const categories = useSelector((state) => state.category.categories)
    useEffect(()=>{
        dispatch(fetchCategory)
    },[])

    const handleCloseAddProduct = () => {
        setDisplayAddProduct(false)
    }
    const handleChangeCategory = (e) => {
        setCategory(e.target.value)
    }
    const handleChangeBrand = (e) => {
        setBrand(e.target.value)
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
                    <form>
                        <Grid sx={style.form} container rowSpacing={2} columnSpacing={2}>
                            {/* Ảnh sản phẩm  */}
                            <Grid item xs={12} sm={12} md={12} sx={style.inputContainer}>
                                <FormControl fullWidth={true} >
                                    <FormLabel sx={style.formLabel}>
                                        <ImageOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                        <Box>Ảnh sản phẩm</Box>
                                    </FormLabel>
                                    <DragDropImage />
                                    <FormHelperText></FormHelperText>
                                </FormControl>
                            </Grid>
                            {/* Tên sản phẩm  */}
                            <Grid item xs={12} sm={12} md={12} sx={style.inputContainer}>
                                <FormControl fullWidth={true} >
                                    <FormLabel sx={style.formLabel}>
                                        <Inventory2OutlinedIcon sx={style.formLabel.formLabelIcon} />
                                        <Box>Tên sản phẩm</Box>
                                    </FormLabel>
                                    <TextField fullWidth={true} variant='outlined'
                                        onChange={(e) => {
                                            handleOnChangeProperties("name", e.target.value)
                                        }}
                                    />
                                    <FormHelperText></FormHelperText>
                                </FormControl>
                            </Grid>
                            {/* Gía bán sản phẩm  */}
                            <Grid item xs={12} sm={6} md={3} sx={style.inputContainer}>
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
                            {/* Danh mục sản phẩm  */}
                            <Grid item xs={12} sm={6} md={3} sx={style.inputContainer} >
                                <FormControl fullWidth={true}>
                                    <FormLabel sx={style.formLabel} >
                                        <CategoryOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                        <Box>Danh mục</Box>
                                    </FormLabel>
                                    <Select
                                        sx={style.select}
                                        value={category}
                                        onChange={handleChangeCategory}
                                    >
                                        {
                                            categories.map((category)=>{
                                                return <MenuItem value={category.id} >{category.name}</MenuItem>
                                                
                                            })
                                        }
                                    </Select>
                                    <FormHelperText></FormHelperText>
                                </FormControl>
                            </Grid>
                            {/* Hãng sản xuất */}
                            <Grid item xs={12} sm={6} md={3} sx={style.inputContainer} >
                                <FormControl fullWidth={true}>
                                    <FormLabel sx={style.formLabel} >
                                        <WarehouseOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                        <Box>Hãng sản xuất</Box>
                                    </FormLabel>
                                    <Select
                                        sx={style.select}
                                        value={brand}
                                        onChange={handleChangeBrand}
                                    >
                                        <MenuItem value='Samsung' >Samsung</MenuItem>
                                        <MenuItem value='Apple' >Apple</MenuItem>
                                        <MenuItem value='Xiaomi'>Xiaomi</MenuItem>
                                    </Select>
                                    <FormHelperText></FormHelperText>
                                </FormControl>
                            </Grid>
                            {/* Tình trạng  */}
                            <Grid item xs={12} sm={6} md={3} sx={style.inputContainer} >
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

                            {/* Thuộc tính của laptop */}
                            {category === 1 &&
                                <React.Fragment>
                                    {/* CPU  */}
                                    <Grid item xs={12} sm={6} md={3} sx={style.inputContainer}>
                                        <FormControl fullWidth={true} >
                                            <FormLabel sx={style.formLabel} >
                                                <MemoryIcon sx={style.formLabel.formLabelIcon} />
                                                <Box>CPU</Box>
                                            </FormLabel>
                                            <TextField fullWidth={true} variant='outlined' />
                                            <FormHelperText></FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    {/* Card */}
                                    <Grid item xs={12} sm={6} md={3} sx={style.inputContainer}>
                                        <FormControl fullWidth={true} >
                                            <FormLabel sx={style.formLabel} >
                                                <GraphicEqIcon sx={style.formLabel.formLabelIcon} />
                                                <Box>Card</Box>
                                            </FormLabel>
                                            <TextField fullWidth={true} variant='outlined' />
                                            <FormHelperText></FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    {/* Tần số quét */}
                                    <Grid item xs={12} sm={6} md={3} sx={style.inputContainer} >
                                        <FormControl fullWidth={true}>
                                            <FormLabel sx={style.formLabel} >
                                                <AutofpsSelectIcon sx={style.formLabel.formLabelIcon} />
                                                <Box>Tần số quét</Box>
                                            </FormLabel>
                                            <Select
                                                sx={style.select}
                                                value={frequencyScreen}
                                                onChange={(e) => {
                                                    handleChangeFrequencyScreen(e)
                                                }}
                                            >
                                                <MenuItem value='60' >60 Hz</MenuItem>
                                                <MenuItem value='120' >120 Hz</MenuItem>
                                                <MenuItem value='144' >144 Hz</MenuItem>
                                            </Select>
                                            <FormHelperText></FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    {/* Hệ điều hành */}
                                    <Grid item xs={12} sm={6} md={3} sx={style.inputContainer} >
                                        <FormControl fullWidth={true}>
                                            <FormLabel sx={style.formLabel} >
                                                <WysiwygIcon sx={style.formLabel.formLabelIcon} />
                                                <Box>Hệ điều hành</Box>
                                            </FormLabel>
                                            <TextField fullWidth={true} variant='outlined' />
                                            <FormHelperText></FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    {/* Số cổng USB  */}
                                    <Grid item xs={12} sm={6} md={3} sx={style.inputContainer}>
                                        <FormControl fullWidth={true} >
                                            <FormLabel sx={style.formLabel} >
                                                <UsbIcon sx={style.formLabel.formLabelIcon} />
                                                <Box>Cổng USB</Box>
                                            </FormLabel>
                                            <TextField fullWidth={true} variant='outlined' />
                                            <FormHelperText></FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    {/* Loại ổ cứng  */}
                                    <Grid item xs={12} sm={6} md={3} sx={style.inputContainer} >
                                        <FormControl fullWidth={true}>
                                            <FormLabel sx={style.formLabel} >
                                                <StorageOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                                <Box>Ổ cứng</Box>
                                            </FormLabel>
                                            <TextField fullWidth={true} variant='outlined' />
                                            <FormHelperText></FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    {/* Khối lượng  */}
                                    <Grid item xs={12} sm={6} md={3} sx={style.inputContainer}>
                                        <FormControl fullWidth={true} >
                                            <FormLabel sx={style.formLabel} >
                                                <ScaleOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                                <Box>Khối lượng (kg)</Box>
                                            </FormLabel>
                                            <TextField fullWidth={true} variant='outlined' />
                                            <FormHelperText></FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    {/* Dung lượng pin */}
                                    <Grid item xs={12} sm={6} md={3} sx={style.inputContainer}>
                                        <FormControl fullWidth={true} >
                                            <FormLabel sx={style.formLabel} >
                                                <BatteryChargingFullOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                                <Box>Dung lượng pin (mAh)</Box>
                                            </FormLabel>
                                            <TextField fullWidth={true} variant='outlined' />
                                            <FormHelperText></FormHelperText>
                                        </FormControl>
                                    </Grid>
                                </React.Fragment>
                            }
                            {category === "dien-thoai" &&
                                <React.Fragment>
                                    {/* CPU  */}
                                    <Grid item xs={12} sm={6} md={3} sx={style.inputContainer}>
                                        <FormControl fullWidth={true} >
                                            <FormLabel sx={style.formLabel} >
                                                <PaidOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                                <Box>CPU</Box>
                                            </FormLabel>
                                            <TextField fullWidth={true} variant='outlined' />
                                            <FormHelperText></FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    {/* Tần số quét */}
                                    <Grid item xs={12} sm={6} md={3} sx={style.inputContainer} >
                                        <FormControl fullWidth={true}>
                                            <FormLabel sx={style.formLabel} >
                                                <AnalyticsOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                                <Box>Tần số quét</Box>
                                            </FormLabel>
                                            <Select
                                                sx={style.select}
                                                value={soldStatus}
                                                onChange={handleChangeSoldStatus}
                                            >
                                                <MenuItem value='60' >60 Hz</MenuItem>
                                                <MenuItem value='120' >120 Hz</MenuItem>
                                                <MenuItem value='144' >144 Hz</MenuItem>
                                            </Select>
                                            <FormHelperText></FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    {/* Hệ điều hành */}
                                    <Grid item xs={12} sm={6} md={3} sx={style.inputContainer} >
                                        <FormControl fullWidth={true}>
                                            <FormLabel sx={style.formLabel} >
                                                <AnalyticsOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                                <Box>Hệ điều hành</Box>
                                            </FormLabel>
                                            <Select
                                                sx={style.select}
                                                value={soldStatus}
                                                onChange={handleChangeSoldStatus}
                                            >
                                                <MenuItem value='window' >Window</MenuItem>
                                                <MenuItem value='ios' >IOS</MenuItem>
                                            </Select>
                                            <FormHelperText></FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    {/* Số cổng USB  */}
                                    <Grid item xs={12} sm={6} md={3} sx={style.inputContainer}>
                                        <FormControl fullWidth={true} >
                                            <FormLabel sx={style.formLabel} >
                                                <PaidOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                                <Box>Số cổng USB</Box>
                                            </FormLabel>
                                            <TextField fullWidth={true} variant='outlined' />
                                            <FormHelperText></FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    {/* Loại ổ cứng  */}
                                    <Grid item xs={12} sm={6} md={3} sx={style.inputContainer} >
                                        <FormControl fullWidth={true}>
                                            <FormLabel sx={style.formLabel} >
                                                <AnalyticsOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                                <Box>Loại ổ cứng</Box>
                                            </FormLabel>
                                            <Select
                                                sx={style.select}
                                                value={soldStatus}
                                                onChange={handleChangeSoldStatus}
                                            >
                                                <MenuItem value='HDD' >HDD</MenuItem>
                                                <MenuItem value='SSD' >SSD</MenuItem>
                                            </Select>
                                            <FormHelperText></FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    {/* Khối lượng  */}
                                    <Grid item xs={12} sm={6} md={3} sx={style.inputContainer}>
                                        <FormControl fullWidth={true} >
                                            <FormLabel sx={style.formLabel} >
                                                <PaidOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                                <Box>Khối lượng (kg)</Box>
                                            </FormLabel>
                                            <TextField fullWidth={true} variant='outlined' />
                                            <FormHelperText></FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    {/* Dung lượng pin */}
                                    <Grid item xs={12} sm={6} md={3} sx={style.inputContainer}>
                                        <FormControl fullWidth={true} >
                                            <FormLabel sx={style.formLabel} >
                                                <PaidOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                                <Box>Dung lượng pin (mAh)</Box>
                                            </FormLabel>
                                            <TextField fullWidth={true} variant='outlined' />
                                            <FormHelperText></FormHelperText>
                                        </FormControl>
                                    </Grid>
                                </React.Fragment>
                            }
                            <Grid item xs={12} sm={12} md={12} sx={style.inputContainer}>
                                <FormControl fullWidth={true} >
                                    <FormLabel sx={style.formLabel} >
                                        <NotesOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                        <Box>Mô tả sản phẩm</Box>
                                    </FormLabel>
                                    <TextareaAutosize style={{ border: "1px solid gray" }} minRows={10} maxRows={20} />
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
export default AddProduct