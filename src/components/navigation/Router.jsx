import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import ContactPage from "../pages/ContactPage"
import RickAndMortyDetails from "../pages/RickAndMortyDetails"
import SeigneurDesAnneaux from "../pages/SeigneurDesAnneaux"
import HarryPotter from "../pages/HarryPotter";
import Pokemon from "../pages/Pokemon"

function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="LeSeigneurDesAnneaux" element={<SeigneurDesAnneaux />} />
            <Route path="HarryPotter" element={<HarryPotter />} />
            <Route path="Pokemon" element={<Pokemon />} />
            <Route path="/character/:id" element={<RickAndMortyDetails />} />


        </Routes>
    )
}



export default Router;