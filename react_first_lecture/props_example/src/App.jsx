import PropsExample from './PropsExample.jsx';

function App() {
  const greeting = 'Hello Function Component!';

  const handle_func = (name) => {
    console.log(`Hello ${name} from within handle_func in app.js`);
  };
  return (
    <div className='App'>
      <PropsExample
        user={{name: 'Patrick Hill', username: 'graffixnyc'}}
        handleClick={handle_func}
        greeting={greeting}
      />

<PropsExample
        user={{name: 'Aiden Hill', username: 'AidenHill'}}
        handleClick={handle_func}
       
      />
      <br />
    </div>
  );
}

export default App;

