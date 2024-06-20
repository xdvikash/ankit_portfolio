import {
  Box,
  Stack,
  Step,
  StepDescription,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Text,
  useSteps,
} from "@chakra-ui/react";
import React from "react";
import { FaCircle } from "react-icons/fa";

const steps = [
  {
    title: "CONCEPTUALIZE",
    description:
      "Introducing a groundbreaking civil project: a self-sustaining smart city integrating green energy, advanced infrastructure, and cutting-edge technology to foster sustainable living, innovation, and community well-being.",
  },
  {
    title: "EXPLORING IDEA",
    description: `Introducing a groundbreaking civil project: a self-sustaining smart city integrating green energy, advanced infrastructure, and cutting-edge technology to foster sustainable living, innovation, and community well-being`,
  },
  {
    title: "INTEGRATION",
    description: `Introducing a groundbreaking civil project: a self-sustaining smart city integrating green energy, advanced infrastructure, and cutting-edge technology to foster sustainable living, innovation, and community well-being.`,
  },
  {
    title: "EMPLEMENTATION",
    description: `Introducing a groundbreaking civil project: a self-sustaining smart city integrating green energy, advanced infrastructure, and cutting-edge technology to foster sustainable living, innovation, and community well-being.`,
  },
];

const Steppers = () => {
  const { activeStep } = useSteps({
    index: 4,
    count: steps.length,
  });

  return (
    <Stack direction={["row", "column"]}>
      <Stepper px={8} size="lg" index={activeStep} display={["none", "flex"]}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<FaCircle color="black" />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>
            <Box flexShrink="0">
              <StepTitle color="orange">{step.title}</StepTitle>
            </Box>
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
      <Stepper
        px={2}
        size="lg"
        index={activeStep}
        orientation="vertical"
        display={["flex", "none"]}
        height={"120vh"}
        w={"100vw"}
      >
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<FaCircle color="black" />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>
            <Box flexShrink="0">
              <StepTitle  style={{ color: "orange"}}>{step.title}</StepTitle>
              <StepDescription style={{ width: "70vw",color: "white" }}>
                {step.description}
              </StepDescription>
            </Box>
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
      <Stack px={8} display={["none", "flex"]} direction={["column", "row"]}>
        <Text w={["100%", "40%"]}>
          Introducing a groundbreaking civil project: a self-sustaining smart
          city integrating green energy, advanced infrastructure, and
          cutting-edge technology to foster sustainable living, innovation, and
          community well-being.
        </Text>
        <Text w={["100%", "40%"]}>
          Introducing a groundbreaking civil project: a self-sustaining smart
          city integrating green energy, advanced infrastructure, and
          cutting-edge technology to foster sustainable living, innovation, and
          community well-being.
        </Text>
        <Text w={["100%", "40%"]}>
          Introducing a groundbreaking civil project: a self-sustaining smart
          city integrating green energy, advanced infrastructure, and
          cutting-edge technology to foster sustainable living, innovation, and
          community well-being.
        </Text>
        <Text w={["100%", "40%"]}>
          Introducing a groundbreaking civil project: a self-sustaining smart
          city integrating green energy, advanced infrastructure, and
          cutting-edge technology to foster sustainable living, innovation, and
          community well-being.
        </Text>
      </Stack>
    </Stack>
  );
};

export default Steppers;
