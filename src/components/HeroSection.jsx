import React, { useState } from 'react';
import { Button } from './ui/button';
import { Search } from 'lucide-react'; 
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/bgd.jpg'

const HeroSection = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate('/browse');
    };

    return (
        <div
            className="relative bg-cover bg-center h-screen"
            style={{ backgroundImage: `url(${backgroundImage})` }} 
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Contenu */}
            <div className="relative z-10 text-center text-white flex flex-col items-center justify-center h-full">
                {/* Barre de navigation */}
                
                <nav className="absolute top-5 right-10 flex gap-4">
                    {/*
                    <a href="/" className="text-white font-medium">Home</a>
                    <a href="/jobs" className="text-white font-medium">Jobs</a>
                    <a href="/link" className="text-white font-medium">Lien</a>
                    <Button variant="ghost" className="bg-white text-black px-4 py-2 rounded-full">Login</Button>
                    <Button variant="ghost" className="bg-white text-black px-4 py-2 rounded-full">Signup</Button>
                */}
                </nav>

                {/* Tagline */}
                <span className="mb-4 text-lg font-semibold">TechJobs Maroc</span>

                {/* Titre Principal */}
                <h1 className="text-6xl font-bold mb-6">
                    Your Tech Career <br />Starts Here
                </h1>

                {/* Sous-texte */}
                <p className="mb-8 text-lg">Search, Apply, and Land Your Dream Tech Job</p>

                {/* Barre de recherche */}
                <div className="flex items-center w-full max-w-lg mx-auto bg-white text-black rounded-full shadow-lg pl-4">
                    <input
                        type="text"
                        placeholder="Search for your dream job"
                        onChange={(e) => setQuery(e.target.value)}
                        className="outline-none border-none w-full py-3 rounded-l-full"
                    />
                    <Button onClick={searchJobHandler} className="bg-[#6A38C2] p-3 rounded-r-full">
                        <Search className="h-6 w-6 text-white" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
