export function MonoNumber({ children, className = '' }) {
  return (
    <span className={`font-mono tabular-nums ${className}`}>
      {children}
    </span>
  );
} 