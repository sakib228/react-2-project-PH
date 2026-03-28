import { Menu, X } from 'lucide-react';
import React from 'react';
import LinkNav from './LinkNav';
const navLinks = [
  {
    id: 1,
    name: 'Home',
    path: '/',
  },
  {
    id: 2,
    name: 'About',
    path: '/about',
  },
  {
    id: 3,
    name: 'Services',
    path: '/services',
  },
  {
    id: 4,
    name: 'Blog',
    path: '/blog',
  },
  {
    id: 5,
    name: 'Contact',
    path: '/contact',
  },
];

const OwnNavBar = () => {
  const links = navLinks.map((link) => <LinkNav key={link.id} link={link} />);
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <nav className="flex justify-between items-center bg-base-100 p-4 ">
      <span className="flex gap-2" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <X className="md:hidden cursor-pointer"></X>
        ) : (
          <Menu className="md:hidden cursor-pointer" />
        )}
        <ul
          className={`absolute md:hidden border rounded-2xl py-2 px-5
  transition-all duration-500 ease-in-out
  ${isOpen ? 'top-13 translate-y-0 opacity-100' : 'top-13 -translate-y-10 opacity-0 pointer-events-none'}
  gap-8 z-10 backdrop-blur-md text-shadow-white`}
        >
          {links}
        </ul>
        <h3>My Navbar</h3>
      </span>

      <ul className="hidden md:flex">{links}</ul>
      <button className="btn">Button</button>
    </nav>
  );
};

export default OwnNavBar;
