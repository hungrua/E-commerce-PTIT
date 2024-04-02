import { Box, FormControl, FormHelperText, FormLabel, IconButton, Input, Select, MenuItem, InputLabel, FormGroup, Grid, TextField, NativeSelect, Button } from '@mui/material'
import React, { useState } from 'react'
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import WarehouseOutlinedIcon from '@mui/icons-material/WarehouseOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import DragDropImage from '../DragDropImage';

const AddProduct = ({ setDisplayAddProduct }) => {
    const [category, setCategory] = useState("Laptop")
    const [brand, setBrand] = useState("Samsung")
    const [soldStatus, setSoldStatus] = useState("Có sẵn")
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
                            <Grid item xs={12} sm={12} md={12} sx={style.inputContainer}>
                                <FormControl fullWidth={true} >
                                    <FormLabel sx={style.formLabel}>
                                        <Inventory2OutlinedIcon sx={style.formLabel.formLabelIcon} />
                                        <Box>Tên sản phẩm</Box>
                                    </FormLabel>
                                    <TextField fullWidth={true} variant='outlined' />
                                    <FormHelperText></FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={3} sx={style.inputContainer}>
                                <FormControl fullWidth={true} >
                                    <FormLabel sx={style.formLabel} >
                                        <PaidOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                        <Box>Giá bán (VND)</Box>
                                    </FormLabel>
                                    <TextField fullWidth={true} variant='outlined' />
                                    <FormHelperText></FormHelperText>
                                </FormControl>
                            </Grid>
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
                                        <MenuItem value='Laptop' >Laptop</MenuItem>
                                        <MenuItem value='Điện thoại' >Điện thoại</MenuItem>
                                        <MenuItem value='Phụ kiện'>Phụ kiện</MenuItem>
                                    </Select>
                                    <FormHelperText></FormHelperText>
                                </FormControl>
                            </Grid>
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
                            <Grid item xs={12} sm={12} md={12} sx={style.inputContainer}>
                                <FormControl fullWidth={true} >
                                    <FormLabel sx={style.formLabel} >
                                        <NotesOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                        <Box>Mô tả sản phẩm</Box>
                                    </FormLabel>
                                    <TextareaAutosize minRows={10} maxRows={20} />
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
        width: "75%",
        position: 'absolute',
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        boxShadow: 5,
        padding: '10px',
        maxHeight: "70%",
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