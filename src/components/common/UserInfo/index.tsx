import { UserInfoWrap, UserThumbnail, UserName } from "./styled";

interface UserInfoProps {
  img: string;
  name: string;
}

const UserInfo = ({ img, name }: UserInfoProps) => {
  return (
    <UserInfoWrap>
      <UserThumbnail src={img} alt={name} />
      <UserName>{name}</UserName>
    </UserInfoWrap>
  );
};

export default UserInfo;
