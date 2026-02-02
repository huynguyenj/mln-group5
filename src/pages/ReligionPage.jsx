import React, { useState } from 'react'
import { useNavigate } from 'react-router';

export default function ReligionPage() {
   const [activeSection, setActiveSection] = useState(null);
   const navigate = useNavigate()
  const sections = [
    {
      id: 1,
      title: "Bản chất của tôn giáo",
      icon: "🔍",
      summary: "Tôn giáo là sự phản ánh hư ảo hiện thực trong tâm thức con người",
      content: [
        {
          subtitle: "Quan điểm Mác - Lênin",
          text: "Tôn giáo phản ánh hư ảo hiện thực khách quan, biến các lực lượng tự nhiên và xã hội thành siêu nhiên, thần bí."
        },
        {
          subtitle: "Các tiêu chí cơ bản",
          points: [
            "Niềm tin vào đấng siêu nhiên, thần linh",
            "Hệ thống giáo lý, giáo luật, lễ nghi",
            "Cơ sở thờ tự và tổ chức nhân sự",
            "Hệ thống tín đồ đông đảo"
          ]
        },
        {
          subtitle: "Bản chất",
          text: "Tôn giáo do con người sáng tạo ra để phản ánh ước mơ, nguyện vọng, nhưng con người lại bị lệ thuộc vào tôn giáo."
        }
      ]
    },
    {
      id: 2,
      title: "Nguồn gốc tôn giáo",
      icon: "🌱",
      summary: "Tôn giáo ra đời từ hai nguồn gốc chính: nhận thức và tâm lý",
      content: [
        {
          subtitle: "Nguồn gốc nhận thức",
          text: "Khi khoa học chưa giải thích được các hiện tượng, con người tìm đến tôn giáo. Đây là khoảng cách giữa 'biết' và 'chưa biết'.",
          points: [
            "Trình độ dân trí còn thấp",
            "Khoa học chưa chứng minh được nhiều vấn đề",
            "Tuyệt đối hoá mặt chủ thể của nhận thức"
          ]
        },
        {
          subtitle: "Nguồn gốc tâm lý",
          text: "Con người tìm đến tôn giáo khi:",
          points: [
            "Sợ hãi trước hiện tượng tự nhiên, xã hội",
            "Ốm đau, bệnh tật, may rủi bất ngờ",
            "Mong muốn bình yên (cưới xin, làm nhà, kinh doanh...)",
            "Lòng biết ơn, kính trọng người có công"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Tính lịch sử của tôn giáo",
      icon: "📜",
      summary: "Tôn giáo có sự hình thành, phát triển và biến đổi theo lịch sử",
      content: [
        {
          subtitle: "Đặc điểm",
          text: "Tôn giáo thay đổi và thích nghi với nhiều chế độ chính trị - xã hội khác nhau.",
          points: [
            "Phụ thuộc vào điều kiện kinh tế - xã hội",
            "Bị phân liệt thành nhiều hệ phái",
            "Sẽ dần mất vị trí khi khoa học phát triển"
          ]
        },
        {
          subtitle: "Tương lai",
          text: "Theo Mác - Lênin, khi khoa học và giáo dục phát triển, tôn giáo sẽ dần dần mất đi vị trí trong đời sống xã hội."
        }
      ]
    },
    {
      id: 4,
      title: "Tính quần chúng",
      icon: "👥",
      summary: "Tôn giáo có tính quần chúng rộng rãi và ảnh hưởng sâu sắc",
      content: [
        {
          subtitle: "Phổ biến rộng rãi",
          text: "Gần 3/4 dân số thế giới theo tôn giáo. Tôn giáo là nơi sinh hoạt văn hóa, tinh thần của quần chúng.",
          points: [
            "Có mặt ở tất cả dân tộc, quốc gia",
            "Số lượng tín đồ đông đảo",
            "Phản ánh khát vọng về xã hội tự do, bình đẳng"
          ]
        },
        {
          subtitle: "Giá trị nhân văn",
          text: "Nhiều tôn giáo đề cao lòng nhân ái, hướng thiện, vì vậy được quần chúng lao động tin theo."
        }
      ]
    },
    {
      id: 5,
      title: "Tính chính trị",
      icon: "⚖️",
      summary: "Tôn giáo có thể mang tính chính trị tích cực hoặc tiêu cực",
      content: [
        {
          subtitle: "Khi nào có tính chính trị?",
          text: "Tính chính trị của tôn giáo xuất hiện khi xã hội phân chia giai cấp, có đối kháng về lợi ích."
        },
        {
          subtitle: "Hai mặt của tính chính trị",
          points: [
            "Tích cực: Phản ánh lợi ích, nguyện vọng trong đấu tranh giai cấp, dân tộc",
            "Tiêu cực: Bị giai cấp bóc lột lợi dụng để chống lại tiến bộ xã hội"
          ]
        },
        {
          subtitle: "Lưu ý quan trọng",
          text: "Đa số tín đồ đến với tôn giáo để thỏa mãn nhu cầu tinh thần, nhưng tôn giáo có thể bị các thế lực chính trị lợi dụng."
        }
      ]
    }
  ];
  const handleNavigate = () => {
      navigate('/principle')
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#740A03] to-[#280905] shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              Bản chất và Đặc điểm của Tôn giáo
            </h1>
            <button 
              onClick={() => window.history.back()}
              className="bg-white text-[#740A03] hover:bg-black hover:text-white px-4 py-2 rounded-md font-semibold transition-all duration-300"
            >
              ← Quay lại
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8 border-l-4 border-[#740A03]">
          <h2 className="text-2xl font-bold text-[#740A03] mb-4">Tổng quan</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Tôn giáo là một hiện tượng xã hội phức tạp, có ảnh hưởng sâu rộng đến đời sống con người. 
            Tài liệu này trình bày 5 khía cạnh quan trọng để hiểu về bản chất và đặc điểm của tôn giáo 
            theo quan điểm Mác - Lênin.
          </p>
        </div>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
            >
              {/* Section Header */}
              <div className="bg-gradient-to-r from-[#740A03] to-[#280905] p-6">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{section.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {section.title}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      {section.summary}
                    </p>
                  </div>
                  <svg 
                    className={`w-6 h-6 text-white transition-transform duration-300 ${activeSection === section.id ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Section Content */}
              {activeSection === section.id && (
                <div className="p-6 space-y-6 animate-slide-down">
                  {section.content.map((item, index) => (
                    <div key={index} className="border-l-2 border-[#740A03] pl-4">
                      {item.subtitle && (
                        <h4 className="font-bold text-[#740A03] mb-2 text-lg">
                          {item.subtitle}
                        </h4>
                      )}
                      {item.text && (
                        <p className="text-gray-700 mb-3 leading-relaxed">
                          {item.text}
                        </p>
                      )}
                      {item.points && (
                        <ul className="space-y-2">
                          {item.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-700">
                              <span className="text-[#740A03] mt-1">•</span>
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

        {/* Key Takeaways */}
        <div className="bg-gradient-to-r from-[#740A03] to-[#280905] rounded-lg shadow-lg p-6 sm:p-8 text-white">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span>💡</span> Những điểm cần nhớ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-black">
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <p className="font-semibold mb-2">1. Tôn giáo là hiện tượng xã hội</p>
              <p className="text-sm text-gray-600">Do con người sáng tạo nhưng lại bị lệ thuộc vào nó</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <p className="font-semibold mb-2">2. Có nguồn gốc nhận thức và tâm lý</p>
              <p className="text-sm text-gray-600">Ra đời từ giới hạn nhận thức và nhu cầu tinh thần</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <p className="font-semibold mb-2">3. Có tính lịch sử</p>
              <p className="text-sm text-gray-600">Thay đổi theo điều kiện kinh tế - xã hội</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <p className="font-semibold mb-2">4. Có tính quần chúng và chính trị</p>
              <p className="text-sm text-gray-600">Ảnh hưởng rộng rãi và có thể bị lợi dụng</p>
            </div>
          </div>

          {/* Next Page Button */}
          <div className="text-center pt-4 border-t border-white border-opacity-20">
            <button
              onClick={handleNavigate}
              className="inline-flex items-center gap-2 bg-white text-[#740A03] hover:bg-black hover:text-white px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span>Tiếp theo: Nguyên tắc giải quyết vấn đề tôn giáo</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
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
