// import classes from "./Weather.module.css";

const RecentSearch = ({ searches, onSelectCity }) => {
  return (
    <div>
      <h3 style={{ color: "white" }}>
        Recent Searches <hr style={{ color: "white", fontWeight: "800" }} />
      </h3>
      <ul>
        {searches.map((city, index) => (
          <li style={{ listStyleType: "none" }} key={index}>
            <button onClick={() => onSelectCity(city)}>{city}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentSearch;
