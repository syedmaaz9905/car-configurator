import React, { useEffect, useState } from 'react'
import { BsChevronDoubleRight } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import alfaRomeoLogo from '../../../assets/images/alfa-romeo-logo.webp';
import alfaRomeoModel147Image from '../../../assets/images/Alfa Romeo Car Series/147model.webp'
import { FaArrowLeft } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

const AlfaRomeo147Engine = () => {
    const alfaRomeo147Engine = [
        { name: '2.0 TS', description: '150HP Gasoline', logo: require('../../../assets/images/Alfa Romeo Car Series/147model.webp'), id: '2-0TS' },
        { name: '3.2 V6 GTA', description: '250HP Gasoline', logo: require('../../../assets/images/Alfa Romeo Car Series/147model.webp'), id: '3-2V6GTA' },
    ];

    const navigate = useNavigate();

    const goBackToSeriesSelection = () => {
        navigate('/car/alfaRomeo/series');
    };

    const goBackToModelSelection = () => {
        navigate('/car/alfaRomeo/series/147');
    };

    const goToAlfaRomeo1472001200520TS = () => {
        navigate('/car/alfaRomeo/series/147/2001-2005/20-ts');
    }

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600); // Adjust the breakpoint as needed

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 600); // Adjust the breakpoint as needed
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            <div className='flex flex-col sm:flex-row items-center justify-center mt-12 mb-6 gap-5 p-6' style={{ background: '#e6e6e6', }}>
                <Link to="/car" className='font-bold text-base sm:text-xl'>Cars</Link>
                {isSmallScreen ? <FaAngleDown /> : <BsChevronDoubleRight />}
                <a className='font-bold text-base sm:text-xl flex flex-row gap-2 items-center justify-center cursor-pointer' onClick={goBackToSeriesSelection}>
                    <img src={alfaRomeoLogo} className='w-8 h-8' />
                    <p>Alfa Romeo</p>
                </a>
                {isSmallScreen ? <FaAngleDown /> : <BsChevronDoubleRight />}
                <a className='font-bold text-base sm:text-xl flex flex-row gap-2 items-center justify-center cursor-pointer' onClick={goBackToModelSelection}>
                    <img src={alfaRomeoModel147Image} className='w-8 h-6' />
                    <p>147</p>
                </a>
                {isSmallScreen ? <FaAngleDown /> : <BsChevronDoubleRight />}
                <p className='font-bold text-base sm:text-xl'>2001 - 2005</p>
            </div>
            <h1 className='flex items-center justify-center mt-12 mb-6 font-bold text-center text-2xl sm:text-4xl' style={{ color: '#121212' }}>
                Select the Model for Alfa Romeo 147 2001-2005
            </h1>
            <div className='flex flex-wrap justify-center gap-8'>
                {alfaRomeo147Engine.map((brand, index) => (
                    <div
                        key={index}
                        className='bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-xl hover:translate-y-1 hover:flip alfaRomeoSeriesCards'
                        style={{ minHeight: '200px', padding: '12px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}
                        onClick={goToAlfaRomeo1472001200520TS}
                    >
                        <img
                            src={brand.logo}
                            alt={`${brand.name} Logo`}
                            className='object-cover object-center transition-transform'
                            style={{ width: '100px' }}
                        />
                        <div className='p-2 text-center'>
                            <p className='text-lg font-semibold'>{brand.name}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='mt-12 mb-6 flex items-center justify-end p-6 backButtonBrand'>
        <button className='btnn btnBrandd' style={{ borderRadius: '8px' }} onClick={goBackToModelSelection}>Go Back To Model Selection</button>
      </div>
        </div>
    )
}

export default AlfaRomeo147Engine