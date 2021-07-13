import { useRouter } from 'next/router';

export const Details = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>Id = {id}</div>;
};
