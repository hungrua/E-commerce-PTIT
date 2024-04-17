import { Box, Button, Chip, Divider, Grid, IconButton, Input, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { notify } from '../notify';
const AddProductToPromotion = ({ setDisplayAddPromotion }) => {
  const [notInPromotionProducts, setNotInPromotionProducts] = useState([
    {
      productCode: "LT001",
      productName: "Dell XPS 13 2022 16G"
    },
    {
      productCode: "LT002",
      productName: "HP Spectre x360 2023 8G"
    },
    {
      productCode: "LT003",
      productName: "Lenovo ThinkPad X1 Carbon 2024 16G"
    },
    {
      productCode: "LT004",
      productName: "Asus ZenBook 14 2023 8G"
    },
    {
      productCode: "LT005",
      productName: "Acer Swift 5 2022 16G"
    },
    {
      productCode: "ĐT001",
      productName: "iPhone 13 Pro"
    },
    {
      productCode: "ĐT002",
      productName: "Samsung Galaxy S21 Ultra"
    },
    {
      productCode: "ĐT003",
      productName: "Google Pixel 6"
    },
    {
      productCode: "ĐT004",
      productName: "OnePlus 9 Pro"
    },
    {
      productCode: "ĐT005",
      productName: "Xiaomi Mi 11"
    },
    {
      productCode: "LT006",
      productName: "MSI GS66 Stealth 2024 8G"
    },
    {
      productCode: "LT007",
      productName: "Razer Blade 15 2023 16G"
    },
    {
      productCode: "LT008",
      productName: "LG Gram 2022 8G"
    },
    {
      productCode: "LT009",
      productName: "Microsoft Surface Laptop 4 2024 16G"
    },
    {
      productCode: "ĐT006",
      productName: "Apple iPhone 12"
    },
    {
      productCode: "ĐT007",
      productName: "Samsung Galaxy Note 20 Ultra"
    },
    {
      productCode: "ĐT008",
      productName: "Google Pixel 5"
    },
    {
      productCode: "ĐT009",
      productName: "OnePlus 8 Pro"
    },
    {
      productCode: "ĐT010",
      productName: "Xiaomi Mi 10"
    },
    {
      productCode: "LT010",
      productName: "Alienware M15 R4 2023 8G"
    }
  ])
  const [inPromotionProducts, setInPromotionProducts] = useState([])

  const [displayNotInPromotionProducts, setDisplayNotInPromotionProducts] = useState([...notInPromotionProducts])
  const [displayInPromotionProducts, setDisplayInPromotionProducts] = useState([...inPromotionProducts])
  const addToPromotionList = (item) => {
    setInPromotionProducts((prevList) => {
      return [...prevList, item]
    })
    setDisplayInPromotionProducts((prevList) => {
      return [...prevList, item]
    })
    setNotInPromotionProducts((prevList) => {
      let newList = prevList.filter(product => product.productCode !== item.productCode)
      return newList
    })
    setDisplayNotInPromotionProducts((prevList) => {
      let newList = prevList.filter(product => product.productCode !== item.productCode)
      return newList
    })
  }

  const removeFromPromotionList = (item) => {
    setInPromotionProducts((prevList) => {
      let newList = prevList.filter(product => product.productCode !== item.productCode)
      return newList
    })
    setDisplayInPromotionProducts((prevList) => {
      let newList = prevList.filter(product => product.productCode !== item.productCode)
      return newList
    })
    setNotInPromotionProducts((prevList) => {
      return [...prevList, item]
    })
    setDisplayNotInPromotionProducts((prevList) => {
      return [...prevList, item]
    })
  }

  const handleOnchangeInputNotInPromotionProducts = (e) => {
    const keyword = e.target.value.toLocaleLowerCase()
    const list = notInPromotionProducts.filter(item => item.productName.toLocaleLowerCase().includes(keyword) || item.productCode.toLocaleLowerCase().includes(keyword))
    setDisplayNotInPromotionProducts(list)
  }

  const handleOnchangeInputInPromotionProducts = (e) => {
    const keyword = e.target.value.toLocaleLowerCase()
    const list = inPromotionProducts.filter(item => item.productName.toLocaleLowerCase().includes(keyword) || item.productCode.toLocaleLowerCase().includes(keyword))
    console.log(list)
    setDisplayInPromotionProducts(list)
  }

  const handleSavePromotion = () => {
    setDisplayAddPromotion(false)
    notify("WOW",1)
  }
  return (
    <Box>
      <Box>
        <Grid container columnSpacing={3}>
          <Grid item xs={12} sm={12} md={6} sx={style.gridItem}>
            <Divider>
              <Chip sx={style.chip} color='info' label="Danh sách tất cả sản phẩm" size='medium' />
            </Divider>
            <Input fullWidth="true" placeholder='Nhập tên hoặc mã sản phẩm...' onChange={handleOnchangeInputNotInPromotionProducts} />
            <TableContainer sx={style.tableCotainer} >
              <Table padding='none' size='small' stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell align='center'>Stt</TableCell>
                    <TableCell align='center' >Mã sản phẩm</TableCell>
                    <TableCell align='center'>Tên sản phẩm</TableCell>
                    <TableCell align='center'>Thêm vào khuyến mãi</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {displayNotInPromotionProducts.map((item, index) => {
                    return (
                      <TableRow>
                        <TableCell align='center' >{index + 1}</TableCell>
                        <TableCell align='center'>{item.productCode}</TableCell>
                        <TableCell>{item.productName}</TableCell>
                        <TableCell align='center'>
                          <IconButton onClick={() => addToPromotionList(item)}>
                            <AddCircleOutlineIcon color='success' />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
                <TableFooter></TableFooter>
              </Table>
            </TableContainer  >
          </Grid>
          <Grid item xs={12} sm={12} md={6} sx={style.gridItem} >
            <Divider>
              <Chip sx={style.chip} color='success' label="Danh sách sản phẩm áp dụng khuyến mãi" size='medium' />
            </Divider>
            <Input fullWidth="true" placeholder='Nhập tên hoặc mã sản phẩm...' onChange={handleOnchangeInputInPromotionProducts} />
            <TableContainer sx={style.tableCotainer} >
              <Table padding='none' size='small' stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell align='center'>Stt</TableCell>
                    <TableCell align='center'>Mã sản phẩm</TableCell>
                    <TableCell align='center'>Tên sản phẩm</TableCell>
                    <TableCell align='center'>Xóa khỏi khuyến mãi</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    displayInPromotionProducts.map((item, index) => {
                      return (
                        <TableRow>
                          <TableCell align='center'>{index + 1}</TableCell>
                          <TableCell align='center'>{item.productCode}</TableCell>
                          <TableCell>{item.productName}</TableCell>
                          <TableCell align='center'>
                            <IconButton onClick={() => removeFromPromotionList(item)}>
                              <RemoveCircleOutlineIcon color='error' />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      )
                    })

                  }
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Box>
      <Box style={{ display: 'flex', justifyContent: "flex-end" }}>
        <Button variant='contained' color='success'
          onClick={handleSavePromotion}
        >Save</Button>
      </Box>
    </Box>
  )
}
/** @type {import("@mui/material").SxProps} */
const style = {
  tableCotainer: {
    overflowY: "scroll",
    height: "80%",
    boxShadow: "2",
    marginTop: "10px"
  },
  gridItem: {
    mt:"20px",
    height: "500px"
  },
  chip:{
    marginBottom:"10px"
  }
}

export default AddProductToPromotion