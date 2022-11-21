import React, { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import * as C from "./styles";
import { Link, useNavigate} from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Cadastrar = () => {
  
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { cadastrar } = useAuth();

  const handleCadastrar = () => {
    if (!email | !emailConf | !senha) {
      setError("preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("os e-mails não são iguais");
      return;
    }

    const res = cadastrar(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("usuário cadastrado com sucesso!");
    navigate("/");
  };


  return (
    <C.Container>
      <C.Label>cadastrar</C.Label>
      <C.Content>
        <Input
          type="email"
          placeholder="digite seu e-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="confirme seu e-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="cadastrar" onClick={handleCadastrar} />
        <C.LabelSignin>
          já tem uma conta?
          <C.Strong>
            <Link to="/">&nbsp;entre</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Cadastrar;