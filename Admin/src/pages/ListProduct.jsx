
import React, { useState, useEffect } from 'react';
import Sidebar from "../include/Sidebar"
import Navbar from "../include/Navbar"
import Footer from "../include/Footer"

function ListProduct() {
    let [products, setProducts] = useState([]);

    // useEffects 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/product/sel");
                const data = await response.json();
                console.log(data);

                setProducts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

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
                                <h1 className="h3 mb-4 text-gray-800">List Product</h1>

                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Product Name</th>
                                            <th>Product Price</th>
                                            <th>Product Image</th>
                                            <th>Product Detail</th>
                                            <th>DELETE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map((p) =>
                                            <tr key={p._id}>
                                                <td>{p.productName}</td>
                                                <td>{p.productPrice}</td>
                                                <td><img src={`http://localhost:3000/images/` + p.productImage} alt={p.productName} className="img-fluid img-thumbnail" /></td>
                                                <td>{p.productDetail}</td>

                                                <td><button className='btn btn-danger' onClick={async () => {
                                                    // Delete Confirmation
                                                    if (window.confirm("Delete This Item ?")) {

                                                        let fd = new FormData();
                                                        fd.append("id", p._id);

                                                        let response = await fetch('http://localhost:3000/product/del', {
                                                            method: 'POST',
                                                            body: fd,
                                                        })
                                                        let data = await response.json();
                                                        console.log(data);
                                                        // getProduct();
                                                    }

                                                }}>Delete</button></td>
                                            </tr>
                                        )}

                                    </tbody>
                                </table>
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

export default ListProduct