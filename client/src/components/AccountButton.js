import {useState} from 'react';
import {  Box, IconButton } from '@chakra-ui/core'
import {useAuth}  from '../auth'
import { useHistory } from "react-router-dom";
export default function AccountButton() {
    const [logged] = useAuth();
    const [setLoggedin] = useState('');
    const routr = () => {
      if (!logged) {
        goLogin()
      } 
      else goHome()
    }
    const history = useHistory();
      const goHome = () =>{ 
      let path = `/home`; 
      history.push(path);
  }
      const goLogin = () =>  {
        let path = `/login`; 
        history.push(path);
      }
      const checkLogin = ()  => {
        if (!logged) {
          setLoggedin('Not Logged In')
        } 
        else 
        setLoggedin('Logged In')
      }
    return (
      <Box textAlign="right" py={4} mr={12}>
        <IconButton
          icon={!logged  ?  'sun':'moon' }
          onClick={routr }
          variant="outline"
          aria-label={checkLogin}
        />
      </Box>
    );
  }