// Components/Home.js
import { Box, Image, Stack, Text } from '@chakra-ui/react';
import img1 from '../assets/1.png';
import Better from './Better';
import Service from './Service';
import Works from './Works';
import Footer from './Footer';

const Home = () => {
  return (
    <Box position="relative" boxSize="sm" width="100%" direction={["column","column", "row"]}>
      <Image src={img1} alt='Ankit Pandey' width="100%" height="100%" objectFit="cover"  />
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0"
        bottom="0"
        left="0"
        right="0"
        color="white"
        textAlign="center"
        bg="rgba(0, 0, 0, 0.5)" /* Semi-transparent black background */
        p="4"
      >
        <Text fontSize="3xl" color="orange">Ankit Kumar Pandey</Text>
        <Stack direction="row" spacing="24px" justifyContent="center">
        </Stack>
      </Stack>
      <Better/>
      <Service/>
      <Works/>
      <Footer/>
    </Box>
  );
};

export default Home;


