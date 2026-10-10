export default function Navbar({ list }) {
  return (
    <nav aria-label="Main navigation">
      <ul className="navigation">
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </nav>
  );
}
