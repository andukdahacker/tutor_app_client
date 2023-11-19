import { Box, Button, Image, Text } from "@chakra-ui/react";

const HomeExplore = () => {
  const explore = [
    {
      id: "1",
      img: "Home/home-explore-1.png",
      title: "Find a Buddy",
      desc: "and study better together",
    },
    {
      id: "2",
      img: "Home/home-explore-2.png",
      title: "Make an Income",
      desc: "by tutoring others",
    },
  ];
  return (
    <Box textAlign={"center"} py="44px">
      <Text
        fontSize={{ base: "30px", sm: "36px" }}
        fontWeight={"bold"}
        color="purple.500"
      >
        With SPARKLE, you can
      </Text>
      <Box
        display={"flex"}
        flexDirection={{ base: "column", sm: "row" }}
        alignItems="center"
        justifyContent={"center"}
        gap="26px"
        mt={"44px"}
      >
        {explore.map((item) => (
          <Box
            mx={{ base: "44px", sm: "0px" }}
            key={item.id}
            shadow="md"
            borderRadius={"md"}
          >
            <Box
              w="100%"
              h={{ sm: "150px", md: "200px" }}
              maxW={{ sm: "220px", md: "300px" }}
              px="50px"
              py="25px"
            >
              <Image
                boxSize="100%"
                objectFit="cover"
                src={item.img}
                alt="Banner"
              />
            </Box>
            <Text
              fontSize={{ base: "16px", md: "22px" }}
              fontWeight="bold"
              color={"#222430"}
            >
              {item.title}
            </Text>
            <Text fontSize={{ base: "14px", md: "20px" }} color={"#222430"}>
              {item.desc}
            </Text>
            <Button my="35px" colorScheme="purple">
              Explore
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HomeExplore;
