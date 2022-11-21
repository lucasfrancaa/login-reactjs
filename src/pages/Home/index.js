import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";

const Home = () => {
  const { sair } = useAuth();
  const navigate = useNavigate();
  
  return (
    <C.Container>
      <C.Title>home</C.Title>
      <Button Text="sair" onClick={() => [sair(), navigate("/")]}>
        sair
      </Button>
    </C.Container>
  );
};

export default Home;