export function MonoText({ children, className = '', tabular = true }) {
  return (
    <span className={`font-mono ${tabular ? 'tabular-nums' : ''} ${className}`}>
      {children}
    </span>
  );
} 