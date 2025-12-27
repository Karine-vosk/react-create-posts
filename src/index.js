import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NewPost, {action as newPostAction} from './routes/NewPost';
import RootLayout from './routes/RootLayout';
import App, {loader as postsLoader} from './routes/App';
import PostDetails, {loader as postDetailLoader} from './routes/PostDetails';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                path: '/',
                element: <App/>,
                loader: postsLoader,
                children: [
                    {
                      path: 'create-post',
                      action: newPostAction,
                      element: <NewPost/>
                    }, 
                    {
                      path: '/:id',
                      element: <PostDetails/>,
                      loader: postDetailLoader,
                    }
                ]
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function to
// log results (for example: reportWebVitals(console.log)) or send to an
// analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
