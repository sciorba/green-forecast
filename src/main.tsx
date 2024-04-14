import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {AppRoutes} from "./routes.tsx";
import ResponsiveDrawer from "./components/Drawer.tsx";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <BrowserRouter>
      <>
        <ResponsiveDrawer />
        <AppRoutes/>
      </>
    </BrowserRouter>
    </LocalizationProvider>
  </React.StrictMode>,
)
