import { Box, FormControl, FormHelperText, FormLabel, IconButton, Grid, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import BasicDatePicker from '../BasicDatePicker';
import DragDropImage from '../DragDropImage';
const AddVoucher = ({ setDisplayAddVoucher }) => {

    const handleCloseAddVoucher = () => {
        setDisplayAddVoucher(false)
    }

    return (
        <Box sx={style.coverer}>
            <Box sx={style.addUserModal}>
                <Box style={{ display: 'flex', justifyContent: "flex-end" }}>
                    <IconButton
                        onClick={handleCloseAddVoucher}
                    >
                        <CancelOutlinedIcon color='error' />
                    </IconButton>
                </Box>
                <form>
                    <Grid sx={style.form} container rowSpacing={2} columnSpacing={2}>
                        <Grid item xs={12} sm={12} md={12} sx={style.inputContainer}>
                            <FormControl fullWidth={true} >
                                <FormLabel sx={style.formLabel}>
                                    <MonetizationOnOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                    <Box>Tên khuyến mãi</Box>
                                </FormLabel>
                                <TextField fullWidth={true} variant='outlined' />
                                <FormHelperText></FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} sx={style.inputContainer}>
                            <FormControl fullWidth={true} >
                                <FormLabel sx={style.formLabel} >
                                    <NotesOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                    <Box>Nội dung khuyến mãi</Box>
                                </FormLabel>
                                <TextareaAutosize minRows={4} maxRows={20} />
                                <FormHelperText></FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} sx={style.inputContainer} >
                            <FormControl fullWidth={true}>
                                <FormLabel sx={style.formLabel} >
                                    <EventOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                    <Box>Ngày bắt đầu</Box>
                                </FormLabel>
                                <BasicDatePicker />
                                <FormHelperText></FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} sx={style.inputContainer} >
                            <FormControl fullWidth={true}>
                                <FormLabel sx={style.formLabel} >
                                    <EventOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                    <Box>Ngày kết thúc</Box>
                                </FormLabel>
                                <BasicDatePicker />
                                <FormHelperText></FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} sx={style.inputContainer}>
                            <FormControl fullWidth={true} >
                                <FormLabel sx={style.formLabel} >
                                    <PercentOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                    <Box>Chiết khấu (%)</Box>
                                </FormLabel>
                                <TextField fullWidth={true} variant='outlined' />
                                <FormHelperText></FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} sx={style.inputContainer}>
                            <FormControl fullWidth={true} >
                                <FormLabel sx={style.formLabel} >
                                    <BlockOutlinedIcon sx={style.formLabel.formLabelIcon} />
                                    <Box>Giới hạn (VND)</Box>
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
        overflowY:"auto"
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
export default AddVoucher