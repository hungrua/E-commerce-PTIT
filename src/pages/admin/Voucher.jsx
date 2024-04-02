import { Box, Button, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import AddVoucher from '../../components/Admin/Voucher/AddVoucher';
const  Voucher = () => {
  const columns = [
    {
      field: 'voucherName',
      headerName: 'Tên voucher',
      minWidth: '200',
      hideable: false

    },
    {
      field: 'content',
      headerName: "Nội dung khuyến mãi",
      minWidth: '300'
    },
    {
      field: 'startDate',
      headerName: "Ngày bắt đầu",
      minWidth: '200'
    },
    {
      field: 'endDate',
      headerName: "Ngày kết thúc",
      minWidth: '200'
    },
    {
      field: 'percent',
      headerName: "Chiết khấu",
      minWidth: '100'
    },
    {
      field: 'limit',
      headerName: "Giới hạn",
      minWidth: '200'
    },
    {
      field: 'action',
      headerName: 'Tác vụ',
      minWidth: '150',
      sortable: false,
      headerAlign: 'center',
      renderCell: (params) => {
        return <Box >
          <IconButton size="medium" sx={{ m: 1 }} onClick={() => { setDisplayAddVoucher(true) }} >
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
        voucherName: 'Voucher M10',
        content: 'Giảm giá 10% tối đa 2.000.000 tất cả các sản phẩm laptop, điện thoại cho tân sinh viên',
        startDate: "01/09/2023",
        endDate: "01/011/2023",
        percent: "10%",
        limit: "2000000"
      },
      {
        id: 2,
        voucherName: 'voucher SVCR7',
        content: 'Giảm giá 15% tối đa 2.000.000 tất cả các sản phẩm cho khách hàng mua hàng trực tuyến',
        startDate: "01/05/2023",
        endDate: "30/07/2023",
        percent: "15%",
        limit: "2000000"
      }
    ]
  const [displayAddVoucher,setDisplayAddVoucher] = useState(false)
  return (
    <div>
      <Box>
        <Typography sx={style.pageTitle} variant='h5'>Quản lý voucher</Typography>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Box>
            <Button variant='contained' onClick={() => { setDisplayAddVoucher(true) }}>
              <AddBoxOutlinedIcon fontSize='small' />
              <Box ml={1}>Thêm voucher</Box>
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
      {displayAddVoucher && <AddVoucher setDisplayAddVoucher={setDisplayAddVoucher} />}
    </div>
  )
}
/** @type {import("@mui/material").SxProps} */
const style = {
  pageTitle: {
    mb: 2
  }
}
export default Voucher
