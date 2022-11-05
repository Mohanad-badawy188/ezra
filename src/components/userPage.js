import React, { useEffect, useState } from "react";
import styled from "styled-components";

import "./App.css";

import Header from "./header";
import Footer from "./footer";
import UserPageLeftSide from "./userPageLeftSide";
import UserPageRightSide from "./UserPageRightSide";

const Container = styled.div`
  min-height: 70vh;
  padding: 35px;
`;
const EditUser = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
`;
const EditTitle = styled.div`
  font-size: 45px;
  font-weight: bold;
`;

const UserPage = styled.div`
  display: flex;
  margin-top: 20px;
`;

function User() {
  return (
    <div>
      <Header />
      <Container>
        <EditUser>
          <EditTitle>Edit Profile</EditTitle>
        </EditUser>
        <UserPage>
          <UserPageLeftSide />
          <UserPageRightSide />
        </UserPage>
      </Container>
      <Footer />
    </div>
  );
}

export default User;
