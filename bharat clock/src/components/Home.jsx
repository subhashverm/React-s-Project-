import React from 'react';
function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1>Welcome to ShopEase</h1>
        <p>Your one-stop shop for the best deals and latest trends!</p>
        <a href="/shop" className="shop-now-btn">Shop Now</a>
      </section>
      <section className="features-section">
        <div className="feature-card">
          <span role="img" aria-label="fast delivery">🚚</span>
          <h3>Fast Delivery</h3>
          <p>Get your products delivered quickly and safely.</p>
        </div>
        <div className="feature-card">
          <span role="img" aria-label="best deals">💰</span>
          <h3>Best Deals</h3>
          <p>Enjoy amazing discounts and offers every day.</p>
        </div>
        <div className="feature-card">
          <span role="img" aria-label="customer support">🤝</span>
          <h3>24/7 Support</h3>
          <p>We are here to help you anytime, anywhere.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;