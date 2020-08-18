import React from "react";

import { Header, Title, Paragraph, Serasa, Circle, Footer, Box, BoxContainer } from "./styles";

function App() {
  return (
    <>
      <Header>
        <Title>Titulo</Title>
      </Header>

      <Paragraph>
        <p>
          I'm standing here on the parking lot of- This is uh, this is heavy
          duty, Doc, this is great. Uh, does it run on regular unleaded
          gasoline? You got a permit for that? Your, your right. whoa, whoa Doc,
          stuck here, I can't be stuck here, I got a life in 1985. I got a girl.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non
          nibh vulputate tempus sit fringilla egestas. Neque amet sit est quis
          donec commodo. Mi lacus tempor ac eu lorem eu augue pharetra id. Quam
          scelerisque donec sed elementum pharetra. Sagittis, pellentesque
          tellus massa sed sit eget tellus. Ullamcorper fringilla nulla sed
          faucibus. Malesuada vel, arcu ultrices ultrices. Lectus tellus
          dictumst mattis amet, iaculis dui quam lacus sed. Diam commodo
          ultrices massa libero ac, amet sodales.
        </p>
      </Paragraph>

      <Serasa>
        <Circle />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non
          nibh vulputate tempus sit fringilla egestas. Neque amet sit est quis
          donec commodo. Mi lacus tempor ac eu lorem eu augue pharetra id. Quam
          scelerisque donec sed elementum pharetra
        </p>
      </Serasa>

      <BoxContainer>
        <Box />
        <Box />

        <Box/>
      </BoxContainer>

      <Footer />
    </>
  );
}

export default App;
