import BaseLayout from "@/components/common/BaseLayout";
import Navbar from "@/components/common/Navbar";

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
    <BaseLayout>
      <header>
        <Navbar />
      </header>
      {/* <RecipeItem {...recipeItemMock} /> */}
    </BaseLayout>
  );
};

export default Home;
