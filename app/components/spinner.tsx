// components/Spinner.tsx
export default function Spinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="flex flex-col items-center justify-center">
        <div className="text-white text-5xl font-bold animate-pulse">Loading...</div>
        <video
          src="/loader.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-80 h-80 object-contain rotate-270 mt-1"
        />
      </div>
    </div>
  );
}
