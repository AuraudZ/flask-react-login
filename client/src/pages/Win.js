import {Text} from '@chakra-ui/core'
import YouTube from "react-youtube";
import { Center } from '@chakra-ui/layout';
const Win = () => {
    const [id] = "dQw4w9WgXcQ";

    const opts = {
        height: "390",
        width: "640",
        playerVars: {
          autoplay: 1
        }
      };
    return (
        <div>
             
             <Text color="teal" textAlign="center" size="50px">
                You win
            </Text>
            <Center>
            <YouTube videoId={id} opts={opts}  />
            </Center>
        </div>
    )
}
export default Win
