import React , {useEffect} from 'react'
import {Button, Flex,Text,Link,} from '@chakra-ui/core'
import {Center} from '@chakra-ui/react'
import { Redirect,useHistory } from 'react-router'

function Home() {
   
    const history = useHistory();

    const loginChange = () =>{ 
      let path = `/login`; 
      history.push(path);
    }
  
     useEffect(() => {
        fetch("/api").then(resp => resp.json()).then(resp => console.log(resp))
      }, [])
    return (
        <div>
            <Center>
            <Text mb="5px" padding="3">Click to got to</Text>
             <Button color="primary" className="px-4" onClick={loginChange}   center >Login </Button>
             </Center>
        </div>
    )
}
export default Home

