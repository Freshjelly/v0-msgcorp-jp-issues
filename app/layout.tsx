import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

// ✏️ サイト全体のメタデータを変更する場合はここを編集してください
export const metadata: Metadata = {
  title: {
    default: 'MSG株式会社 - True health belongs to everyone.',
    template: '%s | MSG株式会社'
  },
  description: '西洋医学と東洋の叡智とAIテクノロジーで、真のウェルビーイングを届けます。',
  keywords: ['MSG株式会社', '漢方', 'AI', 'ヘルスケア', 'KampoAI', '統合医療'],
  authors: [{ name: 'MSG株式会社' }],
  creator: 'MSG株式会社',
  publisher: 'MSG株式会社',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'MSG株式会社 - True health belongs to everyone.',
    description: '西洋医学と東洋の叡智とAIテクノロジーで、真のウェルビーイングを届けます。',
    url: 'https://msgcorp.jp',
    siteName: 'MSG株式会社',
    locale: 'ja_JP',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-white font-sans">
        {/* 共通ヘッダー */}
        <Header />
        
        {/* メインコンテンツ */}
        <main>{children}</main>
        
        {/* 共通フッター */}
        <Footer />
      </body>
    </html>
  )
}
