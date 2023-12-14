import React from "react";
import styled from "styled-components";
import bgImg from "./background2h.svg"


const Intro = () => {

    return (
        <MainContainer>
        <Heading>Remote Health Monitoring</Heading>
            <Info>Our health monitoring platform provides users with a seamless and secure healthcare experience. After a quick signup, users have to input basic health information, securely stored on a decentralized ledger. Leveraging blockchain, users can control data sharing through smart contracts. Regular vital sign inputs on the Measurements Page ensure real-time monitoring. The platform streamlines prescriptions, appointments, and offers a unique Data Monetization feature. Users can sell or license their data, earning rewards for participation. The Health Analysis Page delivers personalized insights and recommendations. The User Dashboard serves as a central hub for easy access to health data, fostering proactive wellness. Our platform envisions a future where healthcare is personalized, accessible, and empowered by innovative technology.</Info>
        </MainContainer>
    );
};

export default Intro;


const MainContainer = styled.div`
  background-color: #0f2c4c;
  height: 500px;
  background: #0f2c4c url(${bgImg}) no-repeat center/cover;

  @media (max-width: 768px) {
    padding: 5%; /* Adjust spacing for smaller screens */
  }
`;
const Heading = styled.div`

font-size: 50px;
font-weight: 600;
line-height: 72px;
text-align: center;

color:#FFFFFF;
margin-bottom: 70px;

@media (max-width: 600px) {
  font-size: 43px;
  }

`;
const Info = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 27px;
  text-align: justify;
  color: #ffffff;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 768px) {
   
    font-size: 18px;
  font-weight: 400;
  height: auto;
  }
`;