import UserInfo from "@/components/common/UserInfo";
import {
  RecipeItemContainer,
  RecipeThumbnail,
  Title,
  RecipeInfoWrap,
} from "./styled";

interface RecipeItemProps {
  imgSrc: string;
  title: string;
  userImg: string;
  userName: string;
  viewCount: number;
  reviewCount: number;
  rate: number;
}

const RecipeItem = ({
  imgSrc,
  title,
  userImg,
  userName,
  viewCount,
  reviewCount,
  rate,
}: RecipeItemProps) => {
  return (
    <RecipeItemContainer>
      <RecipeThumbnail src={imgSrc} alt={title} />
      <Title>{title}</Title>
      <UserInfo img={userImg} name={userName} />
      <RecipeInfoWrap>
        <p>{rate}</p>
        <p>({reviewCount})</p>
        <p>조회수: {viewCount}</p>
      </RecipeInfoWrap>
    </RecipeItemContainer>
  );
};

export default RecipeItem;
