export default function Boneco({ erros }) {
  const corBase = "#64748b";
  const corBoneco = "#f1f5f9";
  return (
    <svg height="200" width="200" viewBox="0 0 200 200">
      <line x1="20" y1="180" x2="100" y2="180" stroke={corBase} strokeWidth="4" />
      <line x1="60" y1="180" x2="60" y2="20" stroke={corBase} strokeWidth="4" />
      <line x1="60" y1="20" x2="140" y2="20" stroke={corBase} strokeWidth="4" />
      <line x1="140" y1="20" x2="140" y2="50" stroke={corBase} strokeWidth="4" />
      {erros > 0 && <circle cx="140" cy="70" r="20" stroke={corBoneco} strokeWidth="4" fill="none" />}
      {erros > 1 && <line x1="140" y1="90" x2="140" y2="140" stroke={corBoneco} strokeWidth="4" />}
      {erros > 2 && <line x1="140" y1="100" x2="110" y2="120" stroke={corBoneco} strokeWidth="4" />}
      {erros > 3 && <line x1="140" y1="100" x2="170" y2="120" stroke={corBoneco} strokeWidth="4" />}
      {erros > 4 && <line x1="140" y1="140" x2="120" y2="170" stroke={corBoneco} strokeWidth="4" />}
      {erros > 5 && <line x1="140" y1="140" x2="160" y2="170" stroke={corBoneco} strokeWidth="4" />}
    </svg>
  );
}