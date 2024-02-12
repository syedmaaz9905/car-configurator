import React from 'react'
import { BsChevronDoubleRight } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import MercedesLogo from '../../../assets/images/mercedes-logo.webp';
import mercedesModelActrosLogo from '../../../assets/images/Mercedes Truck Series/Mercedes Truck.webp';
import { FaArrowLeft } from "react-icons/fa6";

const MercedesModelACTROS = () => {
  const mercedesModelActros = [
    { name: 'All', logo: require('../../../assets/images/Mercedes Truck Series/Mercedes Truck.webp'), id: 'all' },
  ];

  const navigate = useNavigate();

  const goBackToSeriesSelection = () => {
    navigate('/truck/mercedes/series');
  };

  return (
    <div>
      <div className='flex flex-row items-center justify-center mt-12 mb-6 gap-5 p-6' style={{ background: '#e6e6e6', }}>
        <Link to="/truck" className='font-bold text-base sm:text-xl'>Trucks</Link>
       <BsChevronDoubleRight />
        <a className='font-bold text-base sm:text-xl flex flex-row gap-2 items-center justify-center cursor-pointer' onClick={goBackToSeriesSelection}>
          <img src={MercedesLogo} className='w-8 h-8' />
          <p>Mercedes</p>
        </a>
       <BsChevronDoubleRight />
        <a className='font-bold text-base sm:text-xl flex flex-row gap-2 items-center justify-center'>
          <img src={mercedesModelActrosLogo} className='w-8 h-6' />
          <p>ACTROS</p>
        </a>
      </div>
      <h1 className='flex items-center justify-center mt-12 mb-6 font-bold text-center text-2xl sm:text-4xl' style={{ color: '#121212' }}>
        Select the Model for Mercedes ACTROS
      </h1>
      <div className='flex flex-wrap justify-center gap-8'>
        {mercedesModelActros.map((brand, index) => (
          <div
            key={index}
            className='bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-xl hover:translate-y-1 hover:flip mercedesSeriesCards'
            style={{ minHeight: '200px', padding: '12px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}
          // onClick={goToAlfaRomero147Models}
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
        <button className='btnn btnBrandd' style={{ borderRadius: '8px' }} onClick={goBackToSeriesSelection}>Go Back To Series Selection</button>
      </div>
    </div>
  )
}

export default MercedesModelACTROS