import React , {useEffect} from 'react'
import {Button, Box,Flex, Stack,} from '@chakra-ui/core'
import { useHistory } from 'react-router'

function Home() {
   
    const history = useHistory();

    const loginChange = () =>{ 
      let path = `/login`; 
      history.push(path);
    }
    const registerChange =  () => {
      let path= `/register`;
      history.push(path);
    }
  
     useEffect(() => {
        fetch("/api").then(resp => resp.json()).then(resp => console.log(resp))
      }, [])
    return (
        <div>
           <Flex width="full" align="center" justifyContent="center">
              <Box p={8}maxWidth="500px"borderWidth={1} borderRadius={8} boxShadow="lg">
                <Stack spacing={8}>
                  <Button variantColor="teal"variant="outline"type="submit"width="full"mt={1}  onClick={ loginChange} >Login</Button>
                  <Button color="primary" className="px-4" onClick={registerChange} center variant="outline" variantColor="teal"mb={1} >Register </Button>
                </Stack>
             </Box>
            </Flex>        
            </div>
    )
}
export default Home

