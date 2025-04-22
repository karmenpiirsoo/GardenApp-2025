import { useState } from "react"
import { Link } from "react-router-dom"
import DeleteIcon from '@mui/icons-material/DeleteForeverTwoTone';
import "../../css/Cart.css"


function Cart() {

  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cart")) || [])


  const empty = () => {
    setProducts([]);
    localStorage.setItem("cart", JSON.stringify([]))
  }

  const remove= (index) => {
    products.splice(index, 1);
    setProducts(products.slice())
    localStorage.setItem("cart", JSON.stringify(products));
  }



  function totalSum() {
    let summa = 0   
    products.forEach(t => summa = summa + t.product.price * t.amount);
    return summa;
  }

  function totalAmount() {
      let amount = 0;
      products.forEach(t => amount = amount + t.amount)
      return amount;
  }

  function minusOne(index) {
    console.log(index)
    products[index].amount--;
    if (products[index].amount === 0) {
      remove(index);
    }
    setProducts(products.slice());
    localStorage.setItem("cart", JSON.stringify(products))
  }

  function addOne(index) {
    console.log(index)
    products[index].amount++;
    setProducts(products.slice());
    localStorage.setItem("cart", JSON.stringify(products))
  }

  return (
    <div>
      {products.length > 0 && <button onClick={empty}>Empty your cart</button>}

{products.map((t, index) => 
<div className="product" key={t.product.title}>
 <div className="name">  {t.product.title}</div>
  <div className="price">{t.product.price}€</div>
 <div className="amount">
  <button className="button" onClick={() => minusOne(index)}>-</button>
  <div >{t.amount}</div>
  <button className="button" onClick={() => addOne(index)}>+</button>
  </div>
  <div className="total">{t.product.price * t.amount} €</div>
  <button className="button" onClick={() => remove(index)}>
  <DeleteIcon/>
  </button>
  </div>)}
  <br />
  <br />
{products.length === 0 && <Link to='/shop'>Your cart is empty, click here and get shopping</Link>}
<br /><br /><br />

<div>You have {totalAmount()} products in your cart</div>
<div> Your sub-total is {totalSum()} €</div>
    </div>
  )
}

export default Cart
