
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
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnxFUPpimMrF8s9AGJOQBls_dvC5SSM3o",
  authDomain: "finalproject-7d6e4.firebaseapp.com",
  projectId: "finalproject-7d6e4",
  storageBucket: "finalproject-7d6e4.appspot.com",
  messagingSenderId: "263574218187",
  appId: "1:263574218187:web:b2cb83b4338adc0fae824e",
  measurementId: "G-WFY7791BHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
analytics
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
