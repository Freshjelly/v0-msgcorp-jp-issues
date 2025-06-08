import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Building,
  Brain,
  Users,
  ArrowRight,
  CheckCircle,
  Globe,
  Target,
  Lightbulb,
} from "lucide-react"
import Link from "next/link"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'パートナーシップ',
  description: '共創が拓く、新しい健康の常識。MSG株式会社のパートナーシップについて。',
}

export default function PartnershipPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-green-200"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)`,
          }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              PARTNERSHIP
              <span className="block text-2xl sm:text-3xl lg:text-4xl mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                投資家・企業パートナー
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
              Health Revolution, Co-Created.
              <br />
              共創が拓く、新しい健康の常識。
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              MSGは、ヘルスケアの未来を共に創造するパートナーを求めています。
              東西医療の融合と最新テクノロジーを活用し、人々の健康と幸福に貢献する新しいビジネスモデルを構築します。
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">パートナーシップの形態</h2>
            <p className="text-xl text-gray-600">
              貴社のニーズに合わせた最適な協業形態をご提案します
            </p>
          </div>

          <div className="space-y-16">
            {/* 官民連携 */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-100">
              <CardContent className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-3 mb-6">
                      <Building className="h-10 w-10 text-blue-600" />
                      <h3 className="text-3xl font-bold text-gray-900">官民連携プロジェクト</h3>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      政府機関・自治体との連携により、地域医療の発展と健康格差の解消に取り組んでいます。
                      予防医療の普及と健康寿命の延伸を目指した実証実験を展開中。
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700">地域医療の活性化支援</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700">健康データを活用した政策提言</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700">予防医療プログラムの共同開発</span>
                      </li>
                    </ul>
                  </div>
                  <div className="relative">
                    <div className="w-full h-96 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-lg flex items-center justify-center">
                      <Globe className="h-32 w-32 text-blue-600" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 学術連携 */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-emerald-100">
              <CardContent className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="relative">
                      <div className="w-full h-96 bg-gradient-to-br from-green-200 to-emerald-300 rounded-lg flex items-center justify-center">
                        <Brain className="h-32 w-32 text-green-600" />
                      </div>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="flex items-center space-x-3 mb-6">
                      <Brain className="h-10 w-10 text-green-600" />
                      <h3 className="text-3xl font-bold text-gray-900">学術連携・研究機関</h3>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      国内外の大学・研究機関と共同研究を実施。東西医療の融合と科学的エビデンスの蓄積により、
                      新しい医療の形を創造します。
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">漢方薬の科学的研究</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">AIを活用した診断システムの開発</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">臨床データの解析と論文発表</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 事業参画 */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-pink-100">
              <CardContent className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-3 mb-6">
                      <Users className="h-10 w-10 text-purple-600" />
                      <h3 className="text-3xl font-bold text-gray-900">事業参画・OEM開発</h3>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      ヘルスケア事業への参入をお考えの企業様へ、商品開発から販売戦略まで一貫してサポート。
                      貴社のビジョンを形にします。
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0" />
                        <span className="text-gray-700">オリジナル商品の企画・開発</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0" />
                        <span className="text-gray-700">販売チャネルの構築支援</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0" />
                        <span className="text-gray-700">マーケティング戦略の立案</span>
                      </li>
                    </ul>
                  </div>
                  <div className="relative">
                    <div className="w-full h-96 bg-gradient-to-br from-purple-200 to-pink-300 rounded-lg flex items-center justify-center">
                      <Lightbulb className="h-32 w-32 text-purple-600" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">パートナーシップのメリット</h2>
            <p className="text-xl text-gray-600">
              MSGとの協業で得られる価値
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Target className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">専門知識の活用</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  東西医療の専門家ネットワークと最新技術を活用し、革新的なソリューションを創出します。
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-xl">市場アクセス</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  ヘルスケア業界での豊富な実績とネットワークを通じて、新たな市場開拓をサポートします。
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Brain className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl">研究開発力</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  AI技術と医療データを組み合わせた独自の研究開発により、競争優位性を確立します。
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Globe className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle className="text-xl">社会的インパクト</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  人々の健康と幸福に貢献する事業を通じて、持続可能な社会の実現に貢献します。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              パートナーシップについてのご相談
            </h2>
            <p className="text-xl text-blue-100">
              貴社のビジョンと私たちの技術を組み合わせ、
              <br />
              新しいヘルスケアの価値を創造しませんか？
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-4 text-lg"
              >
                お問い合わせはこちら
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}