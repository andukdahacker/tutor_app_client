import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useStoreContext from "../../../shared/hooks/useStoreContext";
import { ProfileContext } from "../context/profile_context";

interface ProfileBioFormProps {
  bio: string;
  onClose: () => void;
}

const ProfileBioForm = ({ bio, onClose }: ProfileBioFormProps) => {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      bio,
    },
  });

  const { profileStore } = useStoreContext(ProfileContext);

  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <form
        onSubmit={handleSubmit(async (data) => {
          setIsLoading(true);
          await profileStore.updateBio(data.bio);
          setIsLoading(false);
          onClose();
        })}
      >
        <FormControl pb={10}>
          <FormLabel>Profile bio</FormLabel>
          <Input {...register("bio")} />
        </FormControl>
        <Center pb={6}>
          <Button isLoading={isLoading} type="submit">
            Submit
          </Button>
        </Center>
      </form>
    </>
  );
};

export default ProfileBioForm;
