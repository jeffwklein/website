import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

html body {
  margin: 0;
  height: 100%;
  width: 100%;
  font-family: 'Roboto Condensed', sans-serif;
}

body {
  background-color: #272932;
}

a {
  color: inherit;
  text-decoration: none;
}

div.outerBody {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  color: #272932;
}

.headshot {
  width: 100%;
  display: flex;
  object-fit: contain;
}

div.mainBody {
  background-image: url(../images/jeff_japan.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 8px;
  display: flex;
  flex: 1;
  width: 95%;
  margin: 20px 30px;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
}

div.topNav {
  background-color: rgba(0, 0, 0, 0.75);
  color: #eee;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  font-size: 3rem;
  font-weight: 800;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 15px 30px;
}

div.contentArea {
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  font-size: 1.4rem;
  display: flex;
  flex: 10;
  flex-direction: row;
  justify-content: center;
}

.leftContent {
  display: flex;
  color: #eee;
  flex: 3;
  background-color: rgba(5, 20, 40, 0.75);
  border-bottom-left-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
}

.contentBox {
  border-bottom: 1px solid rgba(66, 116, 150, 0.2);
  padding: 30px 30px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.9rem;
}

.contentBox:hover {
  background-color: rgba(44, 90, 130, 0.7);
  color: #eee;
}

.contentBox:last-child {
  border-bottom: none;
  border-bottom-left-radius: 8px;
}

.middleContent {
  display: flex;
  color: #eee;
  flex: 2;
  background-color: transparent;
  padding: 30px 30px;
  align-items: flex-start;
}

.rightContent {
  display: flex;
  color: #eee;
  flex: 3;
  border-bottom-right-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
}

.sideLink {
  background-color: rgba(38, 63, 84, 0.85);
  border-bottom: 1px solid rgba(66, 116, 150, 0.2);
  padding: 30px 30px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  font-size: 1.9rem;
}

.sideLink:hover {
  background-color: rgba(44, 90, 130, 0.7);
  color: #eee;
}

.sideLink:first-child {
  border-top: 1px solid rgba(66, 116, 150, 0.2);
  border-top: none;
}

.sideLink:last-child {
  border-bottom: none;
  border-bottom-right-radius: 8px;
}
`;

export default GlobalStyle;
