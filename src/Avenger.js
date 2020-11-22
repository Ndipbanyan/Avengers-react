const Avenger = ({ img, act, name }) => {
  return (
    <div
      style={{
        background: "#ffffee",
        padding: "1rem",
        width: "20rem",
        borderRadius: "1rem",
        margin: "1rem",
      }}
    >
      <img src={img} alt={act} style={{ width: "20rem" }} />
      <h3>Name:{name}</h3>
      <h4>Act:{act}</h4>
    </div>
  );
};

export default Avenger