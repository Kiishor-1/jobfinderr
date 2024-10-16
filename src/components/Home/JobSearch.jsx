// import { useState, useEffect } from 'react';
// import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

// export default function JobSearch({ onFilterChange }) {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [skills, setSkills] = useState([]);
//   const [availableSkills] = useState(['Frontend', 'CSS', 'JavaScript', 'React', 'Node.js']);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const { user } = useSelector((state) => state.auth);

//   // Handle changes to the search term
//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   // Add a skill to the selected skills list
//   const addSkill = (skill) => {
//     if (!skills.includes(skill)) {
//       setSkills([...skills, skill]);
//     }
//     setIsDropdownOpen(false);
//   };

//   // Remove a skill from the selected skills list
//   const removeSkill = (skillToRemove) => {
//     setSkills(skills.filter((skill) => skill !== skillToRemove));
//   };

//   // Apply the filter when search term or skills change
//   const applyFilter = () => {
//     const filters = {
//       searchTerm,
//       skills,
//     };
//     onFilterChange(filters); // Trigger the filtering in the parent component
//   };

//   // Clear all filters
//   const clearFilter = () => {
//     setSearchTerm('');
//     setSkills([]);
//     onFilterChange({ searchTerm: '', skills: [] });
//   };

//   // Automatically apply filters when searchTerm or skills change
//   useEffect(() => {
//     applyFilter(); // Apply the filter whenever searchTerm or skills change
//   }, [searchTerm, skills]);

//   const [nonListedSkill, setNonListedSkill] = useState('');
//   const handleNonListedSkill = (e) => {
//     setNonListedSkill(e.target.value);
//   }

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md mb-8 mt-3">
//       <div className="flex items-center space-x-4">
//         <input
//           type="text"
//           placeholder="Type any job title"
//           value={searchTerm}
//           onChange={handleSearchChange}
//           className="flex-grow border border-gray-300 p-2 rounded-lg focus:outline-none"
//         />
//       </div>

//       <div className="fle mt-4">
//         <div className="relative flex items-center gap-2 justify-between">
//           <button
//             className="border border-gray-300 p-2 rounded-lg flex items-center gap-1"
//             onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//           >
//             Skills
//             {isDropdownOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
//           </button>

//           {isDropdownOpen && (
//             <div className="absolute top-8 bg-white border border-gray-300 rounded-lg mt-2 p-2 shadow-lg z-10">
//               {availableSkills.map((skill, index) => (
//                 <button
//                   key={index}
//                   onClick={() => addSkill(skill)}
//                   className="block text-left w-full px-4 py-2 hover:bg-gray-200"
//                 >
//                   {skill}
//                 </button>
//               ))}
//               <input
//                 type="text"
//                 placeholder='Add your skill'
//                 className='w-full px-2 py-1 border rounded-md'
//                 value={nonListedSkill}
//                 onChange={handleNonListedSkill}
//               />
//             </div>
//           )}


//           {user ? (
//             <Link to={"/new"} className='bg-red-500 px-3 py-2 text-white font-semibold rounded-md'>+Add Job</Link>
//           ) : (
//             <div className="">
//               <button
//                 className="bg-red-500 text-white px-2 py-2 rounded-lg"
//                 onClick={applyFilter}
//               >
//                 Apply Filter
//               </button>
//               <button
//                 className="border border-2 px-2 py-[0.4rem] rounded-lg border-red-500  text-red-600 ml-2"
//                 onClick={clearFilter}
//               >
//                 Clear
//               </button>
//             </div>
//           )}

//         </div>
//         <div className="flex items-center gap-2 flex-wrap py-2">
//           {skills.map((skill, index) => (
//             <div key={index} className="flex bg-red-100 items-center text-red-600 py-2 h-[40px]">
//               <span className='px-4'>{skill}</span>
//               <button className="bg-[#FF6B6B] h-[40px] text-white px-3" onClick={() => removeSkill(skill)}>X</button>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }


// import { useState, useEffect } from 'react';
// import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

