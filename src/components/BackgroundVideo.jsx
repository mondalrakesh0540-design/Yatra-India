import React, { useState, useEffect, useRef } from 'react';
import { Mountain, Waves, Trees, Landmark } from 'lucide-react';

const SCENES = [
  {
    id: 'mountain',
    label: 'Mountains',
    icon: Mountain,
    file: 'videos/clouds-travel.webm',
    poster: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80',
    description: 'Himalayan peaks & misty valleys'
  },
  {
    id: 'sea',
    label: 'Sea & Coast',
    icon: Waves,
    file: 'videos/sea-beach.webm',
    poster: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80',
    description: 'Ocean waves & tropical shoreline'
  },
  {
    id: 'forest',
    label: 'Forest Canopy',
    icon: Trees,
    file: 'videos/forest-canopy.webm',
    poster: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1920&q=80',
    description: 'Lush green rainforest & jungles'
  },
  {
    id: 'river',
    label: 'Sacred River',
    icon: Landmark,
    file: 'videos/varanasi-boat.webm',
    poster: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=1920&q=80',
    description: 'Varanasi Ghats along the Ganges'
  },
];

export const BackgroundVideo = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const videoRefs = useRef([]);

  const baseUrl = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL) || '/';
  const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

  // Cycle to next video every 16 seconds automatically if not paused
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % SCENES.length);
    }, 16000);

    return () => clearInterval(timer);
  }, [isPaused]);

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

      {/* Discrete Ambient Landscape Controller (Bottom Right) */}
      <aside aria-label="Scenic Background Controller" className="fixed bottom-5 right-5 z-40 pointer-events-auto hidden sm:flex items-center gap-1.5 p-1.5 rounded-full bg-navy-950/80 backdrop-blur-lg border border-white/15 shadow-glass text-xs">
        <span className="sr-only">Choose a background atmosphere:</span>
        {SCENES.map((scene, idx) => {
          const Icon = scene.icon;
          const isActive = idx === activeIdx;
          return (
            <button
              key={scene.id}
              onClick={() => {
                setActiveIdx(idx);
                setIsPaused(true);
              }}
              title={scene.description}
              aria-label={`Switch atmosphere to ${scene.label}`}
              aria-pressed={isActive}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-300 font-medium ${
                isActive
                  ? 'bg-gradient-to-r from-saffron-500 to-amber-600 text-white shadow-glow-saffron'
                  : 'text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Icon className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{scene.label}</span>
            </button>
          );
        })}

        {/* Subtle auto-rotation indicator / reset */}
        {isPaused && (
          <button
            onClick={() => setIsPaused(false)}
            title="Resume auto-transitioning through all landscapes"
            className="px-2 py-1 text-[10px] uppercase font-bold text-saffron-400 hover:text-saffron-300 transition-colors ml-1 border-l border-white/10 pl-2"
          >
            Auto
          </button>
        )}
      </aside>
    </>
  );
};

export default BackgroundVideo;
