import { Image, Stack, Text } from "@chakra-ui/react";
import sevc from "../assets/service.png";
import Footer from "./Footer";

const Service = () => {
  return (
    <Stack spacing={2} bg="rgba(0, 0, 0, 0.5)" direction="column">
      <Text
        p={2}
        color="orange"
        fontSize="50px"
        textAlign="center"
        fontWeight="bold"
      >
        OUR SERVICE
      </Text>
      <Image src={sevc} alt="service" width="100%" height="500px" px={5} />
      <Text color="white" px={10} fontWeight="bold" lineHeight="tall">
        At M/S Ankit Pandey Construction Services, we pride ourselves on delivering top-notch
        civil construction solutions tailored to meet the unique needs of each
        client. Our expertise spans a wide range of projects, including
        residential, commercial, and infrastructure developments. From initial
        site preparation and foundation work to the final touches, our skilled
        team ensures every phase of construction adheres to the highest
        standards of quality and safety.

        <br />
        <br />
        Utilizing the latest technology and sustainable practices, we offer
        comprehensive services such as excavation, concrete work, road
        construction, and utility installation. Our commitment to excellence is
        reflected in our meticulous project management, which guarantees timely
        completion within budget constraints. With a customer-focused approach,
        we prioritize open communication and collaboration, ensuring that our
        clients' visions are brought to life seamlessly. Trust M/S Ankit Pandey Construction
        Services for reliable, efficient, and innovative construction solutions
        that stand the test of time.
      </Text>
      <Footer />
    </Stack>
  );
};

export default Service;