// export default function JobSearch({ onFilterChange }) {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [skills, setSkills] = useState([]);
//   const [availableSkills, setAvailableSkills] = useState(['Frontend', 'CSS', 'JavaScript', 'React', 'Node.js']);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const { user } = useSelector((state) => state.auth);

//   const [nonListedSkill, setNonListedSkill] = useState('');

//   // Handle changes to the search term
//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   // Add a skill to the selected skills list
//   const addSkill = (skill) => {
//     if (!skills.includes(skill)) {
//       setSkills([...skills, skill]);
//     }
//     setIsDropdownOpen(false);
//   };

//   // Add a non-listed skill to the available skills and selected skills
//   const addNonListedSkill = () => {
//     if (nonListedSkill.trim() && !availableSkills.includes(nonListedSkill)) {
//       setAvailableSkills([...availableSkills, nonListedSkill]);
//       addSkill(nonListedSkill); // Automatically add the newly added skill to selected skills
//     }
//     setNonListedSkill(''); // Clear input after adding
//   };

//   // Remove a skill from the selected skills list
//   const removeSkill = (skillToRemove) => {
//     setSkills(skills.filter((skill) => skill !== skillToRemove));
//   };

//   // Apply the filter when search term or skills change
//   const applyFilter = () => {
//     const filters = {
//       searchTerm,
//       skills,
//     };
//     onFilterChange(filters); // Trigger the filtering in the parent component
//   };

//   // Clear all filters
//   const clearFilter = () => {
//     setSearchTerm('');
//     setSkills([]);
//     onFilterChange({ searchTerm: '', skills: [] });
//   };

//   // Automatically apply filters when searchTerm or skills change
//   useEffect(() => {
//     applyFilter(); // Apply the filter whenever searchTerm or skills change
//   }, [searchTerm, skills]);

//   const handleNonListedSkill = (e) => {
//     setNonListedSkill(e.target.value);
//   }

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md mb-8 mt-3">
//       <div className="flex items-center space-x-4">
//         <input
//           type="text"
//           placeholder="Type any job title"
//           value={searchTerm}
//           onChange={handleSearchChange}
//           className="flex-grow border border-gray-300 p-2 rounded-lg focus:outline-none"
//         />
//       </div>

//       <div className="fle mt-4">
//         <div className="relative flex items-center gap-2 justify-between">
//           <button
//             className="border border-gray-300 p-2 rounded-lg flex items-center gap-1"
//             onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//           >
//             Skills
//             {isDropdownOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
//           </button>

//           {isDropdownOpen && (
//             <div className="absolute top-8 bg-white border border-gray-300 rounded-lg mt-2 p-2 shadow-lg z-10">
//               {availableSkills.map((skill, index) => (
//                 <button
//                   key={index}
//                   onClick={() => addSkill(skill)}
//                   className="block text-left w-full px-4 py-2 hover:bg-gray-200"
//                 >
//                   {skill}
//                 </button>
//               ))}
//               <input
//                 type="text"
//                 placeholder='Add your skill'
//                 className='w-full px-2 py-1 border rounded-md'
//                 value={nonListedSkill}
//                 onChange={handleNonListedSkill}
//               />
//               <button
//                 className="mt-2 w-full bg-blue-500 text-white px-2 py-1 rounded-lg"
//                 onClick={addNonListedSkill}
//               >
//                 Add Skill
//               </button>
//             </div>
//           )}

//           {user ? (
//             <Link to={"/new"} className='bg-red-500 px-3 py-2 text-white font-semibold rounded-md'>+Add Job</Link>
//           ) : (
//             <div className="">
//               <button
//                 className="bg-red-500 text-white px-2 py-2 rounded-lg"
//                 onClick={applyFilter}
//               >
//                 Apply Filter
//               </button>
//               <button
//                 className="border border-2 px-2 py-[0.4rem] rounded-lg border-red-500  text-red-600 ml-2"
//                 onClick={clearFilter}
//               >
//                 Clear
//               </button>
//             </div>
//           )}

