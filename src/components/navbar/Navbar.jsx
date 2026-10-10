export default function Navbar({ list }) {
  return (
    <nav aria-label="Main navigation">
      <ul className="navigation">
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </nav>
  );
}
