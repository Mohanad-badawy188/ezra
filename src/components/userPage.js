import React, { useState } from "react";
import styled from "styled-components";
import { format } from "timeago.js";
import "./App.css";
import {
  Email,
  LocationOn,
  PermIdentity,
  PhotoCamera,
  PostAdd,

} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { IconButton } from "@mui/material";

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
const EditButton = styled.button`
  padding: 15px 30px;
  border: none;
  background-color: teal;
  color: white;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: rgb(15, 160, 130);
  }
`;
const UserPage = styled.div`
  display: flex;
  margin-top: 20px;
  
`;
const UserInfo = styled.div`
  flex: 1;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
const UserHeaderInfo = styled.div`
  display: flex;
`;
const UserData = styled.div`
  flex: 2;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-left: 10px;
`;

const UserImg = styled.img`
  height: 45px;
  width: 45px;
  padding: 20px;
  border-radius: 50%;
  object-fit: cover;
`;
const UserDetails = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
`;
const UserName = styled.div`
  font-size: 25px;
  font-weight: bold;
`;
const UserJob = styled.div`
  margin-top: 5px;
  font-size: 17px;
  color: gray;
  text-align: center;
`;

const UserAllDetails = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const UserDet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.8);
  margin-bottom: 25px;
  margin-top: 25px;
`;
const Icon = styled.div`
  margin-right: 10px;
`;

const EditContainer = styled.div`
  margin-top: 35px;
  display: flex;
  justify-content: space-between;
`;
const EditItem = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;
const EditName = styled.div``;
const EditInput = styled.input`
  padding: 15px;
  margin: 15px;
  margin-left: 0;
  border: none;
  border-bottom: 1px solid lightgray;

  
`;

const EditItems = styled.div``;
const ImgAndButton = styled.div`
  display: flex;
  align-items: center;
`;
const EditImg = styled.img`
  height: 120px;
  border-radius: 5%;
`;
const UpdateBtn = styled.div`
  height: 30px;
  border: none;
  background: white;
  margin-left: 15px;
`;
const UploadBtn = styled.button`
  font-size: 17px;
  border: none;
  height: 35px;
  width: 200px;

  cursor: pointer;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  &:hover {
    background-color: blue;
  }
`;
const UploadAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
`;

