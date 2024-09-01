import { useState } from 'react';

function NoContactsFound() {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div className="flex flex-col justify-center items-center mt-10 px-4">
            <img 
                src="/dinosaur.svg" 
                onLoad={() => setImageLoaded(true)} 
                style={{ display: imageLoaded ? 'block' : 'none' }}
                alt="Dinosaur"
                className="w-[250px] h-[250px] mb-4"
            />
            {imageLoaded && (
                <h1 className="bg-gradient-to-r from-lime-400 to-lime-600 text-zinc-700 border border-zinc-500 rounded-lg shadow-xl font-mono font-bold text-3xl w-full max-w-[90%] flex items-center justify-center py-4 text-center">
                    No Contacts Found
                </h1>
            )}
        </div>
    );
}

export default NoContactsFound;
