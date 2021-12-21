import { Search } from '../Search';
import { Container, TrackerDetails } from './styles';
import { useEvents } from '../../hooks/useEvents';
import { getImage } from '../../utils/getImage';
import { Spinner } from '../Spinner';

export function Tracker() {
  const { events, showSpinner } = useEvents();

  return (
    <Container>
      <Search />

      {showSpinner ? (
        <Spinner />
      ) : (
        events.map(event =>
          event.categoria ? (
            event.categoria
          ) : (
            <TrackerDetails key={event.criacao}>
              <img
                src={getImage(Number(event.status), event.tipo)}
                alt='Status de entrega'
              />
              <div>
                <span>{event.descricao}</span>
                <p>
                  {event.unidade?.endereco?.localidade} -{' '}
                  {event.unidade?.endereco?.uf}
                </p>
                {/* Se a opção destino existir */}
                {event.destino ? (
                  <p>
                    para {event.destino[0].endereco?.localidade} -{' '}
                    {event.destino[0]?.endereco?.uf}
                  </p>
                ) : (
                  ''
                )}

                {/* Se a opção detalhe existir */}
                {event.detalhe ? <span>{event.detalhe}</span> : ''}
                <p>
                  {event.data} {event.hora}
                </p>
              </div>
            </TrackerDetails>
          ),
        )
      )}
    </Container>
  );
}
