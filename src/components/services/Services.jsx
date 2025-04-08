import ComputerModelContainer from "./computer/ComputerModelContainer";
import "./services.css";

const Services = () => {
  return (
    <div className="services">
      <div className="sSection left"></div>
      <div className="sSection right">
        <ComputerModelContainer />
      </div>
    </div>
  );
};

export default Services;
