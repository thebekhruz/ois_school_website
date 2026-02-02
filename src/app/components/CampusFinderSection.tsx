import { useState } from 'react';
import { MapPin, Navigation, Locate, Car, Bus, School, Building2, X, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router';

interface Campus {
  name: string;
  distance: string;
  programs: string;
  ageRange: string;
  busAvailable: string;
}

interface CampusFinderSectionProps {
  language: 'ru' | 'uz' | 'en';
  pt: any;
  address: string;
  setAddress: (value: string) => void;
  userLocation: string | null;
  campusResults: Campus[] | null;
  handleCampusFinder: () => void;
  handleUseLocation: () => void;
  openCampusModal: (campus: Campus) => void;
  getLocalizedPath: (path: string) => string;
}

export function CampusFinderSection({
  language,
  pt,
  address,
  setAddress,
  userLocation,
  campusResults,
  handleCampusFinder,
  handleUseLocation,
  openCampusModal,
  getLocalizedPath
}: CampusFinderSectionProps) {
  const [activeCampusIndex, setActiveCampusIndex] = useState<number | null>(null);
  const [showCampusDetails, setShowCampusDetails] = useState(false);
  const [isLoadingMap, setIsLoadingMap] = useState(false);

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-2xl border border-white/20">
      {/* Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 text-[#003c79]" size={22} />
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                setIsLoadingMap(true);
                handleCampusFinder();
                setTimeout(() => setIsLoadingMap(false), 1000);
              }
            }}
            placeholder={pt.campusFinder.placeholder}
            className="w-full pl-14 pr-6 py-5 rounded-2xl border-2 border-gray-200 focus:border-[#003c79] focus:outline-none text-lg transition-all"
          />
        </div>
        <button
          onClick={() => {
            setIsLoadingMap(true);
            handleUseLocation();
            setTimeout(() => setIsLoadingMap(false), 1000);
          }}
          className="px-6 md:px-8 py-5 bg-white border-2 border-gray-200 text-[#003c79] rounded-2xl hover:bg-gray-50 transition-all font-medium text-base md:text-lg inline-flex items-center justify-center gap-2 group whitespace-nowrap"
        >
          <Locate size={20} className="group-hover:scale-110 transition-transform" />
          <span className="hidden md:inline">{pt.campusFinder.useLocation}</span>
          <span className="md:hidden">{language === 'ru' ? 'Геолокация' : language === 'uz' ? 'Joylashuv' : 'Location'}</span>
        </button>
        <button
          onClick={() => {
            setIsLoadingMap(true);
            handleCampusFinder();
            setTimeout(() => setIsLoadingMap(false), 1000);
          }}
          className="px-8 md:px-10 py-5 bg-[#C41E3A] text-white rounded-2xl hover:bg-[#003c79] transition-all font-medium text-lg inline-flex items-center justify-center gap-2 group"
        >
          <Navigation size={20} className="group-hover:rotate-45 transition-transform" />
          {pt.campusFinder.findButton}
        </button>
      </div>

      {/* Results Section */}
      {campusResults && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Your Location Header */}
          <div className="flex items-center gap-2 text-gray-700 pb-4 border-b border-gray-200">
            <MapPin size={18} className="text-[#C41E3A]" />
            <span className="font-medium">{pt.campusFinder.yourLocation}:</span>
            <span>{userLocation}</span>
          </div>

          {/* Map + Campus List Layout */}
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left: Map + Campus Details */}
            <div className="flex-1 lg:w-[65%] relative">
              {/* Interactive Map */}
              <div className="bg-gradient-to-br from-[#003c79]/5 to-[#FFD700]/5 rounded-2xl border-2 border-gray-200 overflow-hidden">
                {isLoadingMap ? (
                  <div className="aspect-[16/10] flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 border-4 border-[#003c79]/20 border-t-[#003c79] rounded-full animate-spin mx-auto" />
                      <p className="text-gray-600 font-medium">
                        {language === 'ru' ? 'Построение маршрута...' : language === 'uz' ? 'Marshrut tuzilmoqda...' : 'Calculating route...'}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-[16/10] relative bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="absolute inset-0 p-8">
                      {/* User Location */}
                      <div className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="relative">
                          <div className="w-6 h-6 bg-[#FFD700] rounded-full border-4 border-white shadow-lg animate-pulse" />
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
                            {language === 'ru' ? 'Вы здесь' : language === 'uz' ? 'Siz shu yerdasiz' : 'You are here'}
                          </div>
                        </div>
                      </div>

                      {/* Campus 1 Marker */}
                      <div className="absolute top-[25%] left-[35%] z-10">
                        <div className="relative group cursor-pointer" onClick={() => { setActiveCampusIndex(0); setShowCampusDetails(true); openCampusModal(campusResults[0]); }}>
                          <div className={`w-8 h-8 rounded-full border-4 border-white shadow-lg transition-all ${activeCampusIndex === 0 ? 'bg-[#C41E3A] scale-125' : 'bg-[#003c79]'}`}>
                            <School className="w-4 h-4 text-white m-auto mt-1" />
                          </div>
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#003c79] text-white px-3 py-1 rounded-lg text-xs font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                            {campusResults[0].name} - {campusResults[0].distance}{language === 'ru' ? ' мин' : language === 'uz' ? ' daq' : ' min'}
                          </div>
                        </div>
                        <svg className="absolute pointer-events-none" style={{ width: '200px', height: '150px', top: '0', left: '0' }}>
                          <path d="M 40 40 Q 80 60, 120 100" stroke="#003c79" strokeWidth="3" fill="none" strokeDasharray="8,4" opacity="0.6" />
                        </svg>
                      </div>

                      {/* Campus 2 Marker */}
                      <div className="absolute top-[20%] right-[25%] z-10">
                        <div className="relative group cursor-pointer" onClick={() => { setActiveCampusIndex(1); setShowCampusDetails(true); openCampusModal(campusResults[1]); }}>
                          <div className={`w-8 h-8 rounded-full border-4 border-white shadow-lg transition-all ${activeCampusIndex === 1 ? 'bg-[#C41E3A] scale-125' : 'bg-[#003c79]'}`}>
                            <School className="w-4 h-4 text-white m-auto mt-1" />
                          </div>
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#003c79] text-white px-3 py-1 rounded-lg text-xs font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                            {campusResults[1].name} - {campusResults[1].distance}{language === 'ru' ? ' мин' : language === 'uz' ? ' daq' : ' min'}
                          </div>
                        </div>
                        <svg className="absolute pointer-events-none" style={{ width: '250px', height: '180px', top: '0', left: '-50px' }}>
                          <path d="M 250 180 Q 200 120, 120 80" stroke="#C41E3A" strokeWidth="3" fill="none" strokeDasharray="8,4" opacity="0.6" />
                        </svg>
                      </div>

                      {/* Legend */}
                      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg space-y-2 text-xs">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-1 bg-[#003c79] rounded" />
                          <span className="text-gray-700">{campusResults[0].name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-1 bg-[#C41E3A] rounded" />
                          <span className="text-gray-700">{campusResults[1].name}</span>
                        </div>
                      </div>

                      <div className="absolute bottom-4 right-4 text-xs text-gray-400">Interactive Map</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Campus Details Panel - REMOVED: Now using popup modal directly */}
            </div>

            {/* Right: Campus List */}
            <div className="lg:w-[35%] space-y-4">
              <div className="text-sm font-medium text-gray-700 mb-4">
                {language === 'ru' ? 'Кампусы поблизости' : language === 'uz' ? 'Yaqin atrofdagi kampuslar' : 'Nearby Campuses'}
                <span className="text-gray-500 ml-2">({campusResults.length})</span>
              </div>

              {[...campusResults].sort((a, b) => parseInt(a.distance) - parseInt(b.distance)).map((campus, idx) => {
                const originalIdx = campusResults.findIndex(c => c.name === campus.name);
                const isActive = activeCampusIndex === originalIdx;
                
                return (
                  <div key={idx} onClick={() => { setActiveCampusIndex(originalIdx); setShowCampusDetails(true); openCampusModal(campus); }} className={`group cursor-pointer bg-gradient-to-br rounded-2xl p-5 border-2 transition-all hover:shadow-lg ${isActive ? 'from-[#003c79]/10 to-[#C41E3A]/10 border-[#C41E3A] shadow-md' : 'from-gray-50 to-white border-gray-200 hover:border-[#003c79]/30'}`}>
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            {idx === 0 && <span className="px-2 py-0.5 bg-[#FFD700] text-xs font-medium rounded-full text-gray-900">{language === 'ru' ? 'Ближайший' : language === 'uz' ? 'Eng yaqin' : 'Closest'}</span>}
                          </div>
                          <h4 className="text-lg font-medium text-gray-900">{campus.name}</h4>
                          <p className="text-sm text-gray-600 mt-1">{campus.programs}</p>
                          <p className="text-xs text-[#003c79] font-medium mt-0.5">{campus.ageRange}</p>
                        </div>
                        <div className={`p-2 rounded-full transition-colors ${isActive ? 'bg-[#C41E3A]/10' : 'bg-gray-100 group-hover:bg-[#003c79]/10'}`}>
                          <School className={`${isActive ? 'text-[#C41E3A]' : 'text-gray-600'}`} size={20} />
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${isActive ? 'bg-[#C41E3A] text-white' : 'bg-[#003c79]/10 text-[#003c79]'}`}>
                          <Car size={14} />
                          <span className="text-sm font-medium">{campus.distance} {language === 'ru' ? 'мин' : language === 'uz' ? 'daq' : 'min'}</span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-full">
                          <Bus size={14} className="text-gray-600" />
                          <span className="text-xs text-gray-600">{campus.busAvailable}</span>
                        </div>
                      </div>

                      <div className={`text-sm font-medium flex items-center gap-1 transition-all ${isActive ? 'text-[#C41E3A]' : 'text-[#003c79] group-hover:gap-2'}`}>
                        {language === 'ru' ? 'Показать на карте' : language === 'uz' ? 'Xaritada ko\'rsatish' : 'Show on map'}
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bus Service Footer */}
          <div className="text-center pt-6 border-t border-gray-200">
            <div className="inline-flex items-center gap-2 mb-3">
              <Bus className="text-[#003c79]" size={20} />
              <p className="text-gray-700 font-medium">{pt.campusFinder.busFooter}</p>
            </div>
            <div>
              <Link to={getLocalizedPath('admissions/transportation')} className="text-[#C41E3A] hover:text-[#003c79] font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                {pt.campusFinder.seeBusRoutes}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}