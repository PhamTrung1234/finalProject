
import ReactDOM from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux"
import {store} from "./store/store.tsx"
import { QueryClient ,QueryClientProvider } from '@tanstack/react-query'
import {RouterProvider } from "react-router-dom"
import { router } from './routers/BowserRoute.tsx'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <RouterProvider router={router}/>  
  </Provider>
  </QueryClientProvider>
)
