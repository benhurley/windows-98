import React, { useState, useEffect, ReactElement } from 'react';
import { GoodbyeWindow } from '../GoodbyeWindow/GoodByeWindow';
import { GetIsMobile } from '../../helpers/useWindowSize';
import styled from 'styled-components';
import { Window, TextRow, ButtonsContainer, Button, Link, ListEntry, List } from '../../styles';


export const WelcomeWindow = (): ReactElement => {
    const isMobile = GetIsMobile();
    const [windowStatus, setWindowStatus] = useState('open');

    const handleMinimized = () => {
        setWindowStatus('minimized');
    }

    const handleMaximized = () => {
        setWindowStatus('open');
    }

    const handleClosed = () => {
        setWindowStatus('closed');
    }
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

    const Minimized = styled.div`
    position: absolute;
    left: 0;
    bottom: ${isMobile ? '30px' : '48px'};
    width: 150px;
  `

    return (
        <>
            {windowStatus === "open" && <Window className="window">
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
                        <Link target="_blank" rel="noopener noreferrer" href={"https://cryptocost.benhurley.dev"}>Crypto Cost-basis Calculator</Link>
                    </ListEntry>
                    <ListEntry>
                        <Link target="_blank" rel="noopener noreferrer" href={"https://nyc.benhurley.dev/"}>NYC Restaurant Info</Link>
                    </ListEntry>
                </List>
                <div className="status-bar">
                    <p className="status-bar-field">Press F1 for help</p>
                    <p className="status-bar-field">Slide 1</p>
                    <p className="status-bar-field">{`CPU Usage: ${cpuNum}%`}</p>
                </div>
            </Window>
            }
            {windowStatus === "minimized" &&
                <Minimized className="title-bar">
                    <div className="title-bar-text">Welcome...</div>
                    <div className="title-bar-controls">
                        <button aria-label="Maximize" onClick={handleMaximized}></button>
                        <button aria-label="Close" onClick={handleClosed}></button>
                    </div>
                </Minimized>
            }
            {windowStatus !== "open" &&
                <GoodbyeWindow />
            }
        </>
    );
}