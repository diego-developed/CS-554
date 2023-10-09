function Product (props) {
  const buttonClick = () => {
    alert(props.product.productName + ' was clicked');
    props.handleClick(props.product.productName);
  };
  
    return (
      <div key={props.product.productName}>
        <h1>{props.product.productName}</h1>
        <p>{props.product.productDesc}</p>
        <p>Price: ${props.product.price}</p>
        <img height='50%' width='50%' src={props.product.imgName} />
        <br />
        <button onClick={buttonClick}>Buy the {props.product.productName} Now!</button>
      </div>
    );

}
export default Product;