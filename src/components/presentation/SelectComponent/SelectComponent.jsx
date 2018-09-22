import React from 'react';
import './SelectComponent.css';

const SelectComponent = ( {selectData, onChange} ) => (
  <select className="n-dropdown" onChange={onChange}>
    {selectData.map((item, index) => <option key={index} value={item.value}>{item.option}</option>)}
  </select>
);

export default SelectComponent;