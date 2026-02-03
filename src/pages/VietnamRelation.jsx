import React, { useState } from 'react'
import { useNavigate } from 'react-router';

export default function VietnamRelation() {
    const [activeTab, setActiveTab] = useState('characteristics');
  const navigate = useNavigate()
  const characteristics = [
    {
      id: 1,
      title: "Đa dân tộc, đa tôn giáo - Cộng đồng thống nhất",
      icon: "🇻🇳",
      gradient: "from-red-500 via-yellow-500 to-red-600",
      image: "🤝",
      content: {
        main: "Việt Nam là quốc gia đa dân tộc, đa tôn giáo với truyền thống gắn bó chặt chẽ",
        points: [
          "Các tôn giáo gắn bó chặt chẽ với dân tộc, đồng hành cùng dân tộc",
          "Mọi công dân đoàn kết, ý thức rõ về cội nguồn chung",
          "Cùng chung sức xây dựng và bảo vệ Tổ quốc",
          "Không có xung đột lớn về dân tộc - tôn giáo"
        ],
        contrast: "⚠️ Trên thế giới: nhiều nơi xung đột dân tộc, tôn giáo (Israel-Palestine, Đông Âu...)",
        highlight: "Việt Nam giải quyết tốt quan hệ này, tạo sự ổn định chính trị quốc gia"
      }
    },
    {
      id: 2,
      title: "Chi phối bởi tín ngưỡng truyền thống",
      icon: "🏮",
      gradient: "from-orange-500 via-amber-500 to-orange-600",
      image: "🙏",
      content: {
        levels: [
          {
            name: "Cấp độ gia đình",
            icon: "👨‍👩‍👧‍👦",
            desc: "Thờ cúng tổ tiên - truyền thống, nét đẹp văn hóa. Sợi dây kết nối dòng họ, dòng tộc"
          },
          {
            name: "Cấp độ làng xã",
            icon: "🏘️",
            desc: "Thờ Thành hoàng làng, Thần làng - người có công với làng xã. Gắn kết làng xã với triều đình trung ương"
          },
          {
            name: "Cấp độ quốc gia",
            icon: "⛩️",
            desc: "Giỗ Tổ Hùng Vương - đỉnh cao đoàn kết dân tộc. Người Việt khắp nơi đều hướng về cội nguồn"
          }
        ],
        impact: "Tín ngưỡng truyền thống chi phối, biến đổi các văn hóa và tôn giáo ngoại lai khi du nhập (Nho giáo, Phật giáo, Đạo giáo, Công giáo...)"
      }
    },
    {
      id: 3,
      title: "Hiện tượng tôn giáo mới phát triển mạnh",
      icon: "⚡",
      gradient: "from-purple-500 via-pink-500 to-purple-600",
      image: "📊",
      content: {
        context: "Từ khi đổi mới, kinh tế thị trường, toàn cầu hóa → Đời sống tín ngưỡng, tôn giáo phát triển",
        examples: [
          "Long hoa Di Lặc, Tin Lành Vàng Chứ",
          "Thanh Hải vô thượng sư, Tiên rồng",
          "Các tổ chức đội lốt tôn giáo (Tin Lành Đề Ga, Hà Mòn ở Tây Nguyên)"
        ],
        problems: [
          "Tính chất mê tín khá rõ",
          "Tuyên truyền gây hoang mang",
          "Nghi lễ phản văn hóa, truyền đạo trái phép",
          "Xuyên tạc đường lối, chính sách của Đảng, Nhà nước",
          "Ảnh hưởng khối đại đoàn kết, an ninh chính trị"
        ],
        solution: "Cần quản lý tốt để đảm bảo ổn định chính trị và quan hệ dân tộc - tôn giáo"
      }
    }
  ];

  const solutions = [
    {
      id: 1,
      title: "Vấn đề chiến lược, cơ bản, lâu dài",
      icon: "🎯",
      color: "from-blue-600 to-cyan-600",
      points: [
        "Củng cố khối đại đoàn kết toàn dân tộc và đoàn kết tôn giáo",
        "Phát huy giá trị văn hóa truyền thống các dân tộc",
        "Phát huy giá trị văn hóa, đạo đức và nguồn lực của tôn giáo",
        "Tạo động lực thúc đẩy xây dựng đất nước phồn vinh, phát triển bền vững",
        "Bảo vệ nền độc lập, chủ quyền quốc gia"
      ]
    },
    {
      id: 2,
      title: "Đặt trong cộng đồng quốc gia thống nhất",
      icon: "🛡️",
      color: "from-red-600 to-pink-600",
      points: [
        "Giải quyết vấn đề tôn giáo trên cơ sở vấn đề dân tộc",
        "Không lợi dụng tôn giáo đòi ly khai dân tộc",
        "Không chia rẽ khối đại đoàn kết dân tộc",
        "Giữ vững độc lập chủ quyền, thống nhất đất nước",
        "Tập hợp đồng bào theo và không theo tôn giáo xây dựng đại đoàn kết"
      ]
    },
    {
      id: 3,
      title: "Bảo đảm quyền tự do, chống lợi dụng",
      icon: "⚖️",
      color: "from-green-600 to-emerald-600",
      points: [
        "Bảo đảm quyền tự do tín ngưỡng, tôn giáo của nhân dân",
        "Bảo đảm quyền của các dân tộc thiểu số",
        "Quyền phải gắn liền với pháp luật",
        "Tăng cường an ninh quốc phòng, vận động quần chúng",
        "Kiên quyết đấu tranh chống lợi dụng vấn đề dân tộc, tôn giáo"
      ]
    },
    {
      id: 4,
      title: "Đấu tranh với thế lực thù địch",
      icon: "🛡️",
      color: "from-orange-600 to-red-600",
      points: [
        "Vạch trần âm mưu lợi dụng dân tộc và tôn giáo",
        "Ngăn chặn âm mưu 'tôn giáo hóa dân tộc'",
        "Xử lý tổ chức, đối tượng vi phạm pháp luật",
        "Chống truyền đạo trái phép",
        "Chống kích động, chia rẽ đoàn kết dân tộc, tôn giáo"
      ]
    }
  ];
    const handleRedirect = () => {
    // Redirect to homepage
    navigate('/lesson')
    // Or if using React Router: navigate('/home');
  };
  return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#740A03] to-[#280905] shadow-2xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
              Quan hệ Dân tộc và Tôn giáo ở Việt Nam
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

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="text-6xl mb-4">🇻🇳</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Quan hệ Dân tộc - Tôn giáo
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            Sự liên kết, tác động qua lại giữa dân tộc với tôn giáo, ảnh hưởng lớn đến sự ổn định chính trị và phát triển bền vững
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white shadow-lg sticky top-[88px] z-40 border-b-4 border-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto">
            <button
              onClick={() => setActiveTab('characteristics')}
              className={`px-6 py-4 font-semibold whitespace-nowrap transition-all duration-300 border-b-4 ${
                activeTab === 'characteristics'
                  ? 'border-[#740A03] text-[#740A03] bg-red-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              📊 Đặc điểm
            </button>
            <button
              onClick={() => setActiveTab('solutions')}
              className={`px-6 py-4 font-semibold whitespace-nowrap transition-all duration-300 border-b-4 ${
                activeTab === 'solutions'
                  ? 'border-[#740A03] text-[#740A03] bg-red-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              🎯 Định hướng giải quyết
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Characteristics Tab */}
        {activeTab === 'characteristics' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-blue-600">
              <h2 className="text-2xl font-bold text-blue-900 mb-2">
                3 Đặc điểm quan hệ dân tộc và tôn giáo ở Việt Nam
              </h2>
              <p className="text-gray-600">
                Những đặc thù mang tính nổi bật trong mối quan hệ này
              </p>
            </div>

            {characteristics.map((char) => (
              <div
                key={char.id}
                className="bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300"
              >
                {/* Header with Gradient */}
                <div className={`bg-gradient-to-r ${char.gradient} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 text-9xl opacity-10">
                    {char.image}
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center text-4xl">
                        {char.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-semibold opacity-90 mb-1">Đặc điểm {char.id}</div>
                        <h3 className="text-2xl font-bold">{char.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 bg-gradient-to-br from-white to-gray-50">
                  {/* Main Content */}
                  {char.content.main && (
                    <div className="mb-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                      <p className="text-blue-900 font-semibold text-lg">
                        {char.content.main}
                      </p>
                    </div>
                  )}

                  {/* Points */}
                  {char.content.points && (
                    <div className="mb-6 space-y-3">
                      {char.content.points.map((point, i) => (
                        <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                            ✓
                          </div>
                          <p className="text-gray-700 flex-1">{point}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Levels */}
                  {char.content.levels && (
                    <div className="mb-6 space-y-4">
                      {char.content.levels.map((level, i) => (
                        <div key={i} className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-orange-200">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="text-4xl">{level.icon}</div>
                            <h4 className="text-xl font-bold text-orange-900">{level.name}</h4>
                          </div>
                          <p className="text-orange-800 ml-16">{level.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Context */}
                  {char.content.context && (
                    <div className="mb-6 bg-purple-50 border-2 border-purple-300 p-5 rounded-xl">
                      <p className="text-purple-900 font-semibold">{char.content.context}</p>
                    </div>
                  )}

                  {/* Examples */}
                  {char.content.examples && (
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-800 mb-3">Ví dụ:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {char.content.examples.map((example, i) => (
                          <div key={i} className="bg-indigo-100 text-indigo-900 p-3 rounded-lg text-center font-medium text-sm">
                            {example}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Problems */}
                  {char.content.problems && (
                    <div className="mb-6">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                        <span className="text-2xl">⚠️</span>
                        Vấn đề:
                      </h4>
                      <div className="space-y-2">
                        {char.content.problems.map((problem, i) => (
                          <div key={i} className="flex items-start gap-2 bg-red-50 p-3 rounded-lg border-l-4 border-red-400">
                            <span className="text-red-600 font-bold">•</span>
                            <p className="text-red-800">{problem}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Contrast */}
                  {char.content.contrast && (
                    <div className="mb-6 bg-yellow-50 border-2 border-yellow-400 p-5 rounded-xl">
                      <p className="text-yellow-900 font-semibold">{char.content.contrast}</p>
                    </div>
                  )}

                  {/* Impact */}
                  {char.content.impact && (
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400 p-5 rounded-xl">
                      <div className="flex items-start gap-3">
                        <span className="text-3xl">💡</span>
                        <p className="text-green-900 font-semibold">{char.content.impact}</p>
                      </div>
                    </div>
                  )}

                  {/* Solution */}
                  {char.content.solution && (
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-5 rounded-xl">
                      <div className="flex items-start gap-3">
                        <span className="text-3xl">🎯</span>
                        <div>
                          <p className="font-bold mb-1">Giải pháp:</p>
                          <p>{char.content.solution}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Highlight */}
                  {char.content.highlight && (
                    <div className="mt-6 bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-xl">
                      <div className="flex items-start gap-3">
                        <span className="text-4xl">🌟</span>
                        <p className="text-lg font-bold">{char.content.highlight}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Solutions Tab */}
        {activeTab === 'solutions' && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-purple-600">
              <h2 className="text-2xl font-bold text-purple-900 mb-2">
                Định hướng giải quyết mối quan hệ dân tộc và tôn giáo
              </h2>
              <p className="text-gray-600">
                "Nghiêm trị những âm mưu, hành động chia rẽ, phá hoại khối đại đoàn kết dân tộc"
              </p>
            </div>

            {/* Quote Box */}
            <div className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-8 text-white shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="text-6xl opacity-50">"</div>
                <div className="flex-1">
                  <p className="text-xl font-semibold mb-4 leading-relaxed">
                    Chủ động phòng ngừa, kiên quyết đấu tranh với những hành vi lợi dụng tín ngưỡng, 
                    tôn giáo để chia rẽ, phá hoại khối đại đoàn kết dân tộc hoặc những hoạt động 
                    tín ngưỡng, tôn giáo trái quy định của pháp luật
                  </p>
                  <p className="text-sm text-red-100">- Đảng Cộng sản Việt Nam</p>
                </div>
              </div>
            </div>

            {/* Solution Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {solutions.map((solution) => (
                <div
                  key={solution.id}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className={`bg-gradient-to-r ${solution.color} p-6 text-white`}>
                    <div className="flex items-center gap-4">
                      <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center text-4xl">
                        {solution.icon}
                      </div>
                      <h3 className="text-xl font-bold flex-1">{solution.title}</h3>
                    </div>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-white to-gray-50">
                    <ul className="space-y-3">
                      {solution.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            {i + 1}
                          </div>
                          <p className="text-gray-700">{point}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Box */}
            <div className="bg-gradient-to-r from-[#740A03] to-[#280905] rounded-2xl shadow-2xl p-8 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">🎯</div>
                <h3 className="text-3xl font-bold">Mục tiêu tổng quát</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl mb-3">✨</div>
                  <h4 className="font-bold text-xl mb-2">Phát huy tích cực</h4>
                  <p className="text-gray-600">
                    Tăng cường quan hệ tốt đẹp dân tộc - tôn giáo, tạo đồng thuận, đoàn kết
                  </p>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl mb-3">🛡️</div>
                  <h4 className="font-bold text-xl mb-2">Ngăn chặn tiêu cực</h4>
                  <p className="text-gray-600">
                    Phòng ngừa, đấu tranh chống lợi dụng gây mất ổn định
                  </p>
                </div>
              </div>
              <div className="mt-6 bg-yellow-400 text-gray-900 rounded-xl p-6 text-center">
                <p className="text-2xl font-bold">
                  → Dân giàu, nước mạnh, dân chủ, công bằng, văn minh
                </p>
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
