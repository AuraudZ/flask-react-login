import {useEffect,useState} from 'react'
import {authFetch} from '../auth'
import {Text}  from '@chakra-ui/core'

function Secret() {
    const [message, setMessage] = useState('')
    useEffect(() => {
      authFetch("/api/protected").then(response => {
        if (response.status === 401){
          setMessage("Sorry you aren't authorized!")
          return null
        }
        return response.json()
      }).then(response => {
        if (response && response.message){
          setMessage(response.message)
        }
      })
    }, [])
    return (
        <Text textAlign="center" >
           {message}
        </Text>
    )
}

export default Secret