function User() {
  const location = useLocation();
  const userId = location.pathname.split("/")[2];
  const TOKEN = JSON.parse(localStorage.getItem("user")).accessToken;
  const veiw = JSON.parse(localStorage.getItem("user")).foundUser;
  console.log(veiw);
  const [user, setUser] = useState(veiw);

  const [FullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const updateUser = async () => {
    console.log(TOKEN);
    try {
      const res = await axios({
        method: "put",
        url: `http://localhost:5000/api/users/${userId}`,
        headers: { token: `Bearer ${TOKEN}` },
        data: { name: FullName, email },
      });
      setUser(res.data);
      console.log(res.data);
    } catch {}
  };
  const accessTokens = TOKEN;
  const foundUser = user;
  const existing = { foundUser: foundUser, accessToken: accessTokens };
  console.log(existing);

  localStorage.setItem("user", JSON.stringify(existing));

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <Container>
      <EditUser>
        <EditTitle>Edit Profile</EditTitle>
      </EditUser>
      <UserPage>
        <UserInfo>
          <UserHeaderInfo>
            <UserImg
              src={
                user.img ||
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAMAAADQmBKKAAAAMFBMVEXk5ueutLfGycvn6eqrsbS0ubzV2NqnrbHh4+S/w8bS1dfCxsm7wMO3vL/IzM7N0dMI2KZsAAADPElEQVR4nO2b247jIAxAIQZCLjT//7cLaaftdpJiu7WT1XKklUbahznCNgGbMabRaDQajUaj0Wg0Go3Gfw5A/nf/6XAA4thNc0ppHi4hHuwEJsyuYAvrD104zgnMxd9cHjiXxmOUss4vmyu9PWKVIPh+U2ddptloG0G3r7MGblQ1ApO2o/Wk1CkaQfQ1n2w0qBmhfNZE0hJC+WSjSWeNoJo/dyOVPIIO65ONgrwRhLf1/koUFzKe4iNfanDBB6zQSwctkgKWSbJClIy+IpzXkaiThbykECzUiGUjyUIDso7wfh2pGVTwcj7Umr8tUZATmhk+1l3kYsbxsXYWEwqciGWkfGDkCYkVPn2bvglJbdYwMIWkbiC8IstCy9mEpOoe0tmETrdCp8uh01XZ6fahs+3Up/uWMU7UK4IXD9ZGJHgeggtLSPDEyEsiMR/ercNK3jo4p3zRexmnzkRvrgamk93tGd0PUR36Eon3h6gdNLk72Q/n6zFSgqYQsIJF96mVOufYNFKbdgBue9SbdRQjxDRIvsCejOp5pJY/Pwzvq1/s6rMLhDdDKpfiAVPg2PU7U2k3qs+Ar0qmsxtze78c+JQghtQ/nJzr3RCOWZ2HE4RlmpP3Pg3dcvTbj5vSE4ebmBhDCMvKGEKM8Rit/CuzSTd7f30Uc30isyaTT9MSo+pjovXJ0Gz7naq3Lv9PGko+KTjl3zFO1u28i/m7/t08RuGSyyU1/H4y9MbJpkUudmBCh5d5SM0yO1NenIQ+Kr4oCezdOXMsfbr55HT56tcW3n7acUr2i0o5WB+szkPpS4GDONBTeVvJf+NWBIGXyptGn3f3wDCb5XtK9rNMQj7uIvHJYRvGLyTzK/3A92GN6auwL5AwCazPauRZiUTv3lGMTuVTio28RNxRFNaI+kKFO4nCG9FaNUButtKNaJs2qbPJNCJ82LjDVSJ4H+7kkAa+gwQKAStge7Scp3g8sLNPJR1sXgt9UjdBja60MqiAySLiLOMzMPu10h50A/HZZz4WYIIYoetsinehasyEjx2/qQop1lihr0UMlBeoXviKRV+oHYvyLuR0qf1xTJw6XcZqEilT82k0Go1G41/jD2n0KSSHkfO7AAAAAElFTkSuQmCC"
              }
            />

            <UserDetails>
              <UserName>{user.name}</UserName>
            </UserDetails>
          </UserHeaderInfo>
          <UserAllDetails>
            <UserName>Account Details</UserName>
            <UserDet>
              <Icon>
                <PermIdentity />
              </Icon>{" "}
              {user.name}{" "}
            </UserDet>
            <UserDet>
              <Icon>
                <PostAdd />
              </Icon>{" "}
              {format(user.createdAt)}
            </UserDet>
            <UserDet>
              <UserName>Contact Info</UserName>{" "}
            </UserDet>
            <UserDet>
              <Icon>
                <Email />
              </Icon>{" "}
              {user.email}
            </UserDet>
            <UserDet>
              <Icon>
                <LocationOn />
              </Icon>{" "}
              cairo | Egypt
            </UserDet>
          </UserAllDetails>
        </UserInfo>

        <UserData>
          <Container>
            <UserName>Edit </UserName>

            <EditContainer>
              <EditItems>
                <EditItem>
                  {" "}
                  <EditName>Full Name </EditName>{" "}
                  <EditInput
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={user.name}
                  />{" "}
                </EditItem>
                <EditItem>
                  {" "}
                  <EditName>Email </EditName>{" "}
                  <EditInput
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={user.email}
                  />{" "}
                </EditItem>

                <EditItem>
                  {" "}
                  <EditName>Address </EditName>{" "}
                  <EditInput placeholder=" cairo | Egypt" />{" "}
                </EditItem>
              </EditItems>
              <UploadAll>
                <ImgAndButton>
                  <EditImg
                    src={
                      user.img ||
                      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAMAAADQmBKKAAAAMFBMVEXk5ueutLfGycvn6eqrsbS0ubzV2NqnrbHh4+S/w8bS1dfCxsm7wMO3vL/IzM7N0dMI2KZsAAADPElEQVR4nO2b247jIAxAIQZCLjT//7cLaaftdpJiu7WT1XKklUbahznCNgGbMabRaDQajUaj0Wg0Go3Gfw5A/nf/6XAA4thNc0ppHi4hHuwEJsyuYAvrD104zgnMxd9cHjiXxmOUss4vmyu9PWKVIPh+U2ddptloG0G3r7MGblQ1ApO2o/Wk1CkaQfQ1n2w0qBmhfNZE0hJC+WSjSWeNoJo/dyOVPIIO65ONgrwRhLf1/koUFzKe4iNfanDBB6zQSwctkgKWSbJClIy+IpzXkaiThbykECzUiGUjyUIDso7wfh2pGVTwcj7Umr8tUZATmhk+1l3kYsbxsXYWEwqciGWkfGDkCYkVPn2bvglJbdYwMIWkbiC8IstCy9mEpOoe0tmETrdCp8uh01XZ6fahs+3Up/uWMU7UK4IXD9ZGJHgeggtLSPDEyEsiMR/ercNK3jo4p3zRexmnzkRvrgamk93tGd0PUR36Eon3h6gdNLk72Q/n6zFSgqYQsIJF96mVOufYNFKbdgBue9SbdRQjxDRIvsCejOp5pJY/Pwzvq1/s6rMLhDdDKpfiAVPg2PU7U2k3qs+Ar0qmsxtze78c+JQghtQ/nJzr3RCOWZ2HE4RlmpP3Pg3dcvTbj5vSE4ebmBhDCMvKGEKM8Rit/CuzSTd7f30Uc30isyaTT9MSo+pjovXJ0Gz7naq3Lv9PGko+KTjl3zFO1u28i/m7/t08RuGSyyU1/H4y9MbJpkUudmBCh5d5SM0yO1NenIQ+Kr4oCezdOXMsfbr55HT56tcW3n7acUr2i0o5WB+szkPpS4GDONBTeVvJf+NWBIGXyptGn3f3wDCb5XtK9rNMQj7uIvHJYRvGLyTzK/3A92GN6auwL5AwCazPauRZiUTv3lGMTuVTio28RNxRFNaI+kKFO4nCG9FaNUButtKNaJs2qbPJNCJ82LjDVSJ4H+7kkAa+gwQKAStge7Scp3g8sLNPJR1sXgt9UjdBja60MqiAySLiLOMzMPu10h50A/HZZz4WYIIYoetsinehasyEjx2/qQop1lihr0UMlBeoXviKRV+oHYvyLuR0qf1xTJw6XcZqEilT82k0Go1G41/jD2n0KSSHkfO7AAAAAElFTkSuQmCC"
                    }
                  />

                  <UpdateBtn>
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="label"
                    >
                      <input
                        hidden
                        accept="image/*"
                        type="file"
                        onChange={handleChange}
                      />
                      <PhotoCamera />
                    </IconButton>
                  </UpdateBtn>
                </ImgAndButton>
                <UploadBtn onClick={updateUser}>Upload</UploadBtn>
              </UploadAll>
            </EditContainer>
          </Container>
        </UserData>
      </UserPage>
    </Container>
  );
}

export default User;
