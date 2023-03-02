import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import Content from "./components/Content";
import StartScreen from "./components/StartScreen";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  a {
    text-decoration: none;
  }

  a:link,
  a:visited {
    color: inherit;
  }

  ul {
    list-style-type: none;
    padding-inline-start: 0;
  }

  #root,
  #__next {
    isolation: isolate;
  }

  html {
    font-size: 62.5%;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-family: 'Recursive', sans-serif;
    background-color: #fb6b6b;
  }
`;

export default function App() {
  const [started, setStarted] = useState(false);
  return (
    <>
      <GlobalStyle />
      <StartScreen started={started} setStarted={setStarted} />
      <Content started={started} />
    </>
  );
}
