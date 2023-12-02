import { useState, useEffect } from "react";
function Home() {

    let [products, setProducts] = useState([]);
    async function getProduct() {

        let response = await fetch("http://localhost:3000/product/sel");
        let data = await response.json();
        setProducts(data);
    }

    // useEffects 
    useEffect(() => {
        getProduct();
    }, []);

    return (
        <>
            <div>
                <div className="header-most-top">
                    <p>Tech Gadgets Offer Zone Top Deals &amp; Discounts</p>
                </div>
                {/* //top-header */}
                {/* header-bot*/}
                <div className="header-bot">
                    <div className="header-bot_inner_wthreeinfo_header_mid">
                        {/* header-bot*/}
                        <div className="col-md-4 logo_agile">
                            <h1>
                                <a href="index.html">
                                    <span>T</span>ech
                                    <span>S</span>tore
                                    {/* <img src="images/logo2.png" width="100"/> */}
                                </a>
                            </h1>
                        </div>
                        {/* header-bot */}
                        <div className="col-md-8 header">
                            {/* header lists */}
                            <ul>
                                <li>
                                    <a className="play-icon popup-with-zoom-anim" href="#small-dialog1">
                                        <span className="fa fa-map-marker" aria-hidden="true" /> Shop Locator</a>
                                </li>
                                <li>
                                    <a href="#" data-toggle="modal" data-target="#myModal1">
                                        <span className="fa fa-truck" aria-hidden="true" />Track Order</a>
                                </li>
                                <li>
                                    <span className="fa fa-phone" aria-hidden="true" /> 001 234 5678
                                </li>
                                <li>
                                    <a href="#" data-toggle="modal" data-target="#myModal1">
                                        <span className="fa fa-unlock-alt" aria-hidden="true" /> Sign In </a>
                                </li>
                                <li>
                                    <a href="#" data-toggle="modal" data-target="#myModal2">
                                        <span className="fa fa-pencil-square-o" aria-hidden="true" /> Sign Up </a>
                                </li>
                            </ul>
                            {/* //header lists */}
                            {/* search */}
                            <div className="agileits_search">
                                <form action="#" method="post">
                                    <input name="Search" type="search" placeholder="How can we help you today?" required />
                                    <button type="submit" className="btn btn-default" aria-label="Left Align">
                                        <span className="fa fa-search" aria-hidden="true"> </span>
                                    </button>
                                </form>
                            </div>
                            {/* //search */}
                            {/* cart details */}
                            <div className="top_nav_right">
                                <div className="wthreecartaits wthreecartaits2 cart cart box_1">
                                    <form action="#" method="post" className="last">
                                        <input type="hidden" name="cmd" defaultValue="_cart" />
                                        <input type="hidden" name="display" defaultValue={1} />
                                        <button className="w3view-cart" type="submit" name="submit" value>
                                            <i className="fa fa-cart-arrow-down" aria-hidden="true" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                            {/* //cart details */}
                            <div className="clearfix" />
                        </div>
                        <div className="clearfix" />
                    </div>
                </div>
                {/* //navigation */}
                {/* banner-2 */}
                <div className="page-head_agile_info_w3l">
                    <img src="https://images.template.net/56530/Electronics-Shop-Etsy-Banner-Template.jpeg" alt="img" width="100%" />
                </div>
                {/* //banner-2 */}
                {/* page */}
                <div className="services-breadcrumb">
                    <div className="agile_inner_breadcrumb">
                        <div className="container">
                            <ul className="w3_short">
                                <li>
                                    <a href="index.html">Home</a>
                                    <i>|</i>
                                </li>
                                <li>Tech Gadgets</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* //page */}
                {/* top Products */}
                <div className="ads-grid">
                    <div className="container">
                        {/* tittle heading */}
                        <h3 className="tittle-w3l"> Top Tech Gadgets
                            <span className="heading-style">
                                <i />
                                <i />
                                <i />
                            </span>
                        </h3>
                        {/* //tittle heading */}
                        {/* product left */}
                        <div className="side-bar col-md-3">
                            <div className="search-hotel">
                                <h3 className="agileits-sear-head">Search Here..</h3>
                                <form action="#" method="post">
                                    <input type="search" placeholder="Product name..." name="search" required />
                                    <input type="submit" defaultValue=" " />
                                </form>
                            </div>
                            {/* price range */}
                            <div className="range">
                                <h3 className="agileits-sear-head">Price range</h3>
                                <ul className="dropdown-menu6">
                                    <li>
                                        <div id="slider-range" />
                                        <input type="text" id="amount" style={{ border: 0, color: '#ffffff', fontWeight: 'normal' }} />
                                    </li>
                                </ul>
                            </div>
                            {/* //price range */}
                            {/* food preference */}
                            <div className="left-side">
                                <h3 className="agileits-sear-head">Gadget Preference</h3>
                                <ul>
                                    <li>
                                        <input type="checkbox" className="checked" />
                                        <span className="span">Mobile Gadgets</span>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="checked" />
                                        <span className="span">PC Gadgets</span>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="checked" />
                                        <span className="span">Other Gadgets</span>
                                    </li>
                                </ul>
                            </div>
                            {/* //food preference */}
                            {/* discounts */}
                            <div className="left-side">
                                <h3 className="agileits-sear-head">Discount</h3>
                                <ul>
                                    <li>
                                        <input type="checkbox" className="checked" />
                                        <span className="span">5% or More</span>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="checked" />
                                        <span className="span">10% or More</span>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="checked" />
                                        <span className="span">20% or More</span>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="checked" />
                                        <span className="span">30% or More</span>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="checked" />
                                        <span className="span">50% or More</span>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="checked" />
                                        <span className="span">60% or More</span>
                                    </li>
                                </ul>
                            </div>
                            {/* //discounts */}
                            {/* reviews */}
                            <div className="customer-rev left-side">
                                <h3 className="agileits-sear-head">Customer Review</h3>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <span>5.0</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star-o" aria-hidden="true" />
                                            <span>4.0</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star-half-o" aria-hidden="true" />
                                            <i className="fa fa-star-o" aria-hidden="true" />
                                            <span>3.5</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star-o" aria-hidden="true" />
                                            <i className="fa fa-star-o" aria-hidden="true" />
                                            <span>3.0</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star" aria-hidden="true" />
                                            <i className="fa fa-star-half-o" aria-hidden="true" />
                                            <i className="fa fa-star-o" aria-hidden="true" />
                                            <i className="fa fa-star-o" aria-hidden="true" />
                                            <span>2.5</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* //reviews */}
                            {/* cuisine */}
                            {/* <div className="left-side">
                                <h3 className="agileits-sear-head">Cuisine</h3>
                                <ul>
                                    <li>
                                        <input type="checkbox" className="checked" />
                                        <span className="span">South American</span>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="checked" />
                                        <span className="span">French</span>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="checked" />
                                        <span className="span">Greek</span>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="checked" />
                                        <span className="span">Chinese</span>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="checked" />
                                        <span className="span">Japanese</span>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="checked" />
                                        <span className="span">Italian</span>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="checked" />
                                        <span className="span">Mexican</span>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="checked" />
                                        <span className="span">Thai</span>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="checked" />
                                        <span className="span">Indian</span>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="checked" />
                                        <span className="span"> Spanish </span>
                                    </li>
                                </ul>
                            </div> */}
                            {/* //cuisine */}
                            {/* deals */}
                            <div className="deal-leftmk left-side">
                                <h3 className="agileits-sear-head">Special Deals</h3>
                                <div className="special-sec1">
                                    <div className="col-xs-4 img-deals">
                                        <img src="images/d2.jpg" alt />
                                    </div>
                                    <div className="col-xs-8 img-deal1">
                                        <h3>Headphone</h3>
                                        <a href>&#8377; 1800.00</a>
                                    </div>
                                    <div className="clearfix" />
                                </div>
                                <div className="special-sec1">
                                    <div className="col-xs-4 img-deals">
                                        <img src="images/d1.jpg" alt />
                                    </div>
                                    <div className="col-xs-8 img-deal1">
                                        <h3>PS5 Controller</h3>
                                        <a href>&#8377; 4000.00</a>
                                    </div>
                                    <div className="clearfix" />
                                </div>
                                <div className="special-sec1">
                                    <div className="col-xs-4 img-deals">
                                        <img src="images/d4.jpg" alt />
                                    </div>
                                    <div className="col-xs-8 img-deal1">
                                        <h3>Sony Camera</h3>
                                        <a href>&#8377; 150000.00</a>
                                    </div>
                                    <div className="clearfix" />
                                </div>
                                <div className="special-sec1">
                                    <div className="col-xs-4 img-deals">
                                        <img src="images/d5.jpg" alt />
                                    </div>
                                    <div className="col-xs-8 img-deal1">
                                        <h3>Macbook Air</h3>
                                        <a href>&#8377; 120000.00</a>
                                    </div>
                                    <div className="clearfix" />
                                </div>
                                <div className="special-sec1">
                                    <div className="col-xs-4 img-deals">
                                        <img src="images/d3.jpg" alt />
                                    </div>
                                    <div className="col-xs-8 img-deal1">
                                        <h3>Iphone 12</h3>
                                        <a href>&#8377; 149000.00</a>
                                    </div>
                                    <div className="clearfix" />
                                </div>
                            </div>
                            {/* //deals */}
                        </div>
                        {/* //product left */}
                        {/* product right */}
                        <div className="agileinfo-ads-display col-md-9 w3l-rightpro">
                            <div className="wrapper">
                                {/* first section */}
                                <div className="product-sec1">
                                    {products.map((p) =>
                                        <div className="col-xs-4 product-men">
                                            <div className="men-pro-item simpleCart_shelfItem">
                                                <div className="men-thumb-item">
                                                    <img src={"http://localhost:3000/images/" + p.productImage} />
                                                    <div className="men-cart-pro">
                                                        <div className="inner-men-cart-pro">
                                                            <a href="single.html" className="link-product-add-cart">Quick View</a>
                                                        </div>
                                                    </div>
                                                    <span className="product-new-top">New</span>
                                                </div>
                                                <div className="item-info-product ">
                                                    <h4>
                                                        <a href="single.html">{p.productName}</a>
                                                    </h4>
                                                    <div className="info-product-price">
                                                        <span className="item_price">Rs {p.productPrice}/-</span>

                                                    </div>
                                                    <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                        <form action="#" method="post">
                                                            <fieldset>
                                                                <input type="hidden" name="cmd" defaultValue="_cart" />
                                                                <input type="hidden" name="add" defaultValue={1} />
                                                                <input type="hidden" name="business" defaultValue=" " />
                                                                <input type="hidden" name="item_name" defaultValue="Zeeba Basmati Rice - 5 KG" />
                                                                <input type="hidden" name="amount" defaultValue={950.00} />
                                                                <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                                                <input type="hidden" name="currency_code" defaultValue="USD" />
                                                                <input type="hidden" name="return" defaultValue=" " />
                                                                <input type="hidden" name="cancel_return" defaultValue=" " />
                                                                <input type="submit" name="submit" defaultValue="Add to cart" className="button" />
                                                            </fieldset>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    )}
                                    <div className="clearfix" />
                                </div>
                                {/* //4th section  */}
                            </div>
                        </div>
                        {/* //product right */}
                    </div>
                </div>
                {/* //top products */}
                {/* special offers */}
                <div className="featured-section" id="projects">
                    <div className="container">
                        {/* tittle heading */}
                        <h3 className="tittle-w3l">Special Offers
                            <span className="heading-style">
                                <i />
                                <i />
                                <i />
                            </span>
                        </h3>
                        {/* //tittle heading */}
                        <div className="content-bottom-in">
                            <ul id="flexiselDemo1">
                                <li>
                                    <div className="w3l-specilamk">
                                        <div className="speioffer-agile">
                                            <a href="single.html">
                                                <img src="images/s1.jpg" alt />
                                            </a>
                                        </div>
                                        <div className="product-name-w3l">
                                            <h4>
                                                <a href="single.html">Mechanical Keyboard</a>
                                            </h4>
                                            <div className="w3l-pricehkj">
                                                <h6>&#8377;2000.00</h6>
                                                <p>Save &#8377;400.00</p>
                                            </div>
                                            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                <form action="#" method="post">
                                                    <fieldset>
                                                        <input type="hidden" name="cmd" defaultValue="_cart" />
                                                        <input type="hidden" name="add" defaultValue={1} />
                                                        <input type="hidden" name="business" defaultValue=" " />
                                                        <input type="hidden" name="item_name" defaultValue="Aashirvaad, 5g" />
                                                        <input type="hidden" name="amount" defaultValue={220.00} />
                                                        <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                                        <input type="hidden" name="currency_code" defaultValue="USD" />
                                                        <input type="hidden" name="return" defaultValue=" " />
                                                        <input type="hidden" name="cancel_return" defaultValue=" " />
                                                        <input type="submit" name="submit" defaultValue="Add to cart" className="button" />
                                                    </fieldset>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="w3l-specilamk">
                                        <div className="speioffer-agile">
                                            <a href="single.html">
                                                <img src="images/s4.jpg" alt />
                                            </a>
                                        </div>
                                        <div className="product-name-w3l">
                                            <h4>
                                                <a href="single.html">Xbox 360 Controller</a>
                                            </h4>
                                            <div className="w3l-pricehkj">
                                                <h6>&#8377;70000.00</h6>
                                                <p>Save &#8377;1000.00</p>
                                            </div>
                                            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                <form action="#" method="post">
                                                    <fieldset>
                                                        <input type="hidden" name="cmd" defaultValue="_cart" />
                                                        <input type="hidden" name="add" defaultValue={1} />
                                                        <input type="hidden" name="business" defaultValue=" " />
                                                        <input type="hidden" name="item_name" defaultValue="Kissan Tomato Ketchup, 950g" />
                                                        <input type="hidden" name="amount" defaultValue={99.00} />
                                                        <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                                        <input type="hidden" name="currency_code" defaultValue="USD" />
                                                        <input type="hidden" name="return" defaultValue=" " />
                                                        <input type="hidden" name="cancel_return" defaultValue=" " />
                                                        <input type="submit" name="submit" defaultValue="Add to cart" className="button" />
                                                    </fieldset>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="w3l-specilamk">
                                        <div className="speioffer-agile">
                                            <a href="single.html">
                                                <img src="images/s2.jpg" alt />
                                            </a>
                                        </div>
                                        <div className="product-name-w3l">
                                            <h4>
                                                <a href="single.html">Iphone 15 Pro</a>
                                            </h4>
                                            <div className="w3l-pricehkj">
                                                <h6>&#8377;150000.00</h6>
                                                <p>Save &#8377;5000.00</p>
                                            </div>
                                            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                <form action="#" method="post">
                                                    <fieldset>
                                                        <input type="hidden" name="cmd" defaultValue="_cart" />
                                                        <input type="hidden" name="add" defaultValue={1} />
                                                        <input type="hidden" name="business" defaultValue=" " />
                                                        <input type="hidden" name="item_name" defaultValue="Madhur Pure Sugar, 1g" />
                                                        <input type="hidden" name="amount" defaultValue={69.00} />
                                                        <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                                        <input type="hidden" name="currency_code" defaultValue="USD" />
                                                        <input type="hidden" name="return" defaultValue=" " />
                                                        <input type="hidden" name="cancel_return" defaultValue=" " />
                                                        <input type="submit" name="submit" defaultValue="Add to cart" className="button" />
                                                    </fieldset>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="w3l-specilamk">
                                        <div className="speioffer-agile">
                                            <a href="single2.html">
                                                <img src="images/s3.jpg" alt />
                                            </a>
                                        </div>
                                        <div className="product-name-w3l">
                                            <h4>
                                                <a href="single2.html">Mechanical Keyboard White</a>
                                            </h4>
                                            <div className="w3l-pricehkj">
                                                <h6>&#8377;2600.00</h6>
                                                <p>Save &#8377;300.00</p>
                                            </div>
                                            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                <form action="#" method="post">
                                                    <fieldset>
                                                        <input type="hidden" name="cmd" defaultValue="_cart" />
                                                        <input type="hidden" name="add" defaultValue={1} />
                                                        <input type="hidden" name="business" defaultValue=" " />
                                                        <input type="hidden" name="item_name" defaultValue="Surf Excel Liquid, 1.02L" />
                                                        <input type="hidden" name="amount" defaultValue={187.00} />
                                                        <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                                        <input type="hidden" name="currency_code" defaultValue="USD" />
                                                        <input type="hidden" name="return" defaultValue=" " />
                                                        <input type="hidden" name="cancel_return" defaultValue=" " />
                                                        <input type="submit" name="submit" defaultValue="Add to cart" className="button" />
                                                    </fieldset>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="w3l-specilamk">
                                        <div className="speioffer-agile">
                                            <a href="single.html">
                                                <img src="images/s8.jpg" alt />
                                            </a>
                                        </div>
                                        <div className="product-name-w3l">
                                            <h4>
                                                <a href="single.html">Headphone White</a>
                                            </h4>
                                            <div className="w3l-pricehkj">
                                                <h6>&#8377;9000.00</h6>
                                                <p>Save &#8377;1000.00</p>
                                            </div>
                                            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                <form action="#" method="post">
                                                    <fieldset>
                                                        <input type="hidden" name="cmd" defaultValue="_cart" />
                                                        <input type="hidden" name="add" defaultValue={1} />
                                                        <input type="hidden" name="business" defaultValue=" " />
                                                        <input type="hidden" name="item_name" defaultValue="Cadbury Choclairs, 655.5g" />
                                                        <input type="hidden" name="amount" defaultValue={160.00} />
                                                        <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                                        <input type="hidden" name="currency_code" defaultValue="USD" />
                                                        <input type="hidden" name="return" defaultValue=" " />
                                                        <input type="hidden" name="cancel_return" defaultValue=" " />
                                                        <input type="submit" name="submit" defaultValue="Add to cart" className="button" />
                                                    </fieldset>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="w3l-specilamk">
                                        <div className="speioffer-agile">
                                            <a href="single2.html">
                                                <img src="images/s6.jpg" alt />
                                            </a>
                                        </div>
                                        <div className="product-name-w3l">
                                            <h4>
                                                <a href="single2.html">Headphone Black</a>
                                            </h4>
                                            <div className="w3l-pricehkj">
                                                <h6>&#8377;7000.60</h6>
                                                <p>Save &#8377;3000.00</p>
                                            </div>
                                            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                <form action="#" method="post">
                                                    <fieldset>
                                                        <input type="hidden" name="cmd" defaultValue="_cart" />
                                                        <input type="hidden" name="add" defaultValue={1} />
                                                        <input type="hidden" name="business" defaultValue=" " />
                                                        <input type="hidden" name="item_name" defaultValue="Fair & Lovely, 80 g" />
                                                        <input type="hidden" name="amount" defaultValue="121.60" />
                                                        <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                                        <input type="hidden" name="currency_code" defaultValue="USD" />
                                                        <input type="hidden" name="return" defaultValue=" " />
                                                        <input type="hidden" name="cancel_return" defaultValue=" " />
                                                        <input type="submit" name="submit" defaultValue="Add to cart" className="button" />
                                                    </fieldset>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/* <li>
                                    <div className="w3l-specilamk">
                                        <div className="speioffer-agile">
                                            <a href="single.html">
                                                <img src="images/s5.jpg" alt />
                                            </a>
                                        </div>
                                        <div className="product-name-w3l">
                                            <h4>
                                                <a href="single.html">Sprite, 2.25L (Pack of 2)</a>
                                            </h4>
                                            <div className="w3l-pricehkj">
                                                <h6>&#8377;180.00</h6>
                                                <p>Save &#8377;30.00</p>
                                            </div>
                                            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                <form action="#" method="post">
                                                    <fieldset>
                                                        <input type="hidden" name="cmd" defaultValue="_cart" />
                                                        <input type="hidden" name="add" defaultValue={1} />
                                                        <input type="hidden" name="business" defaultValue=" " />
                                                        <input type="hidden" name="item_name" defaultValue="Sprite, 2.25L (Pack of 2)" />
                                                        <input type="hidden" name="amount" defaultValue={180.00} />
                                                        <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                                        <input type="hidden" name="currency_code" defaultValue="USD" />
                                                        <input type="hidden" name="return" defaultValue=" " />
                                                        <input type="hidden" name="cancel_return" defaultValue=" " />
                                                        <input type="submit" name="submit" defaultValue="Add to cart" className="button" />
                                                    </fieldset>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </li> */}
                                <li>
                                    <div className="w3l-specilamk">
                                        <div className="speioffer-agile">
                                            <a href="single2.html">
                                                <img src="images/s9.jpg" alt />
                                            </a>
                                        </div>
                                        <div className="product-name-w3l">
                                            <h4>
                                                <a href="single2.html">Xbox Controller Black</a>
                                            </h4>
                                            <div className="w3l-pricehkj">
                                                <h6>&#8377;7000.00</h6>
                                                <p>Save &#8377;940.00</p>
                                            </div>
                                            <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                                                <form action="#" method="post">
                                                    <fieldset>
                                                        <input type="hidden" name="cmd" defaultValue="_cart" />
                                                        <input type="hidden" name="add" defaultValue={1} />
                                                        <input type="hidden" name="business" defaultValue=" " />
                                                        <input type="hidden" name="item_name" defaultValue="Lakme Eyeconic Kajal, 0.35 g" />
                                                        <input type="hidden" name="amount" defaultValue={153.00} />
                                                        <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                                        <input type="hidden" name="currency_code" defaultValue="USD" />
                                                        <input type="hidden" name="return" defaultValue=" " />
                                                        <input type="hidden" name="cancel_return" defaultValue=" " />
                                                        <input type="submit" name="submit" defaultValue="Add to cart" className="button" />
                                                    </fieldset>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* //special offers */}
                {/* newsletter */}
                <div className="footer-top">
                    <div className="container-fluid">
                        <div className="col-xs-8 agile-leftmk">
                            <h2>Get Latest Tech Gadget delivered from local stores Now</h2>
                            <p>Free Delivery on your first order!</p>
                            <form action="#" method="post">
                                <input type="email" placeholder="E-mail" name="email" required />
                                <input type="submit" defaultValue="Subscribe" />
                            </form>
                            <div className="newsform-w3l">
                                <span className="fa fa-envelope-o" aria-hidden="true" />
                            </div>
                        </div>
                        <div className="col-xs-4 w3l-rightmk">
                            <img src="images/tab3.png" alt=" " />
                        </div>
                        <div className="clearfix" />
                    </div>
                </div>
                {/* //newsletter */}
                {/* footer */}
                <footer>
                    <div className="container">
                        {/* footer first section */}
                        <p className="footer-main">
                            <span>"Tech Shoppy"</span> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
                            magni dolores eos qui ratione voluptatem sequi nesciunt.Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                            beatae vitae dicta sunt explicabo.</p>
                        {/* //footer first section */}
                        {/* footer second section */}
                        <div className="w3l-grids-footer">
                            <div className="col-xs-4 offer-footer">
                                <div className="col-xs-4 icon-fot">
                                    <span className="fa fa-map-marker" aria-hidden="true" />
                                </div>
                                <div className="col-xs-8 text-form-footer">
                                    <h3>Track Your Order</h3>
                                </div>
                                <div className="clearfix" />
                            </div>
                            <div className="col-xs-4 offer-footer">
                                <div className="col-xs-4 icon-fot">
                                    <span className="fa fa-refresh" aria-hidden="true" />
                                </div>
                                <div className="col-xs-8 text-form-footer">
                                    <h3>Free &amp; Easy Returns</h3>
                                </div>
                                <div className="clearfix" />
                            </div>
                            <div className="col-xs-4 offer-footer">
                                <div className="col-xs-4 icon-fot">
                                    <span className="fa fa-times" aria-hidden="true" />
                                </div>
                                <div className="col-xs-8 text-form-footer">
                                    <h3>Online cancellation </h3>
                                </div>
                                <div className="clearfix" />
                            </div>
                            <div className="clearfix" />
                        </div>
                        {/* //footer second section */}
                        {/* footer third section */}
                        <div className="footer-info w3-agileits-info">
                            {/* footer categories */}
                            <div className="col-sm-5 address-right">
                                <div className="col-xs-6 footer-grids">
                                    <h3>Products</h3>
                                    <ul>
                                        <li>
                                            <a href="product.html">Keyboards</a>
                                        </li>
                                        <li>
                                            <a href="product.html">Gaming</a>
                                        </li>
                                        <li>
                                            <a href="product.html">GPU</a>
                                        </li>
                                        <li>
                                            <a href="product2.html">Smartphones</a>
                                        </li>
                                        <li>
                                            <a href="product.html">Smartwatches</a>
                                        </li>
                                        <li>
                                            <a href="product2.html">Laptops</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-xs-6 footer-grids agile-secomk">
                                    <ul>
                                        <li>
                                            <a href="product.html">Headphones</a>
                                        </li>
                                        <li>
                                            <a href="product.html">Speakers</a>
                                        </li>
                                        <li>
                                            <a href="product.html">RAM - ROM</a>
                                        </li>
                                        <li>
                                            <a href="product.html">raspberry pi</a>
                                        </li>
                                        <li>
                                            <a href="product2.html">HackRF</a>
                                        </li>
                                        <li>
                                            <a href="product.html">Hacking Devices</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="clearfix" />
                            </div>
                            {/* //footer categories */}
                            {/* quick links */}
                            <div className="col-sm-5 address-right">
                                <div className="col-xs-6 footer-grids">
                                    <h3>Quick Links</h3>
                                    <ul>
                                        <li>
                                            <a href="about.html">About Us</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact Us</a>
                                        </li>
                                        <li>
                                            <a href="help.html">Help</a>
                                        </li>
                                        <li>
                                            <a href="faqs.html">Faqs</a>
                                        </li>
                                        <li>
                                            <a href="terms.html">Terms of use</a>
                                        </li>
                                        <li>
                                            <a href="privacy.html">Privacy Policy</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-xs-6 footer-grids">
                                    <h3>Get in Touch</h3>
                                    <ul>
                                        <li>
                                            <i className="fa fa-map-marker" /> 123 Sebastian, USA.</li>
                                        <li>
                                            <i className="fa fa-mobile" /> 333 222 3333 </li>
                                        <li>
                                            <i className="fa fa-phone" /> +222 11 4444 </li>
                                        <li>
                                            <i className="fa fa-envelope-o" />
                                            <a href="mailto:example@mail.com"> mail@example.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* //quick links */}
                            {/* social icons */}
                            <div className="col-sm-2 footer-grids  w3l-socialmk">
                                <h3>Follow Us on</h3>
                                <div className="social">
                                    <ul>
                                        <li>
                                            <a className="icon fb" href="#">
                                                <i className="fa fa-facebook" />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="icon tw" href="#">
                                                <i className="fa fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="icon gp" href="#">
                                                <i className="fa fa-google-plus" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="agileits_app-devices">
                                    <h5>Download the App</h5>
                                    <a href="#">
                                        <img src="images/1.png" alt />
                                    </a>
                                    <a href="#">
                                        <img src="images/2.png" alt />
                                    </a>
                                    <div className="clearfix"> </div>
                                </div>
                            </div>
                            {/* //social icons */}
                            <div className="clearfix" />
                        </div>
                        {/* //footer third section */}
                        {/* footer fourth section (text) */}
                        <div className="agile-sometext">
                            {/* <div className="sub-some">
                                <h5>Online Grocery Shopping</h5>
                                <p>Order online. All your favourite products from the low price online supermarket for grocery home delivery in Delhi,
                                    Gurgaon, Bengaluru, Mumbai and other cities in India. Lowest prices guaranteed on Patanjali, Aashirvaad, Pampers, Maggi,
                                    Saffola, Huggies, Fortune, Nestle, Amul, MamyPoko Pants, Surf Excel, Ariel, Vim, Haldiram's and others.</p>
                            </div> */}
                            <div className="sub-some">
                                <h5>Shop online with the best deals &amp; offers</h5>
                                <p>Now Get Upto 40% Off On Tech Products Shown On The Offer Page. </p>
                            </div>
                            {/* brands */}
                            <div className="sub-some">
                                <h5>Famous Tech Brands</h5>
                                <ul>
                                    <li>
                                        <a href="product.html">Apple</a>
                                    </li>
                                    <li>
                                        <a href="product.html">Microsoft</a>
                                    </li>
                                    <li>
                                        <a href="product.html">Google</a>
                                    </li>
                                    <li>
                                        <a href="product.html">Samsung</a>
                                    </li>
                                    <li>
                                        <a href="product.html">Sony</a>
                                    </li>
                                    <li>
                                        <a href="product.html">Intel</a>
                                    </li>
                                    <li>
                                        <a href="product.html">AMD</a>
                                    </li>
                                    <li>
                                        <a href="product.html">NVIDIA</a>
                                    </li>
                                    <li>
                                        <a href="product2.html">Dell</a>
                                    </li>
                                    <li>
                                        <a href="product2.html">HP</a>
                                    </li>
                                    <li>
                                        <a href="product2.html">Lenovo</a>
                                    </li>
                                    <li>
                                        <a href="product2.html">Asus</a>
                                    </li>
                                    <li>
                                        <a href="product2.html">Cisco</a>
                                    </li>
                                    <li>
                                        <a href="product.html">IBM</a>
                                    </li>
                                    <li>
                                        <a href="product2.html">Oracle</a>
                                    </li>
                                    <li>
                                        <a href="product2.html">Adobe</a>
                                    </li>
                                    <li>
                                        <a href="product.html">Tesla</a>
                                    </li>
                                    <li>
                                        <a href="product.html">Amazon</a>
                                    </li>
                                    <li>
                                        <a href="product.html">Facebook</a>
                                    </li>
                                    <li>
                                        <a href="product.html">Twitter</a>
                                    </li>
                                    <li>
                                        <a href="product.html">Netflix</a>
                                    </li>
                                    <li>
                                        <a href="product.html">Uber</a>
                                    </li>
                                    <li>
                                        <a href="product.html">SpaceX</a>
                                    </li>
                                    <li>
                                        <a href="product.html">Tesla</a>
                                    </li>
                                    <li>
                                        <a href="product.html">LinkedIn</a>
                                    </li>
                                    <li>
                                        <a href="product2.html">Cisco</a>
                                    </li>
                                    <li>
                                        <a href="product2.html">Intel</a>
                                    </li>
                                    <li>
                                        <a href="product.html">IBM</a>
                                    </li>
                                    <li>
                                        <a href="product2.html">Oracle</a>
                                    </li>
                                    <li>
                                        <a href="product2.html">VMware</a>
                                    </li>
                                </ul>
                            </div>

                            {/* //brands */}
                            {/* payment */}
                            <div className="sub-some child-momu">
                                <h5>Payment Method</h5>
                                <ul>
                                    <li>
                                        <img src="images/pay2.png" alt />
                                    </li>
                                    <li>
                                        <img src="images/pay5.png" alt />
                                    </li>
                                    <li>
                                        <img src="images/pay1.png" alt />
                                    </li>
                                    <li>
                                        <img src="images/pay4.png" alt />
                                    </li>
                                    <li>
                                        <img src="images/pay6.png" alt />
                                    </li>
                                    <li>
                                        <img src="images/pay3.png" alt />
                                    </li>
                                    <li>
                                        <img src="images/pay7.png" alt />
                                    </li>
                                    <li>
                                        <img src="images/pay8.png" alt />
                                    </li>
                                    <li>
                                        <img src="images/pay9.png" alt />
                                    </li>
                                </ul>
                            </div>
                            {/* //payment */}
                        </div>
                        {/* //footer fourth section (text) */}
                    </div>
                </footer>
                {/* //footer */}
                {/* copyright */}

            </div>

        </>
    );
}
export default Home;