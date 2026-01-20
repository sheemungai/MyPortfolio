
const Header =() => {
    return (
        <header className='flex py-5 justify-center px-4 text-gray-600 font-semibold p-5 '>
            <nav className='flex space-x-8 hover:text-gray-400 font-bold'>
                <a href="/" >Home</a>
                <a href="/about">About</a>
                <a href="">Projects</a>
                <a href="">Contacts</a>
            </nav>
        </header>
    )
}


export default Header