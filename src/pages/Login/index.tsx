import Button from "../../components/Button";
import Input from "../../components/Input";
import { defaultValues, IFormLogin } from "./types";

import {
  Container,
  ContainerCadastro,
  ContainerLogin,
  EsqueceuText,
  Title,
} from "./styles";

import logo from "../../assets/logo.png";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().email("Email inválido!").required("Campo obrigatório!"),
    password: yup
      .string()
      .min(6, "No mínimo 6 caracteres")
      .required("Campo obrigatório!"),
  })
  .required();

const Login = () => {
  const {
    control,
    formState: { errors, isValid },
  } = useForm<IFormLogin> ({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues,
    reValidateMode: "onChange",
  });

  return (
    <>
      <Container>
        <ContainerCadastro>
          <img src={logo} />
        </ContainerCadastro>
        <ContainerLogin>
          <Title>Login</Title>
          <Input
            name="email"
            placeholder="Email"
            control={control}
            errorMesage={errors?.email?.message}
          />
          <Input
            name="password"
            placeholder="Senha"
            control={control}
            errorMesage={errors?.password?.message}
          />
          {isValid === true ? <Button title="Entrar" variant="entrar" /> : null}
          

          <EsqueceuText>Equeceu sua senha?</EsqueceuText>
        </ContainerLogin>
      </Container>
    </>
  );
};

export default Login;
