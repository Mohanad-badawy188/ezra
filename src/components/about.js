import React from "react";
import styled from "styled-components";
import { Btn, Headers, Texts } from "./Contact";
import Footer from "./footer";
import Header from "./header";
import AboutPic from "../pics/About.png";
import PropTypes from "prop-types";
import FreeDelivery from "../pics/freeDelivery.png";
import cashbacck from "../pics/cashback.png";
import premiumquality from "../pics/premium-quality.png";
import support from "../pics/24-hours-support.png";
const Container = styled.div`
  margin: 200px 250px;
`;
const Wrap = styled.div`
  display: flex;
`;
const LeftSide = styled.div``;
const Img = styled.img`
  border-radius: 6px;
`;
const RightSide = styled.div`
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 400px;
`;
const OurFeatures = styled.div`
  margin-top: 200px;
`;

const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 60px 170px;
  min-width: 1000px;
`;
const Item = styled.div`
  background: #ffffff;
  width: 270px;
  height: 270px;
  box-shadow: 0px 8px 40px rgba(49, 32, 138, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  margin:20px;
`;
const ItemHeader = styled.div`
  font-family: "Josefin Sans";
  font-size: 22px;
  line-height: 26px;
  text-align: center;

  color: #151875;
`;
const ItemText = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;

  text-align: center;

  color: rgba(26, 11, 91, 0.3);
`;
const ItemImgContainer = styled.div`
  display: flex;
`;
const ItemImg = styled.img`
  margin: auto;
`;
const About = () => {
  function Items(props) {
    return (
      <Item>
        <ItemImgContainer>
          <ItemImg src={props.Img} />
        </ItemImgContainer>
        <ItemHeader>{props.Header}</ItemHeader>
        <ItemText>{props.Text}</ItemText>
      </Item>
    );
  }
  Items.propTypes = {
    Img: PropTypes.string,
    Header: PropTypes.string,
    Text: PropTypes.string,
  };
  return (
    <div className="page">
      <Header />
      <Container>
        <Wrap>
          <LeftSide>
            <Img src={AboutPic} />
          </LeftSide>
          <RightSide>
            <Headers>Know About Our Ecomerce Business</Headers>
            <Texts>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
              tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
              vitae lobortis quis bibendum quam.
            </Texts>
            <Btn>Contact us</Btn>
          </RightSide>
        </Wrap>
        <OurFeatures>
          <Headers style={{ textAlign: "center" }}>Our Features</Headers>
          <ItemsContainer>
            <Items
              Img={FreeDelivery}
              Header="24/7 Support"
              Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
            />
            <Items
              Img={cashbacck}
              Header="24/7 Support"
              Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
            />
            <Items
              Img={premiumquality}
              Header="24/7 Support"
              Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
            />
            <Items
              Img={support}
              Header="24/7 Support"
              Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
            />
          </ItemsContainer>
        </OurFeatures>
      </Container>
      <Footer />
    </div>
  );
};

export default About;
