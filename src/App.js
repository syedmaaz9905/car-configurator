import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Banner from './components/Banner';
import Main from './components/Main';
import CarBrand from './components/Brands Components/carBrand';
import BikeBrand from './components/Brands Components/bikeBrand';
import BoatBrand from './components/Brands Components/boatBrand';
import TractorBrand from './components/Brands Components/tractorBrand';
import TruckBrand from './components/Brands Components/truckBrand';
import AlfaRomeoSeries from './components/Model Or Series/Car Models or Car Series/alfaRomeoSeries';
import AlpinaSeries from './components/Model Or Series/Car Models or Car Series/alpinaSeries';
import ApriliaSeries from './components/Model Or Series/Bike Models or Bike Series/apriliaSeries';
import BMW from './components/Model Or Series/Bike Models or Bike Series/bmwSeries';
import Suzuki from './components/Model Or Series/Boat Models or Boat Series/suzukiSeries';
import VolvoPenta from './components/Model Or Series/Boat Models or Boat Series/volvoPentaSeries';
import AFMLOGMAN from './components/Model Or Series/Tractor Models or Tractor Series/afmLogmanSeries';
import Agco from './components/Model Or Series/Tractor Models or Tractor Series/agcoSeries';
import Caterpillar from './components/Model Or Series/Truck Models or Truck Series/caterpillarSeries';
import Mercedes from './components/Model Or Series/Truck Models or Truck Series/mercedesSeries';
import AlfaRomeoModel147 from './components/Model Or Series/Car Models or Car Series/alfaRomeoModel147';
import AlpinaModelB3 from './components/Model Or Series/Car Models or Car Series/alpinaModelB3';
import ApriliaModelDorsoduro from './components/Model Or Series/Bike Models or Bike Series/apriliaModelDorsoduro';
import BMWModelC from './components/Model Or Series/Bike Models or Bike Series/bmwModelC';
import SuzukiModelDF115 from './components/Model Or Series/Boat Models or Boat Series/suzukiModelDF115';
import VolvoPentaModelD3 from './components/Model Or Series/Boat Models or Boat Series/volvoPentaModelD3';
import AfmLogmanModel801H4 from './components/Model Or Series/Tractor Models or Tractor Series/afmLogmanModel801H4';
import AgcoModelDT205B from './components/Model Or Series/Tractor Models or Tractor Series/agcoModelDT205B';
import CaterpillarModel3126B from './components/Model Or Series/Truck Models or Truck Series/caterpillarModel3126B';
import MercedesModelACTROS from './components/Model Or Series/Truck Models or Truck Series/mercedesModelACTROS';
import AlfaRomeo147Engine from './components/Model Or Series/Car Models or Car Series/alfaRomeo147Engine';
import AlfaRomeo147Engine20TS from './components/Model Or Series/Car Models or Car Series/alfaRomeo147Enginer20TS';

import './App.css';
import bannerImage from '../src/assets/images/banner-bg.jpg';

const carBrandsData = [
  { path: 'alfaRomeo', name: 'Alfa Romeo', model: { no: '147', engine: '2001-2005', chiptuning: '20-ts' }, seriesComponent: <AlfaRomeoSeries />, modelComponent: <AlfaRomeoModel147 />, engineComponent: <AlfaRomeo147Engine />, chiptuningComponent: <AlfaRomeo147Engine20TS /> },
  { path: 'alpina', name: 'Alpina', model: 'B3', seriesComponent: <AlpinaSeries />, modelComponent: <AlpinaModelB3 /> },
];

const bikeBrandsData = [
  { path: 'aprilia', name: 'Aprilia', model: 'dorsoduro', seriesComponent: <ApriliaSeries />, modelComponent: <ApriliaModelDorsoduro /> },
  { path: 'bmw', name: 'BMW', model: 'C', seriesComponent: <BMW />, modelComponent: <BMWModelC /> },
]

const boatBrandsData = [
  { path: 'suzuki', name: 'Suzuki', model: 'DF115', seriesComponent: <Suzuki />, modelComponent: <SuzukiModelDF115 /> },
  { path: 'volvoPenta', name: 'Volvo Penta', model: 'D3', seriesComponent: <VolvoPenta />, modelComponent: <VolvoPentaModelD3 /> },
]

const tractorBrandsData = [
  { path: 'afmLogman', name: 'AFM-LOGMAN', model: '801H4', seriesComponent: <AFMLOGMAN />, modelComponent: <AfmLogmanModel801H4 /> },
  { path: 'agco', name: 'AGCO', model: 'DT205B', seriesComponent: <Agco />, modelComponent: <AgcoModelDT205B /> },
]

const truckBrandsData = [
  { path: 'caterpillar', name: 'Caterpillar', model: '3126B', seriesComponent: <Caterpillar />, modelComponent: <CaterpillarModel3126B /> },
  { path: 'mercedes', name: 'Mercedes', model: 'ACTROS', seriesComponent: <Mercedes />, modelComponent: <MercedesModelACTROS /> },
]

function App() {
  return (
    <Router>
      <main className="App">
        <div className='w-full bg-center' style={{ backgroundImage: `url(${bannerImage})` }}>
          <div className='w-full bg-black opacity-60 text-white'>
            <Banner />
          </div>
        </div>
        <Routes>
          <Route path="/car" element={<CarBrand carBrands={carBrandsData} />} />
          <Route path="/bike" element={<BikeBrand bikeBrands={bikeBrandsData} />} />
          <Route path="/boat" element={<BoatBrand boatBrands={boatBrandsData} />} />
          <Route path="/tractor" element={<TractorBrand tractorBrands={tractorBrandsData} />} />
          <Route path="/truck" element={<TruckBrand truckBrands={truckBrandsData} />} />
          {carBrandsData.map((brand) => (
            <>
              <Route key={brand.path} path={`/car/${brand.path}/series`} element={brand.seriesComponent} />
              <Route path={`/car/${brand.path}/series/${brand.model.no}`} element={brand.modelComponent} />
              <Route path={`/car/${brand.path}/series/${brand.model.no}/${brand.model.engine}`} element={brand.engineComponent} />
              <Route path={`/car/${brand.path}/series/${brand.model.no}/${brand.model.engine}/${brand.model.chiptuning}`} element={brand.chiptuningComponent} />
            </>
          ))}
          {bikeBrandsData.map((brand) => (
            <>
              <Route key={brand.path} path={`/bike/${brand.path}/series`} element={brand.seriesComponent} />
              <Route path={`/bike/${brand.path}/series/${brand.model}`} element={brand.modelComponent} />
            </>
          ))}
          {boatBrandsData.map((brand) => (
            <>
              <Route key={brand.path} path={`/boat/${brand.path}/series`} element={brand.seriesComponent} />
              <Route path={`/boat/${brand.path}/series/${brand.model}`} element={brand.modelComponent} />
            </>
          ))}
          {tractorBrandsData.map((brand) => (
            <>
              <Route key={brand.path} path={`/tractor/${brand.path}/series`} element={brand.seriesComponent} />
              <Route path={`/tractor/${brand.path}/series/${brand.model}`} element={brand.modelComponent} />
            </>
          ))}
          {truckBrandsData.map((brand) => (
            <>
              <Route key={brand.path} path={`/truck/${brand.path}/series`} element={brand.seriesComponent} />
              <Route path={`/truck/${brand.path}/series/${brand.model}`} element={brand.modelComponent} />
            </>
          ))}
          <Route path="/" element={<Main />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
