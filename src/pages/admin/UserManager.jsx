import { Box, Button, IconButton, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import TabPanel from '../../components/Admin/TabPanel'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import AddUser from '../../components/Admin/UserManager/AddUser';
import { useSelector } from 'react-redux';
function UserManager() {
    const columns = [
        {
            field: 'username',
            headerName: 'Tên đăng nhập',
            minWidth: '200',
            hideable: false

        },
        {
            field: 'email',
            headerName: "Email",
            minWidth: '300'
        },
        {
            field: 'fullname',
            headerName: "Họ tên",
            minWidth: '200'
        },
        {
            field: 'dob',
            headerName: "Ngày sinh",
            minWidth: '200'
        },
        {
            field: 'phone',
            headerName: "Số điện thoại",
            minWidth: '200'
        },
        {
            field: 'address',
            headerName: "Địa chỉ",
            minWidth: '200'
        },
        {
            field: 'rank',
            headerName: "Hạng",
            minWidth: '100'
        },
        {
            field: 'action',
            headerName: 'Tác vụ',
            minWidth: '150',
            sortable: false,
            headerAlign: 'center',
            renderCell: (params) => {
                return <Box >
                    <IconButton size="medium" sx={{ m: 1 }} onClick={() => { setDisplayAddUser(true) }} >
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
                username: 'hungnguyen',
                email: 'hung@gmail.com',
                fullname: "Nguyễn Cảnh Hưng",
                dob: "05/09/2012",
                phone: "0393541444",
                address: "Hoàng Mai",
                rank: 'VIP'
            },
            {
                id: 2,
                username: 'namnguyen',
                email: 'nam@gmail.com',
                fullname: "Nguyễn Nam",
                dob: "05/02/2012",
                phone: "0393541444",
                address: "Hoàng Mai",
                rank: 'Tiềm năng'
            }
        ]
    const employees = useSelector((state) => state.users.employees)

    const employeesRows = employees.map((employee) => {
        return {
            id: employee.id,
            username: employee.username,
            email: employee.email,
            fullname: employee.name,
            dob: employee.createDate,
            phone: "0393541444",
            address: employee.address,
            rank: 'VIP'
        }
    })
    const [value, setValue] = useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
        console.log(employees)
    }
    const [displayAddUser, setDisplayAddUser] = useState(false)
    return (
        <div>
            <Box>
                <Typography sx={style.pageTitle} variant='h5'>Quản lý người dùng</Typography>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange}>
                        <Tab label='Khách hàng' id="tab-0" />
                        <Tab label='Nhân viên' id="tab-1" />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <Box>
                            <Button variant='contained' onClick={() => { setDisplayAddUser(true) }}>
                                <PersonAddAlt1Icon fontSize='small' />
                                <Box ml={1}>Thêm mới khách hàng</Box>
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
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Box>
                            <Button variant='contained' onClick={() => { setDisplayAddUser(true) }} >
                                <PersonAddAlt1Icon fontSize='small' />
                                <Box ml={1}>Thêm mới nhân viên</Box>
                            </Button>
                        </Box>
                        <DataGrid
                            columns={columns}
                            rows={employeesRows}
                            slots={{
                                toolbar: GridToolbar,
                            }}
                            sx={{ boxShadow: 2, mt: 2 }}
                        ></DataGrid>
                    </TabPanel>
                </Box>
            </Box>
            {displayAddUser && <AddUser setDisplayAddUser={setDisplayAddUser} typeUser={value} />}
        </div>
    )
}
/** @type {import("@mui/material").SxProps} */
const style = {
    pageTitle: {
        mb: 2
    }
}
export default UserManager