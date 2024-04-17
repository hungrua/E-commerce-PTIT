import { Box, Button, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import AddVoucher from '../../components/Admin/Voucher/AddVoucher';
import { useDispatch, useSelector } from 'react-redux';
import { deleteVoucher, fetchVoucher, getVoucherById } from '../../redux/reducer/VoucherSlice';
const Voucher = () => {
  const dispatch = useDispatch()
  const [displayAddVoucher, setDisplayAddVoucher] = useState(false)
  const [voucherList, setVoucherList] = useState([])
  var vouchers = useSelector((state) => state.voucher.vouchers)
  useEffect(() => {
    dispatch(fetchVoucher())
  }, [dispatch])
  useEffect(() => {
    console.log(vouchers)
    setVoucherList(vouchers)
  }, [vouchers])
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
      headerName: "Chiết khấu (%)",
      minWidth: '200'
    },
    {
      field: 'limit',
      headerName: "Giới hạn (VND)",
      minWidth: '200'
    },
    {
      field: 'numberOfVoucher',
      headerName: "Tổng số lượng ",
      minWidth: '200'
    },
    {
      field: 'numberOfVoucherLeft',
      headerName: "Số lượng còn lại ",
      minWidth: '200'
    }
    ,
    {
      field: 'action',
      headerName: 'Tác vụ',
      minWidth: '150',
      sortable: false,
      headerAlign: 'center',
      renderCell: (params) => {
        return <Box >
          <IconButton size="medium" sx={{ m: 1 }} onClick={() => { handleOpenAddVoucher(params.row.id) }} >
            <ModeEditIcon />
          </IconButton>
          <IconButton size="medium" sx={{ m: 1 }} onClick={()=>{handleDeleteVoucher(params.row.id)} }>
            <DeleteIcon />
          </IconButton>
        </Box>
      }
    }

  ]
  const voucherRows = voucherList.map((voucher) => {
    return {
      id: voucher.id,
      voucherName: voucher.name,
      content: voucher.description,
      startDate: "2024-09-05",
      endDate: "2024-11-05",
      percent: voucher.discount,
      limit: voucher.discountConditions*1000,
      numberOfVoucher: voucher.numberVoucher,
      numberOfVoucherLeft: voucher.numberVoucher
    }
  }
  )
  const handleOpenAddVoucher = (id)=>{
    dispatch(getVoucherById(id))
    setDisplayAddVoucher(true)
  }
  const handleDeleteVoucher=(id)=>{
    dispatch(deleteVoucher(id))
  }
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
            rows={voucherRows}
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
