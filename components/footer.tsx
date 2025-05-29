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
                <Link href="/contact" className="hover:text-white transition-colors">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  採用情報
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">&copy; 2024 MSG株式会社. All rights reserved.</div>
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
    </footer>
  )
}
