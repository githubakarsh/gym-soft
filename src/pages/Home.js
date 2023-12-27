import { useNavigate } from "react-router-dom";
import { CardComponent } from "../components/CardComponent";
import { useHelmet } from '../hooks/UseHelmet';

export const Home = () => {
    useHelmet("Home");
  const navigate = useNavigate();
  const onClickNavigate = (path) => navigate(path);
  return (
    <div className="home-page-navigation-container">
      <div className="home-page-widgets">
        <CardComponent
          title="Admin"
          onbuttonClick={() => onClickNavigate("/admin")}
          buttonName="Go"
        />
      </div>
      <div className="home-page-widgets">
        <CardComponent
          title="Profile"
          onbuttonClick={() => onClickNavigate("/profile")}
          buttonName="Go"
        />
      </div>
      <div className="home-page-widgets">
        <CardComponent
          title="Diet Planner"
          onbuttonClick={() => onClickNavigate("/diet-planner")}
          buttonName="Go"
        />
      </div>
      <div className="home-page-widgets">
        <CardComponent
          title="Day Planner"
          onbuttonClick={() => onClickNavigate("/day-planner")}
          buttonName="Go"
        />
      </div>
    </div>
  );
};
