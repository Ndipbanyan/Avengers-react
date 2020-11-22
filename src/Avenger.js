const Avenger = ({ img, act, name }) => {
  return (
    <div className="avengers">
   
      <img src={img} alt={act} style={{ width: "20rem" }} />
      <h3>Name:{name}</h3>
      <h4>Act:{act}</h4>
    </div>
  );
};

export default Avenger