//         </div>
//         <div className="flex items-center gap-2 flex-wrap py-2">
//           {skills.map((skill, index) => (
//             <div key={index} className="flex bg-red-100 items-center text-red-600 py-2 h-[40px]">
//               <span className='px-4'>{skill}</span>
//               <button className="bg-[#FF6B6B] h-[40px] text-white px-3" onClick={() => removeSkill(skill)}>X</button>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }


import { useState, useEffect } from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function JobSearch({ onFilterChange }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [skills, setSkills] = useState([]);
  const [availableSkills, setAvailableSkills] = useState(['Frontend', 'CSS', 'JavaScript', 'React', 'Node.js']);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const [nonListedSkill, setNonListedSkill] = useState('');

  // Handle changes to the search term
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Add a skill to the selected skills list
  const addSkill = (skill) => {
    if (!skills.includes(skill)) {
      setSkills([...skills, skill]);
    }
    setIsDropdownOpen(false);
  };

  // Add a non-listed skill to the available skills and selected skills
  const addNonListedSkill = () => {
    if (nonListedSkill.trim() && !availableSkills.includes(nonListedSkill)) {
      setAvailableSkills([...availableSkills, nonListedSkill]);
      addSkill(nonListedSkill); // Automatically add the newly added skill to selected skills
    }
    setNonListedSkill(''); // Clear input after adding
  };

  // Remove a skill from the selected skills list
  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  // Apply the filter when search term or skills change
  const applyFilter = () => {
    const filters = {
      searchTerm,
      skills,
    };
    onFilterChange(filters); // Trigger the filtering in the parent component
  };

  // Clear all filters
  const clearFilter = () => {
    setSearchTerm('');
    setSkills([]);
    onFilterChange({ searchTerm: '', skills: [] });
  };

  // Automatically apply filters when searchTerm or skills change
  useEffect(() => {
    applyFilter(); // Apply the filter whenever searchTerm or skills change
  }, [searchTerm, skills]);

  const handleNonListedSkill = (e) => {
    setNonListedSkill(e.target.value);
  };

  // Handle Enter key to add the non-listed skill
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submission or other default actions
      addNonListedSkill(); // Add the skill when Enter is pressed
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8 mt-3">
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Type any job title"
          value={searchTerm}
          onChange={handleSearchChange}
          className="flex-grow border border-gray-300 p-2 rounded-lg focus:outline-none"
        />
      </div>

      <div className="fle mt-4">
        <div className="relative flex items-center gap-2 justify-between">
          <button
            className="border border-gray-300 p-2 rounded-lg flex items-center gap-1"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Skills
            {isDropdownOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
          </button>

          {isDropdownOpen && (
            <div className="absolute top-8 bg-white text-sm border border-gray-300 rounded-lg mt-2 p-2 shadow-lg z-10">
              {availableSkills.map((skill, index) => (
                <button
                  key={index}
                  onClick={() => addSkill(skill)}
                  className="block text-left w-full px-4 py-2 hover:bg-gray-200"
                >
                  {skill}
                </button>
              ))}
              <input
                type="text"
                placeholder="Add your skill"
                className="w-full px-2 py-1 border rounded-md"
                value={nonListedSkill}
                onChange={handleNonListedSkill}
                onKeyDown={handleKeyDown} // Trigger skill addition on Enter key press
              />
            </div>
          )}

          {user ? (
            <Link to={"/new"} className='bg-red-500 px-3 py-2 text-white font-semibold rounded-md'>+Add Job</Link>
          ) : (
            <div className="">
              <button
                className="bg-red-500 text-white px-2 py-2 rounded-lg"
                onClick={applyFilter}
              >
                Apply Filter
              </button>
              <button
                className="border border-2 px-2 py-[0.4rem] rounded-lg border-red-500  text-red-600 ml-2"
                onClick={clearFilter}
              >
                Clear
              </button>
            </div>
          )}

        </div>
        <div className="flex items-center gap-2 flex-wrap py-2">
          {skills.map((skill, index) => (
            <div key={index} className="flex bg-red-100 items-center text-red-600 py-2 h-[40px]">
              <span className='px-4'>{skill}</span>
              <button className="bg-[#FF6B6B] h-[40px] text-white px-3" onClick={() => removeSkill(skill)}>X</button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

