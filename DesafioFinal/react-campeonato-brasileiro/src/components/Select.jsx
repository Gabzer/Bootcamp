import React from 'react';

import years from '../types/years';

const Select = React.memo(function ({ selectedYear, onSelectChange = null }) {
  function handleOnChange(evt) {
    onSelectChange(evt.target.value);
    window.location.assign(`/` + evt.target.value);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <select
        className="mt-2 mb-4"
        onChange={handleOnChange}
        value={selectedYear}
      >
        {years.map(year => {
          return (
            <option className="shadow-2xl" key={year} value={year}>
              {year}
            </option>
          );
        })}
      </select>
      <h1 className="font-semibold text-xl">
        Campeonato Brasileiro de {selectedYear}
      </h1>
    </div>
  );
});

export default Select;
