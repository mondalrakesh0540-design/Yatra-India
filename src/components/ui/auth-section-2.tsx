"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ArrowRight, Compass, Sparkles, MapPin } from "lucide-react";

// Curated verified high-resolution photography showcasing India's extraordinary destinations
const images = [
  "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80", // Taj Mahal, Agra
  "https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=800&q=80",  // Varanasi Ghats
  "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",  // Kerala Backwaters
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",  // Ladakh Pangong Tso
];

const destinationInfo = [
  {
    title: "Taj Mahal",
    location: "Agra, Uttar Pradesh",
    prompt: "Sunrise over the ivory-white marble domes of the Taj Mahal, soft golden mist reflecting upon the sacred Yamuna river, intricate Mughal archways, and eternal architectural poetry.",
  },
  {
    title: "Ganga Aarti",
    location: "Varanasi, Uttar Pradesh",
    prompt: "Spiritual evening Ganga Aarti at Dashashwamedh Ghat, glowing brass fire lamps, sacred Vedic chants resonating across stone steps, and marigold flower offerings floating on the Ganges.",
  },
  {
    title: "Emerald Backwaters",
    location: "Alleppey, Kerala",
    prompt: "Traditional wooden kettuvallam houseboat gliding smoothly through emerald green palms and tranquil backwater canals of Alleppey at dusk, a peaceful tropical paradise.",
  },
  {
    title: "Pangong Tso",
    location: "Leh, Ladakh",
    prompt: "Crystal azure waters shifting hues against towering barren Himalayan peaks, crisp alpine air, and colorful Tibetan prayer flags fluttering under a deep cobalt sky.",
  },
];

const formFields = [
  { label: "First Name", value: "Aarav", type: "text" },
  { label: "Last Name", value: "Sharma", type: "text" },
];

const termsText = (
  <>
    By creating an account, you agree to our{" "}
    <a
      href="#"
      className="font-medium text-saffron-400 underline underline-offset-2 hover:text-saffron-300"
    >
      Terms of Service
    </a>{" "}
    and{" "}
    <a
      href="#"
      className="font-medium text-saffron-400 underline underline-offset-2 hover:text-saffron-300"
    >
      Privacy Policy
    </a>
  </>
);

export interface AuthSectionTwoProps {
  defaultMode?: "login" | "signup";
  onSuccess?: () => void;
}

