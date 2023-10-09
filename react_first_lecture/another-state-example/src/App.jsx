import { useState } from 'react'
import './App.css'
import Product from './components/Products.jsx';
function App() {
  const [productsClicked, setProductsClicked] = useState([])

  const handleChildClick = (item) => {
    setProductsClicked((prevState)=>{
      console.log (prevState)
      console.log (item)
     return [...prevState , item]
    })
  };

  return (
    <div>
        <div className='stateDisplay'>
          {productsClicked.map((item) => (
            <div key={item.productName}>
              {item}
              <br />
            </div>
          ))}
        </div>
        <Product
          product={{
            productName: 'Pixel 4',
            productDesc:
              "The Pixel 4 is Google's newest phone, You know you want to buy it now because it's not even out yet!",
            price: 999,
            imgName: 'pixel4.jpg'
          }}
          handleClick={handleChildClick}
        />

        <Product
          product={{
            productName: 'IPhone 11',
            productDesc: "The iPhone11 is Apple's newest phone, You know you want to buy it now because it's Apple!",
            price: 'Your Soul',
            imgName: 'iphone11.jpeg'
          }}
          handleClick={handleChildClick}
        />
      </div>
 
  )
}

export default App
