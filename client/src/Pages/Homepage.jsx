
import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Login from '../Components/Authentication/Login'

const Homepage = () => {
  return (
    <div
    style={{margin: "3rem auto 0 auto"}}
    ><Text textAlign="center" fontSize="4xl" fontFamily="Work sans">
          Login Form
        </Text>
      <Box
        d="flex"
        flexDirection="column"
        justifyContent="center"
        p={8}
        bg="white"
        w="100%"
        m="3rem auto 15px auto"
        borderRadius="lg"
        borderWidth="1px"
      >
        
        <Login />
      </Box>
      
    </div>
  )
}

export default Homepage