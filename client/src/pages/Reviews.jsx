// client/src/pages/ReviewsPage.js
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Divider } from 'antd';
import CreatePost from '../components/CreatePost';
import EditPost from '../components/EditPost';
import DeletePost from '../components/DeletePost';
import { QUERY_ME, QUERY_POSTS } from '../utils/queries'; // Corrected import for queries


const ReviewsPage = () => {
  const { loading: loadingPosts, data: postsData, error: postsError } = useQuery(QUERY_POSTS);
  const { loading: loadingMe, data: meData, error: meError } = useQuery(QUERY_ME);
  const [editMode, setEditMode] = useState(null);

  if (loadingPosts || loadingMe) return <p>Loading...</p>;
  if (postsError || meError) return <p>Error: {postsError?.message || meError?.message}</p>;

  const handleEdit = (postId) => {
    setEditMode(postId);
  };

  const handleCancelEdit = () => {
    setEditMode(null);
  };


  const styles = {
    reviewsPage: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      marginTop: '20px'
    },
    mainTitle: {
        fontSize: "3.5vw",
        color: '#4CAF50',
        margin: '3px'
    },
    dividerStyle: {
        borderColor: '#4CAF50',
    },
    postContainer: {
      backgroundColor: '#fff',
      padding: '15px',
      marginBottom: '20px',
      borderRadius: '8px',
      boxShadow: '0 1px 1px #4CAF50',
      transition: 'box-shadow 0.3s ease-in-out',
    },
    postContainerHover: {
      boxShadow: '0 1px 8px #4CAF50'
    },
    postText: {
      fontSize: '30px',
      marginBottom: '10px',
      color: '#4CAF50'
    },
    postAuthor: {
      fontSize: '14px',
      color: '#FF9800',
      marginBottom: '5px'
    },
    postDate: {
      fontSize: '12px',
      color: '#FF9800',
      marginBottom: '15px'
    },
    postActions: {
      display: 'flex',
      gap: '10px'
    },
    editButton: {
      padding: '5px 10px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease'
    },
    editButtonHover: {
      backgroundColor: '#0056b3'
    },
    cancelButton: {

        padding: '5px 10px',

        backgroundColor: '#dc3545',
  
        color: 'white',
  
        border: 'none',
  
        borderRadius: '4px',
  
        cursor: 'pointer',
  
        transition: 'background-color 0.3s ease'
    },
    cancelButtonHover: {
      backgroundColor: '#c82333'
    }
    
  };



  return (
    <div style={styles.reviewsPage}>
        <Divider style={styles.dividerStyle}>
            <h1 style={styles.mainTitle}>Zoo Reviews</h1>
        </Divider>
        
        {/* Create New Post */}
        {meData && <CreatePost />}

      {/* List of All Posts */}
      {postsData.posts.map(post => (
        <div
            key={post._id}
            style={styles.postContainer}
            onMouseEnter={e => e.currentTarget.style.boxShadow = styles.postContainerHover.boxShadow}
            onMouseLeave={e => e.currentTarget.style.boxShadow = styles.postContainer.boxShadow}>

          {editMode === post._id ? (
            <div>
              <EditPost postId={post._id} initialText={post.postText} />
              <button 
                onClick={handleCancelEdit}
                style={{ ...styles.editButton, ...styles.cancelButton }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = styles.cancelButtonHover.backgroundColor}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = styles.cancelButton.backgroundColor}>
                Cancel
              </button>
            </div>
          ) : (
            <div>
              <p style={styles.postText}>{post.postText}</p>
              <p style={styles.postAuthor}>Author: {post.postAuthor.username}</p>
              <p style={styles.postDate}>Date: {new Date(post.createdAt).toLocaleDateString()}</p>
              {meData && meData.me._id === post.postAuthor._id && (
                <div style={styles.postActions}>
                  <button 
                    onClick={() => handleEdit(post._id)}
                    style={styles.editButton}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = styles.editButtonHover.backgroundColor}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = styles.editButton.backgroundColor}>
                    Edit
                </button>
                  <DeletePost postId={post._id} />
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ReviewsPage;
