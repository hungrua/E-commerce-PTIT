import { Box, FormControl, FormHelperText, FormLabel, IconButton, Input, Select, MenuItem, InputLabel, FormGroup, Grid, TextField, NativeSelect, Button } from '@mui/material'
import React, { useState } from 'react'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import StarRateOutlinedIcon from '@mui/icons-material/StarRateOutlined';
import BasicDatePicker from '../BasicDatePicker';
function AddUser({ setDisplayAddUser, typeUser }) {
    const [position, setPosition] = useState('Nhân viên chăm sóc KH');
    const [customerRank,setCustomerRank] = useState("Bình thường")
    const handleChangePosition = (event) => {
        setPosition(event.target.value)
    };
    const handleChangeCustomerRank = (event) =>{
        setCustomerRank(event.target.value)
    }
    const handleCloseAddUser = () => {
        setDisplayAddUser(false)
    }
    return (
        <Box sx={style.coverer}>
            <Box sx={style.addUserModal}>
                <Box style={{ display: 'flex', justifyContent: "flex-end" }}>
                    <IconButton
                        onClick={handleCloseAddUser}
                    >
                        <CancelOutlinedIcon color='error' />
                    </IconButton>
                </Box>
                <form>
                    <Grid sx={style.form} container rowSpacing={2} columnSpacing={2}>
                        <Grid item xs={12} sm={12} md={6} sx={style.inputContainer}>
                            <FormControl fullWidth={true} >
                                <FormLabel sx={style.formLabel}>
                                    <PermIdentityIcon sx={style.formLabel.formLabelIcon} />
                                    <Box>Tài khoản đăng nhập</Box>
                                </FormLabel>
                                <TextField fullWidth={true} variant='outlined' />
                                <FormHelperText></FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} sx={style.inputContainer}>
                            <FormControl fullWidth={true} >
                                <FormLabel sx={style.formLabel} >
                                    <PersonPinOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                    <Box>{typeUser === 0 ? "Tên khách hàng" : "Tên nhân viên"}</Box>
                                </FormLabel>
                                <TextField fullWidth={true} variant='outlined' />
                                <FormHelperText></FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} sx={style.inputContainer} >
                            <FormControl fullWidth={true}>
                                <FormLabel sx={style.formLabel} >
                                    <CakeOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                    <Box>Ngày sinh</Box>
                                </FormLabel>
                                <BasicDatePicker />
                                <FormHelperText></FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} sx={style.inputContainer} >
                            {typeUser === 1 ?
                                (
                                    <FormControl fullWidth={true}>
                                        <FormLabel sx={style.formLabel} >
                                            <BusinessCenterOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                            <Box>Vị trí</Box>
                                        </FormLabel>
                                        <Select
                                            sx={style.select}
                                            value={position}
                                            onChange={handleChangePosition}
                                        >
                                            <MenuItem value='Nhân viên kho' >Nhân viên kho</MenuItem>
                                            <MenuItem value='Nhân viên chăm sóc KH' >Nhân viên chăm sóc KH</MenuItem>
                                            <MenuItem value='Quản trị viên'>Quản trị viên</MenuItem>
                                        </Select>
                                        <FormHelperText></FormHelperText>
                                    </FormControl>
                                ) :
                                (
                                    <FormControl fullWidth={true}>
                                        <FormLabel sx={style.formLabel} >
                                            <StarRateOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                            <Box>Hạng</Box>
                                        </FormLabel>
                                        <Select
                                            sx={style.select}
                                            value={customerRank}
                                            onChange={handleChangeCustomerRank}
                                        >
                                            <MenuItem value='Bình thường' >Bình thường</MenuItem>
                                            <MenuItem value='Tiềm năng' >Tiềm năng</MenuItem>
                                            <MenuItem value='VIP'>VIP</MenuItem>
                                        </Select>
                                        <FormHelperText></FormHelperText>
                                    </FormControl>
                                )
                            }
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} sx={style.inputContainer}>
                            <FormControl fullWidth={true} >
                                <FormLabel sx={style.formLabel} >
                                    <ContactPhoneOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                    <Box>Số điện thoại liên hệ</Box>
                                </FormLabel>
                                <TextField fullWidth={true} variant='outlined' />
                                <FormHelperText></FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} sx={style.inputContainer}>
                            <FormControl fullWidth={true} >
                                <FormLabel sx={style.formLabel} >
                                    <HomeWorkOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                    <Box>Địa chỉ</Box>
                                </FormLabel>
                                <TextField fullWidth={true} variant='outlined' />
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
        overflowY:"scroll"
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
export default AddUser;
