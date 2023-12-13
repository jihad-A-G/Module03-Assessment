import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Articles from './articles.jsx'
import ArticleDetails from './article-details.jsx'
import { createBrowserRouter,RouterProvider,redirect } from 'react-router-dom'
import axios from 'axios'
import AddArticle from './addArticle.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    redirect: "/articles",
    element: <App />,
    children: [
      {
        path: "articles",
        element: <Articles />,
        loader: async () => {
          const response = await axios.get(
            "http://localhost:5000/api/article/"
          );
          return response.data;
        },
      },
      {
        path: "articles/article-details/:id",
        element: <ArticleDetails />,
        loader: async ({ params }) => {
          const response = await axios.get(
            `http://localhost:5000/api/article/${params.id}`
          );
          return response.data;
        },
      },
      {
        path: "dashboard/articles",
        element: <Articles />,
        loader: async () => {
          const response = await axios.get(
            "http://localhost:5000/api/article/"
          );
          return response.data;
        },
      },
      {
        path:'dashboard/articles/add-article',
        element:<AddArticle/>,
         action:async ({request}) =>{
          const formData= await request.formData();
          const data= Object.fromEntries(formData);
          console.log(data);
          const response= await axios.post('http://localhost:5000/api/article/',{
            data
          })
          if(!response){
            return redirect('/dashboard/articles.add-article')
          }
          return redirect ('/articles')
        }
      }
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
