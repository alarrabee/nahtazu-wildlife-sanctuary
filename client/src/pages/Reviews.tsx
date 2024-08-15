// client/src/pages/ReviewsPage.js
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
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

  return (
    <div>
      <h1>Zoo Reviews</h1>

      {/* Create New Post */}
      <CreatePost />

      {/* List of All Posts */}
      {postsData.posts.map(post => (
        <div key={post._id} style={{ borderBottom: '1px solid #ccc', marginBottom: '10px', paddingBottom: '10px' }}>
          {editMode === post._id ? (
            <div>
              <EditPost postId={post._id} initialText={post.postText} />
              <button onClick={handleCancelEdit}>Cancel</button>
            </div>
          ) : (
            <div>
              <p>{post.postText}</p>
              <p>Author: {post.postAuthor.username}</p>
              <p>Date: {new Date(post.createdAt).toLocaleDateString()}</p>
              {meData.me._id === post.postAuthor._id && (
                <div>
                  <button onClick={() => handleEdit(post._id)}>Edit</button>
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
