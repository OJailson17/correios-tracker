import { useEvents } from "../../hooks/useEvents";
import { Container, SearchBar } from "./styles";

export function Search() {
  const { code, setCode, getCorreiosData } = useEvents();

  return (
    <Container>
      <h2>Rastreamento</h2>
      <SearchBar onSubmit={getCorreiosData}>
        <input
          type="text"
          placeholder="Insira o código da encomenda"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
        <button className="search-btn" type="submit">
          <i className="fas fa-search"></i>
        </button>
      </SearchBar>
      {code ? <span>Objeto: {code}</span> : ""}
    </Container>
  );
}
