import { CheckIcon, CloseIcon, EditIcon } from "@chakra-ui/icons";
import {
  ButtonGroup,
  Divider,
  Flex,
  HStack,
  IconButton,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useParams } from "react-router";
import { useSnapshot } from "valtio";
import useStoreContext from "../../../shared/hooks/useStoreContext";
import { AuthContext } from "../../auth/components/context/AuthContext";
import { ProfileContext } from "../context/profile_context";

const ProfileBio = () => {
  const params = useParams();
  const { authStore } = useContext(AuthContext);
  const { user } = useSnapshot(authStore);
  const [bio, setBio] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const isOwner = authStore.user?.id == params.userId;

  const { profileStore } = useStoreContext(ProfileContext);
  const applyChanges = async () => {
    const profile = await profileStore.updateBio(bio);

    if (profile) {
      authStore.updateLearnerProfile(profile);
    }

    setIsEditing(false);
  };

  return (
    <>
      <Flex direction={"column"}>
        <HStack pb={2}>
          <Text fontSize={"xl"}>Bio</Text>
          <Spacer />
          {isOwner && (
            <>
              {isEditing ? (
                <ButtonGroup justifyContent="center" size="sm">
                  <IconButton
                    aria-label="Apply changes"
                    icon={<CheckIcon />}
                    onClick={applyChanges}
                  />
                  <IconButton
                    aria-label="Cancel"
                    icon={<CloseIcon />}
                    onClick={() => setBio(user?.learnerProfile?.bio ?? "")}
                  />
                </ButtonGroup>
              ) : (
                <Flex justifyContent="center">
                  <IconButton
                    onClick={() => setIsEditing(true)}
                    aria-label="Edit"
                    size="sm"
                    icon={<EditIcon />}
                  />
                </Flex>
              )}
            </>
          )}
        </HStack>
        <Divider w={"100%"} />
        {isEditing ? (
          <Input
            value={bio}
            onChange={(e) => {
              setBio(e.target.value);
            }}
          />
        ) : (
          <Text>{user?.learnerProfile?.bio ?? ""}</Text>
        )}
      </Flex>
    </>
  );
};

export default ProfileBio;
