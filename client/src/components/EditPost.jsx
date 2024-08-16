import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_POST } from '../utils/mutations';

// interface EditPostProps {
//   postId: string;
//   initialText: string;
// }

const EditPost = ({ postId, initialText }) => {
  const [postText, setPostText] = useState(initialText);
  const [updatePost, { data, loading, error }] = useMutation(UPDATE_POST);

  const handleUpdate = async () => {
    try {
      await updatePost({
        variables: {
          input: { _id: postId, postText },
        },
      });
      // alert('Post updated successfully!');
      window.location.reload()
    } catch (err) {
      console.error(err);
      alert('Error updating post.');
    }
  };

  return (
    <div>
      <textarea 
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
        placeholder="Edit your post..."
      />
      <button onClick={handleUpdate} disabled={loading}>
        {loading ? 'Updating...' : 'Update Post'}
      </button>
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default EditPost;
