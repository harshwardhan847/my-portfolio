import React from "react";
import "./style.scss";
import Section from "../shared/section";
import BlogCard from "./blog-card";
import Blog1 from "../../images/blogs/blog-thumb-1.jpg";
import Blog2 from "../../images/blogs/blog-thumb-2.jpg";
import Blog3 from "../../images/blogs/blog-thumb-3.jpg";
const Blogs = () => {
  return (
    <Section id="blogs" title="Blogs & Articles" background="dark">
      <div className="blogs-content-wrapper">
        <BlogCard
          user="Harsh Wardhan"
          date="29-12-21"
          image={Blog1}
          title="lorem ipsum dia dilo"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure eos vitae corrupti dolores. Architecto asperiores blanditiis beatae qui in doloremque, consectetur maxime minima, quisquam repellendus deleniti voluptates impedit quo numquam?"
        />
        <BlogCard
          user="Harsh Wardhan"
          date="29-12-21"
          image={Blog2}
          title="lorem ipsum dia dilo"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure eos vitae corrupti dolores. Architecto asperiores blanditiis beatae qui in doloremque, consectetur maxime minima, quisquam repellendus deleniti voluptates impedit quo numquam?"
        />
        <BlogCard
          user="Harsh Wardhan"
          date="29-12-21"
          image={Blog3}
          title="lorem ipsum dia dilo"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure eos vitae corrupti dolores. Architecto asperiores blanditiis beatae qui in doloremque, consectetur maxime minima, quisquam repellendus deleniti voluptates impedit quo numquam?"
        />
      </div>
    </Section>
  );
};

export default Blogs;
