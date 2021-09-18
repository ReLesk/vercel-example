import Link from 'next/link'
import Image from 'next/image'

const closeSidebar = () => {
    document.getElementById('sidebar').classList.remove('active');
}

const Sidebar = () => {
    return (
      <div id="sidebar">
        <div className="container-sidebar">
          <ul className="container-toggle-close">
              <a className="toggle-close" onClick={closeSidebar}>
                  <img src="/close-circle-outline.svg" alt="close" />
              </a>
          </ul>
          <div className="main-sidebar">
            <ul className="nav-sidebar">
              <li className="item-nav">
                <Link href="/">
                  <a className="item-link">inicio</a>
                </Link>
              </li>
              <li className="item-nav">
                <Link href="/">
                  <a className="item-link">proyectos</a>
                </Link>
              </li>
              <li className="item-nav">
                <Link href="/">
                  <a className="item-link">recursos</a>
                </Link>
              </li>
              <li className="item-nav">
                <Link href="/">
                  <a className="item-link">acerca</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Sidebar;