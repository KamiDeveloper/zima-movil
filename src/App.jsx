import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout'


function AppContent() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<Signup />} />
            </Route>
        )
    )

    return (
        <RouterProvider router={router} />
    )
}

function App() {
    return (
        <AppContent />
    )
}

export default App
