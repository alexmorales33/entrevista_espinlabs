import React, { useState } from 'react';

function CountryTable({ countries }) {
  const [countryList, setCountryList] = useState(countries);

  const handleDelete = (index) => {
    // Eliminar la fila correspondiente al índice indicado
    const newList = [...countryList];
    newList.splice(index, 1);
    setCountryList(newList);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Código de país</th>
          <th>Nombre de país</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {countryList.map((country, index) => (
          <tr key={index}>
            <td>{country.code}</td>
            <td>{country.name}</td>
            <td>
              <button onClick={() => handleDelete(index)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CountryTable;