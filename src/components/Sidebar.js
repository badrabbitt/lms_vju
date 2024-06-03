import Navigation1 from "./Navigation1";
import FrameComponent from "./FrameComponent";
import PropTypes from "prop-types";
import styles from "./Sidebar.module.css";

const Sidebar = ({ className = "" }) => {
  return (
    <div className={[styles.sidebar, className].join(" ")}>
      <div className={styles.sidebarBackground} />
      <div className={styles.actions}>
        <Navigation1 />
      </div>
      <FrameComponent />
      <div className={styles.actions1}>
        <div className={styles.userName}>
          <div className={styles.downloadsIconWrapper}>
            <button className={styles.downloadsIcon} id="button_downloads">
              <div className={styles.downloadButton}>
                <img
                  className={styles.vectorIcon}
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <div className={styles.grades}>Grades</div>
            </button>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.trashHeaderWrapper}>
              <button className={styles.trashHeader} id="button_trash">
                <div className={styles.downloadButton1}>
                  <img
                    className={styles.cloudarrowdownIcon}
                    loading="lazy"
                    alt=""
                    src="/cloudarrowdown.svg"
                  />
                </div>
                <div className={styles.downloads}>Downloads</div>
              </button>
            </div>
            <div className={styles.settingsParent}>
              <button className={styles.settings} id="button_settings">
                <div className={styles.settingsChild} />
                <div className={styles.settingsButton}>
                  <img className={styles.gearIcon} alt="" src="/gear.svg" />
                </div>
                <div className={styles.settings1}>Settings</div>
              </button>
              <div className={styles.downloadsHeader}>
                <button className={styles.frameGroup} id="button_logout">
                  <div className={styles.trashWrapper}>
                    <img
                      className={styles.trashIcon}
                      loading="lazy"
                      alt=""
                      src="/trash.svg"
                    />
                  </div>
                  <div className={styles.trash}>Trash</div>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.user}>
            <div className={styles.frameContainer}>
              <div className={styles.boxarrowrightWrapper}>
                <img
                  className={styles.boxarrowrightIcon}
                  loading="lazy"
                  alt=""
                  src="/boxarrowright.svg"
                />
              </div>
              <div className={styles.logOut}>Log Out</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
};

export default Sidebar;
