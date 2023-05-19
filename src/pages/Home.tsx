import BaseLayout from "@/components/common/BaseLayout";
import Navbar from "@/components/common/Navbar";
import axios from "axios";
import React, { useEffect, useState } from "react";

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
  const userInfo = window.localStorage.getItem("userInfo");
  if (userInfo) {
    console.log(JSON.parse(userInfo));
  }

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
