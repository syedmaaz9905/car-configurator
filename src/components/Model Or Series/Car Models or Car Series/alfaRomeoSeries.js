import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import alfaRomeoLogo from '../../../assets/images/alfa-romeo-logo.webp';
import { FaArrowLeft } from "react-icons/fa6";
import { BsChevronDoubleRight } from "react-icons/bs";
import './alfaRomeoSeries.css'

const AlfaRomeoSeries = () => {

  const alfaRomeoSeries = [
    { name: '147', logo: require('../../../assets/images/Alfa Romeo Car Series/147model.webp'), id: '147' },
    { name: '156', logo: require('../../../assets/images/Alfa Romeo Car Series/156model.webp'), id: '156' },
  ];

  const navigate = useNavigate();

  const goBackToBrandSelection = () => {
    navigate('/car');
  };

  const goToAlfaRomero147Models = () => {
    navigate('/car/alfaRomeo/series/147');
  }

  return (
    <div>
      <div className='flex flex-row items-center justify-center mt-12 mb-6 gap-5 p-6' style={{ background: '#e6e6e6', }}>
        <Link to="/car" className='font-bold text-base sm:text-xl'>Cars</Link>
        <BsChevronDoubleRight />
        <a className='font-bold text-base sm:text-xl flex flex-row gap-2 items-center justify-center'>
          <img src={alfaRomeoLogo} className='w-8 h-8' />
          <p>Alfa Romeo</p>
        </a>
      </div>
      <h1 className='flex items-center justify-center mt-12 mb-6 font-bold text-center text-2xl sm:text-4xl' style={{ color: '#121212' }}>
        Select the Series for Alfa Romeo
      </h1>
      <div className='flex flex-wrap justify-center gap-8'>
        {alfaRomeoSeries.map((brand, index) => (
          <div
            key={index}
            className='bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-xl hover:translate-y-1 hover:flip alfaRomeoSeriesCards'
            style={{ minHeight: '200px', padding: '12px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}
            onClick={goToAlfaRomero147Models}
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

export default AlfaRomeoSeries