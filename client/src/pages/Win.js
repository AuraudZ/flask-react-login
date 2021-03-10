import {Button, Flex,Box,Stack} from '@chakra-ui/core'
const Win = () => {
    return (
        <div>
        <Flex width="full" align="center" justifyContent="center">
           <Box p={8}maxWidth="500px"borderWidth={1} borderRadius={8} boxShadow="lg">
             <Stack spacing={8}>
               <Button variantColor="teal"variant="outline"type="submit"width="full"mt={1}   >Login</Button>
               <Button color="primary" className="px-4"  center variant="outline" variantColor="teal"mb={1} >Register </Button>
             </Stack>
          </Box>
         </Flex>        
         </div>
    )
}
export default Win
