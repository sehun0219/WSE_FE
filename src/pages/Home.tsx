import RecipeItem from "@/components/RecipeItem";

const recipeItemMock = {
  imgSrc: "https://via.placeholder.com/150",
  title: "고등어 조림을 맛있게 만드는 방법",
  userImg: "https://via.placeholder.com/150",
  userName: "김철수",
  viewCount: 10000,
  reviewCount: 100,
  rate: 4.5,
};

const Home = () => {
  return (
    <div>
      <h1></h1>
      <RecipeItem {...recipeItemMock} />
    </div>
  );
};

export default Home;
