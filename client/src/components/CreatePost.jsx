import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom'; // Correct import for react-router-dom v6+
import { CREATE_POST } from '../utils/mutations';

const CreatePost = () => {
  const [postText, setPostText] = useState('');
  const [loading, setLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const [createPost] = useMutation(CREATE_POST);

  const handleSubmit = async () => {
    setLoading(true);
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
    setLoading(false);
  };


  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '600px',
    margin: '0 auto',
    marginBottom: '20px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  };

  const textareaStyle = {
    width: '100%',
    height: '150px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    resize: 'vertical',
    fontSize: '16px',
    marginBottom: '15px',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease, opacity 0.3s ease',
    backgroundColor: isHovered ? '#007bff' : '#2196F3', 
  };

  const buttonDisabledStyle = {
    backgroundColor: '#cccccc',
    cursor: 'not-allowed',
  };



  return (
    <div style={containerStyle}>
      <textarea 
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
        placeholder="Write your review..."
        style={textareaStyle}
      />
      <button 
        onClick={handleSubmit} 
        disabled={loading}
        style={{
            ...buttonStyle,
            ...(loading && buttonDisabledStyle),
          }}
          onMouseEnter={() => setIsHovered(true)} // Set hover state to true
          onMouseLeave={() => setIsHovered(false)} // Set hover state to false
        >

        {loading ? 'Submitting...' : 'Submit Post'}
      </button>
    </div>
  );
};

export default CreatePost;