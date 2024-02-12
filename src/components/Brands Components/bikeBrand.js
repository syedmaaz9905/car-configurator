import React from 'react'
import './bikeBrand.css'
import { useNavigate } from 'react-router-dom';

import { FaArrowLeft } from "react-icons/fa6";

const BikeBrand = () => {
  const bikeBrands = [
    { name: 'Aprilia', logo: require('../../assets/images/aprilia-logo.webp'), id: 'aprilia' },
    { name: 'BMW', logo: require('../../assets/images/bmw-logo.webp'), id: 'bmw' },
  ];

  const navigate = useNavigate();

  const goBackToVehicleTypeSelection = () => {
    navigate('/');
  };

  const goToBikeSeries = (brandId) => {
    navigate(`/bike/${brandId}/series`);
  };

  return (
    <div>
      <h1 className='flex items-center justify-center mt-12 mb-6 font-bold text-center text-2xl sm:text-4xl' style={{ color: '#121212' }}>
        Select the Manufacturer
      </h1>
      <div className='flex flex-wrap justify-center gap-8'>
        {bikeBrands.map((brand, index) => (
          <div
            key={index}
            className='bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-xl hover:translate-y-1 hover:flip bikeBrandCards'
            style={{ minHeight: '200px', padding: '12px', display: 'flex', alignItems: 'center' }}
            onClick={() => goToBikeSeries(brand.id)}
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
        <button className='btnn btnBrandd' style={{ borderRadius: '8px' }} onClick={goBackToVehicleTypeSelection}>Go Back To Vehicle Type Selection</button>
      </div>
    </div>
  )
}

export default BikeBrand