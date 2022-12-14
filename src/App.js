
import {  RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Router/Routes/Routes';


function App() {

  
  return (
    <div className='max-w-screen-xl mx-auto  bg-gradient-to-r from-red-500 to-green-500' >
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
