import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import {BsSearch}  from 'react-icons/bs'

export const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">    {/* py is padding top and bottom */}
      <div className="container-xxl">
        <div className="row">
          <div className="col-6">
            <p className="text-white mb-0">   {/* mb is margin bottom*/ }
              Free Shipping Over $100 & Free Returns</p>
          </div>
          <div className="col-6">
            <p className="text-end text-white mb-0">    {/*text-end is right align */}
              Hotline: <a className="text-white" href="tel:+91 8556022039">+91 8556022039</a> </p>   {/* text-white here also as it won't take from parent*/}
          </div>
        </div>

      </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white">Dev Corner</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input type="text" class="form-control py-2" placeholder="Search Product here..." aria-label="Search Product here..." aria-describedby="basic-addon2"/>
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6"/>
                  </span>
              </div>
            </div>
            <div className="col-5"></div>
          </div>
        </div>
      </header>
    </>
  )
}
