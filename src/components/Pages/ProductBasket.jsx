import CapitalMarket from "../CapitalMarket";
import Insurance from "../Insurance";
import MutualFunds from "../MutualFunds";
import Pms from "../Pms";

const MutualFundsSection = () => {
  return (
    <>
      <MutualFunds />
      <CapitalMarket/>
      <Insurance/>
      <Pms/>
    </>
  );
};

export default MutualFundsSection;
