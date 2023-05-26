import styles from "./contentReduced.module.scss";

const ContentReduced = (props) => {
  return (
    <>
        <div className={styles.bodyContRed}>
            <div className={styles.bodyContRed}>
                <div className={styles.contRed1}>
                    <div>
                        <h1>Mobile Application Project</h1>
                    </div>
                    <div className={styles.contRed2}>
                        <div>
                            <p>Active</p>
                        </div>
                    </div>
                </div>
                <div className={styles.tags}>
                    {["HTML", "JavaScript", "Python", "AWS", "React"].slice(0, 3).map(tag => (
                        <p>{tag}</p>
                    ))}
                </div>
            </div>
        </div>
    </>
  );
};

export default ContentReduced;

