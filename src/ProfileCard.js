import "./ProfileCard.css";

const ProfileCard = ({title,handle}) => {
  const cardStyle = {
    backgroundColor: "#f2f2f2",
    padding: "10px",
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    margin: "10px",
  };
//   const { title, handle } = props;
  return (
    <>
      <div className="card" style={cardStyle}>
        <h4>title is {title} </h4>
        <h4> handle is {handle}</h4>
      </div>
    </>
  );
};

export default ProfileCard;
