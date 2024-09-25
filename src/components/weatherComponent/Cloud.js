import classes from "./Weather.module.css";
const Cloud = () => {
  return (
    <div className={classes.cloud}>
      <div className={classes.cloud_part}></div>
      <div className={classes.cloud_part}></div>
      <div className={classes.cloud_part}></div>
    </div>
  );
};

export default Cloud;
