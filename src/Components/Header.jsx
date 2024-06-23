import { Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Stack
      direction={["column", "row", "row"]}
      justifyContent="space-between"
      alignItems="center"
      spacing="24px"
      width="100%"
      p="4"
      top="0"
      left="0"
      right="0"
      bgColor="#343a40"
    >
      <Text fontSize="2xl" color="orange" fontWeight="bold">
        Ankit Kumar Pandey
      </Text>
      <Stack direction="row" spacing="24px" justifyContent="center">
        <Link to="/">
          <Text fontSize="xl" color="white">
            Home
          </Text>
        </Link>
        <Link to="/About">
          <Text fontSize="xl" color="white">
            About
          </Text>
        </Link>
        <Link to="/Service">
          <Text fontSize="xl" color="white">
            Service
          </Text>
        </Link>
      </Stack>
    </Stack>
  );
};

export default Header;
