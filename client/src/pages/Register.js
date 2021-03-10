/* eslint-disable no-unused-vars */
/* eslint-disable no-sequences */
import React,{ useState } from 'react'
import {Flex,Box,Heading,FormControl,FormLabel,Input, Button, } from '@chakra-ui/core';
import ErrorMessage from '../components/ErrorMessage'; 
import {login,useAuth} from "../auth"
import  {useHistory} from 'react-router'
export default function Login() {
  const [username,setUsername]  = useState('');
  const [password,setPassword] =  useState('')
  const [error,setError] = useState('');
  const history = useHistory();
  const onSubmitClick = (e)=>{
    e.preventDefault()
    console.log("You pressed register")
    let opts = {
      'username': username,
      'password': password }
    console.log(opts)
    fetch('/api/register', {
      method: 'post',
      body: JSON.stringify(opts)
    }).then(r => r.json())
      .then(token => {
        if (response  =>  response.status==='201'){
          login(token)
          console.log(token)  
          let path = `/login`; 
          setTimeout(3000)
          history.push(path); 
        }
        else { 
          setError("User Already Created") 
          console.log(response  =>  response.json)
          console.log(error)
        }
      }) }
      const loginRedirct = () =>{ 
            let path = `/login`; 
            setTimeout(3000)
            history.push(path);
          }

      
  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handleSubmit= async event => {
    event.preventDefault()

  }
  const handleRegister= async event =>  {

  }
return(           
  <div>
    <Flex width="full" align="center" justifyContent="center">
      <Box p={8}maxWidth="500px"borderWidth={1} borderRadius={8} boxShadow="lg"> 
        <Box textAlign="center">
          <Heading>Register</Heading>
            </Box>
              <Box my={4} textAlign="left">
                <form onSubmit={handleSubmit}>
                {error && <ErrorMessage message={error} />}
                <FormControl isRequired>
                  <FormLabel>Username</FormLabel>
                  <Input
                    type="username"
                    placeholder="Username"
                    size="lg"
                    onChange={handleUsernameChange}
                    />
                </FormControl>
                <FormControl isRequired mt={6}>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    placeholder="Password"
                    size="lg"
                    onChange={handlePasswordChange}
                    />
                </FormControl>
                <Button variantColor="teal"variant="outline"type="submit"width="full"mt={4} onClick={onSubmitClick} >
                    Register
                </Button>
              </form> 
            </Box>
      </Box>
    </Flex>
    </div>
       );
  }