
import React, { useState } from 'react';

import Sidebar from "../include/Sidebar"
import Navbar from "../include/Navbar"
import Footer from "../include/Footer"



function AddProduct() {
    // useState Variables
    const [pName, setpName] = useState("");
    const [pPrice, setpPrice] = useState("");
    const [pDetail, setpDetail] = useState("");

    // useState for Images
    const [pImg, setpImg] = useState("");

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
                                <h1 className="h3 mb-4 text-gray-800">Add Product</h1>

                                <p>Add Product</p>
                                <p><input onChange={(e) => {
                                    setpName(e.target.value); // This current input value is sent and stored to pName state variable.
                                }} type="text" className="form-control" /></p>

                                <p>Product Price</p>
                                <p><input onChange={(e) => {
                                    setpPrice(e.target.value);
                                }} type="text" className="form-control" /></p>

                                <p>Product Image</p>
                                <p><input onChange={(e) => {
                                    setpImg(e.target.files[0]);
                                }} type="file" /></p>
                                
                                <p>Product Details</p>
                                <p><textarea onChange={(e) => {
                                    setpDetail(e.target.value);
                                }} className="form-control"></textarea></p>

                                <p><button className="btn btn-danger" onClick={async () => {
                                    let fd = new FormData();
                                    fd.append("pName", pName);
                                    fd.append("pPrice", pPrice);
                                    fd.append("pDetail", pDetail);
                                    fd.append("pImg", pImg);

                                    let response = await fetch('http://localhost:3000/product/add', {
                                        method: 'POST',
                                        body: fd,
                                    })
                                    let data = await response.json();
                                    console.log(data);

                                }}>Add Product</button></p>
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

export default AddProduct