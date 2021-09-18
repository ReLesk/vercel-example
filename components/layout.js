import Head from 'next/head'
import Navbar from '/components/navbar'
import Footer from '/components/footer'
import Sidebar from '/components/sidebar'


const Layout = ({ children }) => {

    return (
      <div className="body-container">
        <div className="container-body">
          <Sidebar />
          <Navbar />
          <div className="content">
            {children}
          </div>
        </div>
        <Footer/>
      </div>
    );
}

export default Layout;