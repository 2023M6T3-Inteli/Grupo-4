import styles from "./Search.module.scss";

const Search = (props) => {
  return (
    <div className={styles.content}>
      <div className={styles.inputField}>
        <i class="fa-solid fa-magnifying-glass"></i>
        <input placeholder="Pesquise aqui" type="text" />
      </div>
      <button>
        <i class="fa-solid fa-filter"></i>
      </button>
    </div>
  );
};

export default Search;
