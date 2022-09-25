import React from 'react';
import styled from 'styled-components';
import { GetIsMobile } from './helpers/useWindowSize';
import { WelcomeWindow } from './components/WelcomeWindow/WelcomeWindow';
import "98.css";


const App = () => {
  const isMobile = GetIsMobile();
  const backgroundUrl = isMobile ? 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2Foriginals%2Fba%2F70%2F46%2Fba70464643f0c34aaa59de762402dbd6.jpg&f=1&nofb=1&ipt=ba40fc7df8da83697dd320de340b5309252f92c00cc0d0d5c84a2bb711cb234c&ipo=images' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbetawiki.net%2Fimages%2F3%2F3d%2FWindows98-SE-Desktop.png&f=1&nofb=1&ipt=5fd92611dc2b6f1bd589b8c28c1e44dbb36539a44a46b558e38a16e1c9b4033b&ipo=images';

  const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundUrl});
  background-position: 0% 100%;
  background-size: cover;
`

  return (
    <AppContainer>
        <WelcomeWindow />
    </AppContainer >
  );
};

export default App;
