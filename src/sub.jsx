import React from 'react';

import SVG from './mastercard_logo.svg';
import './sub.styles.scss';

const SubscriptionUI = () => (
  <div className="subscription-page">
    <div className="subscription-container">
      <div className="subscription__block">
        <h2>Plan Overview</h2>
      </div>

      <div className="subscription__block">
        <div className="subscription__block--left">
          <p>Plan</p>
        </div>
        <div className="subscription__block--right">
          <p className="bold">Basic Plan</p>
          <p className="color--dark-blue">N3,000 per month</p>
          <button type="submit">Cancel Plan</button>
        </div>
      </div>

      <div className="subscription__block">
        <div className="subscription__block--left">
          <p>Next Billing Cycle</p>
        </div>
        <div className="subscription__block--right">
          <p className="color--dark-blue">
            Your next charge of N3,000 will be on June 12, 2020
          </p>
        </div>
      </div>

      <div className="subscription__block">
        <div className="subscription__block--left">
          <p>Payment Method</p>
        </div>
        <div className="subscription__block--right">
          <div className="payment">
            <div className="card_details">
              <div className="card_details--logo">
                <img src={SVG} alt="Master Card Logo" />
                <p>...ending in 4678. Expires 10/22</p>
              </div>
              <p className="bold">Primary</p>
            </div>
          </div>
          <a href="#">Add a payment method</a>
        </div>
      </div>

      <div className="subscription__block">
        <div className="subscription__block--left">
          <p>Billing Details</p>
        </div>
        <div className="subscription__block--right">
          <p className="color--dark-blue">Access Bank Plc</p>
          <p className="color--dark-blue">hello@accessbank.com</p>
        </div>
      </div>
    </div>
  </div>
);

export default SubscriptionUI;
