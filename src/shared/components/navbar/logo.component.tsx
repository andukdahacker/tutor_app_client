import authStore from "@/modules/auth/stores/auth.store";
import AppRoutes from "@/shared/app_routes";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useSnapshot } from "valtio";

const Logo = () => {
  const authState = useSnapshot(authStore);

  return (
    <>
      {authState.isAuthenticated ? (
        <>
          <Link href={AppRoutes.HOME_ROUTE}>
            <Box w="32px" h="48px">
              <Image boxSize="100%" src="/logo.png" alt="Sparkle" />
            </Box>
          </Link>
        </>
      ) : (
        <Flex gap={"14px"} alignItems="center">
          <Link href={AppRoutes.HOME_ROUTE}>
            <Box w={{ base: "26px", sm: "32px" }} h={{ base: "42px", sm: "48px" }}>
              <Image boxSize="100%" src="/logo.png" alt="Sparkle" />
            </Box>
          </Link>

          <Box>
            <Text
              lineHeight={"1"}
              color={"#5533F6"}
              fontSize={{ base: 32, sm: 24 }}
              fontWeight={"extrabold"}
              casing="uppercase"
            >
              Sparkle
            </Text>
            <Text display={{ base: "none", sm: "block" }} fontWeight="medium" fontSize="sm">
              Spark up your learning journey
            </Text>
          </Box>
        </Flex>
      )}
    </>
  );
};

export default Logo;
