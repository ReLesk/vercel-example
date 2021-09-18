import Link from 'next/link'
import Image from 'next/image'

const openSidebar = () => {
    console.log('hello');
    document.getElementById('sidebar').classList.toggle('active');
}

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container-navbar">
                <img src="/indentado-profile.svg" alt="indentado logo"  className="navbar-brand" />
               

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link href="/webstore">
                            <a  className="nav-link">store</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                    <a  className="nav-link toggle-open" onClick={openSidebar}>menu</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;

