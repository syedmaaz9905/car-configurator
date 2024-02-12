import React from 'react'
import { BsChevronDoubleRight } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import alpinaLogo from '../../../assets/images/alpina-logo.webp';
import { FaArrowLeft } from "react-icons/fa6";
import './alpinaSeries.css'

const AlpinaSeries = () => {
  const alpinaSeries = [
    { name: 'B3', logo: require('../../../assets/images/Alpina Car Series/B3model.webp'), id: 'b3' },
    { name: 'B3 S', logo: require('../../../assets/images/Alpina Car Series/B3smodel.webp'), id: 'b3s' },
  ];

  const navigate = useNavigate();

  const goBackToBrandSelection = () => {
    navigate('/car');
  };

  const goToAlpinaB3Models = () => {
    navigate('/car/alpina/series/b3');
  }

  return (
    <div>
      <div className='flex flex-row items-center justify-center mt-12 mb-6 gap-5 p-6' style={{ background: '#e6e6e6', }}>
        <Link to="/car" className='font-bold text-base sm:text-xl'>Cars</Link>
        <BsChevronDoubleRight />
        <a className='font-bold text-base sm:text-xl flex flex-row gap-2 items-center justify-center'>
          <img src={alpinaLogo} className='w-8 h-8' />
          <p>Alpina</p>
        </a>
      </div>
      <h1 className='flex items-center justify-center mt-12 mb-6 font-bold text-center text-2xl sm:text-4xl' style={{ color: '#121212' }}>
        Select the Series for Alpina
      </h1>
      <div className='flex flex-wrap justify-center gap-8'>
        {alpinaSeries.map((brand, index) => (
          <div
            key={index}
            className='bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-xl hover:translate-y-1 hover:flip alpinaSeriesCards'
            style={{ minHeight: '200px', padding: '12px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}
            onClick={goToAlpinaB3Models}
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
        <button className='btnn btnBrandd' style={{ borderRadius: '8px' }} onClick={goBackToBrandSelection}>Go Back To Vehicle Type Selection</button>
      </div>
    </div>
  )
}

export default AlpinaSeries