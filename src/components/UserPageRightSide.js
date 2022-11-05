import React, { useState } from "react";
import { PhotoCamera } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { IconButton } from "@mui/material";
import styled from "styled-components";
import { UserInfo } from "./userContext";

const Container = styled.div`
  min-height: 70vh;
  padding: 35px;
`;
const UserData = styled.div`
  flex: 2;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-left: 10px;
`;

const UserName = styled.div`
  font-size: 25px;
  font-weight: bold;
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
function UserPageRightSide() {
  const locations = useLocation();
  const userId = locations.pathname.split("/")[2];

  const user = UserInfo();
  const TOKEN = user.accessToken;
  const veiw = user.foundUser;
  const [userData, setUserData] = useState(veiw);

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
      if (res.data) {
        setUserData(res.data);
        location.reload();
      } else {
        console.log("object");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const accessTokens = TOKEN;
  const foundUser = userData;
  const newUserData = { foundUser: foundUser, accessToken: accessTokens };

  localStorage.setItem("user", JSON.stringify(newUserData));

  return (
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
                placeholder={userData.name}
              />{" "}
            </EditItem>
            <EditItem>
              {" "}
              <EditName>Email </EditName>{" "}
              <EditInput
                onChange={(e) => setEmail(e.target.value)}
                placeholder={userData.email}
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
                  component="label">
                  <input hidden accept="image/*" type="file" />
                  <PhotoCamera />
                </IconButton>
              </UpdateBtn>
            </ImgAndButton>
            <UploadBtn onClick={updateUser}>Upload</UploadBtn>
          </UploadAll>
        </EditContainer>
      </Container>
    </UserData>
  );
}

export default UserPageRightSide;
