import { Stack, Text } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";

const About = () => {
  return (
    <Stack spacing={2} bg="rgba(0, 0, 0, 0.5)" direction="column">
      <Text color="orange" fontSize="50px" textAlign="center" fontWeight="bold">
        About
      </Text>
      <Text color="white" px={10} fontWeight="bold" lineHeight="tall">
        Civil construction is a fundamental aspect of modern infrastructure,
        encompassing the design, building, and maintenance of essential
        facilities and structures. This sector includes projects like roads,
        bridges, dams, tunnels, and buildings, which are vital for economic
        growth and societal development. Civil engineers and construction
        professionals collaborate to ensure these projects meet safety,
        functionality, and sustainability standards. They utilize advanced
        materials and techniques, considering environmental impacts and
        long-term durability. The planning phase involves site surveys,
        feasibility studies, and detailed designs. During construction, precise
        project management ensures adherence to timelines and budgets, while
        regulatory compliance guarantees public safety. Innovations in
        technology, such as Building Information Modeling (BIM) and green
        construction practices, are transforming the industry, making projects
        more efficient and eco-friendly. Overall, civil construction is crucial
        for creating and maintaining the infrastructure that supports daily life
        and economic activities.
      </Text>
      <Footer />
    </Stack>
  );
};

export default About;
