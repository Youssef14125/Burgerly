import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block font-sans text-sm font-semibold tracking-wide rounded transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-neon disabled:cursor-not-allowed disabled:opacity-40';

  const styles = {
    primary:
      base +
      ' px-5 py-3 md:px-7 md:py-4 border border-neon text-neon bg-transparent hover:bg-neon hover:text-base hover:shadow-neon',
    small:
      base +
      ' px-4 py-2 md:px-5 md:py-2.5 text-xs border border-line text-ink bg-surface hover:border-neon hover:text-neon',
    round:
      base +
      ' px-3 py-1 md:px-3.5 md:py-1.5 text-sm border border-line text-ink bg-surface hover:border-neon hover:text-neon',
    secondary:
      'inline-block font-sans text-sm font-semibold tracking-wide rounded transition-all duration-200 border border-line text-muted hover:border-pink hover:text-pink focus:outline-none focus:ring-1 focus:ring-pink disabled:cursor-not-allowed disabled:opacity-40 px-5 py-2.5 md:px-6 md:py-3.5',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
