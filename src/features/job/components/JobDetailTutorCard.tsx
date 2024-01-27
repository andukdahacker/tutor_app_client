import {
  Avatar,
  Button,
  Card,
  CardBody,
  Flex,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useSnapshot } from 'valtio';
import useStoreContext from '../../../shared/hooks/useStoreContext';
import JobDetailContext from '../context/job_detail_context';

interface JobDetailTutorCardProps {
  resetTab: () => void;
}

const JobDetailTutorCard = ({ resetTab }: JobDetailTutorCardProps) => {
  const { jobDetailStore } = useStoreContext(JobDetailContext);
  const { acceptedJobConnection } = useSnapshot(jobDetailStore);
  const tutor = acceptedJobConnection?.tutor;
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingRemove, setIsLoadingRemove] = useState(false);
  const { jobId } = useParams();

  useEffect(() => {
    async function fetchData(jobId: string) {
      setIsLoading(true);
      await jobDetailStore.getAcceptedJobConnection({ jobId });
      setIsLoading(false);
    }

    if (jobId) {
      fetchData(jobId);
    }
  }, [jobId]);

  if (isLoading) return <Spinner />;

  return (
    <Card colorScheme="purple">
      <CardBody>
        <Flex>
          <Avatar
            size={'md'}
            name={tutor?.user?.username ?? ''}
            src={tutor?.user?.avatar ?? ''}
          />
          <Text>{tutor?.user?.username ?? ''}</Text>
        </Flex>
        <Button
          isLoading={isLoadingRemove}
          onClick={async () => {
            setIsLoadingRemove(true);
            await jobDetailStore.disconnectJobConnection({
              jobId: acceptedJobConnection?.jobId ?? '',
              tutorId: acceptedJobConnection?.tutorId ?? '',
            });
            setIsLoadingRemove(false);
            resetTab();
          }}
        >
          Remove
        </Button>
      </CardBody>
    </Card>
  );
};

export default JobDetailTutorCard;
