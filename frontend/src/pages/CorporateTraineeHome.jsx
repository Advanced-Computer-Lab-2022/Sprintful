import CorporateTraineeHomeNavBar from '../components/CorporateTraineeHomeNavBar';
import CorporateTraineeSearch from '../components/CorporateTraineeSearch';
export default function CorporateTraineeHome() {
    return (

        <div>

            {/* <!-- ***** Preloader Start ***** --> */}
            <div id="js-preloader" className="js-preloader">
                <div className="preloader-inner">
                    <span className="dot"></span>
                    <div className="dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            {/* <!-- ***** Preloader End ***** --> */}

            {/* <!-- ***** Header Area Start ***** --> */}
            <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <CorporateTraineeHomeNavBar />
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- ***** Header Area End ***** --> */}

            <div className="main-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="top-text header-text">
                                <h6>Over 36,500+ Courses</h6>
                                <h2>Find Interesting Online Courses </h2>
                            </div>
                        </div>
                        <div className="col-lg-10 offset-lg-1">
                            <ul className="categories">
                                <li><a href="category.html"><span className="icon"><img src="assets/images/search-icon-01.png" alt="Home" /></span> Apartments</a></li>
                                <li><a href="listing.html"><span className="icon"><img src="assets/images/search-icon-02.png" alt="Food" /></span> Food &amp; Life</a></li>
                                <li><a href="#"><span className="icon"><img src="assets/images/search-icon-03.png" alt="Vehicle" /></span> Cars</a></li>
                                <li><a href="#"><span className="icon"><img src="assets/images/search-icon-04.png" alt="Shopping" /></span> Shopping</a></li>
                                <li><a href="#"><span className="icon"><img src="assets/images/search-icon-05.png" alt="Travel" /></span> Traveling</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-12">
                           <CorporateTraineeSearch/> 
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="popular-categories">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading">
                                <h2>Popular Categories</h2>
                                <h6>Check Them Out</h6>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="naccs">
                                <div className="grid">
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <div className="menu">
                                                <div className="first-thumb active">
                                                    <div className="thumb">
                                                        <span className="icon"><img src="assets/images/search-icon-01.png" alt="" /></span>
                                                        Apartments
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="thumb">
                                                        <span className="icon"><img src="assets/images/search-icon-02.png" alt="" /></span>
                                                        Food &amp; Life
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="thumb">
                                                        <span className="icon"><img src="assets/images/search-icon-03.png" alt="" /></span>
                                                        Cars
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="thumb">
                                                        <span className="icon"><img src="assets/images/search-icon-04.png" alt="" /></span>
                                                        Shopping
                                                    </div>
                                                </div>
                                                <div className="last-thumb">
                                                    <div className="thumb">
                                                        <span className="icon"><img src="assets/images/search-icon-05.png" alt="" /></span>
                                                        Traveling
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-9 align-self-center">
                                            <ul className="nacc">
                                                <li className="active">
                                                    <div>
                                                        <div className="thumb">
                                                            <div className="row">
                                                                <div className="col-lg-5 align-self-center">
                                                                    <div className="left-text">
                                                                        <h4>One Of The Most Trending Stuffs Right Now!</h4>
                                                                        <p>Plot Listing is a responsive Bootstrap 5 website template that included 4 different HTML pages. This template is provided by TemplateMo website. You can apply this layout for your static or dynamic CMS websites.</p>
                                                                        <div className="main-white-button"><a href="#"><i className="fa fa-eye"></i> Discover More</a></div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-7 align-self-center">
                                                                    <div className="right-image">
                                                                        <img src="assets/images/tabs-image-01.jpg" alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div>
                                                        <div className="thumb">
                                                            <div className="row">
                                                                <div className="col-lg-5 align-self-center">
                                                                    <div className="left-text">
                                                                        <h4>Food and Lifestyle category is here</h4>
                                                                        <p>You can feel free to download, edit and apply this template for your website. Please tell your friends about TemplateMo website.</p>
                                                                        <div className="main-white-button"><a href="#"><i className="fa fa-eye"></i> Explore More</a></div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-7 align-self-center">
                                                                    <div className="right-image">
                                                                        <img src="assets/images/tabs-image-02.jpg" alt="Foods on the table" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div>
                                                        <div className="thumb">
                                                            <div className="row">
                                                                <div className="col-lg-5 align-self-center">
                                                                    <div className="left-text">
                                                                        <h4>Best car rentals for your trips!</h4>
                                                                        <p>Did you know? You can get the best free HTML templates on Too CSS blog. Visit the blog pages and explore fresh and latest website templates.</p>
                                                                        <div className="main-white-button"><a href="listing.html"><i className="fa fa-eye"></i> More Listing</a></div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-7 align-self-center">
                                                                    <div className="right-image">
                                                                        <img src="assets/images/tabs-image-03.jpg" alt="cars in the city" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div>
                                                        <div className="thumb">
                                                            <div className="row">
                                                                <div className="col-lg-5 align-self-center">
                                                                    <div className="left-text">
                                                                        <h4>Shopping List: Images from Unsplash</h4>
                                                                        <p>Image credits go to Unsplash website that provides free stock photos for anyone. Images used in this Plot Listing template are from Unsplash.</p>
                                                                        <div className="main-white-button"><a href="#"><i className="fa fa-eye"></i> Discover More</a></div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-7 align-self-center">
                                                                    <div className="right-image">
                                                                        <img src="assets/images/tabs-image-04.jpg" alt="Shopping Girl" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div>
                                                        <div className="thumb">
                                                            <div className="row">
                                                                <div className="col-lg-5 align-self-center">
                                                                    <div className="left-text">
                                                                        <h4>Information and Safety Tips for Traveling</h4>
                                                                        <p>You are allowed to use this template for your commercial websites. You are NOT allowed to redistribute this template ZIP file on any Free CSS collection websites.</p>
                                                                        <div className="main-white-button"><a rel="nofollow" href="https://templatemo.com/contact"><i className="fa fa-eye"></i> Read More</a></div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-7 align-self-center">
                                                                    <div className="right-image">
                                                                        <img src="assets/images/tabs-image-05.jpg" alt="Traveling Beach" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="about">
                                <div className="logo">
                                    <img src="assets/images/black-logo.png" alt="Plot Listing" />
                                </div>
                                <p>If you consider that <a rel="nofollow" href="https://templatemo.com/tm-564-plot-listing" target="_parent">Plot Listing template</a> is useful for your website, please <a rel="nofollow" href="https://www.paypal.me/templatemo" target="_blank">support us</a> a little via PayPal.</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="helpful-links">
                                <h4>Helpful Links</h4>
                                <div className="row">
                                    <div className="col-lg-6 col-sm-6">
                                        <ul>
                                            <li><a href="#">Categories</a></li>
                                            <li><a href="#">Reviews</a></li>
                                            <li><a href="#">Listing</a></li>
                                            <li><a href="#">Contact Us</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">Awards</a></li>
                                            <li><a href="#">Useful Sites</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-us">
                                <h4>Contact Us</h4>
                                <p>27th Street of New Town, Digital Villa</p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <a href="#">010-020-0340</a>
                                    </div>
                                    <div className="col-lg-6">
                                        <a href="#">090-080-0760</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="sub-footer">
                                <p>Copyright © 2021 Plot Listing Co., Ltd. All Rights Reserved.
                                    <br />
                                    Design: <a rel="nofollow" href="https://templatemo.com" title="CSS Templates">TemplateMo</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}