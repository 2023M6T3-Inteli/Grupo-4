import React, { useState } from 'react';
import styles from "../styles/NewContent.module.scss";
import { IoIosArrowBack } from "react-icons/io";

const NewContent = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [links, setlinks] = useState([{ name: '', count: 0 }]);
  const [tags, setTags] = useState(['']);
  const [image, setImage] = useState(null);

  
  const handleImageChange = event => {
    setImage(URL.createObjectURL(event.target.files[0]));
    }

  const handleAddlinks = () => {
    setlinks([...links, { name: '', count: 0 }]);
  };

  const handlelinksChange = (index, field, value) => {
    const newlinks = [...links];
    if (field === 'name') {
      newlinks[index][field] = value;
    } else if (field === 'count') {
      newlinks[index][field] = parseInt(value, 10);
    }
    setlinks(newlinks);
  };

  const handleAddTag = () => {
    setTags([...tags, '']);
  };

  const handleTagChange = (index, value) => {
    const newTags = [...tags];
    newTags[index] = value;
    setTags(newTags);
  };




//pagina

return (


    <div className={styles.container}>
    <div className={styles.ground}>

    <header className={styles.header}>
      <button >
        <IoIosArrowBack size={25} color="white" />
      </button>
      <h3> CREATE NEW CONTENT </h3>
    </header>

      <div className={styles.title}>
         <input value={title} placeholder='TITLE' onChange={(e) => setTitle(e.target.value)} />
       </div>
      
      <div className={styles.description}>
         <textarea value={description} placeholder='DESCRIPTION' onChange={(e) => setDescription(e.target.value)} />
       </div>

      <div className={styles.media}>
      <div className={styles.quadradopontilhado}>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {image && <img src={image} alt="User upload" />}
        </div>
      </div>

     
     <div className={styles.linksContainer}>
     <div className={styles.tags}>
      <div> <h3>LINKS</h3></div>
      <div> <button type="button" onClick={handleAddlinks}>+</button></div>
      </div>
      
      {links.map((links, index) => (
        <div key={index} className={styles.linkItem}>
          
            <input
              value={links.name}
              onChange={(e) => handlelinksChange(index, 'name', e.target.value)} placeholder='Links'
            />
        
        </div>
        
      ))}
    </div>

      <div className={styles.tags}>
      <div> <h3>TAGS</h3></div>
      <div><button onClick={handleAddTag}>+</button></div>
      </div>
      
      <div className={styles.tagsContainer}>
        {tags.map((tag, index) => (
            <div key={index}>
            <input
                value={tag}
                onChange={(e) => handleTagChange(index, e.target.value)}
                className={styles.onetag}
                />
            </div>
            ))}
        <button onClick={handleAddTag}>+</button>
    </div>
    <div className={styles.button}>
        <button>CREATE</button>
      </div>
    </div>
      
    </div>

);

};

export default NewContent;

        