import styles from "./FeedNav.module.scss";

const FeedNav = (props) => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={props.contentPage && styles.active}>
          <button onClick={props.onChangeToContent}>CONTENTS</button>
        </li>
        <li className={props.projectPage && styles.active}>
          <button onClick={props.onChangeToProject}>PROJECTS</button>
        </li>
      </ul>
    </nav>
  );
};

export default FeedNav;
