import React from 'react'
import './Select.css'

export default function Select({
  text,
  name,
  option,
  placeholder,
  handlerOnChange,
  value,
}) {
  return (
    <div className="form_control">
      <label htmlFor={name}>{text}</label>
      <select name={name} id={name}>
        <option value={null}>Selecione uma categoria...</option>
        {option.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {opt.name}
          </option>
        ))}
      </select>
    </div>
  )
}
