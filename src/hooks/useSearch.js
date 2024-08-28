import {useMemo } from 'react';

const useSearch = (employees,searchInput) => {
    return useMemo(() => {
        return employees.filter(
          item =>
            item.first_name.toLowerCase().includes(searchInput.toLowerCase()) ||
            item.last_name.toLowerCase().includes(searchInput.toLowerCase())
        );
      }, [employees, searchInput]);
    };

export default useSearch;