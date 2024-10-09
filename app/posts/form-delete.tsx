"use client"
import React from 'react';

const FormDelete = ({ postId }: { postId: string }) => {
    const handleDelete = async () => {
            const response = await fetch(`/api/posts`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: postId }),
            });

            if (!response.ok) {
                throw new Error('Failed to delete post');
            }

            const data = await response.json();
            alert(data.message); // Notify user of success
    };

    return (
        <button onClick={handleDelete}>
            Delete Post
        </button>
    );
};

export default FormDelete;