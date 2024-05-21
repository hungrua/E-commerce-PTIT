import { IconButton, TableCell, TableRow, Typography, TableBody, TableHead, Table, Box, Collapse, Button } from '@mui/material'
import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AddProductDetails from './AddProductDetails';
import { useDispatch } from 'react-redux';
import { deleteProduct, deleteProductDetails, getProductById, getProductDetailsById } from '../../../redux/reducer/ProductSlice';
import { Confirm } from '../Confirm';
const CollapseRow = (props) => {
    const dispatch = useDispatch()
    const { row, category, itemDetails, setDisplayAddProduct, productId } = props
    const [open, setOpen] = useState(false)
    const [displayAddProductDetails, setDisplayAddProductDetails] = useState(false)
    const [deleteProductId, setDeleteProductId] = useState(0)
    const [openConfirmProduct, setOpenConfirmProduct] = useState(false)
    const [deleteProductDetailId, setDeleteProductDetailId] = useState(0)
    const [openConfirmProductDetail, setOpenConfirmProductDetail] = useState(false)
    const handleOpenEditProductScreen = (id) => {
        dispatch(getProductById(id))
        setDisplayAddProduct(true)
    }

    const handleDeleteProduct = (id) => {
        setDeleteProductId(id)
        setOpenConfirmProduct(true)
    }
    const doDeleteProduct = (id) => {
        dispatch(deleteProduct(id))
        setOpenConfirmProduct(false)
        setDeleteProductId(0)
    }

    const handleOpenEditProductDetails = (id) => {
        dispatch(getProductDetailsById(id))
        setDisplayAddProductDetails(true)
    }

    const handleOpenAddProductDetails = () => {
        dispatch(getProductDetailsById(-1))
        setDisplayAddProductDetails(true)
    }

    const handleDeleteProductDetails = (id) => {
        setDeleteProductDetailId(id)
        setOpenConfirmProductDetail(true)
    }

    const doDeleteProductDetail = (id) => {
        dispatch(deleteProductDetails({ productId, id }))
        setOpenConfirmProductDetail(false)
        setDeleteProductDetailId(0)
    }

    return (
        <React.Fragment>
            <TableRow>
                <TableCell>
                    <IconButton
                        aria-label='expand row'
                        size='small'
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope='row' align='center'>{row.id}</TableCell>
                <TableCell align='left'>{row.name}</TableCell>
                <TableCell align='center'>{row.categoryDto.name}</TableCell>
                <TableCell align='center'>{row.vendor}</TableCell>
                <TableCell align='center'>
                    <IconButton
                        onClick={() => handleOpenEditProductScreen(row.id)}
                    >
                        <BorderColorOutlinedIcon color='info' />
                    </IconButton>
                    <IconButton
                        onClick={() => handleDeleteProduct(row.id)}
                    >
                        <DeleteOutlinedIcon color='error' />
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={2}>
                            <Box sx={{
                                justifyContent: itemDetails.length !== 0 ? "space-between" : "normal",
                                display: itemDetails.length !== 0 ? "flex" : "block",

                            }}>
                                {itemDetails.length !== 0 && <Typography variant="h6" gutterBottom component="div">
                                    Loại sản phẩm
                                </Typography>}
                                {itemDetails.length === 0 && <Box sx={{ textAlign: "center", mb: 1 }}>Chưa có loại sản phẩm vui lòng thêm mới</Box>}
                                <Box
                                    sx={{
                                        display: "flex", justifyContent: "center"
                                    }}
                                >
                                    <Button onClick={() => handleOpenAddProductDetails()} variant='outlined' color="error" size='small' >Thêm loại sản phẩm</Button>
                                </Box>
                            </Box>
                            {itemDetails.length !== 0 && <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align='center'>Màu sắc</TableCell>
                                        {(category == 1 || category == 2) &&
                                            <React.Fragment>
                                                <TableCell align='center'>Bộ nhớ</TableCell>
                                                <TableCell align='center'>RAM</TableCell>
                                            </React.Fragment>
                                        }
                                        {category == 1 && <TableCell align='center' >Kích thước màn hình</TableCell>}
                                        <TableCell align='center' >Tình trạng hàng</TableCell>
                                        <TableCell align='center' >Giá bán</TableCell>
                                        <TableCell align='center'>Đã bán</TableCell>
                                        <TableCell align='center'>Số lượng còn</TableCell>
                                        <TableCell align='center'>Tác vụ</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody width="100">
                                    {itemDetails.map((items) => (
                                        <TableRow key={items.id} >
                                            <TableCell align='center' >{items.color}</TableCell>
                                            {(category == 1 || category == 2) &&
                                                <React.Fragment>
                                                    <TableCell align='center' >{items.diskSize}</TableCell>
                                                    <TableCell align='center' >{items.ram}</TableCell>
                                                </React.Fragment>
                                            }
                                            {category == 1 && <TableCell align='center'>{items.screenSize}</TableCell>}
                                            <TableCell align='center' >{items.isAvailable === true ? "Còn hàng" : "Hết hàng"}</TableCell>
                                            <TableCell align='center' >{items.price}</TableCell>
                                            <TableCell align='center'>{items.soldNumber}</TableCell>
                                            <TableCell align='center'>{items.quantity}</TableCell>
                                            <TableCell align='center'>
                                                <IconButton
                                                    onClick={() => handleOpenEditProductDetails(items.id)}
                                                >
                                                    <BorderColorOutlinedIcon color='info' />
                                                </IconButton>
                                                <IconButton
                                                    onClick={() => handleDeleteProductDetails(items.id)}
                                                >
                                                    <DeleteOutlinedIcon color='error' />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>}
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
            {displayAddProductDetails && <AddProductDetails setDisplayAddProduct={setDisplayAddProductDetails} category={category} productId={productId} />}
            {openConfirmProduct && <Confirm name="PRODUCT" noAction={() => setOpenConfirmProduct(false)} yesAction={() => doDeleteProduct(deleteProductId)} />}
            {openConfirmProductDetail && <Confirm name="PRODUCT DETAIL" noAction={() => setOpenConfirmProductDetail(false)} yesAction={() => doDeleteProductDetail(deleteProductDetailId)} />}
            
        </React.Fragment >
    )
}

export default CollapseRow