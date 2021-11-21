import { Search } from "../Search";

import DeliveredImg from "../../assets/delivered.svg";

import { Container, TrackerDetails } from "./styles";
import { useEvents } from "../../hooks/useEvents";
import { getImage } from "../../utils/getImage";

export function Tracker() {
  const { events } = useEvents();

  return (
    <Container>
      <Search />

      {events.map((event) => (
        <TrackerDetails key={event.criacao}>
          <img src={DeliveredImg} alt="Entrega realizada" />
          <div>
            <span>{event.descricao}</span>
            <p>
              {event.unidade.endereco.localidade} - {event.unidade.endereco.uf}
            </p>
            {event.detalhe ? <span>{event.detalhe}</span> : ""}
            <p>
              {event.data} {event.hora}
            </p>
          </div>
        </TrackerDetails>
      ))}
    </Container>
  );
}
