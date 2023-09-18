import './App.css';
import Child from './Child';

function PropsExample(props) {
  let h1 = null;

  const btnClick = ()=>{
    props.handleClick(props.user.name)
  }
  if (props.greeting) {
    h1 = <h1>{props.greeting}</h1>;
  } else {
    h1 = <h1>Hello there!</h1>;
  }
  return (
    <div>
      {h1}
      <h2>{props.user.name}</h2>
      <button onClick={btnClick}>{props.user.username}</button>
      <Child greeting={props.greeting} />
    </div>
  );
}

export default PropsExample;