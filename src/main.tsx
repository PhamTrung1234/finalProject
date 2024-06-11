
import ReactDOM from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux"
import {store} from "./store/store.tsx"
import {  QueryClientProvider } from '@tanstack/react-query'
import {RouterProvider } from "react-router-dom"
import { router } from './routers/BowserRoute.tsx'
import { Suspense } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { queryClient } from "./http/tanstack/react-query";
ReactDOM.createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
    {import.meta.env.MODE === "development"}
      <Suspense>
      <RouterProvider router={router}/>
      </Suspense>
  </Provider>
  </QueryClientProvider>
  </HelmetProvider>
  
)
