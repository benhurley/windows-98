import { Window, TextRow, Link, Button } from "../../styles";
import styled from "styled-components";

export const GoodbyeWindow = () => {
    const CenteredContainer = styled.div`
    display: block;
    justify-content: center;
    text-align: center;
  `

    return (
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
    );
}