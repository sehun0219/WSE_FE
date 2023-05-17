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
  // /ping api 호출
  // 1. ping을 서버주소에 요청한다.
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const fetchPong = async () => {
  //     try {
  //       const response = await fetch("http://localhost:8080/ping");
  //       const data = await response.json();
  //       setUser(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchPong();
  // }, []);

  // axios 활용
  // const getPong = axios
  //   .get("http://localhost:8080/ping")
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // console.log(getPong);

  // const getPong = async (req: Request, res: Response) => {
  //   try {
  //     const response = await axios.get("http://localhost:8081/ping");
  //     console.log(response);
  //     return response;
  //   } catch (err) {
  //     return res.status(400).send("error");
  //   }
  // };
  // getPong("ping", "pong");

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
