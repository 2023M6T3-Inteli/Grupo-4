import styles from "./projectReduces.module.scss";

const ProjectReduces = (props) => {
//   const user = props.user;
//   const { title, description, tags, video } = props.content;

  return (
    <>
        <div className={styles.bodyProjRed}>
            <div className={styles.divBodyProjRed}>
                <div className={styles.projRed1}>
                    <img src="https://avatars.githubusercontent.com/u/68920578?v=4"></img>
                    <p>Luiz Kama</p>
                    <p>Front-End Dev Teste Pedro asdasd as</p>
                </div>
                <div className={styles.projRed2}>
                    <h1>Discovering Javascript and HTML</h1>
                    <div className={styles.tags}>
                        {["HTML", "JavaScript", "Python", "AWS", "React"].slice(0, 2).map(tag => (
                            <p>{tag}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default ProjectReduces;
