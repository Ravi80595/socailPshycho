import React, { useEffect, useState } from 'react'
import {AiOutlineUserAdd,AiOutlineHeart} from 'react-icons/ai'
import { Box,Flex,Image,Text } from '@chakra-ui/react'
import axios from 'axios'
import {FaRegShareSquare} from "react-icons/fa"
import {BiCommentDetail} from "react-icons/bi"

const Feed = () => {
    const [feeds,setFeeds]=useState([])

useEffect(()=>{
    getAllPosts()
},[])

const {token}=JSON.parse(localStorage.getItem("socialPshcyoToken"))

const getAllPosts=()=>{
    axios.get(`http://localhost:3002/posts`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    .then((res)=>{  
        console.log(res.data)
        setFeeds(res.data)
    })
}


  return (
    <>
    {
    feeds.map(ele=>(
    <>
        <Box p="7px" backgroundColor='white' mt={2} mb={5} borderRadius={10} >
         <Flex>
        <Flex w="70%" gap={5}>
        <Image src="https://media.istockphoto.com/id/610003972/vector/vector-businessman-black-silhouette-isolated.jpg?s=612x612&w=0&k=20&c=Iu6j0zFZBkswfq8VLVW8XmTLLxTLM63bfvI6uXdkacM=" w="15%" borderRadius={50}/>
        <Box>
        <Text>{ele.firstName+" "+ele.lastName}</Text>
        <Text>{ele.location}</Text>
        </Box>
        </Flex>
        <Box w="30%" fontSize="40px" pl="30px">
        <AiOutlineUserAdd/>
        </Box>
      </Flex>
      <Text p={2}>{ele.description}</Text>
      <Box>
      <Image w="100%" pb={5} m="auto" src="https://m.economictimes.com/thumb/msid-76304095,width-1200,height-900,resizemode-4,imgsize-124491/many-belltroxes-delhi-is-now-indias-hacker-hub.jpg" borderRadius={5}/>
      </Box>
      <Flex gap={2} pl={5} justifyContent="space-between">
        <Flex gap={2}>
         <AiOutlineHeart fontSize='25px'/>
         <Text>Likes</Text>
         <BiCommentDetail fontSize='25px'/>
        </Flex>
        <FaRegShareSquare fontSize="25px" paddingRight="5px"/>
      </Flex>
    </Box>
    </>
    ))
}
</>
  )
}

export default Feed
