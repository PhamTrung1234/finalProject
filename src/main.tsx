
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Provider} from "react-redux"
import {store} from "./store/store.tsx"
import { QueryClient ,QueryClientProvider } from '@tanstack/react-query'
import {RouterProvider } from "react-router-dom"
import { router } from './routers/BowserRoute.tsx'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <RouterProvider router={router}/>  
  </Provider>
  </QueryClientProvider>
)
