import ProfileCard from "./ProfileCard";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="head">Personal Digital Assistant</div>
      <div className="mainCard">
        <ProfileCard title="Alexa" handle="@alexa123" />
        <ProfileCard title="Cortana" handle="@cortana123" />
        <ProfileCard title="Siri" handle="@siri123" />
      </div>
    </div>
  );
};

export default App;
