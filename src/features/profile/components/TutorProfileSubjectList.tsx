import { Wrap } from "@chakra-ui/react";
import { useSnapshot } from "valtio";
import useStoreContext from "../../../shared/hooks/useStoreContext";
import { ProfileContext } from "../context/profile_context";
import TutorProfileSubjectItem from "./TutorProfileSubjectItem";

const TutorProfileSubjectList = () => {
  const { profileStore } = useStoreContext(ProfileContext);
  const { tutorProfile } = useSnapshot(profileStore);
  return (
    <>
      <Wrap mt={6} mb={6}>
        {tutorProfile?.tutorProfileSubject?.map((e) => {
          return (
            <TutorProfileSubjectItem
              tutorProfileSubject={e}
              key={`${e.subjectId} ${e.tutorId}`}
            />
          );
        })}
      </Wrap>
    </>
  );
};

export default TutorProfileSubjectList;
