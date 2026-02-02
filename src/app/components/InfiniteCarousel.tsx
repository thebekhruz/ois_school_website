import { MapPin } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface University {
  name: string;
  country: string;
  location?: string;
  image: string;
}

interface InfiniteCarouselProps {
  universities: University[];
}

export function InfiniteCarousel({ universities }: InfiniteCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const animationRef = useRef<number | null>(null);
  const velocityRef = useRef(0);

  // Auto scroll animation
  useEffect(() => {
    if (isDragging || !scrollerRef.current) return;

    const scroll = () => {
      if (!scrollerRef.current || isDragging) return;
      
      velocityRef.current = 0.5; // pixels per frame
      scrollerRef.current.scrollLeft += velocityRef.current;
      
      // Reset scroll when reaching halfway point for infinite effect
      const maxScroll = scrollerRef.current.scrollWidth / 2;
      if (scrollerRef.current.scrollLeft >= maxScroll) {
        scrollerRef.current.scrollLeft = 0;
      }
      
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDragging]);

  const handleStart = (clientX: number) => {
    if (!scrollerRef.current) return;
    setIsDragging(true);
    setStartX(clientX);
    setScrollLeft(scrollerRef.current.scrollLeft);
    scrollerRef.current.style.scrollBehavior = 'auto';
  };

  const handleMove = (clientX: number) => {
    if (!isDragging || !scrollerRef.current) return;
    const x = clientX - startX;
    scrollerRef.current.scrollLeft = scrollLeft - x;
  };

  const handleEnd = () => {
    if (!scrollerRef.current) return;
    setIsDragging(false);
    scrollerRef.current.style.scrollBehavior = 'smooth';
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleEnd();
    }
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  return (
    <div className="relative overflow-hidden">
      {/* Continuous scrolling container */}
      <div 
        ref={scrollerRef}
        className={`flex gap-4 overflow-x-scroll scrollbar-hide ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* First set of universities */}
        {universities.map((university, idx) => (
          <div key={`first-${idx}`} className="flex-shrink-0 w-64">
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100">
              {/* University Image */}
              <div className="aspect-square overflow-hidden relative">
                <ImageWithFallback 
                  src={university.image} 
                  alt={university.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Country Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <div className="px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs font-medium text-[#003c79] shadow-lg">
                    {university.country}
                  </div>
                </div>

                {/* Hover Content */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10">
                  {/* Dark background for text */}
                  <div className="bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-white font-semibold text-sm mb-1 line-clamp-2">{university.name}</h3>
                    {university.location && (
                      <p className="text-white/90 text-xs flex items-center gap-1">
                        <MapPin size={12} />
                        {university.location}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* University Name - Visible by default */}
              <div className="p-3 group-hover:bg-[#003c79] transition-colors duration-500">
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-white line-clamp-1 text-center transition-colors duration-500">{university.name}</h3>
              </div>
            </div>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {universities.map((university, idx) => (
          <div key={`second-${idx}`} className="flex-shrink-0 w-64">
            <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100">
              {/* University Image */}
              <div className="aspect-square overflow-hidden relative">
                <ImageWithFallback 
                  src={university.image} 
                  alt={university.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Country Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <div className="px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs font-medium text-[#003c79] shadow-lg">
                    {university.country}
                  </div>
                </div>

                {/* Hover Content */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10">
                  {/* Dark background for text */}
                  <div className="bg-gradient-to-t from-black to-transparent p-4">
                    <h3 className="text-white font-semibold text-sm mb-1 line-clamp-2">{university.name}</h3>
                    {university.location && (
                      <p className="text-white/90 text-xs flex items-center gap-1">
                        <MapPin size={12} />
                        {university.location}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* University Name - Visible by default */}
              <div className="p-3 group-hover:bg-[#003c79] transition-colors duration-500">
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-white line-clamp-1 text-center transition-colors duration-500">{university.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}