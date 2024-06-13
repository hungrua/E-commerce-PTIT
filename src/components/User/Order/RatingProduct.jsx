import React from 'react'
import { Box, Button } from '@mui/material'
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ColorText from '../../Admin/ColorText'
export const RatingProduct = () => {
    return (
        <Box style={styles.coverer} >
            <Box style={styles.confirmBox}>
                
            </Box>
        </Box>
    )
}
/**  @type {import("@mui/material").SxProps} */
const styles = {
    coverer: {
        position: "fixed",
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1112,
        background: "rgba(0,0,0,0.5)"
    },
    confirmBox: {
        backgroundColor: "white",
        width: "40%",
        position: 'absolute',
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        boxShadow:" rgb(169 169 169) 0px 9px 30px 0px",
        pt:"10px",
        borderRadius:"10px"
    },
    contentBox:{
        background:"#f8f8f8",
        padding:"30px",
        borderBottomLeftRadius:"10px",
        borderBottomRightRadius:"10px",
        text:{
            padding:"0 10%"
        },
        noButton:{
            background:"white",
            color:"black",
            py:1,
            width:"45%",
            '&:hover': {
                backgroundColor: '#e8e8e8',
                color: 'black',
            },
        },
        yesButton:{
            background:"red",
            color:"white",
            py:1,
            width:"45%",
            '&:hover': {
                backgroundColor: '#cc0000',
                color: 'white',
            },
        }
    }
}
