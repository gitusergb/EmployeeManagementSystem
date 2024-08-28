import React, {useState} from 'react';
import EmployeeTable from './EmployeeTable';
import useSearch from './hooks/useSearch';

import employeeData from './data/Employees.json'; // JSON data

const EmployeeManagement=()=> {
    const [employees, setEmployees] = useState(employeeData);
    const [searchInput, setSearchInput] = useState('');
    const [genderFilter, setGenderFilter] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');

    // const filteredEmployees = useSearch(employees, searchInput);
    const filteredEmployees = useSearch(
      employees.filter(emp => genderFilter === ''|| emp.gender === genderFilter),
      searchInput
    );
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

  const handleSort = (order) => {
    const sortedEmployees = [...employees].sort((a, b) => {
      return order === 'asc' ? a.salary - b.salary : b.salary - a.salary;
    });
    setSortOrder(order);
    setEmployees(sortedEmployees);
  };

  const handleGenderFilter = (e) => {
    setGenderFilter(e.target.value);
  };


  return (
    <div className="employee-management">
      <div className='frow'>
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
            <button onClick={handleSearchClick}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8E8u159Rz_UmyI-eriCfXhdSD3pl48Y4cUg&s" alt="search" border="0" width="30px"  />
      
            </button>
            </div>

          <div className='frow'>
          <div className="filter-sort">
          <select value={genderFilter} onChange={handleGenderFilter}>
            <option value="">All Genders</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          </div>
          <button onClick={() => handleSort('asc')}> Salary Asc ↑</button>
          <button onClick={() => handleSort('desc')}>Salary Desc ↓ </button>
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
