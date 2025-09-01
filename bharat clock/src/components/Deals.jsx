

const deals = [
  {
    title: "Mega Electronics Sale",
    desc: "Up to 40% off on smartphones, laptops, and more!",
    oldPrice: "₹25,000",
    newPrice: "₹15,000",
    tag: "Limited Time",
  },
  {
    title: "Fashion Fiesta",
    desc: "Trendy clothing starting at just ₹299.",
    oldPrice: "₹999",
    newPrice: "₹299",
    tag: "Hot Deal",
  },
  {
    title: "Grocery Bonanza",
    desc: "Buy 1 Get 1 Free on daily essentials.",
    oldPrice: "₹120",
    newPrice: "₹60",
    tag: "BOGO",
  },
  {
    title: "Headphones Special",
    desc: "Flat 50% off on all headphones.",
    oldPrice: "₹4,000",
    newPrice: "₹2,000",
    tag: "Best Seller",
  },
];

function Deals() {
  return (
    <div className="deals-container">
      <h1>Today's Best Deals</h1>
      <div className="deals-list">
        {deals.map((deal, idx) => (
          <div className="deal-card" key={idx}>
            <div className="deal-tag">{deal.tag}</div>
            <h2>{deal.title}</h2>
            <p>{deal.desc}</p>
            <div className="deal-prices">
              <span className="old-price">{deal.oldPrice}</span>
              <span className="new-price">{deal.newPrice}</span>
            </div>
            <button className="grab-btn">Grab Deal</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Deals;