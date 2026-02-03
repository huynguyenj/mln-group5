import React, { useState } from 'react'
import { useNavigate } from 'react-router';

export default function ReligionVienam() {
        const [selectedTab, setSelectedTab] = useState('characteristics');
      const navigate = useNavigate()
  const characteristics = [
    {
      id: 1,
      title: "Việt Nam là quốc gia đa tôn giáo",
      image: "🏛️",
      bgGradient: "from-blue-500 to-blue-700",
      content: {
        main: "Hiện có 13 tôn giáo được công nhận tư cách pháp nhân và trên 40 tổ chức tôn giáo",
        stats: [
          "24 triệu tín đồ",
          "95.000 chức sắc",
          "200.000 chức việc",
          "23.250 cơ sở thờ tự"
        ],
        detail: "Các tôn giáo có nhiều hình thức: du nhập (Phật giáo, Công Giáo, Tin lành, Hồi giáo) và nội sinh (Cao Đài, Hòa Hảo).",
        example: "Trong cùng một địa phương có thể có chùa Phật giáo, nhà thờ Công giáo và thánh thất Cao Đài cùng tồn tại → Phản ánh sự phong phú đời sống tinh thần."
      }
    },
    {
      id: 2,
      title: "Đa dạng, đan xen, chung sống hòa bình",
      image: "🕊️",
      bgGradient: "from-green-500 to-green-700",
      content: {
        main: "Việt Nam là nơi giao lưu nhiều luồng văn hóa thế giới",
        points: [
          "Mỗi tôn giáo có quá trình lịch sử khác nhau",
          "Sự gắn bó với dân tộc khác nhau",
          "Tín đồ các tôn giáo chung sống hòa bình",
          "Tôn trọng niềm tin lẫn nhau",
          "Chưa từng có xung đột, chiến tranh tôn giáo"
        ],
        detail: "Không có tôn giáo nào du nhập vào Việt Nam mà không mang dấu ấn văn hóa Việt Nam.",
        example: "Chưa từng xảy ra chiến tranh tôn giáo, khác với Trung Đông, Nam Á → Thể hiện truyền thống khoan dung và hòa hợp văn hóa."
      }
    },
    {
      id: 3,
      title: "Tín đồ yêu nước, tinh thần dân tộc",
      image: "❤️",
      bgGradient: "from-red-600 to-red-800",
      content: {
        main: "Tín đồ các tôn giáo chủ yếu là nhân dân lao động",
        points: [
          "Có tinh thần yêu nước, chống giặc ngoại xâm",
          "Tôn trọng công lý, gắn bó với dân tộc",
          "Đi theo Đảng, theo cách mạng",
          "Tham gia xây dựng và bảo vệ Tổ quốc",
          "Có ước vọng 'tốt đời, đẹp đạo'"
        ],
        example: "Tín đồ tham gia phong trào xây dựng nông thôn mới, xóa đói giảm nghèo, từ thiện → Gắn bó với dân tộc, không đối lập với cách mạng."
      }
    },
    {
      id: 4,
      title: "Chức sắc có vai trò quan trọng",
      image: "👤",
      bgGradient: "from-purple-600 to-purple-800",
      content: {
        main: "Chức sắc tôn giáo có vị trí, ảnh hưởng lớn trong giáo hội và với tín đồ",
        functions: [
          "Truyền bá, thực hành giáo lý, giáo luật, lễ nghi",
          "Quản lý tổ chức tôn giáo",
          "Duy trì, củng cố, phát triển tôn giáo",
          "Chăm lo đời sống tâm linh của tín đồ"
        ],
        detail: "Hiện nay, xu hướng tiến bộ trong hàng ngũ chức sắc ngày càng phát triển."
      }
    },
    {
      id: 5,
      title: "Có quan hệ quốc tế",
      image: "🌍",
      bgGradient: "from-indigo-600 to-indigo-800",
      content: {
        main: "Các tôn giáo Việt Nam đều có quan hệ với tổ chức, cá nhân tôn giáo nước ngoài",
        points: [
          "Cả tôn giáo ngoại nhập và nội sinh đều có quan hệ quốc tế",
          "Việt Nam có quan hệ ngoại giao với gần 200 quốc gia",
          "Tạo điều kiện gián tiếp cho quan hệ tôn giáo quốc tế"
        ],
        warning: "⚠️ Cần kết hợp mở rộng giao lưu với bảo đảm độc lập, chủ quyền",
        detail: "Không để kẻ địch lợi dụng dân chủ, nhân quyền, tự do tôn giáo để thực hiện âm mưu 'diễn biến hòa bình'."
      }
    }
  ];
  const handleRedirect = () => {
    // Redirect to homepage
    navigate('/vietnam-relation')
    // Or if using React Router: navigate('/home');
  };
  const policies = [
    {
      id: 1,
      title: "Tín ngưỡng, tôn giáo tồn tại lâu dài",
      icon: "⏳",
      color: "bg-gradient-to-br from-cyan-500 to-cyan-700",
      content: [
        "Tín ngưỡng, tôn giáo là nhu cầu tinh thần của một bộ phận nhân dân",
        "Sẽ tồn tại cùng dân tộc trong quá trình xây dựng CNXH",
        "Tránh cả tả khuynh (nghĩ có thể xóa bỏ bằng hành chính) và hữu khuynh (nghĩ tôn giáo là hiện tượng bất biến)",
        "Tôn trọng và bảo đảm quyền tự do tín ngưỡng theo pháp luật",
        "Các tôn giáo hoạt động trong khuôn khổ pháp luật, bình đẳng trước pháp luật"
      ]
    },
    {
      id: 2,
      title: "Chính sách đại đoàn kết dân tộc",
      icon: "🤝",
      color: "bg-gradient-to-br from-orange-500 to-orange-700",
      content: [
        "Đoàn kết đồng bào theo các tôn giáo khác nhau",
        "Đoàn kết đồng bào theo tôn giáo và không theo tôn giáo",
        "Nghiêm cấm chia rẽ, phân biệt đối xử vì lý do tôn giáo",
        "Nâng cao đời sống vật chất, tinh thần để tăng cường đoàn kết",
        "Cùng xây dựng và bảo vệ Tổ quốc: 'dân giàu, nước mạnh, dân chủ, công bằng, văn minh'"
      ]
    },
    {
      id: 3,
      title: "Phát huy giá trị tích cực, chống tiêu cực",
      icon: "✨",
      color: "bg-gradient-to-br from-emerald-500 to-emerald-700",
      content: [
        "Giữ gìn và phát huy truyền thống thờ cúng tổ tiên",
        "Tôn vinh người có công với Tổ quốc và nhân dân",
        "Nghiêm cấm lợi dụng tín ngưỡng, tôn giáo để:",
        "• Hoạt động mê tín dị đoan",
        "• Hoạt động trái pháp luật",
        "• Kích động chia rẽ nhân dân, dân tộc",
        "• Gây rối, xâm phạm an ninh quốc gia"
      ]
    },
    {
      id: 4,
      title: "Công tác vận động quần chúng",
      icon: "👥",
      color: "bg-gradient-to-br from-pink-500 to-pink-700",
      content: [
        "Nội dung cốt lõi: vận động quần chúng các tôn giáo",
        "Động viên đồng bào nêu cao tinh thần yêu nước",
        "Ý thức bảo vệ độc lập và thống nhất đất nước",
        "Phát triển kinh tế, xã hội, văn hóa vùng đồng bào tôn giáo",
        "Nâng cao trình độ, đời sống mọi mặt",
        "Làm cho nhân dân nhận thức đầy đủ, đúng đắn chính sách của Đảng"
      ]
    },
    {
      id: 5,
      title: "Trách nhiệm của cả hệ thống chính trị",
      icon: "⚙️",
      color: "bg-gradient-to-br from-violet-500 to-violet-700",
      content: [
        "Công tác tôn giáo liên quan đến nhiều lĩnh vực đời sống",
        "Liên quan đến các cấp, các ngành, các địa bàn",
        "Gắn với chính sách đối nội và đối ngoại",
        "Là trách nhiệm của: Đảng, chính quyền, Mặt trận Tổ quốc, đoàn thể",
        "Cần củng cố bộ máy và đội ngũ cán bộ chuyên trách",
        "Tăng cường quản lý nhà nước và đấu tranh với hoạt động lợi dụng tôn giáo"
      ]
    },
    {
      id: 6,
      title: "Theo đạo và truyền đạo",
      icon: "📖",
      color: "bg-gradient-to-br from-rose-500 to-rose-700",
      content: [
        "Mọi tín đồ có quyền tự do hành đạo tại gia đình và cơ sở thờ tự hợp pháp",
        "Các tổ chức tôn giáo được thừa nhận hoạt động theo pháp luật",
        "Được pháp luật bảo hộ",
        "Mọi hoạt động phải tuân thủ Hiến pháp và pháp luật",
        "Không lợi dụng tôn giáo để tuyên truyền tà đạo, mê tín dị đoan",
        "Không ép buộc người dân theo đạo",
        "Nghiêm cấm truyền đạo trái phép, vi phạm pháp luật"
      ]
    }
  ];
  return (
     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#740A03] to-[#280905] shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
              Tôn giáo ở Việt Nam và Chính sách của Đảng, Nhà nước
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

      {/* Tab Navigation */}
      <div className="bg-white shadow-md sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto">
            <button
              onClick={() => setSelectedTab('characteristics')}
              className={`px-6 py-4 font-semibold whitespace-nowrap transition-all duration-300 border-b-4 ${
                selectedTab === 'characteristics'
                  ? 'border-[#740A03] text-[#740A03]'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Đặc điểm tôn giáo VN
            </button>
            <button
              onClick={() => setSelectedTab('policies')}
              className={`px-6 py-4 font-semibold whitespace-nowrap transition-all duration-300 border-b-4 ${
                selectedTab === 'policies'
                  ? 'border-[#740A03] text-[#740A03]'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Chính sách của Đảng, Nhà nước
            </button>
            
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Characteristics Section */}
        {selectedTab === 'characteristics' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#740A03]">
              <h2 className="text-2xl font-bold text-[#740A03] mb-2">
                5 Đặc điểm của tôn giáo ở Việt Nam
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {characteristics.map((char) => (
                <div
                  key={char.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Card Header */}
                  <div className={`bg-gradient-to-r ${char.bgGradient} p-6 text-white`}>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="text-5xl bg-white bg-opacity-20 p-3 rounded-full">
                        {char.image}
                      </div>
                      <div className="flex-1">
                        <span className="text-sm font-semibold opacity-90">Đặc điểm {char.id}</span>
                        <h3 className="text-xl font-bold mt-1">{char.title}</h3>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-gray-800 font-semibold text-lg">
                      {char.content.main}
                    </p>

                    {char.content.stats && (
                      <div className="grid grid-cols-2 gap-3">
                        {char.content.stats.map((stat, i) => (
                          <div key={i} className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-lg text-center">
                            <p className="text-[#740A03] font-bold">{stat}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {char.content.points && (
                      <ul className="space-y-2">
                        {char.content.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700">
                            <span className="text-[#740A03] mt-1">✓</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {char.content.functions && (
                      <div className="space-y-2">
                        <p className="font-semibold text-gray-800">Chức năng:</p>
                        <ul className="space-y-2">
                          {char.content.functions.map((func, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-700">
                              <span className="text-[#740A03] mt-1">•</span>
                              <span>{func}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {char.content.detail && (
                      <p className="text-gray-600 italic bg-gray-50 p-3 rounded-lg">
                        {char.content.detail}
                      </p>
                    )}

                    {char.content.warning && (
                      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 rounded">
                        <p className="text-yellow-800 font-semibold">{char.content.warning}</p>
                        <p className="text-yellow-700 text-sm mt-1">{char.content.detail}</p>
                      </div>
                    )}

                    {char.content.example && (
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded">
                        <p className="text-blue-900">
                          <span className="font-semibold">Ví dụ: </span>
                          {char.content.example}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Policies Section */}
        {selectedTab === 'policies' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-[#740A03]">
              <h2 className="text-2xl font-bold text-[#740A03] mb-2">
                Chính sách tôn giáo của Đảng và Nhà nước Việt Nam
              </h2>
              <p className="text-gray-600">
                6 nội dung cơ bản của chính sách tôn giáo hiện nay
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {policies.map((policy) => (
                <div
                  key={policy.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Policy Header */}
                  <div className={`${policy.color} p-6 text-white`}>
                    <div className="text-center mb-3">
                      <div className="text-5xl mb-3">{policy.icon}</div>
                      <h3 className="text-lg font-bold leading-tight">{policy.title}</h3>
                    </div>
                  </div>

                  {/* Policy Content */}
                  <div className="p-6">
                    <ul className="space-y-3">
                      {policy.content.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                          <span className={`${item.startsWith('•') ? 'ml-4' : ''} ${item.startsWith('•') ? 'text-gray-500' : 'text-[#740A03]'} mt-1 flex-shrink-0`}>
                            {item.startsWith('•') ? '◦' : '▸'}
                          </span>
                          <span>{item.replace('• ', '')}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="bg-gradient-to-r from-[#740A03] to-[#280905] rounded-lg shadow-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span>🎯</span> Mục tiêu chung
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-black">
                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <p className="font-semibold mb-2">Đảm bảo quyền tự do</p>
                  <p className="text-sm text-gray-600">Tôn trọng quyền tự do tín ngưỡng, tôn giáo của nhân dân</p>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <p className="font-semibold mb-2">Đại đoàn kết</p>
                  <p className="text-sm text-gray-600">Đoàn kết mọi người dân, không phân biệt tôn giáo</p>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <p className="font-semibold mb-2">Phát triển đất nước</p>
                  <p className="text-sm text-gray-600">Cùng xây dựng xã hội giàu mạnh, công bằng, văn minh</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
 {/* Next Page Button */}
              <div className="text-center pt-6 border-t border-white border-opacity-20 p-5">
                <button
                  onClick={handleRedirect}
                  className="inline-flex items-center gap-2 bg-white text-[#740A03] hover:bg-black hover:text-white px-8 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                   <span>Tiếp theo: Quan hệ Dân tộc và Tôn giáo ở Việt Nam</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  )
}
