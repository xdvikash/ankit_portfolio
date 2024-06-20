import { Stack, Text } from "@chakra-ui/react";

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
      <Text fontSize="2xl" color="orange">
        Ankit Kumar Pandey
      </Text>
      <Stack direction="row" spacing="24px" justifyContent="center">
        <Text fontSize="xl" color="white">
          Home
        </Text>
        <Text fontSize="xl" color="white">
          About
        </Text>
        <Text fontSize="xl" color="white">
          Service
        </Text>
      </Stack>
    </Stack>
  );
};

export default Header;
