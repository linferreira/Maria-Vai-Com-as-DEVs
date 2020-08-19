import React from "react";

import LogoSerasa from './images/serasa-white.svg'

import {
  Header,
  Title,
  Subtitle,
  Paragraph,
  Circle,
  CircleText,
  Serasa,
  Footer,
  Box,
  BoxContainer,
  Collapse,
} from "./styles";

function App() {
  const [buttonA, setButtonA] = React.useState(false);
  const [buttonB, setButtonB] = React.useState(false);
  const [buttonC, setButtonC] = React.useState(false);

  const groupA = {
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non nibh vulputate tempus sit fringilla egestas",
    options: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Quisque eu ex dignissim, viverra nulla eget, venenatis massa",
      "Pellentesque finibus est eu purus gravida, eu fringilla tellus interdum",
      "Donec efficitur massa in ornare lobortis",
      "Vestibulum commodo sem non sapien dapibus, in viverra velit gravida.",
      "Nunc eu turpis at neque tempor volutpat",
      "Aliquam vel libero tempus, fermentum nulla malesuada, placerat orc",
      "Nunc elementum dolor a finibus eleifend",
      "In ut tellus sed augue lobortis lobortis",
    ],
  };

  const groupB = {
    title:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
    options: [
      "Vestibulum commodo sem non sapien dapibus, in viverra velit gravida.",
      "Nunc eu turpis at neque tempor volutpat",
      "Aliquam vel libero tempus, fermentum nulla malesuada, placerat orc",
      "Nunc elementum dolor a finibus eleifend",
      "In ut tellus sed augue lobortis lobortis",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Quisque eu ex dignissim, viverra nulla eget, venenatis massa",
      "Pellentesque finibus est eu purus gravida, eu fringilla tellus interdum",
      "Donec efficitur massa in ornare lobortis",
    ],
  };

  const groupC = {
    title:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    options: [
      "Nunc elementum dolor a finibus eleifend",
      "In ut tellus sed augue lobortis lobortis",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Quisque eu ex dignissim, viverra nulla eget, venenatis massa",
      "Pellentesque finibus est eu purus gravida, eu fringilla tellus interdum",
    ],
  };

  function openButtonA() {
    setButtonB(false);
    setButtonC(false);
    setButtonA(!buttonA);
  }

  function openButtonB() {
    setButtonA(false);
    setButtonC(false);
    setButtonB(!buttonB);
  }

  function openButtonC() {
    setButtonA(false);
    setButtonB(false);
    setButtonC(!buttonC);
  }

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
        <Circle src={LogoSerasa} width={200} />

        <CircleText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non
          nibh vulputate tempus sit fringilla egestas. Neque amet sit est quis
          donec commodo. Mi lacus tempor ac eu lorem eu augue pharetra id. Quam
          scelerisque donec sed elementum pharetra
        </CircleText>
      </Serasa>

      <BoxContainer>
        <Box onClick={() => openButtonA()} />
        <Box onClick={() => openButtonB()} />
        <Box onClick={() => openButtonC()} />
      </BoxContainer>

      {buttonA && (
        <Collapse>
          <Subtitle>{groupA.title}</Subtitle>
          <div>
            {groupA.options.map((item) => (
              <li>
                <span>{item}</span>
              </li>
            ))}
          </div>
        </Collapse>
      )}

      {buttonB && (
        <Collapse>
          <Subtitle>{groupB.title}</Subtitle>
          <div>
            {groupB.options.map((item) => (
              <li>
                <span>{item}</span>
              </li>
            ))}
          </div>
        </Collapse>
      )}

      {buttonC && (
        <Collapse>
          <Subtitle>{groupC.title}</Subtitle>
          <div>
            {groupC.options.map((item) => (
              <li>
                <span>{item}</span>
              </li>
            ))}
          </div>
        </Collapse>
      )}

      <Footer />
    </>
  );
}

export default App;
