import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Text,
} from "@chakra-ui/react";

const HomeQuestions = () => {
  const questions = [
    {
      id: 1,
      title: "What is SPARKLE?",
      desc: "SPARKLE is the combination of SPARK and LEARNING. We are ambitious to help young people spark their learning spirit and kick start their learning journey in an easy, connective and effective way.",
    },
    {
      id: 2,
      title: "How does SPARKLE work?",
      desc: "Enter the subject you want to find a buddy or tutor, SPARKLE will show you whoever is the most suitable for you to connect and start the learning journey together.",
    },
    {
      id: 3,
      title: "How much does SPARKLE cost?",
      desc: "Finding buddy on our platform is free, but tutoring services are paid. We can help you filter the right options with your budget.",
    },
  ];
  return (
    <Box textAlign={"center"} my="44px">
      <Text
        fontSize={{ base: "30px", sm: "36px" }}
        fontWeight={"bold"}
        color="purple.500"
        mb={"44px"}
      >
        Frequently Ask Questions
      </Text>
      <Container maxW="container.lg">
        <Accordion defaultIndex={[0]} allowMultiple>
          {questions.map((item) => (
            <AccordionItem key={item.id}>
              <h2>
                <AccordionButton>
                  <Box fontWeight="bold" as="span" flex="1" textAlign="left">
                    {item.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{item.desc}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Box>
  );
};

export default HomeQuestions;
