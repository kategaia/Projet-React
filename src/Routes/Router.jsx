import {Routes, Route} from "react-router";
import FetchBosses from "../Components/Fetchcards/FetchBosses";
import FetchCharacters from "../Components/Fetchcards/FetchCharacters"; 
import FetchGames from "../Components/Fetchcards/FetchGames";
import FetchItems from "../Components/Fetchcards/FetchItems";
import FetchPlaces from "../Components/Fetchcards/FetchPLaces";
import { AuthProvider } from "../auth/AuthProvider";

export default function Router() {
    return (
        <AuthProvider>
            <Routes>
                <Route  path="/Boss" element={<FetchBosses />} />
                <Route path="/Game" element={<FetchGames />} />
                <Route path="/Item" element={<FetchItems />} />
                <Route path="/Character" element={<FetchCharacters />} />
                <Route path ="/Place" element={<FetchPlaces />} />
            </Routes>
        </AuthProvider>
    )
}