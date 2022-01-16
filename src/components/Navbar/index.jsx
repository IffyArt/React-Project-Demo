import NavbarLogo from './NavbarLogo';
import NavbarLink from './NavbarLink';

const navbarLinks = [
  { name: '導覽按鈕', link: '#' },
  { name: '導覽按鈕', link: '#' },
  { name: '導覽按鈕', link: '#' },
  { name: '導覽按鈕', link: '#' },
];

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1 className='navbar__logo'>
        <NavbarLogo />
      </h1>
      <section className='navbar__links'>
        {navbarLinks.map(({ name, link }, index) => (
          <a href={link} key={index}>
            {name}
          </a>
          // <NavbarLink key={index} name={name} link={link} />
          // 可將內容設計成 component，但因 return 只能有一個根元素(root)，因此需擇一使用
        ))}
      </section>
    </nav>
  );
};

export default Navbar;
