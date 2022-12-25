import React from 'react'
import './reviews.css'

export default function Reviews() {
  return (
    
    <div id="shopify-product-reviews">
        <div className="spr-container">
          <div className="spr-header">
            <h2 className="spr-header-title">Customer Reviews</h2>
            <div className="spr-summary">
              <span className="spr-starrating spr-summary-starrating">
                <i className="spr-icon spr-icon-star" />
                <i className="spr-icon spr-icon-star" />
                <i className="spr-icon spr-icon-star-half" />
                <i className="spr-icon spr-icon-star-empty" />
                <i className="spr-icon spr-icon-star-empty" />
              </span>
              <span className="spr-summary-caption">No reviews yet</span>
              <span className="spr-summary-actions">
                <a href="#" className="spr-summary-actions-newreview">Write a review</a>
              </span>
            </div> {/* /.spr-summary */}
          </div> {/* /.spr-header */}
          <div className="spr-content">
            <div className="spr-form">
              <form className="new-review-form">
                <h3 className="spr-form-title">Write a review</h3>
                <fieldset className="spr-form-contact">
                  <div className="spr-form-contact-name">
                    <label className="spr-form-label" htmlFor="review_author">Name</label>
                    <input className="spr-form-input spr-form-input-text" id="review_author" type="text" name="review[author]" defaultValue placeholder="Enter your name" />
                  </div>
                  <div className="spr-form-contact-email">
                    <label className="spr-form-label" htmlFor="review_email">Email</label>
                    <input className="spr-form-input spr-form-input-email" id="review_email" type="email" name="review[email]" defaultValue placeholder="john.smith@example.com" />
                  </div>
                </fieldset> {/* /.spr-form-contact */}
                <fieldset className="spr-form-review">
                  <div className="spr-form-review-rating">
                    <label className="spr-form-label" htmlFor="review[rating]">Rating</label>
                    <div className="spr-form-input spr-starrating ">
                      <a href="#" className="spr-icon spr-icon-star spr-icon-star-empty">&nbsp;</a>
                      <a href="#" className="spr-icon spr-icon-star spr-icon-star-empty">&nbsp;</a>
                      <a href="#" className="spr-icon spr-icon-star spr-icon-star-empty">&nbsp;</a>
                      <a href="#" className="spr-icon spr-icon-star spr-icon-star-empty">&nbsp;</a>
                      <a href="#" className="spr-icon spr-icon-star spr-icon-star-empty">&nbsp;</a>
                    </div>
                  </div> {/* /.spr-form-review-rating */}
                  <div className="spr-form-review-title">
                    <label className="spr-form-label" htmlFor="review_title">Review Title</label>
                    <input className="spr-form-input spr-form-input-text" id="review_title" type="text" name="review[title]" defaultValue placeholder="Give your review a title" />
                  </div> {/* /.spr-form-review-title */}
                  <div className="spr-form-review-body">
                    <label className="spr-form-label" htmlFor="review_body">Body of Review <span className="spr-form-review-body-charactersremaining">(1500)</span></label>
                    <div className="spr-form-input">
                      <textarea className="spr-form-input spr-form-input-textarea" id="review_body" name="review[body]" rows={10} placeholder="Write your comments here" defaultValue={""} />
                    </div>
                  </div> {/* /.spr-form-review-body */}
                </fieldset> {/* /.spr-form-review */}
                <fieldset className="spr-form-actions">
                  <input type="submit" className="spr-button spr-button-primary button button-primary btn btn-primary" defaultValue="Submit Review" />
                  <input type="button" className="spr-button button btn" defaultValue="Cancel" />
                </fieldset> {/* /.spr-form-actions */}
              </form>
            </div>
            <div className="spr-reviews">
              <div className="spr-review">
                <div className="spr-review-header">
                  <span className="spr-starratings spr-review-header-starratings">
                    <i className="spr-icon spr-icon-star" />
                    <i className="spr-icon spr-icon-star" />
                    <i className="spr-icon spr-icon-star" />
                    <i className="spr-icon spr-icon-star-empty" />
                    <i className="spr-icon spr-icon-star-empty" />
                  </span>
                  <h3 className="spr-review-header-title">I love this product!</h3>
                  <span className="spr-review-header-byline"><strong>John Appleseed</strong> on <strong>Jan 26, 2014</strong></span>
                </div> {/* /.spr-review-header */}
                <div className="spr-review-content">
                  <p className="spr-review-content-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porttitor aliquam lorem, rhoncus tincidunt massa condimentum nec.</p>
                </div> {/* /.spr-review-content */}
                <div className="spr-review-footer">
                  <a href="#" className="spr-review-reportreview">Report as Inappropriate</a>
                </div> {/* /.spr-review-footer */}
              </div> {/* /.spr-review */}
            </div> {/* /.spr-reviews */}
          </div> {/* /.spr-content */}
        </div> {/* /.spr-container */}
      </div> )} {/* /#shopify-product-reviews */}
  

