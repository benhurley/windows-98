import React, { useState, useEffect, useLayoutEffect } from 'react';
import styled from 'styled-components';
import "98.css";

export function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const App = () => {
  const [width] = useWindowSize();
  const [showWindow, setShowWindow] = useState(true);
  const [showMinimized, setShowMinimized] = useState(false);
  const [cpuNum, setCpuNum] = useState(14);

  function randomNumberInRange(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCpuNum(randomNumberInRange(10, 25));
    }, 50000); // runs every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleMinimized = () => {
    setShowWindow(false);
    setShowMinimized(true);
  }

  const handleMaximized = () => {
    setShowWindow(true);
    setShowMinimized(false);
  }

  const handleClosed = () => {
    setShowMinimized(false);
    setShowWindow(false);
  }

  const isMobile = width < 600;
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

  const CenteredContainer = styled.div`
  display: block;
  justify-content: center;
  text-align: center;
`

  const Window = styled.div`
  width: 80%;
  max-width: 275px;
  margin-left: auto;
  margin-right: auto;
`

  const TextRow = styled.p`
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
`

  const ButtonsContainer = styled.div`
  margin-left: 10px;
  margin-bottom: 20px;
`

  const Button = styled.button`
  color: black;
`

  const Minimized = styled.div`
  position: absolute;
  left: 0;
  bottom: ${isMobile ? '30px' : '48px'};
  width: 200px;
`

  const List = styled.ul`
  margin-bottom: 20px;
`

  const ListEntry = styled.li`
  margin-bottom: 10px;
`

  const Link = styled.a`
  color: black;
  margin-right: 10px;
`
  return (
    <AppContainer>
      {showWindow && !showMinimized &&
        <Window className="window">
          <div className="title-bar">
            <div className="title-bar-text">Welcome to Ben's Portfolio</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize" onClick={handleMinimized}></button>
              <button aria-label="Close" onClick={handleClosed}></button>
            </div>
          </div>
          <TextRow>If you're here, you're interested in something...</TextRow>
          <TextRow>Probably one of these:</TextRow>
          <ButtonsContainer>
            <Link target="_blank" rel="noopener noreferrer" href={"https://github.com/benhurley"}><Button>Github</Button></Link>
            <Link target="_blank" rel="noopener noreferrer" href={"https://linkedin.com/in/benjamin-hurley"}><Button>Linkedin</Button></Link>
            <Link href={"mailto:benfromtech@gmail.com"}><Button>Email</Button></Link>
          </ButtonsContainer>
          <TextRow>Or one of the cool websites I've built:</TextRow>
          <List>
            <ListEntry>
              <Link target="_blank" rel="noopener noreferrer" href={"https://daily-harvest.com"}>Daily Harvest</Link>
            </ListEntry>
            <ListEntry>
              <Link target="_blank" rel="noopener noreferrer" href={"https://unchained.fyi"}>Unchained | A Blockchain  Data Lake</Link>
            </ListEntry>
            <ListEntry>
              <Link target="_blank" rel="noopener noreferrer" href={"https://nippi.es"}>Nippies | An Awful NFT Collection on Solana</Link>
            </ListEntry>
          </List>
          <TextRow>Maybe one of the tools I made for free?</TextRow>
          <List>
            <ListEntry>
              <Link target="_blank" rel="noopener noreferrer" href={"https://cryptocost.netlify.app"}>Crypto Cost-basis Calculator</Link>
            </ListEntry>
            <ListEntry>
              <Link target="_blank" rel="noopener noreferrer" href={"https://nyc-restaurant-info.netlify.app/"}>NYC Restaurant Info</Link>
            </ListEntry>
          </List>
          <div className="status-bar">
            <p className="status-bar-field">Press F1 for help</p>
            <p className="status-bar-field">Slide 1</p>
            <p className="status-bar-field">{`CPU Usage: ${cpuNum}%`}</p>
          </div>
        </Window>
      }
      {!showWindow &&
        <Window className="window">
          <div className="title-bar">
            <div className="title-bar-text">Had Enough Windows 98 Nostalgia?</div>
          </div>
          <CenteredContainer>
            <TextRow>Lucky for you, I also have a &nbsp; <i>real</i> &nbsp; website.</TextRow>
            <Link target="_blank" rel="noopener noreferrer" href={"https://benhurley.dev"}>
              <Button style={{ marginBottom: 10 }}>Get me out of here</Button>
            </Link>
          </CenteredContainer>
        </Window>
      }
      {
        showMinimized &&
        <Minimized className="title-bar">
          <div className="title-bar-text">Ben's Website</div>
          <div className="title-bar-controls">
            <button aria-label="Maximize" onClick={handleMaximized}></button>
            <button aria-label="Close" onClick={handleClosed}></button>
          </div>
        </Minimized>
      }
    </AppContainer >
  );
};

export default App;
