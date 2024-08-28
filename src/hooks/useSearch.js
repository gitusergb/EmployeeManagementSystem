import { useState, useEffect } from 'react';

const useSearch = (employees) => {
    const [searchInput, setSearchInput] = useState('');
    const [filteredEmployees, setFilteredEmployees] = useState(employees);

    const handleSearch = () => {
        setFilteredEmployees(
            employees.filter((employee) =>
                employee.name 
                    ? employee.name.toLowerCase().includes(searchInput.toLowerCase()) 
                    : false
            )
        );
    };

    return { filteredEmployees, searchInput, setSearchInput, handleSearch };
};

export default useSearch;