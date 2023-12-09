import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useSnapshot } from "valtio";
import { AuthContext } from "../../auth/components/context/AuthContext";

const ProfileCard = () => {
  const { authStore } = useContext(AuthContext);
  const { user } = useSnapshot(authStore);
  return (
    <>
      <Card m={10}>
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
        <CardFooter>
          <HStack>
            <Button>Message</Button>
            <Button>Invite to a job</Button>
          </HStack>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProfileCard;
