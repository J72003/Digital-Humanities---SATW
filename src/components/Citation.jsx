export default function Citation({ to, label = "[source]" }) {
  return (
    <a href={`#${to}`} className="inline-cite">
      {label}
    </a>
  );
}
