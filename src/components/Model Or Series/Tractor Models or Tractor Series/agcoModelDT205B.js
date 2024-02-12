import React from 'react'
import { BsChevronDoubleRight } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import Agco from '../../../assets/images/agco-logo.webp';
import AgcoTractorModelDT205B from '../../../assets/images/Agco Tractor Series/agco tractor.webp';
import { FaArrowLeft } from "react-icons/fa6";

const AgcoModelDT205B = () => {
  const agcoTractorModelDT205B = [
    { name: 'All', logo: require('../../../assets/images/Agco Tractor Series/agco tractor.webp'), id: 'all' },
  ];

  const navigate = useNavigate();

  const goBackToSeriesSelection = () => {
    navigate('/tractor/agco/series');
  };

  return (
    <div>
      <div className='flex flex-row items-center justify-center mt-12 mb-6 gap-5 p-6' style={{ background: '#e6e6e6', }}>
        <Link to="/tractor" className='font-bold text-base sm:text-xl'>Tractors</Link>
        <BsChevronDoubleRight />
        <a className='font-bold text-base sm:text-xl flex flex-row gap-2 items-center justify-center cursor-pointer' onClick={goBackToSeriesSelection}>
          <img src={Agco} className='w-8 h-8' />
          <p>AGCO</p>
        </a>
        <BsChevronDoubleRight />
        <a className='font-bold text-base sm:text-xl flex flex-row gap-2 items-center justify-center'>
          <img src={AgcoTractorModelDT205B} className='w-8 h-6' />
          <p>DT205 B</p>
        </a>
      </div>
      <h1 className='flex items-center justify-center mt-12 mb-6 font-bold text-center text-2xl sm:text-4xl' style={{ color: '#121212' }}>
        Select the Model for AGCO DT205 B
      </h1>
      <div className='flex flex-wrap justify-center gap-8'>
        {agcoTractorModelDT205B.map((brand, index) => (
          <div
            key={index}
            className='bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-xl hover:translate-y-1 hover:flip agcoSeriesCards'
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

export default AgcoModelDT205B