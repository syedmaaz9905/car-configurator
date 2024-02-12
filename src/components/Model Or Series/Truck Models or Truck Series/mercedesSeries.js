import React from 'react'
import { BsChevronDoubleRight } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import MercedesLogo from '../../../assets/images/mercedes-logo.webp';
import { FaArrowLeft } from "react-icons/fa6";
import './mercedesSeries.css'

const MercedesSeries = () => {
  const mercedesSeries = [
    { name: 'ACTROS', logo: require('../../../assets/images/Mercedes Truck Series/Mercedes Truck.webp'), id: 'ACTROS' },
    { name: 'AROCS', logo: require('../../../assets/images/Mercedes Truck Series/Mercedes Truck.webp'), id: 'AROCS' },
  ];

  const navigate = useNavigate();

  const goBackToBrandSelection = () => {
    navigate('/truck');
  };

  const goToMercedesModelActros = () => {
    navigate('/truck/mercedes/series/ACTROS');
  }

  return (
    <div>
      <div className='flex flex-row items-center justify-center mt-12 mb-6 gap-5 p-6' style={{ background: '#e6e6e6', }}>
        <Link to="/truck" className='font-bold text-base sm:text-xl'>Truck</Link>
        <BsChevronDoubleRight />
        <a className='font-bold text-base sm:text-xl flex flex-row gap-2 items-center justify-center'>
          <img src={MercedesLogo} className='w-8 h-8' />
          <p>Mercedes</p>
        </a>
      </div>
      <h1 className='flex items-center justify-center mt-12 mb-6 font-bold text-center text-2xl sm:text-4xl' style={{ color: '#121212' }}>
        Select a Model for Mercedes
      </h1>
      <div className='flex flex-wrap justify-center gap-8'>
        {mercedesSeries.map((brand, index) => (
          <div
            key={index}
            className='bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-xl hover:translate-y-1 hover:flip mercedesSeriesCards'
            style={{ minHeight: '200px', padding: '12px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}
            onClick={goToMercedesModelActros}
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
        <button className='btnn btnBrandd' style={{ borderRadius: '8px' }} onClick={goBackToBrandSelection}>Go Back To Brand Selection</button>
      </div>
    </div>
  )
}

export default MercedesSeries