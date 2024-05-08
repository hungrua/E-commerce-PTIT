import { Box, Button, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import AddCategory from '../../components/Admin/Category/AddCategory';
import { useDispatch, useSelector } from 'react-redux';
import categorySlice, { deleteCategory, fetchCategory, getCategoryById } from '../../redux/reducer/CategorySlice';
import { notify } from '../../components/Admin/notify';
import AddSupplier from '../../components/Admin/Supplier/AddSupplier';
function Supplier() {
    const dispatch = useDispatch()
    var categories = useSelector((state) => state.category.categories)

    var message = useSelector((state) => state.category.alert)
    useEffect(() => {
        if (message !== undefined) notify(message.message, message.code)
        return () => {
            dispatch(categorySlice.actions.resetAlert(undefined))
        }
    }, [message, dispatch])
    const [categoryList, setCategoryList] = useState([])
    useEffect(() => {
        dispatch(fetchCategory())
    }, [dispatch])
    useEffect(() => {
        setCategoryList(categories)
    }, [categories])
    const columns = [
        {
            field: 'supplierName',
            headerName: 'Tên nhà cung cấp',
            minWidth: '300',
            hideable: false

        },
        {
            field: 'description',
            headerName: "Mã mô tả",
            minWidth: '600'
        },
        {
            field: 'phoneNumber',
            headerName: "Số điện thoại",
            minWidth: '300'
        },
        {
            field: 'action',
            headerName: 'Tác vụ',
            minWidth: '150',
            sortable: false,
            headerAlign: 'center',
            renderCell: (params) => {
                return <Box >
                    <IconButton size="medium" sx={{ m: 1 }} onClick={() => { handleOpenDisplayAddCategory(params.row.id) }} >
                        <ModeEditIcon />
                    </IconButton>
                    <IconButton size="medium" sx={{ m: 1 }}
                        onClick={() => handleDeleteCategory(params.row.id)}
                    >
                        <DeleteIcon />
                    </IconButton>
                </Box>
            }
        }

    ]
    //   const categoryRows = categoryList.map((category) => {
    //     return {
    //       id: category.id,
    //       categoryName: category.name,
    //       categoryCode: category.code,
    //       categoryDescription: category.description,
    //       categoryItemTotal:category.items.length
    //     };
    //   });
    const categoryRows = [
        {
            id: 1,
            supplierName: "Phong Vu",
            description: "Nhà cung cấp phụ kiện chuyên bán lẻ tai nghe ,bàn phím",
            phoneNumber: "0245154433",
        },
        {
            id: 2,
            supplierName: "Laptop 88",
            description: "Nhà cung cấp laptop cũ giá rẻ",
            phoneNumber: "0245154433",
        },
        {
            id: 3,
            supplierName: "Cellphone S",
            description: "Nhà cung cấp điện thoại và laptop uy tín hàng đầu ",
            phoneNumber: "0245154433",
        }
    ]
    const [displayAddCategory, setDisplayAddCategory] = useState(false)
    const handleOpenDisplayAddCategory = (id) => {
        dispatch(getCategoryById(id));
        setDisplayAddCategory(true);
    };
    const handleDeleteCategory = (id) => {
        dispatch(deleteCategory(id))
    }
    return (
        <div>
            <Box>
                <Typography sx={style.pageTitle} variant='h5'>Quản lý nhà cung cấp</Typography>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Box>
                        <Button variant='contained' onClick={() => { handleOpenDisplayAddCategory(-1) }}>
                            <AddBoxOutlinedIcon fontSize='small' />
                            <Box ml={1}>Thêm nhà cung cấp</Box>
                        </Button>
                    </Box>
                    <DataGrid
                        sx={{ boxShadow: 2, mt: 2 }}
                        columns={columns}
                        rows={categoryRows}
                        slots={{
                            toolbar: GridToolbar,
                        }}
                    ></DataGrid>
                </Box>
            </Box>
            {displayAddCategory && <AddSupplier setDisplayAddCategory={setDisplayAddCategory} />}
        </div>
    )
}
/** @type {import("@mui/material").SxProps} */
const style = {
    pageTitle: {
        mb: 2
    }
}
export default Supplier