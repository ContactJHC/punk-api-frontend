import { useRoutes } from 'react-router-dom';
import { routes } from './Routes';
 
function App() {

  let contenu = useRoutes(routes)

  return (
    <>
      {contenu}
    </>
  );
}

export default App;
