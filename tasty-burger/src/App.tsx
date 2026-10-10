import './App.css';

function BurgerBox(props) {
  return (
    <div className="box">
      <img src={props.image} alt={props.name} />
      
      <div className="info">
        <p>⭐⭐⭐⭐⭐</p>
        <h3>{props.name}</h3>
        <p className="price">Price: ₱{props.price}</p>
        
        {}
        <button onClick={() => alert(props.name + ' added!')}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

function App() {
  const burgers = [
    { id: 1, name: 'Crispy Chicken Burger', price: '120', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDGsW4DHN1VaURDxLe-maWYBRp8UJxAPpDNIvf06IkRg&s=10' },
    { id: 2, name: 'Cheesy Special Burger', price: '150', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7SFB_M250yF0j4F05G_LLlTIYtJaZAIt6UTzZrYgcKg&s=10' },
    { id: 3, name: 'Classic Burger', price: '100', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS4Ir_ESn3Mk83ZUa39JJex1Z3M2qnfVCdcr5w5SF8tQ&s=10' },
  ];

  return (
    <div>
        <header>
        <h2>🍔 TASTY BURGER</h2>
        <p>ABOUT | MENU | SHOP | CONTACT | 🛒 </p>
      </header>

      <div className="title">
        <h1>OUR CRAZY BURGERS</h1>
        <p>Our burgers are loaded with juicy patties and bold toppings!</p>
      </div>

      <div className="list">
        {burgers.map((b) => (
          <BurgerBox 
            key={b.id}
            name={b.name}
            price={b.price}
            image={b.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;