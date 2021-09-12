export default function MobileNav({ setisMenuOpen, isMenuOpen }) {
  return (
    <div
      className={`utilities--mobile-nav ${!isMenuOpen ? "closed" : "open"}`}
      onClick={() => setisMenuOpen(!isMenuOpen)}
    >
    <i className = {`utilities-menu ${!isMenuOpen ? "closed" : "open"}`}></i>
    </div>
  );
}
