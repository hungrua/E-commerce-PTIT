import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow ,Box} from '@mui/material'
import React from 'react'
import CollapseRow from './CollapseRow'

const ProductCollapseTable = () => {
    const data = [
        {
            "id": 3,
            "vendor": "Tàu khựa",
            "name": "Pin dự phòng Anker Nano 10000mAh 30W USB-C tích hợp A1259",
            "description": "Thêm mới Laptop test",
            "cpu": "AMD Ryzen 5 7530U (2.0GHz, 6 lõi / 12 luồng, 16MB cache, up to 4.5 GHz max boost)",
            "card": "AMD Radeon Graphics",
            "frequencyScreen": "90 Hz",
            "os": "Windows 11 Home",
            "usbNumber": "1x USB 3.2 Gen 2 Type-A 2x USB 3.2 Gen 2 Type-C (Hỗ trợ hiển thị / sạc) 1x HDMI 2.1 TMDS 1x 3.5mm Combo Audio Jack Đầu đọc thẻ Micro SD",
            "typeDisk": "512GB M.2 NVMe PCIe 3.0 SSD",
            "weight": "1.35 kg",
            "batteryCapacity": "75WHrs, 2S2P, 4-cell Li-ion",
            "frontCamera": null,
            "rearCamera": null,
            "simNumber": null,
            "connectType": null,
            "specialProperties": null,
            "categoryId": 1,
            "images": [
                {
                    "id": 5,
                    "path": "E:/Ki_2_nam_4/TMDT/BTL/anh_1"
                },
                {
                    "id": 6,
                    "path": "E:/Ki_2_nam_4/TMDT/BTL/anh_2"
                }
            ],
            "itemDetails": [
                {
                    "id": 4,
                    "color": "xanh",
                    "isAvailable": false,
                    "soldNumber": 100,
                    "price": 2000000,
                    "quantity": 500,
                    "screenSize": "14 inches",
                    "diskSize": "512GB M.2 NVMe PCIe 3.0 SSD",
                    "ram": "16GB"
                }
            ]
        },
        {
            "id": 3,
            "vendor": "Tàu khựa",
            "name": "Pin dự phòng Anker Nano 10000mAh 30W USB-C tích hợp A1259",
            "description": "Thêm mới Laptop test",
            "cpu": "AMD Ryzen 5 7530U (2.0GHz, 6 lõi / 12 luồng, 16MB cache, up to 4.5 GHz max boost)",
            "card": "AMD Radeon Graphics",
            "frequencyScreen": "90 Hz",
            "os": "Windows 11 Home",
            "usbNumber": "1x USB 3.2 Gen 2 Type-A 2x USB 3.2 Gen 2 Type-C (Hỗ trợ hiển thị / sạc) 1x HDMI 2.1 TMDS 1x 3.5mm Combo Audio Jack Đầu đọc thẻ Micro SD",
            "typeDisk": "512GB M.2 NVMe PCIe 3.0 SSD",
            "weight": "1.35 kg",
            "batteryCapacity": "75WHrs, 2S2P, 4-cell Li-ion",
            "frontCamera": null,
            "rearCamera": null,
            "simNumber": null,
            "connectType": null,
            "specialProperties": null,
            "categoryId": 3,
            "images": [
                {
                    "id": 5,
                    "path": "E:/Ki_2_nam_4/TMDT/BTL/anh_1"
                },
                {
                    "id": 6,
                    "path": "E:/Ki_2_nam_4/TMDT/BTL/anh_2"
                }
            ],
            "itemDetails": [
                {
                    "id": 4,
                    "color": "xanh",
                    "isAvailable": false,
                    "soldNumber": 100,
                    "price": 2000000,
                    "quantity": 500,
                    "screenSize": "14 inches",
                    "diskSize": "512GB M.2 NVMe PCIe 3.0 SSD",
                    "ram": "16GB"
                }
            ]
        },
        {
            "id": 3,
            "vendor": "Tàu khựa",
            "name": "Pin dự phòng Anker Nano 10000mAh 30W USB-C tích hợp A1259",
            "description": "Thêm mới Laptop test",
            "cpu": "AMD Ryzen 5 7530U (2.0GHz, 6 lõi / 12 luồng, 16MB cache, up to 4.5 GHz max boost)",
            "card": "AMD Radeon Graphics",
            "frequencyScreen": "90 Hz",
            "os": "Windows 11 Home",
            "usbNumber": "1x USB 3.2 Gen 2 Type-A 2x USB 3.2 Gen 2 Type-C (Hỗ trợ hiển thị / sạc) 1x HDMI 2.1 TMDS 1x 3.5mm Combo Audio Jack Đầu đọc thẻ Micro SD",
            "typeDisk": "512GB M.2 NVMe PCIe 3.0 SSD",
            "weight": "1.35 kg",
            "batteryCapacity": "75WHrs, 2S2P, 4-cell Li-ion",
            "frontCamera": null,
            "rearCamera": null,
            "simNumber": null,
            "connectType": null,
            "specialProperties": null,
            "categoryId": 1,
            "images": [
                {
                    "id": 5,
                    "path": "E:/Ki_2_nam_4/TMDT/BTL/anh_1"
                },
                {
                    "id": 6,
                    "path": "E:/Ki_2_nam_4/TMDT/BTL/anh_2"
                }
            ],
            "itemDetails": [
                {
                    "id": 4,
                    "color": "xanh",
                    "isAvailable": false,
                    "soldNumber": 100,
                    "price": 2000000,
                    "quantity": 500,
                    "screenSize": "14 inches",
                    "diskSize": "512GB M.2 NVMe PCIe 3.0 SSD",
                    "ram": "16GB"
                }
            ]
        }
    ]

    return (
        <Box mt={4}>
            <TableContainer component={Paper}>
                <Table aria-label='collapsible table' size='small'>
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell align='center'>Id</TableCell>
                            <TableCell align='center'>Tên sản phẩm</TableCell>
                            <TableCell align='center'>Mô tả sản phẩm</TableCell>
                            <TableCell align='center'>Nhà cung cấp</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.map((row) => (
                                <CollapseRow row={row} category={row.categoryId} itemDetails={row.itemDetails} />
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default ProductCollapseTable