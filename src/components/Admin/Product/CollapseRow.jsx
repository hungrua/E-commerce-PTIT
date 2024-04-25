import { IconButton, TableCell, TableRow, Typography, TableBody, TableHead, Table, Box, Collapse, Button } from '@mui/material'
import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AddProductDetails from './AddProductDetails';
const CollapseRow = (props) => {
    const { row, category, itemDetails } = props
    const [open, setOpen] = useState(false)
    const [displayAddProductDetails,setDisplayAddProductDetails] = useState(false)
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
                <TableCell align='center'>{row.description}</TableCell>
                <TableCell align='center'>{row.vendor}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={2}>
                            <Box sx={{display:"flex",justifyContent:"space-between"}}>
                                <Typography variant="h6" gutterBottom component="div">
                                    Loại sản phẩm
                                </Typography>
                                <Button onClick={()=> setDisplayAddProductDetails(true)} variant='outlined' color="error" size='small' >Thêm loại sản phẩm</Button>
                            </Box>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align='center'>Màu sắc</TableCell>
                                        {(category == 1 || category == 2) &&
                                            <React.Fragment>
                                                <TableCell align='center'>Bộ nhớ</TableCell>
                                                <TableCell align='center'>RAM</TableCell>
                                            </React.Fragment>
                                        }
                                        {category == 2 && <TableCell align='center' >Kích thước màn hình</TableCell>}
                                        <TableCell align='center' >Tình trạng hàng</TableCell>
                                        <TableCell align='center' >Giá bán</TableCell>
                                        <TableCell align='center'>Đã bán</TableCell>
                                        <TableCell align='center'>Số lượng còn</TableCell>
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
                                            {category == 2 && <TableCell>{items.screenSize}</TableCell>}
                                            <TableCell align='center' >{items.isAvailable === "true" ? "Còn hàng" : "Hết hàng"}</TableCell>
                                            <TableCell align='center' >{items.price}</TableCell>
                                            <TableCell align='center'>{items.soldNumber}</TableCell>
                                            <TableCell align='center'>{items.quantity}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
            {displayAddProductDetails && <AddProductDetails  setDisplayAddProduct={setDisplayAddProductDetails} category={3} />}
        </React.Fragment>
    )
}

export default CollapseRow