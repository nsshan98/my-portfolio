import "./PricingCardsStyle.css"

import React from 'react'
import { Link } from "react-router-dom"

const PricingCards = () => {
  return (
    <div>
        <div className="pricing">
            <div className="card-container">
                <div className="card">
                    <h3>Basic</h3>
                    <span className="bar"></span>
                    <p className="amount">$ 100</p>
                    <p> - 3 Days -</p>
                    <p> - 3 Pages -</p>
                    <p> - Responsive Design -</p>
                    <Link to="/contact" className="btn">Order Now</Link>
                </div>

                <div className="card">
                    <h3>Starter</h3>
                    <span className="bar"></span>
                    <p className="amount">$ 100</p>
                    <p> - 3 Days -</p>
                    <p> - 3 Pages -</p>
                    <p> - Responsive Design -</p>
                    <Link to="/contact" className="btn">Order Now</Link>
                </div>

                <div className="card">
                    <h3>Professional</h3>
                    <span className="bar"></span>
                    <p className="amount">$ 100</p>
                    <p> - 3 Days -</p>
                    <p> - 3 Pages -</p>
                    <p> - Responsive Design -</p>
                    <Link to="/contact" className="btn">Order Now</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PricingCards
