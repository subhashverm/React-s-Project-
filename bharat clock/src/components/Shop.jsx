const products = {
  Electronics: [
    { name: "Smartphone", price: "₹15,000" },
    { name: "Laptop", price: "₹45,000" },
    { name: "Headphones", price: "₹2,000" },
  ],
  Clothing: [
    { name: "T-Shirt", price: "₹500" },
    { name: "Jeans", price: "₹1,200" },
    { name: "Jacket", price: "₹2,500" },
  ],
  Groceries: [
    { name: "Milk", price: "₹50" },
    { name: "Bread", price: "₹40" },
    { name: "Eggs", price: "₹60" },
  ],
};

function Shop() {
  return (
    <div className="shop-container">
      <h1>Shop by Category</h1>
      <div className="categories">
        {Object.keys(products).map((category) => (
          <div className="category-card" key={category}>
            <h2>{category}</h2>
            <ul>
              {products[category].map((item, idx) => (
                <li key={idx} className="product-item">
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                  <button className="add-btn">Add</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;