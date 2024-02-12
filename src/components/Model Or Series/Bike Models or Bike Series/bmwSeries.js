import React from 'react'
import { BsChevronDoubleRight } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import bmwLogo from '../../../assets/images/bmw-logo.webp';
import { FaArrowLeft } from "react-icons/fa6";
import './bmwSeries.css'

const BmwSeries = () => {
  const bmwSeries = [
    { name: 'C', logo: require('../../../assets/images/BMW Bike Series/CModel.webp'), id: 'c' },
    { name: 'CE 04', logo: require('../../../assets/images/BMW Bike Series/CE04model.webp'), id: 'ce04' },
  ];

  const navigate = useNavigate();

  const goBackToBrandSelection = () => {
    navigate('/bike');
  };

  const goToBmwModelC = () => {
    navigate('/bike/bmw/series/C');
  }

  return (
    <div>
      <div className='flex flex-row items-center justify-center mt-12 mb-6 gap-5 p-6' style={{ background: '#e6e6e6', }}>
        <Link to="/bike" className='font-bold text-base sm:text-xl'>Bikes & Quads</Link>
        <BsChevronDoubleRight />
        <a className='font-bold text-base sm:text-xl flex flex-row gap-2 items-center justify-center'>
          <img src={bmwLogo} className='w-8 h-8' />
          <p>BMW</p>
        </a>
      </div>
      <h1 className='flex items-center justify-center mt-12 mb-6 font-bold text-center text-2xl sm:text-4xl' style={{ color: '#121212' }}>
        Select a Model for BMW
      </h1>
      <div className='flex flex-wrap justify-center gap-8'>
        {bmwSeries.map((brand, index) => (
          <div
            key={index}
            className='bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-xl hover:translate-y-1 hover:flip bmwSeriesCards'
            style={{ minHeight: '200px', padding: '12px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}
            onClick={goToBmwModelC}
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

export default BmwSeries