import {
  createContext,
  Dispatch,
  FormEvent,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { api } from "../services/api";

type CorreiosProviderProps = {
  children: ReactNode;
};

type EventType = {
  criacao: string;
  data: string;
  descricao: string;
  detalhe?: string;
  hora: string;
  status: string;
  tipo: string;
  local: string;
  unidade: {
    cidade: string;
    endereco: {
      bairro: string;
      localidade: string;
      logradouro: string;
      numero: string;
      uf: string;
    };
  };
  tipounidade: string;
  destino?: {
    bairro: string;
    cidade: string;
    endereco: {
      bairro: string;
      localidade: string;
      logradouro: string;
      numero: string;
      uf: string;
    };
  }[];
};

type CorreiosContextProps = {
  events: EventType[];
  code: string;
  setCode: Dispatch<SetStateAction<string>>;
  getCorreiosData: (event: FormEvent) => void;
};

const CorreiosContext = createContext<CorreiosContextProps>(
  {} as CorreiosContextProps
);

export function CorreiosProvider({ children }: CorreiosProviderProps) {
  const [events, setEvents] = useState<EventType[]>([]);
  const [code, setCode] = useState("");

  const getCorreiosData = async (event: FormEvent) => {
    event.preventDefault();

    const response = await api.post(`/correios`, {
      code,
      type: "LS",
    });
    const { data } = await response;
    const eventos = data.objeto[0].evento;
    console.log(data.objeto[0].evento);
    setEvents(eventos);
  };

  return (
    <CorreiosContext.Provider
      value={{ events, code, setCode, getCorreiosData }}
    >
      {children}
    </CorreiosContext.Provider>
  );
}

export const useEvents = () => {
  const context = useContext(CorreiosContext);
  return context;
};
