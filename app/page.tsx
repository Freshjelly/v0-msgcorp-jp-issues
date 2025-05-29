"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Brain,
  Users,
  Menu,
  X,
  ArrowRight,
  Stethoscope,
  Leaf,
  Zap,
  Globe,
  BookOpen,
  Building,
} from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-green-600">
                <span className="text-lg font-bold text-white">M</span>
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">MSG株式会社</span>
                <div className="text-xs text-gray-500">True health belongs to everyone.</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/#vision" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                ビジョン
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                サービス
              </Link>
              <Link href="/media" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                メディア
              </Link>
              <Link href="/news" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                ニュース
              </Link>
              <Link href="/company" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                会社概要
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="sm">
                  お問い合わせ
                </Button>
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t bg-white py-4">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/#vision"
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors px-4 py-2"
                >
                  ビジョン
                </Link>
                <Link
                  href="/services"
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors px-4 py-2"
                >
                  サービス
                </Link>
                <Link
                  href="/media"
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors px-4 py-2"
                >
                  メディア
                </Link>
                <Link
                  href="/news"
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors px-4 py-2"
                >
                  ニュース
                </Link>
                <Link
                  href="/company"
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors px-4 py-2"
                >
                  会社概要
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-8 max-w-5xl mx-auto">
            <div className="space-y-4">
              <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                True health belongs to everyone.
              </Badge>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                健康はすべての人の
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                  幸せのためにある
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                MSGは、<span className="font-semibold text-blue-600">西洋医学と東洋の叡智とAIテクノロジー</span>
                で、あなたの体と心に寄り添い、
                <br className="hidden sm:block" />
                100年時代を健やかに生きるすべての人へ、真のウェルビーイングを届けます。
              </p>
            </div>

            <div className="text-lg text-gray-700 mb-8">人生100年時代、あなたは幸福・健康を実感できていますか？</div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#vision">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                  View Our Vision | ビジョン
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                  Explore Services | サービス
                </Button>
              </Link>
              <Link href="/news">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                  Read the Latest | ニュース
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">2016年</div>
                <div className="text-sm text-gray-600">設立</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">60名</div>
                <div className="text-sm text-gray-600">従業員数（医師・薬剤師含む）</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">9,500万円</div>
                <div className="text-sm text-gray-600">資本金</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">VISION | 私たちのビジョン</h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              <span className="font-semibold">Personal Health, Shared Future.</span>
              <br />
              一人の健康が、社会全体の幸福と未来を支える。
              <br />
              私たちはその仕組みを、科学と医学の力でデザインします。
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="h-8 w-8 text-red-500" />
                  <div>
                    <CardTitle className="text-xl">Philosophy | 経営理念</CardTitle>
                    <CardDescription className="text-sm text-gray-500">
                      Creating a society where mind and body thrive in harmony and happiness.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-gray-900">
                    心身ともに健やかで、幸せと喜びを感じられる世界を実現する。
                  </span>
                  <br />
                  <br />
                  MSGは、「生きること」そのものを豊かにするために、真の健やかさを追求し続けます。
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Zap className="h-8 w-8 text-blue-500" />
                  <div>
                    <CardTitle className="text-xl">Mission | ミッション</CardTitle>
                    <CardDescription className="text-sm text-gray-500">
                      Enhancing lifelong happiness through healthy living.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-gray-900">健康な生活を通じて、生涯幸福度の向上に寄与する</span>
                  <br />
                  <br />
                  東西医療の叡智とテクノロジーの力で、人が自分らしく生きる力を取り戻す
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Globe className="h-8 w-8 text-green-500" />
                  <div>
                    <CardTitle className="text-xl">Vision | ビジョン</CardTitle>
                    <CardDescription className="text-sm text-gray-500">
                      Creating accessible, safe, and satisfying healthcare for all.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-gray-900">
                    すべての人が安心・安全・満足できるヘルスケアの創造
                  </span>
                  <br />
                  <br />
                  すべての人が、安全かつ満足できるヘルスケアにアクセスできる世界を創造する
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Brain className="h-8 w-8 text-purple-500" />
                  <div>
                    <CardTitle className="text-xl">Core Values | バリュー</CardTitle>
                    <CardDescription className="text-sm text-gray-500">
                      Delivering effective and efficient healthcare.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-gray-900">
                    医学・薬学・科学による、効果的・効率的なヘルスケアの提供
                  </span>
                  <br />
                  <br />
                  人に寄り添うテクノロジーと、伝統に根ざす知恵の融合
                  <br />
                  <span className="text-blue-600 font-medium">
                    未来型ヘルスケア = Eastern Wisdom + Western Science + Digital Intelligence
                  </span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">SERVICE | サービス紹介</h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
              Healthcare that evolves with you.
              <br />
              あなたに最適化された、進化するヘルスケア。
            </p>
          </div>

          <div className="space-y-16">
            {/* KampoAI */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-100">
              <CardContent className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-3xl font-bold text-gray-900">KampoAI</h3>
                      <p className="text-lg text-blue-600 font-medium">
                        Reimagining Tradition through Intelligence.
                        <br />
                        伝統を、AIで再定義する。
                      </p>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span>中医体質九分類とAI</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span>個別養生アドバイスと生薬DBとビッグデータ</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span>科学と伝統の統合による新たな健康体験</span>
                      </li>
                    </ul>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      詳細を見る
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="relative">
                    <div className="w-full h-64 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-lg flex items-center justify-center">
                      <Brain className="h-24 w-24 text-blue-600" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Royal Kampo Club */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-emerald-100">
              <CardContent className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="relative order-2 lg:order-1">
                    <div className="w-full h-64 bg-gradient-to-br from-green-200 to-emerald-300 rounded-lg flex items-center justify-center">
                      <Leaf className="h-24 w-24 text-green-600" />
                    </div>
                  </div>
                  <div className="space-y-6 order-1 lg:order-2">
                    <div className="space-y-2">
                      <h3 className="text-3xl font-bold text-gray-900">ロイヤル漢方クラブ</h3>
                      <p className="text-lg text-green-600 font-medium">
                        Where Expertise Meets Heritage.
                        <br />
                        専門性が、漢方の真価をつなぐ場所。
                      </p>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span>専門家による監修・執筆・講演サポート</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span>医師・薬剤師・研究者の新しい漢方マッチング</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span>正しい漢方実践のための仕組みづくり</span>
                      </li>
                    </ul>
                    <Button className="bg-green-600 hover:bg-green-700">
                      詳細を見る
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Smart Functional Foods */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-pink-100">
              <CardContent className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-3xl font-bold text-gray-900">Smart Functional Foods Project</h3>
                      <p className="text-lg text-purple-600 font-medium">
                        From Idea to Impact: The functionality of food creates happiness.
                        <br />
                        アイデアから、社会的インパクトへ。食品の機能が幸福を創り出す。
                      </p>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      MSGが運営する Smart Functional Food Project（Sフードプロジェクト）
                      は、健康実現のために「売れる＋売れ続ける」商品をプロデュースする全方位型支援プラットフォームです。
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="font-semibold text-purple-600 mb-2">商品開発とブランディング</div>
                        <div className="text-gray-600">勝つために設計する時代へ</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="font-semibold text-purple-600 mb-2">メディア連携とPR</div>
                        <div className="text-gray-600">信用と共感まで届けるPR戦略</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="font-semibold text-purple-600 mb-2">販促と継続購入支援</div>
                        <div className="text-gray-600">人生に溶け込む習慣へ</div>
                      </div>
                    </div>
                    <Button className="bg-purple-600 hover:bg-purple-700">
                      詳細を見る
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="relative">
                    <div className="w-full h-64 bg-gradient-to-br from-purple-200 to-pink-300 rounded-lg flex items-center justify-center">
                      <Stethoscope className="h-24 w-24 text-purple-600" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section id="media" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">MEDIA | メディア展開</h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
              A new health habit starts with one article.
              <br />
              情報から「行動」へ導くメディア展開
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-2xl">健タメ！</CardTitle>
                </div>
                <CardDescription className="text-lg">
                  「1記事読めば悩みを解決できる」をコンセプトとした体験型ヘルスメディア
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span>不調に対する医師・薬剤師の明快アドバイス</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span>共感性の高い体験談で「気づき」から「行動」へ</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span>記事から直接専門家に相談できる高い実用性</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                  <CardTitle className="text-2xl">MedStyle</CardTitle>
                </div>
                <CardDescription className="text-lg">
                  医学（メディカル）を毎日の生活スタイルに取り入れる「メドスタイル」を実践
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  100歳を生きるようになった現代人にとって「健康」の価値はますます大きくなっています。
                  セルフメディケーションの具体的な方策として、伝統医療をデジタル化した新時代のヘルスケア情報を提供します。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">NEWS | ニュース</h2>
            <p className="text-xl lg:text-2xl text-gray-600">
              Where Progress Speaks.
              <br />
              私たちの今が未来をつくる。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2">
                  プレスリリース
                </Badge>
                <CardTitle className="text-lg">新サービス「KampoAI 2.0」リリースのお知らせ</CardTitle>
                <CardDescription>2024.01.15</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  AI技術を活用した漢方診断システムの新バージョンをリリースしました...
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2">
                  研究成果
                </Badge>
                <CardTitle className="text-lg">国際学会での研究発表について</CardTitle>
                <CardDescription>2024.01.10</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">第15回国際統合医療学会にて、当社の研究成果を発表いたします...</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-2">
                  メディア掲載
                </Badge>
                <CardTitle className="text-lg">日経新聞に掲載されました</CardTitle>
                <CardDescription>2024.01.05</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">当社の取り組みが日本経済新聞の健康特集で紹介されました...</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              すべてのニュースを見る
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section id="company" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">COMPANY | 会社概要</h2>
            <p className="text-xl lg:text-2xl text-gray-600">
              We Design the Future of Health.
              <br />
              私たちMSGは、健康の未来をデザインする企業です。
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-3">
                  <Building className="h-6 w-6 text-blue-600" />
                  <span>会社情報</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">設立</span>
                    <span className="text-gray-900">2016年6月22日</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">代表取締役</span>
                    <span className="text-gray-900">飯 寿行</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">資本金</span>
                    <span className="text-gray-900">9,500万円</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">従業員数</span>
                    <span className="text-gray-900">60名（医師・薬剤師含む）</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="font-medium text-gray-700">所在地</span>
                    <span className="text-gray-900 text-right">
                      〒150-0002
                      <br />
                      東京都渋谷区渋谷3-6-2
                      <br />
                      YAGI bldg.2 3F
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-3">
                  <Users className="h-6 w-6 text-green-600" />
                  <span>提携機関</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span>一般社団法人国際統合治療協会</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span>未病体質研究会</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span>一般社団法人食と健康推進協会</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span>一般社団法人日本サプリメント協会</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-white">Join Us. Redefine the Future of Health.</h2>
            <p className="text-xl text-blue-100">
              共に「健康」を変える仲間を募集しています
              <br />
              医療、食品、AIのプロフェッショナルを募集
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers">
                <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
                  採用情報を見る
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
                >
                  Partner with Us | お問い合わせ
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                  <a href="#" className="hover:text-white transition-colors">
                    KampoAI
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    ロイヤル漢方クラブ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Smart Functional Foods
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    あんしん漢方
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">メディア</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    健タメ！
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    MedStyle
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Kampo Contents Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    ニュース
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">会社情報</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    会社概要
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    採用情報
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    お問い合わせ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    プライバシーポリシー
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-gray-400">&copy; 2024 MSG株式会社. All rights reserved.</div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">
                  サイトマップ
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  利用規約
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  公式SNS
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
