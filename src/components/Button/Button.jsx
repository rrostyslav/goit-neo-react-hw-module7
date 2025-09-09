import css from './Button.module.css';

export default function Button({ children, onClick, type = 'button' }) {
  return (
    <button className={css.button} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
