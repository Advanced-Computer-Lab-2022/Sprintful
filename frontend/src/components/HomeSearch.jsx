import React, { useState } from "react";
import { useEffect } from 'react';
import axios from 'axios';

const HomeSearch = () => {

    return (
        <form id="search-form" name="gs" method="submit" role="search" action="#">
            <div className="row">
                <div className="col-lg-3 align-self-center">
                    <fieldset>
                        <select name="area" className="form-select" aria-label="Area" id="chooseCategory" onchange="this.form.click()">
                            <option selected>All Areas</option>
                            <option value="New Village">New Village</option>
                            <option value="Old Town">Old Town</option>
                            <option value="Modern City">Modern City</option>
                        </select>
                    </fieldset>
                </div>
                <div className="col-lg-3 align-self-center">
                    <fieldset>
                        <input type="address" name="address" className="searchText" placeholder="Enter a location" autocomplete="on" required />
                    </fieldset>
                </div>
                <div className="col-lg-3 align-self-center">
                    <fieldset>
                        <select name="price" className="form-select" aria-label="Default select example" id="chooseCategory" onchange="this.form.click()">
                            <option selected>Price Range</option>
                            <option value="$100 - $250">$100 - $250</option>
                            <option value="$250 - $500">$250 - $500</option>
                            <option value="$500 - $1000">$500 - $1,000</option>
                            <option value="$1000+">$1,000 or more</option>
                        </select>
                    </fieldset>
                </div>
                <div className="col-lg-3">
                    <fieldset>
                        <button className="main-button"><i className="fa fa-search"></i> Search Now</button>
                    </fieldset>
                </div>
            </div>
        </form>)
}

export default HomeSearch;