import {Stack,Text, VStack } from "@chakra-ui/react";
const Better = () => {
  return (

      <VStack px={16} py={8} bgColor={'#343a40'} color={'white'} direction={["column","column", "row"]}>
        <Text fontSize={35} color="orange" textAlign="center">Know Us Better</Text>
        <Stack direction="row" spacing="24px" justifyContent="center">
          <Text textAlign={'center'}>
            Discover more about us. We strive to provide clarity and connection
            through our services. Our commitment lies in understanding your
            needs and delivering solutions that matter. Trust and reliability
            are at the core of our ethos, ensuring your satisfaction and
            success. Explore our offerings and let us demonstrate our dedication
            to excellence. Together, we can build a meaningful partnership that
            stands the test of time.
          </Text>
        </Stack>
      </VStack>
   
  );
};

export default Better;
