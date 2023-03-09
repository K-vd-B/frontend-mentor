export default function Navbar() {

  const menuItems = ['Features', 'Team', 'Sign In'];

  const formattedMenuItems = menuItems.map((menuItem, index) => {
    return <a href="" key={index} className="">{menuItem}</a>
  })

  return (
    <nav>
      {formattedMenuItems}
    </nav>
  )
}
