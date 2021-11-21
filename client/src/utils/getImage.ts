import agencyImg from "../assets/agency.svg";
import deliveredImg from "../assets/delivered.svg";
import onWayImg from "../assets/on-way.svg";
import outForDeliverImg from "../assets/out-for-deliver.svg";
import publishedImg from "../assets/published.svg";
import warnImg from "../assets/warn.svg";

export const getImage = (status: number, eventType: string) => {
  // Não entregue
  if (status >= 1 && status <= 348) {
    // Publicado
    if (eventType === "PO") {
      if (status === 1 || status === 9) {
        return publishedImg;
      }
    }

    // Encaminhado
    if (eventType === "RO" || eventType === "DO") {
      if (status === 1 || status === 2) {
        return onWayImg;
      }
    }

    // Saiu para entrega
    if (eventType === "OEC") {
      if (status === 1 || status === 9) {
        return outForDeliverImg;
      }
    }

    // Agency
    if (eventType === "BDE" || eventType === "BDI" || eventType === "BDR") {
      if (
        status === 3 ||
        status === 12 ||
        status === 13 ||
        status === 15 ||
        status === 22
      ) {
        return agencyImg;
      }
    } else if (eventType === "LDI") {
      if (
        status === 1 ||
        status === 3 ||
        status === 4 ||
        status === 11 ||
        status === 13 ||
        status === 14
      ) {
        return agencyImg;
      }
    } else if (eventType === "FC") {
      if (status === 5 || status === 10) {
        return agencyImg;
      }
    } else if (eventType === "CO" && status === 7) {
      return agencyImg;
    } else if (eventType === "PAR" && status === 16) {
      return agencyImg;
    }

    // Entregue
    if (eventType === "BDE" || eventType === "BDI" || eventType === "BDR") {
      if (status === 1 || status === 67 || status === 70) {
        return deliveredImg;
      }
    } else if (eventType === "CO" && status === 8) {
      return deliveredImg;
    }

    return warnImg;
  }
};
