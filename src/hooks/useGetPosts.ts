import {useEffect, useState} from 'react';
import {API_URLS, axiosClient} from '../api';

interface PostItemType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const useGetPosts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState<PostItemType[]>([]);
  const [error, setError] = useState<unknown>(null);

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const {data} = await axiosClient.get<PostItemType[]>(API_URLS.posts);
      setPosts(data || []);
    } catch (e) {
      setError(e);
      console.log('Fetch Post Error', e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return {isLoading, posts, error};
};

export default useGetPosts;
