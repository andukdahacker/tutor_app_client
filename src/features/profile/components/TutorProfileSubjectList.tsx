import { Wrap } from "@chakra-ui/react";
import { useSnapshot } from "valtio";
import useStoreContext from "../../../shared/hooks/useStoreContext";
import { AuthContext } from "../../auth/components/context/AuthContext";
import TutorProfileSubjectItem from "./TutorProfileSubjectItem";

const TutorProfileSubjectList = () => {
  const { authStore } = useStoreContext(AuthContext);
  const { user } = useSnapshot(authStore);
  return (
    <>
      <Wrap mt={6} mb={6}>
        {user?.tutorProfile.tutorProfileSubject?.map((e) => {
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
