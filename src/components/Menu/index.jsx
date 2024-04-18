import styles from "./menu.module.scss";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const Menu = () => {
  const data = useSelector((state) => state.dictionary.topics);

  return (
    <div className={styles.wrapper}>
      <nav>
        <ul>
          {data &&
            data.map((el) => (
              <NavLink to={`/Education/${el}`} key={el}>
                <li>{el}</li>
              </NavLink>
            ))}

          <NavLink to="/Recent">
            {" "}
            <li>Recent</li>{" "}
          </NavLink>
          <NavLink to="/All">
            {" "}
            <li>All in progress</li>{" "}
          </NavLink>
          <NavLink to="/Know">
            {" "}
            <li>Already know</li>{" "}
          </NavLink>
          <NavLink to="/AddToDictionary">
            {" "}
            <li>+</li>{" "}
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};