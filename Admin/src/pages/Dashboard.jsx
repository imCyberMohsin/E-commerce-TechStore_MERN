import Sidebar from "../include/Sidebar"
import Navbar from "../include/Navbar"
import Footer from "../include/Footer"
function Dashboard() {
    return (
        <>
            <div>
                {/* Page Wrapper */}
                <div id="wrapper">
                    {/* Sidebar */}
                    <Sidebar />
                    {/* End of Sidebar */}
                    {/* Content Wrapper */}
                    <div id="content-wrapper" className="d-flex flex-column">
                        {/* Main Content */}
                        <div id="content">
                            {/* Topbar */}
                            <Navbar />
                            {/* End of Topbar */}
                            {/* Begin Page Content */}
                            <div className="container-fluid">
                                {/* Page Heading */}
                                <h1 className="h1 mb-4 text-gray-800">Admin Panel : Tech Store</h1>
                                <h1 className="h3 mb-4 text-gray-800">List Products Added To The Store</h1>
                                <h1 className="h3 mb-4 text-gray-800">Add Products To The Store</h1>
                            </div>
                            {/* /.container-fluid */}
                        </div>
                        {/* End of Main Content */}
                        {/* Footer */}
                        <Footer />
                        {/* End of Footer */}
                    </div>
                    {/* End of Content Wrapper */}
                </div>
                {/* End of Page Wrapper */}
                {/* Scroll to Top Button*/}
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up" />
                </a>
                {/* Logout Modal*/}

            </div>
        </>
    )
}

export default Dashboard