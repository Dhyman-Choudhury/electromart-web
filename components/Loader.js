export default function Loader() {
  return (
    <div className="bg-[#113F67] flex justify-center items-center min-h-screen">
      <div className="relative w-16 h-16">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-purple-500 animate-spin"></div>
        
        {/* Inner glowing core */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse shadow-lg shadow-purple-500/50"></div>
      </div>
    </div>
  );
}
