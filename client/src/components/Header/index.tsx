import LogoImg from "../../assets/logo.svg";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <img src={LogoImg} alt="logo" />
      <h1>Correios Tracker</h1>

      <div>
        <i className="fas fa-exclamation-circle"></i>
        <p>
          Este site não é oficial e por isso não tem nenhum vínculo com os
          correios. Caso queira utilizar o site oficial para rastrear a sua
          encomenda, basta acessar{" "}
          <a href="https://www.correios.com.br">www.correios.com.br</a>.
        </p>
      </div>
    </Container>
  );
}
