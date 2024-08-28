import React from 'react';

function EmployeeTable({employees, onDelete, onEdit }) {
  // console.log("employees:" , employees);
  
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Salary</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(emp => (
          <tr key={emp.id}>
            <td>{emp.id}</td>
            <td>{emp.first_name +' '+ emp.last_name}</td>
            <td>{emp.email}</td>
            <td>{emp.gender}</td>
            <td>
              <input 
                type="number" 
                value={emp.salary} 
                onChange={(e) => onEdit(emp.id,'salary', e.target.value)} 
              />
            </td>
            <td>
              <button className='delete-btn' onClick={() => onDelete(emp.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;