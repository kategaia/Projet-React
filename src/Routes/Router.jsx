import {Routes, Route} from "react-router";
import FetchBosses from "../Components/Fetchcards/FetchBosses";
import FetchCharacters from "../Components/Fetchcards/FetchCharacters"; 
import FetchGames from "../Components/Fetchcards/FetchGames";
import FetchItems from "../Components/Fetchcards/FetchItems";
import FetchPlaces from "../Components/Fetchcards/FetchPLaces";
import Home from "../Pages/Home"
import { AuthProvider } from "../auth/AuthProvider";
import Contact from "../Components/Contact/Contact";
import NotFound from "../Components/404/404";
import PrivateRoute from "../auth/PrivateRoute";

export default function Router() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route  path="/Boss" element={
                    <PrivateRoute>
                    <FetchBosses />
                    </PrivateRoute>
                } />
                <Route path="/Game" element={
                    <PrivateRoute>
                    <FetchGames />
                    </PrivateRoute>
                    } />
                <Route path="/Item" element={
                    <PrivateRoute>
                    <FetchItems />
                    </PrivateRoute>
                    } />
                <Route path="/Character" element={
                    <PrivateRoute>
                    <FetchCharacters />
                    </PrivateRoute>
                    } />
                <Route path ="/Place" element={
                    <PrivateRoute>
                    <FetchPlaces />
                    </PrivateRoute>
                    } />
                <Route path="/Contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </AuthProvider>
    )
}