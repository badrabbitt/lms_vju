import PropTypes from "prop-types";
import styles from "./MenuInfor.module.css";

const MenuInfor = ({ className = "" }) => {
  return (
    <button
      className={[styles.menuInfor, className].join(" ")}
      id="button_information"
    >
      <div className={styles.informationFrame} />
      <div className={styles.groupParent}>
        <img className={styles.groupIcon} alt="" src="/group.svg" />
        <input
          className={styles.frameChild}
          placeholder="Information"
          type="text"
        />
      </div>
      <div className={styles.backwardWrapper}>
        <img className={styles.backwardIcon} alt="" src="/backward-1@2x.png" />
      </div>
    </button>
  );
};

MenuInfor.propTypes = {
  className: PropTypes.string,
};

export default MenuInfor;
