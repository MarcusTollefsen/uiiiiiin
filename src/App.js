import logo from './logo.svg';
import './App.css';

function ProductTitle({name}){
  return (
    <h1>{name}</h1>
  )
}

function ProductPrice({price}){
  return ( 
  <span>{price}</span>
  )
}

function ProductCategory({cat}){
  return (
    <span>{cat}</span>
  )
}

function ProductCard({name, price, category}){
  return (
    <>
    <ProductTitle name={name}/>
    <ProductPrice price={price}/>
    <ProductCategory cat={cat}/>
    <button>legg til i handlekurv</button>
    </>
  )
}

function App() {
  return (
    <div className="App">
     <ProductCard name="master wu" price="89kr" cat="cool"/>
    </div>
  );
}

export default App;