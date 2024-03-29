import React from "react";
import BlogCard from "./BlogCard";

const Blog = ({post}) => {
  return (
    <>
      <div className="">
        <BlogCard
          date="Dec 22, 2023"
          CardTitle={post.title}
          CardDescription={post.desc}
          image={post.photo}
        />
        <BlogCard
          date="Dec 22, 2023"
          CardTitle={post.title}
          CardDescription={post.desc}
          image={post.photo}
        />
        <BlogCard
          date="Dec 22, 2023"
          CardTitle={post.title}
          CardDescription={post.desc}
          image={post.photo}
        />
        <BlogCard
          date="Dec 22, 2023"
          CardTitle="Meet AutoManage, the best AI management tools"
          CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
        />
        <BlogCard
          date="Dec 22, 2023"
          CardTitle="Meet AutoManage, the best AI management tools"
          CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          image="https://i.ibb.co/Y23YC07/image-02.jpg"
        />
        <BlogCard
          date="Dec 22, 2023"
          CardTitle="Meet AutoManage, the best AI management tools"
          CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          image="https://i.ibb.co/7jdcnwn/image-03.jpg"
        />
        
      </div>
    </>
  );
};

export default Blog;
