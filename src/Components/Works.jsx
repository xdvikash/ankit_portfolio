import { Stack, Text } from "@chakra-ui/react"
import Steppers from "./Steppers"


const Works = () => {
    return(
        <Stack bgColor={'#343a40'}  color={'white'} p={8}>
            <Text textAlign={'center'} color="orange" fontSize={35} direction={["column","column", "row"]}>How we Work</Text>
            <Steppers/>
        </Stack>
    )
}
export default Works;