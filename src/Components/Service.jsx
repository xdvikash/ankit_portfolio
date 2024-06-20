import { HStack, Image, Stack, Text } from "@chakra-ui/react";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.webp";

const images = [s1, s2, s2, s2, s2, s2, s2, s2, s3];

const Service = () => {
  return (
    <Stack color={'white'} p={8} bgColor={'#343a40'} >
      <Text
        px={16}
        py={2}
        textAlign={"center"}
        fontSize={35}
        color="orange"
        direction={["column", "column", "row"]}
      >
        Our Range of Service
      </Text>
      <HStack overflowX={"scroll"}>
        {images.map((src, index) => (
          <Image key={index} h={40} w={40} src={src} />
        ))}
      </HStack>
    </Stack>
  );
};

export default Service;
