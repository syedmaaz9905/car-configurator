import React from 'react'
import { BsChevronDoubleRight } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import volvoPentaLogo from '../../../assets/images/volvo-penta-logo.webp';
import volvoPentaModelD3 from '../../../assets/images/Volvo Penta Boat Series/logo-tuning-x.png';
import { FaArrowLeft } from "react-icons/fa6";

const VolvoPentaModelD3 = () => {
  const volvoModelsD3 = [
    { name: '2019 ...', logo: require('../../../assets/images/Volvo Penta Boat Series/logo-tuning-x.png'), id: '2019onwards' },
    { name: '2019 ...', logo: require('../../../assets/images/Volvo Penta Boat Series/logo-tuning-x.png'), id: '2019onwards' },
  ];

  const navigate = useNavigate();

  const goBackToSeriesSelection = () => {
    navigate('/boat/volvoPenta/series');
  };

  return (
    <div>
      <div className='flex flex-row items-center justify-center mt-12 mb-6 gap-5 p-6' style={{ background: '#e6e6e6', }}>
        <Link to="/boat" className='font-bold text-base sm:text-xl'>Boats</Link>
          <BsChevronDoubleRight />
        <a className='font-bold text-base sm:text-xl flex flex-row gap-2 items-center justify-center cursor-pointer' onClick={goBackToSeriesSelection}>
          <img src={volvoPentaLogo} className='w-8 h-8' />
          <p>Volvo Penta</p>
        </a>
          <BsChevronDoubleRight />
        <a className='font-bold text-base sm:text-xl flex flex-row gap-2 items-center justify-center'>
          <img src={volvoPentaModelD3} className='w-8 h-6' />
          <p>D3</p>
        </a>
      </div>
      <h1 className='flex items-center justify-center mt-12 mb-6 font-bold text-center text-2xl sm:text-4xl' style={{ color: '#121212' }}>
        Select the Model for Volvo Penta D3
      </h1>
      <div className='flex flex-wrap justify-center gap-8'>
        {volvoModelsD3.map((brand, index) => (
          <div
            key={index}
            className='bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-xl hover:translate-y-1 hover:flip volvoPentaSeriesCards'
            style={{minHeight: '200px', padding: '12px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}
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

export default VolvoPentaModelD3