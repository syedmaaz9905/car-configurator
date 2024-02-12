import React from 'react'
import { FaChevronRight } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import alpinaLogo from '../../../assets/images/alpina-logo.webp';
import alpinaModelB3 from '../../../assets/images/Alpina Car Series/B3model.webp'
import { FaArrowLeft } from "react-icons/fa6";

const AlpinaModelB3 = () => {
  const alpinaModels = [
    { name: '... 2018', logo: require('../../../assets/images/Alpina Car Series/B3.webp'), id: 'backards2018' },
    { name: '2019 ...', logo: require('../../../assets/images/Alpina Car Series/B3.webp'), id: '2019onwards' },
  ];

  const navigate = useNavigate();

  const goBackToSeriesSelection = () => {
    navigate('/car/alpina/series');
  };

  return (
    <div>
      <div className='flex flex-row items-center justify-center mt-12 mb-6 gap-5 p-6' style={{ background: '#e6e6e6', }}>
        <Link to="/car" className='font-bold text-base sm:text-xl'>Cars</Link>
        <FaChevronRight />
        <a className='font-bold text-base sm:text-xl flex flex-row gap-2 items-center justify-center cursor-pointer' onClick={goBackToSeriesSelection}>
          <img src={alpinaLogo} className='w-8 h-8' />
          <p>Alpina</p>
        </a>
        <FaChevronRight />
        <a className='font-bold text-base sm:text-xl flex flex-row gap-2 items-center justify-center'>
          <img src={alpinaModelB3} className='w-8 h-6' />
          <p>B3</p>
        </a>
      </div>
      <h1 className='flex items-center justify-center mt-12 mb-6 font-bold text-center text-2xl sm:text-4xl' style={{ color: '#121212' }}>
        Select the Model for Alpina B3
      </h1>
      <div className='flex flex-wrap justify-center gap-8'>
        {alpinaModels.map((brand, index) => (
          <div
            key={index}
            className='bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-xl hover:translate-y-1 hover:flip alpinaSeriesCards'
            style={{ maxWidth: '150px', minHeight: '200px', padding: '12px' }}
          // onClick={goToAlfaRomero147Models}
          >
            <img
              src={brand.logo}
              alt={`${brand.name} Logo`}
              className='object-cover object-center transition-transform'
            />
            <div className='p-2 text-center'>
              <p className='text-lg font-semibold'>{brand.name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-12 mb-6 flex items-center justify-center backButtonBrandSelection'>
        <button className='btn btnBrandSelection' onClick={goBackToSeriesSelection}><FaArrowLeft /> Go Back To Series Selection</button>
      </div>
    </div>
  )
}

export default AlpinaModelB3