import { useId } from 'react';
import css from './Input.module.css';

export default function Input({ value, onChange, placeholder, label, error, name, type = 'text' }) {
  const id = useId();

  return (
    <div className={css.container}>
      <label htmlFor={id}>{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        id={id}
      />
      {error && <span className={css.error}>{error}</span>}
    </div>
  );
}
