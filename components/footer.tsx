import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-green-600">
                <span className="text-lg font-bold text-white">M</span>
              </div>
              <div>
                <span className="text-xl font-bold">MSG株式会社</span>
                <div className="text-xs text-gray-400">True health belongs to everyone.</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              健康はすべての人の幸せのためにある。
              <br />
              西洋医学と東洋の叡智とAIテクノロジーで真のウェルビーイングを届けます。
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">サービス</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/services#kampoai" className="hover:text-white transition-colors">
                  KampoAI
                </Link>
              </li>
              <li>
                <Link href="/services#royal-kampo" className="hover:text-white transition-colors">
                  ロイヤル漢方クラブ
                </Link>
              </li>
              <li>
                <Link href="/services#smart-foods" className="hover:text-white transition-colors">
                  Smart Functional Foods
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">メディア</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/media#kentame" className="hover:text-white transition-colors">
                  健タメ！
                </Link>
              </li>
              <li>
                <Link href="/media#medstyle" className="hover:text-white transition-colors">
                  MedStyle
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-white transition-colors">
                  ニュース
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">会社情報</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/company" className="hover:text-white transition-colors">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/partnership" className="hover:text-white transition-colors">
                  パートナーシップ
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  採用情報
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-300 mb-3">関連団体</h4>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span>一般社団法人国際統合治療協会</span>
              <span>未病体質研究会</span>
              <span>一般社団法人食と健康推進協会</span>
              <span>一般社団法人日本サプリメント協会</span>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">&copy; 2024 MSG株式会社. All rights reserved.</div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4 text-gray-400">
                <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-white transition-colors">
                  プライバシーポリシー
                </Link>
                <Link href="/terms" className="hover:text-white transition-colors">
                  利用規約
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
