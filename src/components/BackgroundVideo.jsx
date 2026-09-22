import React, { useState, useEffect, useRef } from 'react';

const SCENES = [
  {
    id: 'mountain',
    label: 'Mountains',
    file: 'videos/clouds-travel.webm',
    poster: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80',
    description: 'Himalayan peaks & misty valleys'
  },
  {
    id: 'sea',
    label: 'Sea & Coast',
    file: 'videos/sea-beach.webm',
    poster: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80',
    description: 'Ocean waves & tropical shoreline'
  },
  {
    id: 'forest',
    label: 'Forest Canopy',
    file: 'videos/forest-canopy.webm',
    poster: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1920&q=80',
    description: 'Lush green rainforest & jungles'
  },
  {
    id: 'river',
    label: 'Sacred River',
    file: 'videos/varanasi-boat.webm',
    poster: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=1920&q=80',
    description: 'Varanasi Ghats along the Ganges'
  },
];

export const BackgroundVideo = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const videoRefs = useRef([]);

  const baseUrl = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL) || '/';
  const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

  // Cycle to next video every 16 seconds automatically
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % SCENES.length);
    }, 16000);

    return () => clearInterval(timer);
  }, []);

  // Ensure active video is playing
  useEffect(() => {
    const activeVideo = videoRefs.current[activeIdx];
    if (activeVideo) {
      activeVideo.currentTime = 0;
      activeVideo.play().catch(() => {
        // Autoplay policy fallback (browser mute policy)
      });
    }
  }, [activeIdx]);

  return (
    <>
      {/* Fixed Background Video Stack with Subtle Blur */}
      <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        {SCENES.map((scene, idx) => {
          const isActive = idx === activeIdx;
          return (
            <video
              key={scene.id}
              ref={(el) => (videoRefs.current[idx] = el)}
              autoPlay={idx === 0}
              loop
              muted
              playsInline
              poster={scene.poster}
              className={`absolute inset-0 w-full h-full object-cover scale-105 filter blur-[2px] transition-opacity duration-1000 ${
                isActive ? 'opacity-80 z-10' : 'opacity-0 z-0'
              }`}
            >
              <source src={`${cleanBase}${scene.file}`} type="video/webm" />
            </video>
          );
        })}

        {/* Ambient Dark Navy Tint & Vignette Overlays for Legibility */}
        <div className="absolute inset-0 bg-navy-950/45 z-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/60 via-transparent to-navy-950/75 z-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.05)_0%,_transparent_75%)] z-20" />
      </div>
    </>
  );
};

export default BackgroundVideo;
