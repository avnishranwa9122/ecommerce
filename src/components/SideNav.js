import classes from "./SideNav.module.css";

const SideNav = () => {
  return (
    <>
      <div className={classes.nav}>
        <ul>
          <li>Home</li>
          <li>Mobile</li>
          <li>Electronics</li>
          <li>Fashion</li>
        </ul>
      </div>
    </>
  );
};
