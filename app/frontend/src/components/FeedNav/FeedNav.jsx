import styles from "./FeedNav.module.scss";

const FeedNav = (props) => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={props.contentPage && styles.active}>
          <button onClick={props.onChangeToContent}>{props.option1}</button>
        </li>
        <li className={props.projectPage && styles.active}>
          <button onClick={props.onChangeToProject}>{props.option2}</button>
        </li>
      </ul>
    </nav>
  );
};

export default FeedNav;
