import React from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_POST } from '../utils/mutations';

// interface DeletePostProps {
//   postId: string;
// }

const DeletePost = ({ postId }) => {
  const [deletePost, { data, loading, error }] = useMutation(DELETE_POST);

  const handleDelete = async () => {
    try {
      await deletePost({
        variables: { _id: postId },
      });
      alert('Post deleted successfully!');
    } catch (err) {
      console.error(err);
      alert('Error deleting post.');
    }
  };

  return (
    <button onClick={handleDelete} disabled={loading}>
      {loading ? 'Deleting...' : 'Delete Post'}
    </button>
  );
};

export default DeletePost;
