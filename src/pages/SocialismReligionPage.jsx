
export default function SocialismReligionPage() {
//   const [expandedSection, setExpandedSection] = useState(null);
  return (
       <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#740A03] to-[#280905] shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
              Kết luận: Chủ nghĩa xã hội và Tôn giáo
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
        {/* Introduction Banner */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl shadow-2xl p-8 mb-12 text-white">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-6xl">🚫</div>
            <div>
              <h2 className="text-3xl font-bold mb-2">Quan điểm sai lầm</h2>
              <p className="text-xl text-red-100">
                "Đi lên CNXH = Xóa bỏ hoàn toàn tôn giáo"
              </p>
            </div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4 mt-4 text-black">
            <p className="text-lg">
              ❌ Không đúng với tinh thần khoa học của Mác – Lênin<br/>
              ❌ Không phù hợp với thực tiễn xây dựng CNXH
            </p>
          </div>
        </div>

        {/* Question 1 */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
            <div className="flex items-center gap-4">
              <div className="text-5xl">🤔</div>
              <h3 className="text-2xl font-bold">1. Chủ nghĩa Mác – Lênin nhìn nhận tôn giáo như thế nào?</h3>
            </div>
          </div>
          <div className="p-8">
            <div className="mb-6 bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
              <p className="font-semibold text-blue-900 mb-2">Định nghĩa:</p>
              <p className="text-blue-800">
                Tôn giáo là hình thái ý thức xã hội, phản ánh hiện thực khách quan một cách hư ảo
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl p-6 text-center">
                <div className="text-5xl mb-3">⚡</div>
                <h4 className="font-bold text-purple-900 mb-2">Nguồn gốc 1</h4>
                <p className="text-sm text-purple-800">
                  Sự bất lực trước tự nhiên và xã hội
                </p>
              </div>
              <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl p-6 text-center">
                <div className="text-5xl mb-3">😢</div>
                <h4 className="font-bold text-pink-900 mb-2">Nguồn gốc 2</h4>
                <p className="text-sm text-pink-800">
                  Bất công, áp bức, nghèo khổ → Tìm chỗ dựa tinh thần
                </p>
              </div>
              <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-xl p-6 text-center">
                <div className="text-5xl mb-3">📚</div>
                <h4 className="font-bold text-indigo-900 mb-2">Nguồn gốc 3</h4>
                <p className="text-sm text-indigo-800">
                  Trình độ nhận thức và dân trí hạn chế
                </p>
              </div>
            </div>

            <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <div className="text-3xl">👉</div>
                <div>
                  <p className="font-bold text-green-900 mb-2">Lưu ý quan trọng:</p>
                  <ul className="space-y-2 text-green-800">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Không xem tôn giáo là do "ngu dốt"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Không thể xóa bỏ bằng mệnh lệnh hay ý chí chủ quan</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Question 2 */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-red-600 to-red-800 p-6 text-white">
            <div className="flex items-center gap-4">
              <div className="text-5xl">❓</div>
              <h3 className="text-2xl font-bold">2. Có phải xây dựng CNXH là xóa bỏ tôn giáo?</h3>
            </div>
          </div>
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="inline-block bg-gradient-to-r from-red-600 to-red-800 text-white text-4xl font-bold px-12 py-6 rounded-2xl shadow-lg">
                KHÔNG!
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border-2 border-orange-300">
                <div className="text-4xl mb-3 text-center">🏛️</div>
                <p className="text-center text-orange-900 font-semibold mb-2">Lý do 1</p>
                <p className="text-sm text-orange-800">
                  Tôn giáo có cơ sở kinh tế – xã hội và tâm lý – văn hóa sâu xa
                </p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 border-2 border-yellow-300">
                <div className="text-4xl mb-3 text-center">⏰</div>
                <p className="text-center text-yellow-900 font-semibold mb-2">Lý do 2</p>
                <p className="text-sm text-yellow-800">
                  Ý thức xã hội biến đổi chậm hơn tồn tại xã hội
                </p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 border-2 border-red-300">
                <div className="text-4xl mb-3 text-center">⚠️</div>
                <p className="text-center text-red-900 font-semibold mb-2">Lý do 3</p>
                <p className="text-sm text-red-800">
                  Cưỡng ép → Phản kháng, bất ổn, đi ngược mục tiêu CNXH
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="text-3xl">👉</div>
                <p className="text-yellow-900">
                  <span className="font-bold">Kết luận:</span> Quan điểm "cứ lên CNXH là tôn giáo tự động biến mất" là cách hiểu <span className="font-bold text-red-600">cơ học, giản đơn, phi biện chứng</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Question 3 - Timeline */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-green-600 to-green-800 p-6 text-white">
            <div className="flex items-center gap-4">
              <div className="text-5xl">⏳</div>
              <h3 className="text-2xl font-bold">3. Tôn giáo có biến mất hoàn toàn trong xã hội XHCN không?</h3>
            </div>
          </div>
          <div className="p-8">
            <div className="mb-8">
              <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6 mb-6">
                <p className="font-bold text-green-900 text-lg mb-2">Theo quan điểm Mác – Lênin:</p>
                <p className="text-green-800">
                  Tôn giáo <span className="font-bold">không mất đi ngay</span>, mà chỉ <span className="font-bold">dần dần mất đi</span> những cơ sở tồn tại
                </p>
              </div>

              {/* Process Timeline */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
                <h4 className="font-bold text-gray-800 text-xl mb-6 text-center">Quá trình gắn liền với:</h4>
                
                <div className="space-y-6">
                  {/* Step 1 */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      1
                    </div>
                    <div className="flex-1 bg-white rounded-lg p-4 shadow-md">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">📈</span>
                        <p className="font-bold text-blue-900">Phát triển kinh tế – xã hội</p>
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      2
                    </div>
                    <div className="flex-1 bg-white rounded-lg p-4 shadow-md">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">⚖️</span>
                        <p className="font-bold text-green-900">Xóa bỏ bóc lột, bất công</p>
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      3
                    </div>
                    <div className="flex-1 bg-white rounded-lg p-4 shadow-md">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">🎓</span>
                        <p className="font-bold text-purple-900">Nâng cao dân trí, khoa học, giáo dục</p>
                      </div>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      4
                    </div>
                    <div className="flex-1 bg-white rounded-lg p-4 shadow-md">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">💝</span>
                        <p className="font-bold text-pink-900">Bảo đảm đời sống vật chất và tinh thần</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Result */}
              <div className="mt-6 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl p-6 text-white">
                <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <span className="text-3xl">🎯</span>
                  Khi con người:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-black">
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <p className="font-semibold">✓ Làm chủ tự nhiên và xã hội</p>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <p className="font-semibold">✓ Không còn bị tha hóa</p>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-4">
                    <p className="font-semibold">✓ Đời sống ổn định, công bằng, nhân văn</p>
                  </div>
                </div>
                <div className="mt-4 text-center text-2xl font-bold">
                  ⬇️
                </div>
                <div className="bg-white bg-opacity-30 rounded-lg p-4 mt-4 text-center text-black">
                  <p className="font-bold text-lg">
                    Nhu cầu nương tựa vào thế giới siêu nhiên sẽ giảm dần
                  </p>
                  <p className="text-sm mt-2 text-yellow-600">
                    (Quá trình lâu dài, tự nhiên, không phải "xóa bỏ")
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Question 4 */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-6 text-white">
            <div className="flex items-center gap-4">
              <div className="text-5xl">💎</div>
              <h3 className="text-2xl font-bold">4. Trong xã hội XHCN, tôn giáo còn giá trị gì không?</h3>
            </div>
          </div>
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="inline-block bg-gradient-to-r from-purple-600 to-purple-800 text-white text-4xl font-bold px-12 py-6 rounded-2xl shadow-lg">
                CÓ!
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-xl p-6 text-center transform hover:scale-105 transition-transform">
                <div className="text-5xl mb-3">❤️</div>
                <h4 className="font-bold text-red-900 mb-2">Giá trị đạo đức</h4>
                <p className="text-sm text-red-800">Nhân ái, vị tha, hướng thiện</p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-6 text-center transform hover:scale-105 transition-transform">
                <div className="text-5xl mb-3">🏛️</div>
                <h4 className="font-bold text-blue-900 mb-2">Giá trị văn hóa</h4>
                <p className="text-sm text-blue-800">Lịch sử – Di sản</p>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl p-6 text-center transform hover:scale-105 transition-transform">
                <div className="text-5xl mb-3">🧘</div>
                <h4 className="font-bold text-green-900 mb-2">Vai trò tinh thần</h4>
                <p className="text-sm text-green-800">Ổn định, gắn kết cộng đồng</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl p-6 text-center transform hover:scale-105 transition-transform">
                <div className="text-5xl mb-3">🤝</div>
                <h4 className="font-bold text-yellow-900 mb-2">Động viên tín đồ</h4>
                <p className="text-sm text-yellow-800">"Tốt đời, đẹp đạo"</p>
              </div>
            </div>

            <div className="bg-indigo-50 border-2 border-indigo-500 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <div className="text-3xl">👉</div>
                <div className="flex-1">
                  <p className="font-bold text-indigo-900 text-lg mb-3">Vấn đề không phải là xóa bỏ tôn giáo, mà là:</p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-indigo-600 text-xl">✓</span>
                      <span className="text-indigo-800">Tách tôn giáo khỏi sự lợi dụng chính trị</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-indigo-600 text-xl">✓</span>
                      <span className="text-indigo-800">Phát huy mặt tích cực, hạn chế mặt tiêu cực</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-indigo-600 text-xl">✓</span>
                      <span className="text-indigo-800">Bảo đảm tự do tín ngưỡng, tôn giáo trong khuôn khổ pháp luật</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-gradient-to-r from-[#740A03] to-[#280905] rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-6xl">📌</div>
              <h3 className="text-3xl font-bold">Kết luận</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
              <div className="bg-white bg-opacity-10 rounded-xl p-6 hover:bg-opacity-20 transition-all">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <p className="text-lg">Mác – Lênin <span className="font-bold">không chủ trương</span> xóa bỏ tôn giáo bằng ý chí chủ quan</p>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-10 rounded-xl p-6 hover:bg-opacity-20 transition-all">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <p className="text-lg">Đi lên CNXH <span className="font-bold">≠</span> Thủ tiêu tôn giáo</p>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-10 rounded-xl p-6 hover:bg-opacity-20 transition-all">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <p className="text-lg">Tôn giáo có thể <span className="font-bold">tồn tại lâu dài</span> trong xã hội XHCN</p>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-10 rounded-xl p-6 hover:bg-opacity-20 transition-all">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <p className="text-lg">Tôn giáo chỉ <span className="font-bold">dần dần mất cơ sở</span> khi điều kiện được cải thiện</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl p-6 text-gray-900">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🎯</div>
                <div>
                  <p className="font-bold text-xl mb-2">Tiếp cận của Mác – Lênin:</p>
                  <p className="text-lg">
                    <span className="font-bold">Khoa học</span> • <span className="font-bold">Biện chứng</span> • <span className="font-bold">Nhân văn</span>
                  </p>
                  <p className="mt-3 text-gray-800">
                    Xã hội XHCN hướng tới <span className="font-bold">giải phóng con người</span>, chứ không phải <span className="font-bold">áp đặt niềm tin</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
