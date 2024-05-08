import { Box, FormControl, FormHelperText, FormLabel, IconButton, Input, Select, MenuItem, InputLabel, FormGroup, Grid, TextField, NativeSelect, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import CameraRearOutlinedIcon from '@mui/icons-material/CameraRearOutlined';
import WarehouseOutlinedIcon from '@mui/icons-material/WarehouseOutlined';
import SimCardOutlinedIcon from '@mui/icons-material/SimCardOutlined';
import MemoryIcon from '@mui/icons-material/Memory';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import AutofpsSelectIcon from '@mui/icons-material/AutofpsSelect';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import CameraFrontOutlinedIcon from '@mui/icons-material/CameraFrontOutlined';
import UsbIcon from '@mui/icons-material/Usb';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import ScaleOutlinedIcon from '@mui/icons-material/ScaleOutlined';
import BatteryChargingFullOutlinedIcon from '@mui/icons-material/BatteryChargingFullOutlined';
import SensorsOutlinedIcon from '@mui/icons-material/SensorsOutlined';
import SmartButtonOutlinedIcon from '@mui/icons-material/SmartButtonOutlined';
import DragDropImage from '../DragDropImage';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, editProduct, fetchBrand, getProdcutById, getProductById } from '../../../redux/reducer/ProductSlice';
import { fetchCategory } from '../../../redux/reducer/CategorySlice';

