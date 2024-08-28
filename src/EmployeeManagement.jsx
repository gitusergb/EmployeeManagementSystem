import React, {useState} from 'react';
import EmployeeTable from './EmployeeTable';
import useSearch from './hooks/useSearch';

import employeeData from './data/Employees.json'; // JSON data

const EmployeeManagement=()=> {
    const [employees, setEmployees] = useState(employeeData);
    const [searchInput, setSearchInput] = useState('');

    const filteredEmployees = useSearch(employees, searchInput);

  const handleDelete = (id) => {
    const updatedEmployees = employees.filter(emp => emp.id !== id);
    setEmployees(updatedEmployees);
  };

  const handleEdit = (id, field, value) => {
    const updatedEmployees = employees.map(emp => 
      emp.id === id ? { ...emp, [field]: value } : emp
    );
    setEmployees(updatedEmployees);
  };
  const handleSearchClick = () => {
    setSearchInput(searchInput);
  };

  return (
    <div className="employee-management">
      <div style={{display:'flex' ,flexDirection:'row',justifyContent:'center', alignItems:'center',color:'#184fa3'}}>
        <img src="https://i.ibb.co/qCsqXSN/elogo.jpg" alt="logo" style={{ height: "70px" }}/>
        <h1>Employee Management System</h1>
      </div>
        <div className='searchdiv'>
                <input 
                type="text" 
                value={searchInput} 
                onChange={(e) => setSearchInput(e.target.value)} 
                placeholder="Search by name..."
                style={{ padding: "10px" }}
            />
            <button onClick={ handleSearchClick }>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8E8u159Rz_UmyI-eriCfXhdSD3pl48Y4cUg&s" alt="search" border="0" width="30px"  />
      
            </button>
            </div>
      
      <EmployeeTable 
        employees={filteredEmployees} 
        onDelete={handleDelete} 
        onEdit={handleEdit} 
      />
    </div>
  );
}

export default EmployeeManagement;
