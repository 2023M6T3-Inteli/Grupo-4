import { useState , useRef} from 'react';
import styles from './modalUpdatePerfil.module.scss';
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

const ModalUpdatePerfil = (user) => {

    const tagInputRef = useRef(null);
    const [tags, setTags] = useState([]);

    const addTag = (event) => {
        event.preventDefault();

        if (tagInputRef.current.value) {
            setTags([...tags, tagInputRef.current.value]);
            tagInputRef.current.value = "";
        }
    };

    const removeTag = (event) => {
        event.preventDefault();

        const tag = event.target.parentElement.firstChild.innerHTML;

        setTags(tags.filter((item) => item !== tag));
    };

    user = user.user;

    return (
        <div className={styles.bodyModal}>
            <div>
                <h1>Name: </h1>
                <input placeholder='Name' value={user.name}></input>
            </div>
            <div>
                <h1>Area: </h1>
                <input placeholder='Name' value={user.area}></input>
            </div>
            <div>
                <h1>Email: </h1>
                <input placeholder='Name' value={user.email}></input>
            </div>
            {/* <div className={styles.tagsContainer}>
                <h4>TAGS</h4>
                <div>
                <input type="text" ref={tagInputRef} />
                <button type="button" onClick={addTag}>
                    <AiOutlinePlus size={25} fill="var(--neutral-600)" />
                </button>
                </div>
            </div>

          {user.tags.length > 0 && (
            <div className={styles.tags}>
              {user.tags.map((tag, index) => (
                <div key={index}>
                  <p>{tag.name}</p>
                  <AiOutlineClose
                    size={20}
                    fill="var(--neutral-50)"
                    onClick={removeTag}
                  />
                </div>
              ))}
            </div>
          )} */}
        </div>
    );
}


export default ModalUpdatePerfil;