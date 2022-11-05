import React, { useEffect } from "react";
import styled from "styled-components";
import { Email, LocationOn, PermIdentity, PostAdd } from "@mui/icons-material";
import { format } from "timeago.js";
import User from "./userPage";
import { UserInfo } from "./userContext";

const UserInfos = styled.div`
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
function UserPageLeftSide() {
  const user = UserInfo().foundUser;
  console.log(user);

  return (
    <UserInfos>
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
    </UserInfos>
  );
}

export default UserPageLeftSide;
