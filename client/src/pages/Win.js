import React from 'react'
import ReactPlayer from "react-player"
import {Center} from '@chakra-ui/react'
export default function Win() {
  return (
    <div>
      <Center>
       <ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" volume={100}  />
       </Center>
    </div>
  )
}

