import React from "react";
import { Header, Text, Image } from "@/components/ui";

function About() {
  return (
    <div>
      <Header>About</Header>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
        tenetur accusantium ipsa nostrum quia enim repudiandae itaque sequi, non
        illum?
      </Text> <br />
      <Image src="./thumbnail.jpg" alt="logo" width={500} height={300} />
    </div>
  );
}

export default About;
