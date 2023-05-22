import BaseLayout from "@/components/common/BaseLayout";
import Navbar from "@/components/common/Navbar";

const Home = () => {
  return (
    <BaseLayout>
      <header>
        <Navbar />
      </header>
      {/* <RecipeItem {...recipeItemMock} /> */}
      <div className="container">
        <div className="grid">
          <div className="flex">{/* ...콘텐츠... */}</div>
          <div className="flex">{/* ...콘텐츠... */}</div>
          {/* ... */}
        </div>
      </div>
    </BaseLayout>
  );
};

export default Home;
