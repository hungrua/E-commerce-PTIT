import { Box, Button, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import AddCategory from '../../components/Admin/Category/AddCategory';
function Category() {
  const columns = [
    {
      field: 'categoryName',
      headerName: 'Tên danh mục',
      minWidth: '500',
      hideable: false

    },
    {
      field: 'categoryCode',
      headerName: "Mã danh mục",
      minWidth: '300'
    },
    {
      field: 'categoryItemTotal',
      headerName: "Số sản phẩm",
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
          <IconButton size="medium" sx={{ m: 1 }} onClick={() => { setDisplayAddCategory(true) }} >
            <ModeEditIcon />
          </IconButton>
          <IconButton size="medium" sx={{ m: 1 }}>
            <DeleteIcon />
          </IconButton>
        </Box>
      }
    }

  ]
  const rows =
    [
      {
        id: 1,
        categoryName: 'Laptop',
        categoryCode: 'LAP',
        categoryItemTotal: "100"
      },
      {
        id: 2,
        categoryName: 'Điện thoại',
        categoryCode: 'LAP',
        categoryItemTotal: "100"
      }
    ]
  const [displayAddCategory, setDisplayAddCategory] = useState(false)
  return (
    <div>
      <Box>
        <Typography sx={style.pageTitle} variant='h5'>Quản lý danh mục</Typography>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Box>
            <Button variant='contained' onClick={() => { setDisplayAddCategory(true) }}>
              <AddBoxOutlinedIcon fontSize='small' />
              <Box ml={1}>Thêm danh mục</Box>
            </Button>
          </Box>
          <DataGrid
            sx={{ boxShadow: 2, mt: 2 }}
            columns={columns}
            rows={rows}
            slots={{
              toolbar: GridToolbar,
            }}
          ></DataGrid>
        </Box>
      </Box>
      {displayAddCategory && <AddCategory setDisplayAddCategory={setDisplayAddCategory} />}
    </div>
  )
}
/** @type {import("@mui/material").SxProps} */
const style = {
  pageTitle: {
    mb: 2
  }
}
export default Category