export default function Contract() {

    const style1 ={ //.terms-container
        fontFamily: "'Open Sans', sans-serif",
        color: "#262626",
        marginLeft: "300px", 
        lineHeight: "25px"

      }
      
     const style2= { //.terms-title h1
        fontSize: "18px",
        fontFamily: "RobotoCondensed-Bold",
        textAlign: "center",
        fontWeight: "bold",
        letterSpacing: "10px",
        lineHeight: "80px"

      }
      
      const style3= { //.terms-body h4
        color: "#EB573D",
        fontSize: "14px",
        lineHeight: "25px",
        marginTop: "20px",
        marginBottom: "20px"


      }
      const style4= { // .terms-body h3
        fontFamily: "RobotoCondensed-Bold",
        color: "#262626",
        fontWeight: "bold",
        textAlign: "left",
        fontSize: "13px",
        lineHeight: "25px",
      }
      
      const style5=  { //.terms-body p
        fontSize: "12px",
        lineHeight: "25px",
      }
      
      const style6= { //.terms-body a
        color: "#EB573D"
      }
      
    //   .terms-body a:hover{
    //     color: #EB573D;
    //     text-decoration: none;
    //   }
      
      const style7 ={ //.terms_footer h3 
        marginTop: "60px",
        marginBottom: "125px",
        textAlign: "center",
        fontWeight: "bold",
        letterSpacing: "3px",
        lineHeight: "1.5",
        color: "#262626"
      }
      
    //   .terms_footer h3 a:link {
    //     color: #EB573D; 
    //     text-decoration: none;
    //   }

    return (
        <div>
            <main className="header-offset content-wrapper about-wrapper">
            <div className="terms-container" style={style1 }>
                <div className="row">
                <div className="col-sm-8 col-sm-offset-2">
                    <section className="terms-title">
                    <h1 style={style2}>Terms &amp; Conditions</h1>
                    <hr />
                    </section>
                    <div className="terms-body">
                    <h4 style={style3}><strong>Welcome to The Main Label. Please review the following basic terms that govern your use of, and purchase of, products from our site. Please note that your use of our site constitutes your agreement to follow and be bound by those terms.</strong></h4>    
                    <hr />
                    <h3 style={style4} >General</h3>
                    <p style={style5}>
                        By using our website, you agree to the Terms of Use. We may change or update these terms so please check this page regularly. We do not represent or warrant that the information on our web site is accurate, complete, or current. This includes pricing and availability information. We reserve the right to correct any errors or omissions, and to change or update information at any time without giving prior notice.
                    </p>
                    <hr />
                    <h3 style={style4}>Correction of Errors and Inaccuracies</h3>
                    <p style={style5}>The information on the site may contain typographical errors or inaccuracies and may not be complete or current. The Main Label therefore reserves the right to correct any errors, inaccuracies or omissions and to change or update information at any time with or without prior notice (including after you have submitted your order). Please note that such errors, inaccuracies or omissions may relate to product description, pricing, product availability, or otherwise.
                    </p>
                    <hr />
                    <h3 style={style4}>Tax</h3>
                    <p style={style5}>As a seller, you are responsible for collecting and paying taxes associated with any profits made through The Main Label. 
                        The Main Label will issue 1099-K forms to all sellers in the United States who receive more than $600.00 or $2,000.00 in profits to comply with IRS requirements. 
                        All forms will be mailed to the address you’ve indicated in your profile by January 31 for the previous year.</p>
                    <hr />
                    <h3 style={style4}>Return Policy</h3>
                    <p style={style5}>
                        Since we only manufacture what is ordered, The Main Label does not accept returns or exchanges at this time. 
                        All instant purchases should be discussed directly with the seller you purchased from as they are responsible for their own shop policies.
                        If you are unhappy with your order for any reason at all, please contact The Main Label at <a style={style6} href="email">customerservice@themainlabel.com</a> and we’ll work with you to make it right.
                        We will not accept any packages sent without authorization, any shipments received that have not been authorized will be refused/shipped back.
                        Please make sure that you have carefully reviewed your order prior to finalizing your purchase.
                    </p>
                    <hr />
                    <h3 style={style4}>Cancellations </h3>
                    <p style={style5}>
                        If you decide that you no longer want your order for any reason you may cancel it as long as the campaign period is still active. However, once a campaign ends, we are unable to cancel an order as the information has already been sent to the printer for manufacturing and fulfillment. 
                    </p>
                    <hr />
                    <h3 style={style4}>Colors</h3>
                    <p style={style5}>
                        We have made the strongest of efforts to display all product colors that appear on the Site as accurately as possible. However, as the actual colors you see will depend on your monitor and/or other technological circumstance, we cannot and do not guarantee that your monitor's display of any color will be accurate.
                    </p>
                    <hr />
                    <h3 style={style4}>Product Availability</h3>
                    <p style={style5}>Although availability may be indicated on our site, we cannot guarantee product availability or immediate delivery. We reserve the right, without liability or prior notice to revise, discontinue, or cease to make available any or all products or to cancel any order.</p>
                    <hr />
                    <h3 style={style4}>Shipping &amp; Delivery</h3>
                    <p style={style5}>
                        For all orders within North America, please allow approximately 14 business days from the time a campaign ends (please note this is different from the time of purchase) to receive your order.
                        For all international orders, please allow approximately 21 business days from the time a campaign ends (please note this is different from the time of purchase) to receive your order. 
                        You will receive an email from The Main Label when your order has been confirmed.
                        If you still have not received your purchase after the above mentioned times, please notify <a  style={style6} href="email">customerservice@themainlabel.com</a>.      
                    </p><div className="container terms_footer"> <h3 style={style7}>Can't find what you're looking for? <a style={style6}  href="www.themainalabel.com">Email us</a></h3>
                    </div>   
                    </div>   
                </div>
                </div>
            </div>
            </main>
        </div>
)    
}