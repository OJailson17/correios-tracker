import agencyImg from "../assets/agency.svg";
import deliveredImg from "../assets/delivered.svg";
import onWayImg from "../assets/on-way.svg";
import outForDeliverImg from "../assets/out-for-deliver.svg";
import publishedImg from "../assets/published.svg";
import warnImg from "../assets/warn.svg";

export const getImage = (status: string) => {
  const statusNum = Number(status);
  return statusNum;
};
