"use client"
import React, { useState } from 'react';

const PostUpdate = ({ postId }: { postId: string }) => {
    const [title, setTitle] = useState('');

    const handleUpdate = async () => {
        try {
            const response = await fetch(`/api/posts`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: postId, title }),
            });

            const data = await response.json();
            if (response.ok) {
                alert(data.message);
            } else {
                alert(data.error);
            }
        } catch (error) {
            console.error('Error updating post:', error);
            alert('Failed to update post');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Update post title"
            />
            <button onClick={handleUpdate}>Update Post</button>
        </div>
    );
};

export default PostUpdate;