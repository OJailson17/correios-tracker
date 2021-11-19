import { Container, SearchBar } from "./styles";

export function Search() {
  return (
    <Container>
      <h2>Rastreamento</h2>
      <SearchBar>
        <input type="text" placeholder="Insira o código da encomenda" />
        <div className="search-btn" role="button">
          <i className="fas fa-search"></i>
        </div>
      </SearchBar>
      <span>Objeto: OP824609495BR</span>
    </Container>
  );
}
