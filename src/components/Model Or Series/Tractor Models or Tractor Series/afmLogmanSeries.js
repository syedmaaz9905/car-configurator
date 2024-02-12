import React from 'react'
import { BsChevronDoubleRight } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import afmLogman from '../../../assets/images/afm-logman-logo.webp';
import { FaArrowLeft } from "react-icons/fa6";
import './afmLogmanSeries.css'

const AfmLogmanSeries = () => {
  const afmLogmanSeries = [
    { name: '801 H4', logo: require('../../../assets/images/Afm Logman Tractor Series/afm logman tractor.webp'), id: '801h4' },
    { name: '811 F', logo: require('../../../assets/images/Afm Logman Tractor Series/afm logman tractor.webp'), id: '811f' },
  ];

  const navigate = useNavigate();

  const goBackToBrandSelection = () => {
    navigate('/tractor');
  };

  const goToAfmLogmanModel801H4 = () => {
    navigate('/tractor/afmLogman/series/801H4');
  }

  return (
    <div>
      <div className='flex flex-row items-center justify-center mt-12 mb-6 gap-5 p-6' style={{ background: '#e6e6e6', }}>
        <Link to="/tractor" className='font-bold text-base sm:text-xl'>Tractor</Link>
        <BsChevronDoubleRight />
        <a className='font-bold text-base sm:text-xl flex flex-row gap-2 items-center justify-center'>
          <img src={afmLogman} className='w-8 h-8' />
          <p>AFM Logman</p>
        </a>
      </div>
      <h1 className='flex items-center justify-center mt-12 mb-6 font-bold text-center text-2xl sm:text-4xl' style={{ color: '#121212' }}>
        Select a Model for AFM Logman
      </h1>
      <div className='flex flex-wrap justify-center gap-8'>
        {afmLogmanSeries.map((brand, index) => (
          <div
            key={index}
            className='bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-xl hover:translate-y-1 hover:flip afmLogmanSeriesCards'
            style={{ minHeight: '200px', padding: '12px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}
            onClick={goToAfmLogmanModel801H4}
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

export default AfmLogmanSeries