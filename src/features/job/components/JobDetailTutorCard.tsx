import {
  Avatar,
  Button,
  Card,
  CardBody,
  Flex,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { JobConnection } from '../../../domain/entities';
import { useMutation, useQuery } from '@tanstack/react-query';
import useStoreContext from '../../../shared/hooks/useStoreContext';
import JobDetailContext from '../context/job_detail_context';
import { useParams } from 'react-router';

interface JobDetailTutorCardProps {
  jobConnection?: JobConnection;
}

const JobDetailTutorCard = ({ jobConnection }: JobDetailTutorCardProps) => {
  const tutor = jobConnection?.tutor;
  const { jobDetailStore } = useStoreContext(JobDetailContext);
  const { jobId } = useParams();

  const { isLoading } = useQuery({
    queryKey: ['acceptedJob'],
    queryFn: async () => {
      await jobDetailStore.getAcceptedJobConnection({ jobId: jobId ?? '' });
    },
    enabled: !tutor,
  });

  const {} = useMutation({
    mutationFn: async () => {
      await jobDetailStore.disconnectJobConnection({
        jobId: jobConnection?.jobId ?? '',
        tutorId: jobConnection?.tutorId ?? '',
      });
    },
  });

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
        <Button onClick={() => {}}>Remove</Button>
      </CardBody>
    </Card>
  );
};

export default JobDetailTutorCard;
