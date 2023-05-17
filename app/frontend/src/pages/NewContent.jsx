import React, { useState } from 'react';
import styles from "../styles/NewContent.module.scss";

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

  <div>

    <div className={styles.container}>
    <div className={styles.ground}>
    <div>
    <img src=""/>
    <h3>  Create New Content </h3>

      <div>
         <input value={title} placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
       </div>
      
      <div >
         <textarea value={description} placeholder='Description' onChange={(e) => setDescription(e.target.value)} />
       </div>

       <div>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {image && <img src={image} alt="User upload" />}
        </div>

     
     <div className="linksContainer">
    
    <h2>Links</h2>
      
      {links.map((links, index) => (
        <div key={index} className="linksItem">
          
            <input
              value={links.name}
              onChange={(e) => handlelinksChange(index, 'name', e.target.value)} placeholder='links'
            />
        
        </div>
        
      ))}
    </div>
      <div>
      <button type="button" onClick={handleAddlinks}>+</button>
      </div>
      </div>
      
      <div className={styles.tagsContainer}>
        <h3>Tags</h3>
        {tags.map((tag, index) => (
            <div key={index}>
            <input
                value={tag}
                onChange={(e) => handleTagChange(index, e.target.value)}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'var(--neutral-50)',
                    backgroundColor: 'var(--primary-600)',
                    height: '3rem',
                    width: 'auto',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.8rem',
                    border: 'none',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    fontWeight: 'lighter',
                    fontSize: '11pt',
                    margin: '1rem 1rem 0 0'
                    }}
                />
            </div>
            ))}
        <button onClick={handleAddTag}>+</button>
    </div>
    </div>

    </div>
    </div>
);

};

export default NewContent;

        