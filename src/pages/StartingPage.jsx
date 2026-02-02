import React, { useState } from 'react'
import { useNavigate } from 'react-router';

export default function StartingPage() {
      const [isHovered, setIsHovered] = useState(false);
      const navigate = useNavigate()
 const particles = [
    { left: '10%', top: '20%', delay: 0, duration: 8 },
    { left: '25%', top: '60%', delay: 1, duration: 10 },
    { left: '40%', top: '30%', delay: 2, duration: 7 },
    { left: '55%', top: '70%', delay: 0.5, duration: 9 },
    { left: '70%', top: '15%', delay: 1.5, duration: 11 },
    { left: '85%', top: '50%', delay: 2.5, duration: 8 },
    { left: '15%', top: '80%', delay: 3, duration: 10 },
    { left: '30%', top: '45%', delay: 1, duration: 9 },
    { left: '60%', top: '85%', delay: 2, duration: 7 },
    { left: '75%', top: '25%', delay: 0.5, duration: 8 },
    { left: '20%', top: '10%', delay: 1.5, duration: 11 },
    { left: '45%', top: '55%', delay: 2.5, duration: 9 },
    { left: '65%', top: '40%', delay: 3.5, duration: 10 },
    { left: '80%', top: '75%', delay: 0, duration: 8 },
    { left: '35%', top: '90%', delay: 1, duration: 7 },
    { left: '50%', top: '5%', delay: 2, duration: 9 },
    { left: '90%', top: '35%', delay: 3, duration: 11 },
    { left: '5%', top: '65%', delay: 0.5, duration: 8 },
    { left: '95%', top: '60%', delay: 1.5, duration: 10 },
    { left: '12%', top: '40%', delay: 2.5, duration: 9 },
  ];
  const handleRedirect = () => {
    // Redirect to homepage
    navigate('/religion')
    // Or if using React Router: navigate('/home');
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#740A03] via-[#280905] to-black flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-white opacity-5 rounded-full -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-white opacity-5 rounded-full -bottom-48 -right-48 animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        {/* Logo/Brand */}
        <div className="mb-8 animate-fade-in">
          <div className="inline-block bg-white px-8 py-4 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#740A03] tracking-tight">
              Group 5
            </h1>
          </div>
        </div>

        {/* Welcome Text */}
        <div className="mb-12 space-y-4 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Chào mừng tới với website của nhóm mình
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Chương 6: Vấn đề dân tộc và tôn giáo trong thời kỳ quá độ lên chủ nghĩa xã hội
          </p>
        </div>

        {/* Call to Action Button */}
        <div className="animate-bounce-in">
          <button
            onClick={handleRedirect}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative inline-flex items-center justify-center px-12 py-5 text-xl font-bold text-[#740A03] bg-white rounded-full shadow-2xl hover:shadow-white/20 transition-all duration-300 transform hover:scale-110 hover:bg-black hover:text-white overflow-hidden"
          >
            {/* Button shine effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
            
            <span className="relative flex items-center gap-3">
              Bắt đầu
              <svg 
                className={`w-6 h-6 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
          }
          75% {
            transform: translateY(-20px) translateX(5px);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out 0.3s both;
        }

        .animate-bounce-in {
          animation: bounce-in 1s ease-out 0.6s both;
        }

        .animate-fade-in-delayed {
          animation: fade-in 1s ease-out 1s both;
        }

        .animate-float {
          animation: float linear infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  )
}
