import { width } from "@mui/system";
import React from "react";
import styled from "styled-components";
import Footer from "./footer";
import Header from "./header";

const Container = styled.div`
  margin: 200px;
`;
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Headers = styled.div`
  font-family: "Josefin Sans";
  font-size: 36px;
  line-height: 48px;

  color: #151875;
`;
export const Texts = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;

  color: #8a8fb9;
`;
const LeftSide = styled.div`
  flex: 1;
  
`;
const RightSide = styled.div`
  flex: 1;
  margin-left: 100px;
`;
const ContactWayContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const DotContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  text-align: center;
  width: 300px;
`;
const Dot = styled.div`
  width: 45px;
  height: 45px;
  background-color: ${(props) => props.Color || "#ffb265"};
  border-radius: 50%;
  margin-right: 20px;
`;

const GetInTouch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 200px;
  height: 700px;
  align-items: center;
`;
const Input = styled.input`
  border: 1px solid rgba(164, 182, 200, 0.7);
  border-radius: 3px;
  width: 700px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.01em;
  height: 40px;
  padding: 5px 20px;
  color: #8a8fb9;
`;
const HalfInput = styled.input`
  border: 1px solid rgba(164, 182, 200, 0.7);
  border-radius: 3px;
  width: 300px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.01em;
  height: 40px;
  padding: 5px 20px;
  color: #8a8fb9;
`;
const TextArea = styled.textarea`
  border: 1px solid rgba(164, 182, 200, 0.7);
  border-radius: 3px;
  width: 700px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.01em;
  height: 200px;
  padding: 5px 20px;
  color: #8a8fb9;
`;
export const Btn = styled.button`
  background: #fb2e86;
  border-radius: 3px;
  font-family: "Josefin Sans";
  font-size: 16px;
  line-height: 26px;
width: 160px;
height: 50px;

border: none;
  color: #ffffff;
`;
const Contact = () => {
  return (
    <div>
      <Header />
      <Container>
        <Wrap>
          <LeftSide>
            <Headers>Information About us</Headers>
            <Texts style={{marginTop:"50px" ,width:"80%"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
              tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
              vitae lobortis quis bibendum quam.
            </Texts>
          </LeftSide>
          <RightSide>
            <Headers>Contact Way</Headers>
            <ContactWayContainer>
              <DotContainer>
                <Dot Color="#5726DF"></Dot>
                <Texts>
                  <div>Tel: 01021991536</div>
                  <div>E-Mail: mohanad2@gmail.com</div>
                </Texts>
              </DotContainer>
              <DotContainer>
                <Dot Color="#FB2E86"></Dot>
                <Texts>
                  <div>Support Forum For</div>
                  <div> over 24hr</div>
                </Texts>
              </DotContainer>

              <DotContainer>
                <Dot Color="#FFB265"></Dot>
                <Texts>
                  <div>50% off for first order</div>
                  <div>free Consultation</div>
                </Texts>
              </DotContainer>
              <DotContainer>
                <Dot Color="#1BE982"></Dot>
                <Texts>
                  <div>Free standard shipping</div>
                  <div>on all orders.</div>
                </Texts>
              </DotContainer>
            </ContactWayContainer>
          </RightSide>
        </Wrap>
        <div style={{margin:"auto", width:"100%"}}>

        <GetInTouch>
          <Headers>Get In Touch</Headers>
          <Texts style={{ width: "50%" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices tristique amet erat vitae eget dolor los vitae
            lobortis quis bibendum quam.
          </Texts>
          <div
            style={{
              display: "flex",
              width: "700px",
              justifyContent: "space-between",
            }}>
            <HalfInput placeholder="Your Name" />
            <HalfInput placeholder="Your E-mail" />
          </div>
          <Input placeholder="Subject" />
          <TextArea placeholder="Type Your Message"></TextArea>
          <Btn>Send Mail</Btn>
        </GetInTouch>
              </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
