import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Rootlayout from './components/Rootlayout'
import Home from './components/Home'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Aboutus from './components/Aboutus'
function App() {
  const router=createBrowserRouter([
    {
     path:"/",
     element:<Rootlayout/>,
     children:[
       {
         path:"/",
         element:<Home/>
       },
       {
         path:"/Signup",
         element:<Signup/>
       },
       {
         path:"/Signin",
         element:<Signin/>
       },
       {
         path:"Aboutus",
         element:<Aboutus/>
       },
       
     ]
    }


  ])
  return(
    <div>
      
     <RouterProvider router={router} />
      
     
    </div>
  );
}

export default App;