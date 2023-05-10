import React, { useState } from 'react';



const NewProject = () => {
  const [title, setTitle] = useState('');
  const [leader, setLeader] = useState('');
  const [description, setDescription] = useState('');
  const [subject, setSubject] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [deadline, setDeadline] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [roles, setRoles] = useState([{ name: '', count: 0 }]);
  const [tags, setTags] = useState(['']);

  const handleAddRole = () => {
    setRoles([...roles, { name: '', count: 0 }]);
  };

  const handleRoleChange = (index, field, value) => {
    const newRoles = [...roles];
    if (field === 'name') {
      newRoles[index][field] = value;
    } else if (field === 'count') {
      newRoles[index][field] = parseInt(value, 10);
    }
    setRoles(newRoles);
  };

  const handleAddTag = () => {
    setTags([...tags, '']);
  };

  const handleTagChange = (index, value) => {
    const newTags = [...tags];
    newTags[index] = value;
    setTags(newTags);
  };

  return (
    <div className="bg-black text-white min-h-screen">
  
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold">Create New Project</h1>
      </div>
  
      <div className="flex flex-col items-center space-y-8">
        <div>
          <label className="block">
            Title:
            <input
              className="bg-gray-700 text-white border-2 border-gray-500 w-full p-2 rounded"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label className="block">
            Leader:
            <input
              className="bg-gray-700 text-white border-2 border-gray-500 w-full p-2 rounded"
              value={leader}
              onChange={(e) => setLeader(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label className="block">
            Description:
            <textarea
              className="bg-gray-700 text-white border-2 border-gray-500 w-full p-2 rounded resize-none"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>
  
        <div>
          <label className="block">
            Subject:
            <select
              className="bg-gray-700 text-white border-2 border-gray-500 w-full p-2 rounded"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            >
              {/* Add your project subjects as options here */}
              <option value="">Choose subject</option>
              <option value="subject1">Subject 1</option>
              <option value="subject2">Subject 2</option>
            </select>
          </label>
        </div>
  
        <div>
          <label className="block">
            Start Date:
            <input
              className="bg-gray-700 text-white border-2 border-gray-500 w-full p-2 rounded"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>
          <label className="block">
            End Date:
            <input
              className="bg-gray-700 text-white border-2 border-gray-500 w-full p-2 rounded"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </label>
          <label className="block">
            Deadline:
            <input
              className="bg-gray-700 text-white border-2 border-gray-500 w-full p-2 rounded"
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </label>
          <label className="block">
            Delivery Time:
            <input
              className="bg-gray-700 text-white border-2 border-gray-500 w-full p-2 rounded"
              type="time"
              value={deliveryTime}
              onChange={(e) => setDeliveryTime(e.target.value)}
            />
          </label>
        </div>
  
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Roles</h2>
          {roles.map((role, index) => (
            <div key={index} className="flex flex-col space-y-2">
              <label className="block">
                Role Name:
                <input
                  className="bg-gray-700 text-white border-2 border-gray-500 w-full p-2 rounded"
                  value={role.name}
                  onChange={(e) => handleRoleChange(index, 'name', e.target.value)}
                />
              </label>
              <label className="block">
                Count:
                <input
                  className="bg-gray-700 text-white border-2 border-gray-500 w-full p-2 rounded"
                  type="number"
                  value={role.count}
                  onChange={(e) =>
                    handleRoleChange(index, 'count', e.target.value)
                  }
                />
              </label>
            </div>
      
          ))}
      
          <div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded font-semibold"
              type="button"
              onClick={handleAddRole}
            >
              Add Role
            </button>
          </div>
          <h2 className="text-2xl font-bold">Tags</h2>
          {tags.map((tag, index) => (
            <div key={index}>
              <input
                className="bg-gray-700 text-white border-2 border-gray-500 w-full p-2 rounded"
                value={tag}
                onChange={(e) => handleTagChange(index, e.target.value)}
              />
            </div>
          ))}
          <div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded font-semibold"
              onClick={handleAddTag}
            >
              Add Tag
            </button>
          </div>
        </div>
      </div>
     </div>
);      

};

export default NewProject;



  //   <div>

  //     <div>
  //     <h1>Create New Project</h1>
  //     </div>

  //     <div>
  //     <label>
  //        Title:
  //        <input value={title} onChange={(e) => setTitle(e.target.value)} />
  //      </label>
  //      <label>
  //        Leader:
  //        <input value={leader} onChange={(e) => setLeader(e.target.value)} />
  //      </label>
  //     </div>
  //     <div>
  //      <label>
  //        Description:
  //        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
  //      </label>
  //      </div>

  //      <div>
  //      <label>
  //        Subject:
  //        <select value={subject} onChange={(e) => setSubject(e.target.value)}>
  //          {/* Add your project subjects as options here */}
  //          <option value="">Choose subject</option>
  //          <option value="subject1">Subject 1</option>
  //          <option value="subject2">Subject 2</option>
  //        </select>
  //      </label>
  //       </div>

  //     <div>
  //      <label>
  //        Start Date:
  //        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
  //      </label>
  //      <label>
  //        End Date:
  //        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
  //      </label>
  //     <label>
  //        Deadline:
  //       <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
  //      </label>
  //      <label>
  //        Delivery Time:
  //      <input type="time" value={deliveryTime} onChange={(e) => setDeliveryTime(e.target.value)} />
  //    </label>
  //    </div>

  //    <div>
  //     <h2>Roles</h2>
  //     {roles.map((role, index) => (
  //       <div key={index}>
  //         <label>
  //           Role Name:
  //           <input
  //             value={role.name}
  //             onChange={(e) => handleRoleChange(index, 'name', e.target.value)}
  //           />
  //         </label>
  //         <label>
  //           Count:
  //           <input
  //             type="number"
  //             value={role.count}
  //             onChange={(e) =>
  //               handleRoleChange(index, 'count', e.target.value)
  //             }
  //           />
  //         </label>
  //       </div>
        
  //     ))}

  //     <div>
  //     <button type="button" onClick={handleAddRole}>Add Role</button>
  //     </div>
  //     <h2>Tags</h2>
  //     {tags.map((tag, index) => (
  //       <div key={index}>
  //       <input
  //         value={tag}
  //         onChange={(e) => handleTagChange(index, e.target.value)}
  //         />
  //         </div>
  //         ))}
  //     <div>
  //     <button onClick={handleAddTag}>Add Tag</button>
  //     </div>
  //   </div>
  //   </div>
        























// import React, { useState } from 'react';

// interface roles {
//   name: string;
//   count: number;
// }

// const NewProject: React.FC = () => {
//   const [title, setTitle] = useState('');
//   const [leader, setLeader] = useState('');
//   const [description, setDescription] = useState('');
//   const [subject, setSubject] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [deadline, setDeadline] = useState('');
//   const [deliveryTime, setDeliveryTime] = useState('');
//   const [roles, setroles] = useState<roles[]>([]);
//   const [tags, setTags] = useState<string[]>([]);

//   const handleAddRole = () => {
//     setroles([...roles, { name: '', count: 0 }]);
//   };

//   const handleRoleChange = (index: number, field: keyof roles, value: string | number) => {
//     const newroles = [...roles];
//     if (field === 'name') {
//       newroles[index][field] = value as string;
//     } else if (field === 'count') {
//       newroles[index][field] = value as number;
//     }
//     setroles(newroles);
//   };
  

//   const handleAddTag = () => {
//     setTags([...tags, '']);
//   };

//   const handleTagChange = (index: number, value: string) => {
//     const newTags = [...tags];
//     newTags[index] = value;
//     setTags(newTags);
//   };

//   return (
//     <div>
//       <h1>Create New Project</h1>
//       <label>
//          Title:
//          <input value={title} onChange={(e) => setTitle(e.target.value)} />
//        </label>
//        <label>
//          Leader:
//          <input value={leader} onChange={(e) => setLeader(e.target.value)} />
//        </label>
//        <label>
//          Description:
//          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
//        </label>
//        <label>
//          Subject:
//          <select value={subject} onChange={(e) => setSubject(e.target.value)}>
//            {/* Add your project subjects as options here */}
//            <option value="">Choose subject</option>
//            <option value="subject1">Subject 1</option>
//            <option value="subject2">Subject 2</option>
//          </select>
//        </label>
//        <label>
//          Start Date:
//          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
//        </label>
//        <label>
//          End Date:
//          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
//        </label>
//       <label>
//          Deadline:
//         <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
//        </label>
//        <label>
//          Delivery Time:
//        <input type="time" value={deliveryTime} onChange={(e) => setDeliveryTime(e.target.value)} />
//      </label>

//       <h2>Roles</h2>
//       {roles.map((role, index) => (
//         <div key={index}>
//           <label>
//             Role Name:
//             <input
//               value={role.name}
//               onChange={(e) => handleRoleChange(index, 'name', e.target.value)}
//             />
//           </label>
//           <label>
//             Count:
//             <input
//               type="number"
//               value={role.count}
//               onChange={(e) =>
//                 handleRoleChange(index, 'count', parseInt(e.target.value, 10))
//               }
//             />
//           </label>
//         </div>
//       ))}
//       <button onClick={handleAddRole}>Add roles</button>
  
//       <h2>Tags</h2>
//       {tags.map((tag, index) => (
//         <div key={index}>
//           <input
//             value={tag}
//             onChange={(e) => handleTagChange(index, e.target.value)}
//           />
//         </div>
//       ))}
//       <div>
//         <button onClick={handleAddTag}>Add Tag</button>
//       </div>
//     </div>
//   );
  
//   };
  
//   export default NewProject;

