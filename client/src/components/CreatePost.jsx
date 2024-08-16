import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom'; // Correct import for react-router-dom v6+
import { CREATE_POST } from '../utils/mutations';

const CreatePost = () => {
  const [postText, setPostText] = useState('');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [createPost, { loading }] = useMutation(CREATE_POST);

  const handleSubmit = async () => {
    const userId = localStorage.getItem('userId');

    console.log('Retrieved userId from localStorage:', userId);

    if (!userId) {
      alert('User ID not found. Redirecting to login page.');
      navigate('/login'); // Redirect to the login page
      return;
    }

    try {
      await createPost({
        variables: {
          input: { postText, postAuthor: userId },
        },
      });
      setPostText('');
      window.location.reload(); // Refresh the page to show the new post
    } catch (err) {
      if (err.message.includes('AuthenticationError')) {
        alert('You must be logged in to create a post.');
        navigate('/login'); // Redirect to the login page
      } else {
        console.error('Error creating post:', err);
        alert('Error creating post.');
      }
    }
  };

  return (
    <div>
      <textarea 
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
        placeholder="Write your review..."
      />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? 'Submitting...' : 'Submit Post'}
      </button>
    </div>
  );
};

export default CreatePost;