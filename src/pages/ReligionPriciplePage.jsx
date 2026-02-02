import React, { useState } from 'react'
import { useNavigate } from 'react-router';

export default function ReligionPriciplePage() {
        const [activeSection, setActiveSection] = useState(null);
      const navigate = useNavigate()
  const principles = [
    {
      id: 1,
      title: "Tôn trọng quyền tự do tín ngưỡng",
      icon: "🕊️",
      summary: "Bảo đảm quyền tự do theo hoặc không theo tôn giáo của mọi người dân",
      color: "from-blue-600 to-blue-800",
      content: [
        {
          subtitle: "Tự do tín ngưỡng là gì?",
          text: "Tự do tín ngưỡng và không tín ngưỡng thuộc quyền tự do tư tưởng của nhân dân. Việc theo đạo, đổi đạo, hay không theo đạo là quyền tự do lựa chọn của mỗi người.",
          points: [
            "Không ai được can thiệp vào sự lựa chọn tín ngưỡng",
            "Cấm đoán, ngăn cản, đe dọa đều vi phạm quyền tự do",
            "Kể cả chức sắc tôn giáo cũng không được ép buộc"
          ]
        },
        {
          subtitle: "Trách nhiệm của Nhà nước",
          text: "Nhà nước xã hội chủ nghĩa tôn trọng và bảo vệ:",
          points: [
            "Quyền lựa chọn theo hay không theo tôn giáo",
            "Các hoạt động tôn giáo bình thường",
            "Cơ sở thờ tự và phương tiện phục vụ tín ngưỡng",
            "Thể hiện bản chất ưu việt của CNXH"
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Khắc phục ảnh hưởng tiêu cực",
      icon: "🔄",
      summary: "Gắn liền với cải tạo xã hội cũ, xây dựng xã hội mới",
      color: "from-green-600 to-green-800",
      content: [
        {
          subtitle: "Hướng tiếp cận",
          text: "Chủ nghĩa Mác - Lênin chỉ giải quyết ảnh hưởng tiêu cực của tôn giáo, không can thiệp công việc nội bộ của các tôn giáo."
        },
        {
          subtitle: "Con đường giải quyết",
          text: "Muốn thay đổi ý thức, phải thay đổi tồn tại xã hội:",
          points: [
            "Xoá bỏ nguồn gốc sinh ra ảo tưởng",
            "Xây dựng thế giới không áp bức, bất công",
            "Loại bỏ nghèo đói, thất học và tệ nạn xã hội",
            "Đây là quá trình lâu dài, liên tục"
          ]
        },
        {
          subtitle: "Nguyên tắc quan trọng",
          text: "Không thể tách rời việc cải tạo xã hội cũ với xây dựng xã hội mới."
        }
      ]
    },
    {
      id: 3,
      title: "Phân biệt hai mặt chính trị và tư tưởng",
      icon: "⚖️",
      summary: "Nhận diện và xử lý đúng tính chất khác nhau của hai mặt này",
      color: "from-orange-600 to-orange-800",
      content: [
        {
          subtitle: "Mặt chính trị",
          text: "Phản ánh mối quan hệ giữa tiến bộ và phản tiến bộ:",
          points: [
            "Mâu thuẫn đối kháng về lợi ích kinh tế, chính trị giữa các giai cấp",
            "Thế lực lợi dụng tôn giáo chống lại sự nghiệp cách mạng",
            "Xung đột với lợi ích nhân dân lao động"
          ]
        },
        {
          subtitle: "Mặt tư tưởng",
          text: "Biểu hiện sự khác biệt về niềm tin:",
          points: [
            "Khác nhau giữa người có và không có tín ngưỡng",
            "Khác nhau giữa các tín ngưỡng, tôn giáo",
            "Mâu thuẫn không mang tính đối kháng"
          ]
        },
        {
          subtitle: "Thực tế phức tạp",
          text: "Trong đời sống, hai mặt này thường đan xen, khó phân biệt:",
          points: [
            "Hiện tượng đôi khi phản ánh sai lệch bản chất",
            "Tôn giáo bị yếu tố chính trị chi phối sâu sắc",
            "Cần phân biệt để tránh cực đoan trong quản lý"
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Quan điểm lịch sử cụ thể",
      icon: "📅",
      summary: "Xem xét tôn giáo theo từng bối cảnh lịch sử, xã hội cụ thể",
      color: "from-purple-600 to-purple-800",
      content: [
        {
          subtitle: "Tôn giáo luôn biến đổi",
          text: "Tôn giáo không bất biến, luôn vận động theo điều kiện kinh tế - xã hội - lịch sử.",
          points: [
            "Mỗi tôn giáo có lịch sử hình thành riêng",
            "Có quá trình tồn tại và phát triển nhất định",
            "Vai trò thay đổi theo thời kỳ lịch sử"
          ]
        },
        {
          subtitle: "Sự khác biệt cụ thể",
          text: "Ở những thời kỳ lịch sử khác nhau:",
          points: [
            "Vai trò, tác động của tôn giáo không giống nhau",
            "Quan điểm của giáo hội, giáo sĩ, giáo dân khác biệt",
            "Thái độ về các lĩnh vực đời sống thay đổi"
          ]
        },
        {
          subtitle: "Yêu cầu thực tiễn",
          text: "Cần có quan điểm lịch sử cụ thể khi xem xét, đánh giá và ứng xử với từng tôn giáo cụ thể."
        }
      ]
    }
  ];
  const handleRedirect = () => {
    // Redirect to homepage
    navigate('/vietnam-religion')
    // Or if using React Router: navigate('/home');
  };
  return (
          <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#740A03] to-[#280905] shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
              Nguyên tắc giải quyết vấn đề tôn giáo
            </h1>
            <div className="flex gap-2">
              <button 
                onClick={() => window.history.back()}
                className="bg-white text-[#740A03] hover:bg-black hover:text-white px-4 py-2 rounded-md font-semibold transition-all duration-300 text-sm sm:text-base"
              >
                ← Quay lại
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8 border-l-4 border-[#740A03]">
          <h2 className="text-2xl font-bold text-[#740A03] mb-4">
            Nguyên tắc trong thời kỳ quá độ lên CNXH
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            Trong thời kỳ quá độ lên chủ nghĩa xã hội, tôn giáo vẫn còn tồn tại với nhiều biến đổi. 
            Việc giải quyết vấn đề tôn giáo cần tuân thủ 4 nguyên tắc cơ bản sau:
          </p>
        </div>

        {/* Principles Cards */}
        <div className="space-y-6 mb-8">
          {principles.map((principle) => (
            <div
              key={principle.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Principle Header */}
              <div 
                className={`bg-gradient-to-r ${principle.color} p-6 cursor-pointer`}
                onClick={() => setActiveSection(activeSection === principle.id ? null : principle.id)}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white bg-opacity-20 rounded-full p-3">
                    <span className="text-3xl">{principle.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      Nguyên tắc {principle.id}: {principle.title}
                    </h3>
                    <p className="text-gray-100 text-sm sm:text-base">
                      {principle.summary}
                    </p>
                  </div>
                  <svg 
                    className={`w-6 h-6 text-white transition-transform duration-300 flex-shrink-0 ${activeSection === principle.id ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Principle Content */}
              {activeSection === principle.id && (
                <div className="p-6 sm:p-8 space-y-6 animate-slide-down bg-gradient-to-br from-white to-gray-50">
                  {principle.content.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-gray-300">
                      {item.subtitle && (
                        <h4 className="font-bold text-gray-800 mb-3 text-lg flex items-center gap-2">
                          <span className="w-2 h-2 bg-[#740A03] rounded-full"></span>
                          {item.subtitle}
                        </h4>
                      )}
                      {item.text && (
                        <p className="text-gray-700 mb-3 leading-relaxed">
                          {item.text}
                        </p>
                      )}
                      {item.points && (
                        <ul className="space-y-2 ml-4">
                          {item.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-700">
                              <span className="text-[#740A03] mt-1 flex-shrink-0">▸</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="bg-gradient-to-r from-[#740A03] to-[#280905] rounded-lg shadow-lg p-6 sm:p-8 text-white">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span>📋</span> Tóm tắt 4 nguyên tắc
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-black">
            <div className="bg-white bg-opacity-10 rounded-lg p-5 hover:bg-opacity-20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🕊️</span>
                <p className="font-bold">Tôn trọng tự do tín ngưỡng</p>
              </div>
              <p className="text-sm text-gray-600 ml-11">
                Bảo đảm quyền tự do lựa chọn theo hoặc không theo tôn giáo
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-lg p-5 hover:bg-opacity-20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🔄</span>
                <p className="font-bold">Khắc phục ảnh hưởng tiêu cực</p>
              </div>
              <p className="text-sm text-gray-600 ml-11">
                Gắn với cải tạo xã hội cũ, xây dựng xã hội mới
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-lg p-5 hover:bg-opacity-20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">⚖️</span>
                <p className="font-bold">Phân biệt hai mặt</p>
              </div>
              <p className="text-sm text-gray-600 ml-11">
                Nhận diện mặt chính trị và tư tưởng để xử lý đúng
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 rounded-lg p-5 hover:bg-opacity-20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">📅</span>
                <p className="font-bold">Quan điểm lịch sử cụ thể</p>
              </div>
              <p className="text-sm text-gray-600 ml-11">
                Đánh giá theo từng bối cảnh lịch sử, xã hội
              </p>
            </div>
          </div>
        </div>

        {/* Next Page Button */}
          <div className="text-center pt-6 mt-6 border-t border-white border-opacity-20">
            <button
              onClick={handleRedirect}
              className="inline-flex items-center gap-2 bg-white text-[#740A03] hover:bg-black hover:text-white px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span>Tiếp theo: Tôn giáo ở Việt Nam và Chính sách</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
      </main>

      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}
