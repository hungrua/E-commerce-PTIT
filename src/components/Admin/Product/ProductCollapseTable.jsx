import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow ,Box} from '@mui/material'
import React, { useEffect } from 'react'
import CollapseRow from './CollapseRow'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../../../redux/reducer/ProductSlice'

const ProductCollapseTable = ({setDisplayAddProduct}) => {
    const dispatch = useDispatch()
    var products = useSelector((state)=> state.product.products)
    useEffect(()=>{
        dispatch(fetchProduct())
    },[])
    return (
        <Box mt={4}>
            <TableContainer component={Paper}>
                <Table aria-label='collapsible table' size='small'>
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell align='center'>Id</TableCell>
                            <TableCell align='center'>Tên sản phẩm</TableCell>
                            <TableCell align='center'>Danh mục</TableCell>
                            <TableCell align='center'>Nhà cung cấp</TableCell>
                            <TableCell align='center'>Tác vụ</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            products.map((row) => (
                                <CollapseRow key={row.id} row={row} productId={row.id} category={row.categoryDto.id} itemDetails={row.itemDetails} setDisplayAddProduct={setDisplayAddProduct} />
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default ProductCollapseTable