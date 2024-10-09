import {
         createBrowserRouter,
         createRoutesFromElements,
         Route,
         RouterProvider,
       } from 'react-router-dom';

import Home from './components/Home';
import RouteLayout from './layout/RouteLayout';
import PostList from './pages/PostList';
import AjoutPost from './layout/AjoutPost';
import DetailPost from './pages/DetailPost';
import ErrorPost from './pages/ErrorPost';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouteLayout />}>
      <Route index element={<Home />} />
      <Route path="/ajout" element={<AjoutPost /> } />
      <Route path="posts" element={<PostList />} />
      <Route path="/posts/:id" element={<DetailPost />} />
      <Route path="*" element={<ErrorPost />} />
    </Route>

  )
)
function App() {
  return (
    <RouterProvider router={router}> 
    
    </RouterProvider> 
  );
}

export default App;
