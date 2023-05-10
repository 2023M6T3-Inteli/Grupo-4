import styles from "./ContentCard.module.scss";

const ContentCard = (props) => {
  const user = props.user;
  const { title, description, tags, video } = props.content;

  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <h1>{title}</h1>
        <div className={styles.userBx}>
          <div className={styles.imgBx}>
            <img src={user.picture} alt="user_profile" />
          </div>
          <div className={styles.userInfos}>
            <h4>{user.name}</h4>
            <p>{user.area}</p>
          </div>
        </div>
      </div>
      <main>
        <p className={styles.description}>{description}</p>
        {video && (
            <iframe
              src={video}
              title="YouTube video player"
              frameborder="0"
            ></iframe>
        )}
        <div className={styles.tags}>
          {tags.map(tag => (
            <p>{tag}</p>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ContentCard;
