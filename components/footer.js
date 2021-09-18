import Link from 'next/link'

const Footer = () => {
    return (
      <footer className="main-footer">
        <div className="container-footer">
          <div className="header-footer">
            <h2 className="title-footer">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>
            <p className="text-footer">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Doloribus unde dolore vel hic magni sit.
            </p>
          </div>
          <div className="body-footer">
            <ul className="contact-body-footer">
              <li className="contact-item">
                <Link href="/">
                  <a className="contact-link">facebook</a>
                </Link>
              </li>
              <li className="contact-item">
                <Link href="/">
                  <a className="contact-link">instagram</a>
                </Link>
              </li>
              <li className="contact-item">
                <Link href="/">
                  <a className="contact-link">youtube</a>
                </Link>
              </li>
            </ul>
            <p className="copyright-footer">
                &copy; 2021 - Indentado Official Web
            </p>
          </div>
        </div>
      </footer>
    );
}

export default Footer;