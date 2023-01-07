import { Box,Flex,HStack,FormControl,FormLabel,Input,Button,Text,Image,Heading } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Signup = () => {
    const initObj={
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        location:"",
        occupation:"",
    }
    const [values,setValues]=useState(initObj)
    
   
    const handleChange = (e) => {
        setValues({...values,[e.target.name]:e.target.value})
    }

const handleSubmit=()=>{
        const payload={
            firstName:values.firstName,
            lastName:values.lastName,
            email:values.email,
            password:values.password,
            location:values.location,
            occupation:values.occupation
        };
if(payload.email=="" || payload.password=="" || payload.firstName=="" || payload.lastName==""){
        alert("Please fill All Madentory fields")
  }else{
axios.post(`http://localhost:3002/auth/register`,payload)
.then((res)=>{
    console.log("Signup Success",res)
    setValues(initObj)
    alert("Signup Success")
})
.catch((err)=>{
    console.log(err)
})
}
}

  return (
    <>
    <Box w="100%" boxShadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' overflow="hidden" position='fixed' backgroundColor="white">
    <Flex justifyContent='space-between' w='100%' h={20}>
      <Flex  w='50%' p={5} justifyContent='space-around'>
        <Image src="https://cdn-icons-png.flaticon.com/512/831/831276.png"/>
        <Heading fontFamily='cursive'>Socialpshcyo</Heading>
      </Flex>
      <Flex w='50%' p={5} justifyContent="space-evenly" fontSize='30px'>
        <Button onClick={()=>alert("Please Signup to create Account")}>Create Account</Button>
        <Link to='/userlogin'>
        <Button>Already have an account</Button>
        </Link>
      </Flex>
    </Flex>
    </Box>
    <Box width="100%" m="auto" pt={20} pb={20}>
        <Text p={10} textAlign="center">Sign up to see photos and videos from your friends.
</Text>
        <Flex gap={10} justifyContent="space-around">
            <Box p={5}  boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'>
                <FormControl isRequired>
                    <HStack>
                        <Box>
                        <FormLabel isRequired>First Name</FormLabel>
                        <Input type="text" name='firstName' onChange={handleChange}/>
                        </Box>
                        <Box>
                        <FormLabel>Last Name</FormLabel>
                        <Input type="text" name='lastName' onChange={handleChange}/>
                        </Box>
                    </HStack>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" name='email' onChange={handleChange}/>
                        <FormLabel>Password</FormLabel>
                        <Input type="password" name='password' onChange={handleChange}/>
                        <FormLabel>Location</FormLabel>
                        <Input type="text" name='location' onChange={handleChange}/>
                        <FormLabel>Occupation</FormLabel>
                        <Input type="text" name='occupation' onChange={handleChange}/>
                        <Button mt={2} width="100%" onClick={handleSubmit}>Signup</Button>
                        <Text textAlign="center">OR</Text>
                        <Link to="/userlogin">
                        <Button mt={2} width="100%">Login</Button>
                        </Link>
                </FormControl>
            </Box>
            <Box w="40%">
                <Image h="500px" src="https://m.media-amazon.com/images/I/61i+HRehTXL._SL1500_.jpg"/>
            </Box>
        </Flex>
    </Box>
    </>
  )
}

export default Signup