const AddProduct = ({ setDisplayAddProduct }) => {
    const dispatch = useDispatch()
    const [currentSetProduct, setCurrentSetProduct] = useState({})
    const [category, setCategory] = useState(1)
    const [brand, setBrand] = useState(1)
    const [frequencyScreen, setFrequencyScreen] = useState("60 Hz");
    const [addImages, setAddImages] = useState([])

    const imgProductUrl = '/static/images/product/'
    var categories = useSelector((state) => state.category.categories)
    var brands = useSelector((state) => state.product.brand)
    var currentProduct = useSelector((state) => state.product.currentSetProduct)
    useEffect(() => {
        dispatch(fetchCategory())
        dispatch(fetchBrand())
        setCurrentSetProduct(currentProduct)
        setCategory(currentProduct.categoryDto.id)
        if(currentProduct) setFrequencyScreen(currentProduct.frequencyScreen)
    }, [dispatch,currentProduct])

    const handleCloseAddProduct = () => {
        setDisplayAddProduct(false)
        dispatch(getProductById(-1))
    }
    const handleChangeCategory = (e) => {
        setCategory(e.target.value)
        setCurrentSetProduct((prev) => {
            return {
                ...prev,
                "cpu": "",
                "card": "",
                "frequencyScreen": "",
                "os": "",
                "usbNumber": "",
                "typeDisk": "",
                "weight": "",
                "batteryCapacity": "",
                "frontCamera": "",
                "rearCamera": "",
                "simNumber": "",
                "connectType": "",
                "specialProperties": "",
            }
        })
    }
    const handleChangeBrand = (e) => {
        setBrand(e.target.value)
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

    const handleImageData = (categoryId) => {
        let category = categoryId == 1 ? "laptop/" : categoryId == 2 ? "dienthoai/" : "phukien/"
        let prePath = imgProductUrl + category
        let productImages = []
        addImages.map((img) => {
            productImages.push({
                "path": prePath + img.name
            })
        })
        console.log(productImages)
        return productImages
    }
    

    const handleSaveProduct = () => {
        let product = currentSetProduct
        let newProduct = {
            ...product,
            images: handleImageData(category)
        }
        if(currentSetProduct.id == -1 ) dispatch(addProduct({newProduct, category, brand}))
        else dispatch(editProduct({newProduct, category, brand}))
        handleCloseAddProduct()
    }
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
                                    <DragDropImage setAddImages={setAddImages} initImages={currentSetProduct.images} />
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
                                        value={currentSetProduct.name}
                                        onChange={(e) => {
                                            handleOnChangeProperties("name", e.target.value)
                                        }}
                                    />
                                    <FormHelperText></FormHelperText>
                                </FormControl>
                            </Grid>
                            {/* Nhà cung cấp*/}
                            <Grid item xs={12} sm={12} md={4} sx={style.inputContainer}>
                                <FormControl fullWidth={true} >
                                    <FormLabel sx={style.formLabel}>
                                        <WarehouseOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                        <Box>Nhà cung cấp</Box>
                                    </FormLabel>
                                    <TextField fullWidth={true} variant='outlined'
                                        value={currentSetProduct.vendor}
                                        onChange={(e) => {
                                            handleOnChangeProperties("vendor", e.target.value)
                                        }}
                                    />
                                    <FormHelperText></FormHelperText>
                                </FormControl>
                            </Grid>
                            {/* Danh mục sản phẩm  */}
                            <Grid item xs={12} sm={12} md={4} sx={style.inputContainer} >
                                <FormControl fullWidth={true}>
                                    <FormLabel sx={style.formLabel} >
                                        <CategoryOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                        <Box>Danh mục</Box>
                                    </FormLabel>
                                    <Select
                                        sx={style.select}
                                        value={category}
                                        disabled={currentSetProduct.id !== null}
                                        onChange={handleChangeCategory}
                                    >
                                        {
                                            categories.map((category) => {
                                                return <MenuItem key={category.id} value={category.id} >{category.name}</MenuItem>

                                            })
                                        }
                                    </Select>
                                    <FormHelperText></FormHelperText>
                                </FormControl>
                            </Grid>
                            {/* Hãng sản xuất */}
                            <Grid item xs={12} sm={12} md={4} sx={style.inputContainer} >
                                <FormControl fullWidth={true}>
                                    <FormLabel sx={style.formLabel} >
                                        <WarehouseOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                        <Box>Hãng sản xuất</Box>
                                    </FormLabel>
                                    <Select
                                        sx={style.select}
                                        disabled={currentSetProduct.id !== null}
                                        value={brand}
                                        onChange={handleChangeBrand}
                                    >
                                        {
                                            brands.map((brand) => {
                                                return <MenuItem key={brand.id} value={brand.id} >{brand.name}</MenuItem>
                                            })
                                        }
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
                                            <TextField fullWidth={true} variant='outlined'
                                                value={currentSetProduct.cpu}
                                                onChange={(e) => {
                                                    handleOnChangeProperties("cpu", e.target.value)
                                                }} />
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
                                            <TextField fullWidth={true} variant='outlined'
                                                value={currentSetProduct.card}
                                                onChange={(e) => {
                                                    handleOnChangeProperties("card", e.target.value)
                                                }} />
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
                                                <MenuItem value='60 Hz' >60 Hz</MenuItem>
                                                <MenuItem value='120 Hz' >120 Hz</MenuItem>
                                                <MenuItem value='144 Hz' >144 Hz</MenuItem>
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
                                            <TextField fullWidth={true} variant='outlined'
                                                value={currentSetProduct.os}
                                                onChange={(e) => {
                                                    handleOnChangeProperties("os", e.target.value)
                                                }} />
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
                                            <TextField fullWidth={true} variant='outlined'
                                                value={currentSetProduct.usbNumber}
                                                onChange={(e) => {
                                                    handleOnChangeProperties("usbNumber", e.target.value)
                                                }} />
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
                                            <TextField fullWidth={true} variant='outlined'
                                                value={currentSetProduct.typeDisk}
                                                onChange={(e) => {
                                                    handleOnChangeProperties("typeDisk", e.target.value)
                                                }}
                                            />
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
                                            <TextField fullWidth={true} variant='outlined'
                                                value={currentSetProduct.weight}
                                                onChange={(e) => {
                                                    handleOnChangeProperties("weight", e.target.value)
                                                }}
                                            />
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
                                            <TextField fullWidth={true} variant='outlined'
                                                value={currentSetProduct.batteryCapacity}
                                                onChange={(e) => {
                                                    handleOnChangeProperties("batteryCapacity", e.target.value)
                                                }}
                                            />
                                            <FormHelperText></FormHelperText>
                                        </FormControl>
                                    </Grid>
                                </React.Fragment>
                            }
                            {/** Thuộc tính của điện thoại */}
                            {category === 2 &&
                                <React.Fragment>
                                    {/* CPU  */}
                                    <Grid item xs={12} sm={6} md={3} sx={style.inputContainer}>
                                        <FormControl fullWidth={true} >
                                            <FormLabel sx={style.formLabel} >
                                                <MemoryIcon sx={style.formLabel.formLabelIcon} />
                                                <Box>CPU</Box>
                                            </FormLabel>
                                            <TextField fullWidth={true} variant='outlined'
                                                value={currentSetProduct.cpu}
                                                onChange={(e) => {
                                                    handleOnChangeProperties("cpu", e.target.value)
                                                }} />
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
                                                <MenuItem value='60 Hz' >60 Hz</MenuItem>
                                                <MenuItem value='120 Hz' >120 Hz</MenuItem>
                                                <MenuItem value='144 Hz' >144 Hz</MenuItem>
                                            </Select>
                                            <FormHelperText></FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    {/* Số cổng SIM  */}
                                    <Grid item xs={12} sm={6} md={3} sx={style.inputContainer}>
                                        <FormControl fullWidth={true} >
                                            <FormLabel sx={style.formLabel} >
                                                <SimCardOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                                <Box>Số SIM</Box>
                                            </FormLabel>
                                            <TextField fullWidth={true} variant='outlined'
                                                value={currentSetProduct.simNumber}
                                                onChange={(e) => {
                                                    handleOnChangeProperties("simNumber", e.target.value)
                                                }} />
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
                                            <TextField fullWidth={true} variant='outlined'
                                                value={currentSetProduct.batteryCapacity}
                                                onChange={(e) => {
                                                    handleOnChangeProperties("batteryCapacity", e.target.value)
                                                }}
                                            />
                                            <FormHelperText></FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    {/* Camera trước */}
                                    <Grid item xs={12} sm={6} md={6} sx={style.inputContainer} >
                                        <FormControl fullWidth={true}>
                                            <FormLabel sx={style.formLabel} >
                                                <CameraFrontOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                                <Box>Camera trước</Box>
                                            </FormLabel>
                                            <TextField fullWidth={true} variant='outlined'
                                                value={currentSetProduct.frontCamera}
                                                onChange={(e) => {
                                                    handleOnChangeProperties("frontCamera", e.target.value)
                                                }} />
                                            <FormHelperText></FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    {/* Camera sau  */}
                                    <Grid item xs={12} sm={6} md={6} sx={style.inputContainer} >
                                        <FormControl fullWidth={true}>
                                            <FormLabel sx={style.formLabel} >
                                                <CameraRearOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                                <Box>Camera sau</Box>
                                            </FormLabel>
                                            <TextField fullWidth={true} variant='outlined'
                                                value={currentSetProduct.rearCamera}
                                                onChange={(e) => {
                                                    handleOnChangeProperties("rearCamera", e.target.value)
                                                }}
                                            />
                                            <FormHelperText></FormHelperText>
                                        </FormControl>
                                    </Grid>
                                </React.Fragment>
                            }
                            {/** Thuộc tính của phụ kiện */}
                            {category === 3 &&
                                <React.Fragment>
                                    {/* Loại kết nối  */}
                                    <Grid item xs={12} sm={6} md={3} sx={style.inputContainer}>
                                        <FormControl fullWidth={true} >
                                            <FormLabel sx={style.formLabel} >
                                                <SensorsOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                                <Box>Loại kết nối</Box>
                                            </FormLabel>
                                            <TextField fullWidth={true} variant='outlined'
                                                value={currentSetProduct.connectType}
                                                onChange={(e) => {
                                                    handleOnChangeProperties("connectType", e.target.value)
                                                }} />
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
                                            <TextField fullWidth={true} variant='outlined'
                                                value={currentSetProduct.weight}
                                                onChange={(e) => {
                                                    handleOnChangeProperties("weight", e.target.value)
                                                }}
                                            />
                                            <FormHelperText></FormHelperText>
                                        </FormControl>
                                    </Grid>

                                    {/* Thuộc tính đặc biệt  */}
                                    <Grid item xs={12} sm={12} md={6} sx={style.inputContainer}>
                                        <FormControl fullWidth={true} >
                                            <FormLabel sx={style.formLabel} >
                                                <SmartButtonOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                                <Box>Thuộc tính đặc biệt</Box>
                                            </FormLabel>
                                            <TextField fullWidth={true} variant='outlined'
                                                value={currentSetProduct.specialProperties}
                                                onChange={(e) => {
                                                    handleOnChangeProperties("specialProperties", e.target.value)
                                                }} />
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
                                    <TextareaAutosize value={currentSetProduct.description}
                                        style={{ border: "1px solid gray" }}
                                        minRows={10}
                                        maxRows={20}
                                        onChange={(e) => {
                                            handleOnChangeProperties("description", e.target.value)
                                        }}
                                    />
                                    <FormHelperText></FormHelperText>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </form>
                    <Box style={{ display: 'flex', justifyContent: "flex-end" }}>
                        <Button onClick={handleSaveProduct} variant='contained' color='success'>Save</Button>
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