import React from "react";
import { Header, Text, Image } from "@/components/ui";

function Blog() {
  return (
    <div>
      <Header>Blog</Header>
      <Image src="./thumbnail.jpg" alt="logo" width={500} height={300} />
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        tenetur accusantium ipsa nostrum quia enim repudiandae itaque sequi, non
        illum?
      </Text>
    </div>
  );
}

export default Blog;