export default function AuthSectionTwo({
  defaultMode = "signup",
  onSuccess,
}: AuthSectionTwoProps = {}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const baseUrl = (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.BASE_URL) || "/";
  const cleanBase = baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 3200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-navy-950 p-3 sm:p-5 text-slate-100 antialiased font-sans overflow-hidden">
      {/* Background Realistic Travel Video with Blur */}
      <div className="pointer-events-none fixed inset-0 z-0 h-full w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1920&q=80"
          className="absolute inset-0 h-full w-full object-cover scale-110 filter blur-[9px] opacity-50 transition-opacity duration-1000"
        >
          <source src={`${cleanBase}videos/varanasi-boat.webm`} type="video/webm" />
          <source src={`${cleanBase}videos/clouds-travel.webm`} type="video/webm" />
        </video>
        {/* Dark Navy Tint & Vignette Overlays for Optimal Contrast and Glassmorphism */}
        <div className="absolute inset-0 bg-navy-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-navy-950/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-transparent to-navy-950/80" />
      </div>

      {/* Ambient background glow effects matching Yatra India aesthetic */}
      <div className="pointer-events-none absolute -top-40 -left-40 z-0 w-96 h-96 rounded-full bg-saffron-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 z-0 w-96 h-96 rounded-full bg-amber-500/15 blur-3xl" />

      <div className="relative z-10 grid min-h-[calc(100vh-1.5rem)] gap-6 lg:grid-cols-[0.96fr_1.04fr] items-center">
        {/* Left Side: Destination Showcase Showcase */}
        <div className="flex min-h-[720px] justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-navy-900/90 via-navy-950/90 to-navy-900/90 backdrop-blur-xl px-7 py-10 text-white shadow-2xl sm:px-10 lg:min-h-[760px] lg:py-16">
          <div className="flex w-full max-w-[500px] flex-col items-center justify-between">
            {/* Yatra India Brand Header */}
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-saffron-500 to-amber-600 flex items-center justify-center shadow-glow-saffron">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xl font-bold tracking-wider font-serif text-white flex items-center gap-1.5">
                  YATRA <span className="text-saffron-500 font-extrabold tracking-widest text-xs uppercase bg-saffron-500/10 px-1.5 py-0.5 rounded border border-saffron-500/30">INDIA</span>
                </span>
                <span className="text-[10px] text-slate-300 tracking-widest uppercase font-medium">Experience Extraordinary</span>
              </div>
            </div>

            {/* Interactive Image Grid */}
            <div className="relative mt-8 grid w-full grid-cols-[1.55fr_1fr] gap-2.5 rounded-xl">
              <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-16 bg-gradient-to-b from-navy-950/80 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 bg-gradient-to-t from-navy-950/80 to-transparent" />
              <ImageTile
                src={images[0]}
                active={activeIndex === 0}
                location={destinationInfo[0].location}
                className="row-span-2 h-[260px]"
              />
              <ImageTile
                src={images[1]}
                active={activeIndex === 1}
                location={destinationInfo[1].location}
                className="h-[126px]"
              />
              <ImageTile
                src={images[3]}
                active={activeIndex === 3}
                location={destinationInfo[3].location}
                className="h-[126px]"
              />
              <ImageTile
                src={images[2]}
                active={activeIndex === 2}
                location={destinationInfo[2].location}
                className="col-span-2 h-[130px]"
              />
            </div>

            {/* Curated Journey Card */}
            <div className="mt-6 w-full rounded-xl border border-saffron-500/25 bg-navy-900/80 backdrop-blur-md px-5 py-4 shadow-inner">
              <div className="flex items-end gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-saffron-400 mb-1">
                    <Sparkles className="size-3 text-saffron-400" />
                    <span>Featured Destination</span>
                    <span className="text-slate-400 font-normal">| {destinationInfo[activeIndex].title}</span>
                  </div>
                  <p className="line-clamp-3 text-xs leading-relaxed text-slate-300">
                    {destinationInfo[activeIndex].prompt}
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Next destination"
                  onClick={() => setActiveIndex((current) => (current + 1) % images.length)}
                  className="grid size-8 shrink-0 place-items-center rounded-full bg-saffron-500/20 text-saffron-400 transition-all hover:bg-saffron-500 hover:text-white shadow-glow-saffron"
                >
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </div>

            {/* Tagline */}
            <p className="mt-6 max-w-[320px] text-center font-serif text-lg leading-snug text-slate-200">
              A gateway to 179+ extraordinary destinations across India
            </p>

            {/* Destination Switcher Indicators */}
            <div className="mt-6 flex gap-2">
              {destinationInfo.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={
                    activeIndex === index
                      ? "h-1.5 w-9 rounded-full bg-gradient-to-r from-saffron-500 to-amber-500 shadow-glow-saffron transition-all duration-300"
                      : "h-1.5 w-3 rounded-full bg-white/25 hover:bg-white/40 transition-all duration-300"
                  }
                  aria-label={`Show ${destinationInfo[index].title}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Auth Form Container */}
        <div className="flex min-h-[720px] items-center justify-center px-4 py-8 sm:px-8 lg:min-h-0 lg:px-10 xl:px-14">
          <AuthForm defaultMode={defaultMode} onSuccess={onSuccess} />
        </div>
      </div>
    </section>
  );
}

function ImageTile({
  src,
  active,
  location,
  className,
}: {
  src: string;
  active: boolean;
  location?: string;
  className: string;
}) {
  return (
    <div
      className={`${className} relative overflow-hidden rounded-xl border transition-all duration-500 ${
        active ? "z-10 border-saffron-500/60 shadow-lg shadow-saffron-500/10 ring-1 ring-saffron-500/40" : "z-0 border-white/10"
      }`}
    >
      <img
        src={src}
        alt="Indian heritage destination showcase"
        className={`h-full w-full object-cover transition-all duration-700 ${active ? "opacity-100 scale-105" : "opacity-45 scale-100"}`}
      />
      {active && location && (
        <div className="absolute bottom-2 left-2 z-20 flex items-center gap-1 rounded-md bg-navy-950/80 px-2 py-0.5 text-[11px] font-medium text-slate-200 backdrop-blur-md border border-white/10 shadow-sm">
          <MapPin className="w-3 h-3 text-saffron-400" />
          <span>{location}</span>
        </div>
      )}
      <FocusCorners active={active} />
    </div>
  );
}

function FocusCorners({ active }: { active: boolean }) {
  const baseClass = `pointer-events-none absolute h-3.5 w-3.5 border-saffron-400 transition-all duration-500 ease-out ${
    active ? "translate-x-0 translate-y-0 opacity-100" : "opacity-0"
  }`;

  return (
    <>
      <div
        className={`${baseClass} left-1 top-1 border-l-2 border-t-2 ${active ? "" : "-translate-x-2 -translate-y-2"}`}
      />
      <div
        className={`${baseClass} right-1 top-1 border-r-2 border-t-2 ${active ? "" : "translate-x-2 -translate-y-2"}`}
      />
      <div
        className={`${baseClass} bottom-1 left-1 border-b-2 border-l-2 ${active ? "" : "-translate-x-2 translate-y-2"}`}
      />
      <div
        className={`${baseClass} bottom-1 right-1 border-b-2 border-r-2 ${active ? "" : "translate-x-2 translate-y-2"}`}
      />
    </>
  );
}

function AuthForm({
  defaultMode = "signup",
  onSuccess,
}: {
  defaultMode?: "login" | "signup";
  onSuccess?: () => void;
}) {
  const [mode, setMode] = useState<"login" | "signup">(defaultMode);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (onSuccess) {
        onSuccess();
      } else {
        alert(mode === "login" ? "Signed in successfully!" : "Account created successfully!");
      }
    }, 600);
  };

  return (
    <div className="mx-auto w-full max-w-[480px] rounded-2xl border border-white/10 bg-navy-900/75 p-7 sm:p-10 backdrop-blur-xl shadow-glass text-center">
      <h1 className="whitespace-nowrap text-3xl font-serif font-bold tracking-tight text-white sm:text-4xl">
        {mode === "login" ? "Sign In to Yatra India" : "Create Your Account"}
      </h1>

      <p className="mt-2 text-sm text-slate-300">
        {mode === "login"
          ? "Welcome back! Enter your details to continue your journey."
          : "Join thousands of travelers exploring extraordinary India."}
      </p>

      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        <SocialButton
          icon={<GoogleIcon />}
          label={mode === "login" ? "Sign in with Google" : "Sign up with Google"}
        />
        <SocialButton
          icon={<AppleIcon />}
          label={mode === "login" ? "Sign in with Apple" : "Sign up with Apple"}
        />
      </div>

      <div className="my-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
        <div className="h-px flex-1 bg-white/10" />
        or continue with email
        <div className="h-px flex-1 bg-white/10" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        {mode === "signup" && (
          <div className="grid gap-4 sm:grid-cols-2">
            {formFields.map((field) => (
              <FieldBox
                key={field.label}
                label={field.label}
                value={field.value}
                type={field.type}
              />
            ))}
          </div>
        )}

        <FieldBox label="Email" value="traveler@yatraindia.com" type="email" />
        <FieldBox label="Password" value="*************" type="password" />

        {mode === "signup" ? (
          <div className="space-y-3 pt-2 text-xs leading-5 text-slate-400 sm:text-[13px]">
            <CheckboxLine>
              I agree to receive personalized Indian travel guides and seasonal updates
            </CheckboxLine>
            <CheckboxLine>{termsText}</CheckboxLine>
          </div>
        ) : (
          <div className="flex items-center justify-between pt-1 text-xs text-slate-300 sm:text-[13px]">
            <CheckboxLine>Remember me for 30 days</CheckboxLine>
            <a href="#" className="font-medium text-saffron-400 hover:text-saffron-300 hover:underline">
              Forgot password?
            </a>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="mt-7 flex h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-saffron-500 via-saffron-600 to-amber-600 text-base font-semibold text-white shadow-glow-saffron transition-all hover:brightness-110 hover:shadow-lg disabled:opacity-50"
        >
          {loading ? "Processing..." : mode === "login" ? "Sign In" : "Create Account"}
        </button>

        <div className="mt-6 text-center text-sm text-slate-300">
          {mode === "login" ? (
            <p>
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => setMode("signup")}
                className="font-semibold text-saffron-400 underline underline-offset-2 hover:text-saffron-300"
              >
                Sign up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setMode("login")}
                className="font-semibold text-saffron-400 underline underline-offset-2 hover:text-saffron-300"
              >
                Sign in
              </button>
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

function SocialButton({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <button
      type="button"
      className="flex h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-navy-800/80 px-3 text-sm font-medium text-slate-200 transition-all hover:bg-navy-800 hover:border-saffron-500/40 hover:text-white shadow-sm"
    >
      <span className="shrink-0">{icon}</span>
      <span className="whitespace-nowrap text-xs sm:text-sm">{label}</span>
    </button>
  );
}

function FieldBox({
  label,
  value,
  type = "text",
}: {
  label: string;
  value: string;
  type?: string;
}) {
  const [inputValue, setInputValue] = useState(value);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <label className="flex h-12 items-center justify-between gap-3 rounded-xl border border-white/10 bg-navy-950/80 px-4 text-sm text-slate-200 transition-all focus-within:border-saffron-500 focus-within:ring-1 focus-within:ring-saffron-500/50 shadow-inner">
      <input
        type={type}
        value={inputValue}
        aria-label={label}
        onFocus={() => {
          if (!isEditing) {
            setInputValue("");
            setIsEditing(true);
          }
        }}
        onChange={(event) => {
          setInputValue(event.target.value);
          setIsEditing(true);
        }}
        className="min-w-0 flex-1 truncate bg-transparent text-white outline-none placeholder:text-slate-500 text-sm"
      />
      {!isEditing && (
        <span className="shrink-0 text-xs font-semibold text-saffron-400/90 bg-saffron-500/10 px-2 py-0.5 rounded border border-saffron-500/20">
          {label}
        </span>
      )}
    </label>
  );
}

function CheckboxLine({ children }: { children: ReactNode }) {
  return (
    <label className="flex items-start gap-2.5 cursor-pointer select-none text-slate-300">
      <span className="relative mt-0.5 size-4 shrink-0">
        <input
          type="checkbox"
          className="peer size-full appearance-none rounded border border-white/20 bg-navy-950 checked:border-saffron-500 checked:bg-saffron-500"
        />
        <svg
          viewBox="0 0 12 12"
          className="pointer-events-none absolute inset-0 hidden size-full p-0.5 text-white peer-checked:block"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2.5 6 4.8 8.3 9.5 3.6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span>{children}</span>
    </label>
  );
}

function GoogleIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09Z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84Z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84C6.71 7.3 9.14 5.38 12 5.38Z"
        fill="#EB4335"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.05 12.54c-.03-3.02 2.47-4.47 2.58-4.54-1.41-2.06-3.6-2.34-4.38-2.37-1.86-.19-3.64 1.1-4.58 1.1-.95 0-2.42-1.07-3.98-1.04-2.05.03-3.94 1.19-4.99 3.02-2.13 3.69-.54 9.16 1.53 12.15 1.01 1.46 2.22 3.1 3.81 3.04 1.53-.06 2.11-.99 3.96-.99s2.37.99 3.99.96c1.65-.03 2.69-1.49 3.69-2.96 1.16-1.69 1.64-3.33 1.66-3.41-.04-.02-3.2-1.23-3.24-4.87ZM14.03 3.66c.84-1.02 1.41-2.43 1.25-3.84-1.21.05-2.68.81-3.55 1.83-.78.9-1.46 2.34-1.28 3.72 1.35.1 2.73-.69 3.58-1.71Z" />
    </svg>
  );
}
