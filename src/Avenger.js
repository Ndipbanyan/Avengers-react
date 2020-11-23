import './index.css'
const Avenger = ({ img, act, name }) => {
  return (
    <div className="avengers">
      <img src={img} alt={act} style={{ width: "20rem" }} />
      <h3>
        Name: <span>{name}</span>
      </h3>
      <h4>Act: <span>{act}</span></h4>
    </div>
  );
};

export default Avenger