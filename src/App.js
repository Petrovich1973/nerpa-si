import './App.css'
import * as React from "react"
import {Container, CssBaseline} from "@mui/material"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import {ContextApp, initialState, reducerApp} from "./reducer.js"
import PageDashboard from "./pages/PageDashboard"
import PageNotFound from "./pages/PageNotFound"

const theme = createTheme({
    palette: {
        background: {
            default: "#F3F3F3"
        }
    }
});


export default function App() {
    const [state, dispatch] = React.useReducer(reducerApp, initialState)

    return (
        <ContextApp.Provider value={{state, dispatch}}>
            <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xl" sx={{mb: 4}}>
                <BrowserRouter>
                    <CssBaseline/>
                    <Routes>
                        <Route path="/" element={<Navigate to="/dashboard"/>}/>
                        <Route path={'/dashboard'} element={<PageDashboard />}/>
                        <Route path={'/not-found'} element={<PageNotFound/>}/>
                        <Route path="*" element={<Navigate to="/not-found"/>}/>
                    </Routes>
                </BrowserRouter>
            </Container>
            </ThemeProvider>
        </ContextApp.Provider>
    )
}
