import React from 'react'
import { BsChevronDoubleRight } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import bmwLogo from '../../../assets/images/bmw-logo.webp';
import bmwModelC from '../../../assets/images/BMW Bike Series/CModel.webp';
import { FaArrowLeft } from "react-icons/fa6";

const BmwModelC = () => {
  const bmwModelsC = [
    { name: 'All', logo: require('../../../assets/images/BMW Bike Series/CModel.webp'), id: 'All' },
  ];

  const navigate = useNavigate();

  const goBackToSeriesSelection = () => {
    navigate('/bike/bmw/series');
  };

  return (
    <div>
      <div className='flex flex-row items-center justify-center mt-12 mb-6 gap-5 p-6' style={{ background: '#e6e6e6', }}>
        <Link to="/bike" className='font-bold text-base sm:text-xl'>Bikes & Quads</Link>
        <BsChevronDoubleRight />
        <a className='font-bold text-base sm:text-xl flex flex-row gap-2 items-center justify-center cursor-pointer' onClick={goBackToSeriesSelection}>
          <img src={bmwLogo} className='w-8 h-8' />
          <p>BMW</p>
        </a>
        <BsChevronDoubleRight />
        <a className='font-bold text-base sm:text-xl flex flex-row gap-2 items-center justify-center'>
          <img src={bmwModelC} className='w-8 h-6' />
          <p>C</p>
        </a>
      </div>
      <h1 className='flex items-center justify-center mt-12 mb-6 font-bold text-center text-2xl sm:text-4xl' style={{ color: '#121212' }}>
        Select the Model for BMW C
      </h1>
      <div className='flex flex-wrap justify-center gap-8'>
        {bmwModelsC.map((brand, index) => (
          <div
            key={index}
            className='bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-xl hover:translate-y-1 hover:flip bmwSeriesCards'
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

export default BmwModelC