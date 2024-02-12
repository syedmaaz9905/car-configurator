import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/Main.css';

const Main = () => {
    const navigate = useNavigate();

    const cardsData = [
        { id: 'car', video: require('../assets/videos/car.mp4'), image: require('../assets/images/car.png'), text: 'Car' },
        { id: 'bike', video: require('../assets/videos/motorcycle.mp4'), image: require('../assets/images/motorcycle.png'), text: 'Bikes & Quads' },
        { id: 'boat', video: require('../assets/videos/boat.mp4'), image: require('../assets/images/boat.png'), text: 'Boats' },
        { id: 'tractor', video: require('../assets/videos/tractor.mp4'), image: require('../assets/images/tractor.png'), text: 'Tractors' },
        { id: 'truck', video: require('../assets/videos/semi-truck.mp4'), image: require('../assets/images/semi-truck.png'), text: 'Trucks' },
    ];

    const handleCardClick = (id) => {
        navigate(`/${id}`);
    };

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleVideoEnded = () => {
        setHoveredIndex(null);
    };

    return (
        <div>
            <h1 className='flex items-center justify-center mt-12 mb-6 font-bold text-center text-2xl sm:text-4xl' style={{ color: '#121212', }}>Select the Type of Vehicle</h1>
            <div className="container mx-auto mt-8 flex flex-wrap justify-center">
                {cardsData.map((card, index) => (
                    <div
                        key={index}
                        className="max-w-xs mx-4 mb-8 bg-white shadow-xl rounded-md overflow-hidden mainCards"
                        onClick={() => handleCardClick(card.id)}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="p-4 flex flex-col items-center" style={{ width: '250px', }}>
                            {hoveredIndex === index ? (
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    src={card.video}
                                    alt={`Card ${index + 1}`}
                                    className="w-24 h-24 mb-2"
                                    onEnded={handleVideoEnded}
                                />
                            ) : (
                                <img src={card.image} alt={`Card ${index + 1}`} className="w-24 h-24 mb-2" />
                            )}
                            <p className="text-lg font-semibold">{card.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Main;
