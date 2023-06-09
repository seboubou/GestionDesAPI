import { Routes, Route } from "react-router-dom"
import RickAndMorty from "../pages/RickAndMorty"
import RickAndMortyDetails from "../pages/RickAndMortyDetails"
import SeigneurDesAnneaux from "../pages/SeigneurDesAnneaux"
import HarryPotter from "../pages/HarryPotter";
import Pokemon from "../pages/Pokemon"
import GamesOfThrones from "../pages/GamesOfThrones"
import HomePage from "../pages/HomePage"
import Marvel from "../pages/Marvel"
import Footer from "../globals/Footer";
import Dashboard from "../pages/Dashboard"
import Forum from "../pages/Forum";
import ForgotPassword from '../pages/ForgotPassword';
import PageProfil from "../pages/PageProfil";
import ModifProfil from "../pages/ModifProfil";
import CreateCharacterSda from "../pages/CreateCharacterSda";
import Disney from "../pages/Disney";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/RickAndMorty" element={<RickAndMorty />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/LeSeigneurDesAnneaux" element={<SeigneurDesAnneaux />} />
            <Route path="/HarryPotter" element={<HarryPotter />} />
            <Route path="/Pokemon" element={<Pokemon />} />
            <Route path="/GamesOfThrones" element={<GamesOfThrones />} />
            <Route path="/character/:id" element={<RickAndMortyDetails />} />
            {/* <Route path="/personnages/:id" element={<SdaDetails />}  */}
            <Route path="/Marvel" element={<Marvel />} />
            <Route path="/Footer" element={<Footer />} />
            <Route exact path="/dashboard" element={<Dashboard/>} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/Profil-page" element={<PageProfil />} />
            <Route path="/profil-modif" element={<ModifProfil />} />
            <Route path="/creation-characterSda" element={<CreateCharacterSda />} />
            <Route path="/disney" element={<Disney/>} />
            



        </Routes>
    )
}



export default Router;

