import React from 'react'
import prisma from '@/lib/PrismaConnect'
import FormDelete from './form-delete'
import PostUpdate from './update'

type Post = {
    id: string;
    title: string;
}

const Postists = async () => {
    const posts: Post[] = await prisma.post.findMany()
  
  return (
      <div>
          {posts.map((post: Post) => (
              <div key={post.id}>
                  <h1>{post.title}</h1>
                  <FormDelete postId={post.id} />
                  <PostUpdate postId={post.id} />
              </div>
          ))}
    </div>
  )
}

export default Postists