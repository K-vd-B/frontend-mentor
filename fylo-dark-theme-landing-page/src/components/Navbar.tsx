export default function Navbar() {

  const menuItems = ['Features', 'Team', 'Sign In'];

  const formattedMenuItems = menuItems.map((menuItem, index) => {
    return <a href="" key={index} className="menu-hover-animation p-2" draggable="false">{menuItem}</a>
  });

  return (
    <nav className="flex gap-1 sm:gap-10">
      {formattedMenuItems}
    </nav>
  );
}
