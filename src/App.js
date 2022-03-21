import Header from "./components/Header";
import Nav from "./components/Nav";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import User from "./pages/User";
import Home from "./pages/Home";
import Rank from "./pages/Rank";

function App() {
  return (
    <Main>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:nickname" element={<User />} />
        <Route path="/rank" element={<Rank />} />
      </Routes>
    </Main>
  );
}

export default App;

const Main = styled.div`
  background-color: #e9e9e9;
  /* overflow-x: hidden; */
`;
