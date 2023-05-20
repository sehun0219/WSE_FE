import { createGlobalStyle } from "styled-components";
import Router from "./Router";
import { UserProvider } from "@/store/UserContext";
const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    font-weight: 300;
    font-family: 'Source Sans Pro', sans-serif;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  /* 컨테이너 스타일 */
  .container {
    max-width: 1200px; /* 콘텐츠 최대 너비 */
    margin: 0 auto; /* 중앙 정렬 */
    padding: 0 15px; /* 양 옆 패딩 */
  }

  /* 그리드 레이아웃 */
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* 250px이상의 공간을 찾아 그리드 아이템을 배치, 가용 공간이 충분하면 여러 개의 아이템 배치 */
    gap: 15px; /* 그리드 아이템 간격 */
  }

  /* 플렉스 박스 레이아웃 */
  .flex {
    display: flex;
    align-items: center; /* 수직 중앙 정렬 */
    justify-content: space-between; /* 수평 방향으로 요소들 사이에 동일한 간격 배치 */
  }
`;

const App = () => {
  return (
    <UserProvider>
      <Router />
      <GlobalStyle />
    </UserProvider>
  );
};

export default App;
