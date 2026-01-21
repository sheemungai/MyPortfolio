const Header = () => {
  return (
    <header className="flex py-5 justify-center px-4 text-black font-semibold p-5 bg-[#FF9FFC]">
      <nav className="flex space-x-8 font-bold">
        <a href="/" className=" hover:text-gray-400">
          Home
        </a>
        <a href="/about" className=" hover:text-gray-400">
          About
        </a>
        <a href="/skill" className=" hover:text-gray-400">
          Skills
        </a>
        <a href="/project" className=" hover:text-gray-400">
          Projects
        </a>
        <a href="/contact" className=" hover:text-gray-400">
          Contacts
        </a>
      </nav>
    </header>
  );
};

export default Header;
