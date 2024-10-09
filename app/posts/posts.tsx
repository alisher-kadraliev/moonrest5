"use client"
import { useState } from "react"

const PostsPage = () => {

const [title, setTitle] = useState("")
    const createPost = async (formData: FormData) => {
        const title = formData.get("title") as string
        const response = await fetch('/api/posts', { 
            method: 'POST',
            body: JSON.stringify({ title }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const post = await response.json(); 
        console.log(post);
        setTitle("")
    }

    return (
        <div>
            <form action={createPost}>
                <input className="border" type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}  />
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default PostsPage