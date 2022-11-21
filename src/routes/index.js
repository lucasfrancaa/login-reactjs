import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Entrar from "../pages/Entrar";
import Cadastrar from "../pages/Cadastrar";
import useAuth from "../hooks/useAuth";

const Private = ({ Item }) => {
    const { logado } = useAuth;
  
    return logado > 0 ? <Item /> : <Entrar />;
  };

const RoutesApp = () => {
  return (
    <BrowserRouter>
    <Fragment>
        <Routes>
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route path="/" element={<Entrar />} />
          <Route exact path="/cadastrar" element={<Cadastrar />} />
          <Route path="*" element={<Entrar />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;