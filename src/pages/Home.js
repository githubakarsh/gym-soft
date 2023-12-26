import { useNavigate } from "react-router-dom";
import { CardComponent } from "../components/CardComponent";


export const Home = () => {
    const navigate = useNavigate();
    const onClickNavigate = (path) => navigate(path);
    return <div className="home-page-navigation-container">
        <CardComponent title="Admin" onbuttonClick={()=>onClickNavigate("/admin")} buttonName="Go"/>
        <CardComponent title="Profile" onbuttonClick={()=>onClickNavigate("/profile")} buttonName="Go"/>
        <CardComponent title="Diet Planner" onbuttonClick={()=>onClickNavigate("/diet-planner")} buttonName="Go"/>
        <CardComponent title="day-planner" onbuttonClick={()=>onClickNavigate("/day-planner")} buttonName="Go"/>
    </div>;
};