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

export default function Router() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route  path="/Boss" element={<FetchBosses />} />
                <Route path="/Game" element={<FetchGames />} />
                <Route path="/Item" element={<FetchItems />} />
                <Route path="/Character" element={<FetchCharacters />} />
                <Route path ="/Place" element={<FetchPlaces />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </AuthProvider>
    )
}