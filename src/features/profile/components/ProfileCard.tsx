import {
  Avatar,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useSnapshot } from "valtio";
import useStoreContext from "../../../shared/hooks/useStoreContext";
import { AuthContext } from "../../auth/components/context/AuthContext";

const ProfileCard = () => {
  const { authStore } = useStoreContext(AuthContext);
  const { user } = useSnapshot(authStore);
  return (
    <>
      <Card w={{ base: 270, sm: 300, md: 400 }}>
        <CardBody>
          <VStack>
            <HStack>
              <Avatar
                size={"lg"}
                name={user?.username ?? ""}
                src={user?.avatar ?? ""}
              />
              <Text fontSize={"xl"} fontWeight={"bold"}>
                {user?.username ?? ""}
              </Text>
            </HStack>
          </VStack>
        </CardBody>
        <CardFooter justify={"center"}>
          <ButtonGroup justifyContent={"center"} justifyItems={"center"}>
            <Button>Message</Button>
            <Button>Invite to a job</Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProfileCard;
