import React, { useEffect, useState, PureComponent } from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BsChevronDoubleRight } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import alfaRomeoLogo from '../../../assets/images/alfa-romeo-logo.webp';
import alfaRomeoModel147Image from '../../../assets/images/Alfa Romeo Car Series/147model.webp'
import boreXIcon from '../../../assets/images/bore-x-stroke-icon.svg'
import { FaArrowLeft } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { PiEngineBold } from "react-icons/pi";
import { PiLightningBold } from "react-icons/pi";
import './alfaRomeo147Enginer20TS.css'

const AlfaRomeo20TS = () => {
  const data = [
    {
      name: 'Power',
      tuning: 164,
      original: 150,
    },
    {
      name: 'Torque',
      tuning: 191,
      original: 172,
    },
  ];

  const navigate = useNavigate();

  const goBackToSeriesSelection = () => {
    navigate('/car/alfaRomeo/series');
  };

  const goBackToModelSelection = () => {
    navigate('/car/alfaRomeo/series/147');
  };

  const goBackToEngineSelection = () => {
    navigate('/car/alfaRomeo/series/147/2001-2005');
  };

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600); // Adjust the breakpoint as needed

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div>
      <div className='flex flex-col sm:flex-row items-center justify-center mt-12 mb-6 gap-5 p-6' style={{ background: '#e6e6e6', }}>
        <Link to="/car" className='font-bold text-base sm:text-xl'>Cars</Link>
        {isSmallScreen ? <FaAngleDown /> : <BsChevronDoubleRight />}
        <a className='font-bold text-base sm:text-xl flex flex-row gap-2 items-center justify-center cursor-pointer' onClick={goBackToSeriesSelection}>
          <img src={alfaRomeoLogo} className='w-8 h-8' />
          <p>Alfa Romeo</p>
        </a>
        {isSmallScreen ? <FaAngleDown /> : <BsChevronDoubleRight />}
        <a className='font-bold text-base sm:text-xl flex flex-row gap-2 items-center justify-center cursor-pointer' onClick={goBackToModelSelection}>
          <img src={alfaRomeoModel147Image} className='w-8 h-6' />
          <p>147</p>
        </a>
        {isSmallScreen ? <FaAngleDown /> : <BsChevronDoubleRight />}
        <a className='font-bold text-base sm:text-xl' onClick={goBackToEngineSelection}>2001 - 2005</a>
        {isSmallScreen ? <FaAngleDown /> : <BsChevronDoubleRight />}
        <p className='font-bold text-base sm:text-xl'>2.0 TS (150 HP / 172 Nm)</p>
      </div>

      <div className='flex items-center justify-center'>
        <div className='flex flex-col sm:flex-row items-center justify-center p-10 md:p-16' style={{ background: '#dbdbdb', borderRadius: '20px', gap: '40px' }}>
          <img src={alfaRomeoModel147Image} />
          <div className='flex gap-5 flex-col'>
            <div className='flex flex-row font-bold items-center gap-2'>
              <img src={alfaRomeoLogo} className='w-8 h-8' />
              <h2 className='text-2xl'>Chiptuning For Alfa Romeo</h2>
            </div>
            <div className='flex flex-row items-center gap-2'>
              <p className='font-bold'>Series: </p>
              <p>147</p>
            </div>
            <div className='flex flex-row items-center gap-2'>
              <p className='font-bold'>Model: </p>
              <p>2001-2005</p>
            </div>
            <div className='flex flex-row items-center gap-2'>
              <p className='font-bold'>Engine: </p>
              <p>2.0 TS</p>
            </div>
            <div className='flex flex-col gap-3'>
              <div className='flex flex-row gap-2 items-center'>
                <BsFillFuelPumpDieselFill className='fuelTypeChiptuning' />
                <div className='flex flex-row gap-2'>
                  <p className='font-bold'>Fuel Type: </p>
                  <p>Gasoline</p>
                </div>
              </div>

              <div className='flex flex-row gap-2 items-center'>
                <PiEngineBold className='fuelTypeChiptuning' />
                <div className='flex flex-row gap-2'>
                  <p className='font-bold'>Standard HP: </p>
                  <p>150</p>
                </div>
              </div>

              <div className='flex flex-row gap-2 items-center'>
                <PiLightningBold className='fuelTypeChiptuning' />
                <div className='flex flex-row gap-2'>
                  <p className='font-bold'>Standard Nm: </p>
                  <p>172</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center flex-col'>
        <div>
          <h1 className='mt-6 font-bold text-2xl'>Performance Results</h1>
        </div>
        <div className='p-4 bg-gray-300 rounded-lg mt-6 tableAccordion'>
          <div className='py-2'>
            <button onClick={() => setAccordionOpen(!accordionOpen)} className='flex justify-between w-full'>
              <span className='font-bold'>Stage 1 ( +14 Hp / +19 Nm )</span>
              {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
              <svg
                className="text-black shrink-0 ml-8"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`transform origin-center transition duration-200 ease-out ${accordionOpen && "!rotate-180"
                    }`}
                />
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && "!rotate-180"
                    }`}
                />
              </svg>
            </button>
            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className='overflow-hidden'>
                <div>
                  <table className='w-full text-center mt-8'>
                    <thead className='font-bold'>
                      <tr>
                        <th className='p-1 sm:p-3 text-base sm:text-lg'></th>
                        <th className='p-1 sm:p-3 text-base sm:text-lg'>Stock</th>
                        <th className='p-1 sm:p-3 text-base sm:text-lg'>Tuning</th>
                        <th className='p-1 sm:p-3 text-base sm:text-lg'>Difference</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className='p-0 sm:p-1 font-bold text-base sm:text-lg'>Hp</td>
                        <td>150</td>
                        <td>164</td>
                        <td className='font-bold' style={{ color: '#1a71bd' }}>+14Hp</td>
                      </tr>
                      <tr>
                        <td className='p-0 sm:p-1 font-bold text-base sm:text-lg'>Nm</td>
                        <td>172</td>
                        <td>191</td>
                        <td className='font-bold' style={{ color: '#1a71bd' }}>+19Nm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center flex-col'>
        <div>
          <h1 className='mt-6 font-bold text-2xl'>Engine Details</h1>
        </div>
        <div className='flex flex-col items-center justify-center mt-6'>
          <img src={boreXIcon} className='w-20 h-20' />
          <p>83,0 x 91,0 mm</p>
        </div>
      </div>

      <div className='flex items-center justify-center'>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" domain={[0, 300]} />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" domain={[0, 300]} />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="original" fill="#8884d8" />
          <Bar yAxisId="right" dataKey="tuning" fill="#82ca9d" />
        </BarChart>
      </div>

      <div className='mt-12 mb-6 flex items-center justify-end p-6 backButtonBrand'>
        <button className='btnn btnBrandd' style={{ borderRadius: '8px' }} onClick={goBackToEngineSelection}>Go Back To Engine Selection</button>
      </div>
    </div>
  )
}

export default AlfaRomeo20TS