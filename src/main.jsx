import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Home from './pages/Home/index.jsx'
import PostPage from './pages/All Posts/index.jsx'
import CreatePost from './pages/Create/index.jsx'
import Postagem from './pages/Postagem/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {path: '/', element: <Home/>},
      {path: '/post', element: <PostPage/>},
      {path: '/create_post', element: <CreatePost/>},
      {path: '/postagem', element: <Postagem/>},
    ]
  }
])

import { PostProvider } from './Context/PostContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PostProvider>
      <RouterProvider router= {router}/>
    </PostProvider>
  </React.StrictMode>,
)
