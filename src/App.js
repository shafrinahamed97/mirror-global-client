
import {  RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routes/Routes';


function App() {

  
  return (
    <div className='max-w-screen-xl mx-auto bg-gradient-to-r from-blue-700 to-blue-700' >
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
