import React, {useState} from 'react';
import EmployeeTable from './EmployeeTable';
import useSearch from './hooks/useSearch';

import employeeData from './data/Employees.json'; // JSON data

const EmployeeManagement=()=> {
    const [employees, setEmployees] = useState(employeeData);
    const { searchInput, setSearchInput, handleSearch, filteredEmployees } = useSearch(employees);

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

  return (
    <div className="employee-management">
        <div className='searchdiv'>
                <input 
                type="text" 
                value={searchInput} 
                onChange={(e) => setSearchInput(e.target.value)} 
                placeholder="Search by name..."
                style={{ padding: "10px" }}
            />
            <button onClick={ useSearch(searchInput) }>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8E8u159Rz_UmyI-eriCfXhdSD3pl48Y4cUg&s" alt="search" border="0" width="30px"  />
      
            </button>
            </div>
      
      <EmployeeTable 
        employees={employees} 
        onDelete={handleDelete} 
        onEdit={handleEdit} 
      />
    </div>
  );
}

export default EmployeeManagement;
