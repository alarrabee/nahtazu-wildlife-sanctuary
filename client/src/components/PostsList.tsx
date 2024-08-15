import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_POSTS } from '../utils/queries';

const PostsList: React.FC = () => {
  const { loading, data, error } = useQuery(QUERY_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.posts.map((post: any) => (
        <div key={post._id}>
          <p>{post.postText}</p>
          <p>Author: {post.postAuthor.username}</p>
          <p>Date: {new Date(post.createdAt).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
