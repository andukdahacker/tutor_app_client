import AppRoutes from "@/shared/app_routes";
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

const Logo = () => {
  return (
    <Box>
      <Link href={AppRoutes.HOME_ROUTE}>
        <Text fontSize={"4xl"} fontWeight={"bold"}>
          Sparkle
        </Text>
      </Link>
    </Box>
  );
};

export default Logo;
