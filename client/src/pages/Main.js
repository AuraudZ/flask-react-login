import {useEffect} from 'react'
import {Text}  from '@chakra-ui/core'
export default function Main() {
    useEffect(() => {
        fetch("/api/main/").then(resp => resp.json()).then(resp => console.log(resp))
      }, [])
    return (
        <div>
            <Text>
                {}
            </Text>
        </div>
    )
}
