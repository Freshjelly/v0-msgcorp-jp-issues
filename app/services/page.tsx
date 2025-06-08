"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Leaf, Stethoscope, ArrowRight, Users, Database, Zap } from "lucide-react"
import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible"
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer"
import { AnimatedButton } from "@/components/animations/AnimatedButton"
import { AnimatedCard } from "@/components/animations/AnimatedCard"


export default function ServicesPage() {
  return (
    <div className="bg-white font-sans">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50 text-sm md:text-base">
                Healthcare that evolves with you.
              </Badge>
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-900">
                SERVICE
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                  サービス紹介
                </span>
              </h1>
              <p className="text-base md:text-xl text-gray-600 leading-relaxed">
                あなたに最適化された、進化するヘルスケア。
                <br />
                東西医療の叡智とAIテクノロジーが融合した革新的なサービスをご提供します。
              </p>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* KampoAI Section */}
      <section id="kampoai" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <AnimatedCard className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-100">
              <CardContent className="p-6 md:p-8 lg:p-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                  <div className="space-y-6 md:space-y-8">
                    <div className="space-y-4">
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">KampoAI</h2>
                      <p className="text-lg md:text-xl text-blue-600 font-medium">
                        Reimagining Tradition through Intelligence.
                        <br />
                        伝統を、AIで再定義する。
                    </p>
                  </div>

                  <div className="space-y-6">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      長い歴史が育んだ膨大な知識とデータを学習し、人知の及ばない精度の高い見極めをAIがどこまで可能にするのか。
                      中国の名医の診立てに匹敵する「体質九分類」を採用した革新的なシステムです。
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex items-center space-x-3 mb-4">
                          <Database className="h-6 w-6 text-blue-600" />
                          <h3 className="font-semibold text-gray-900">中医体質九分類</h3>
                        </div>
                        <p className="text-gray-600 text-sm">
                          王琦北京中医薬大学終身教授が確立し、中国政府で公式に認められた体質判定システム
                        </p>
                      </div>

                      <div className="bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex items-center space-x-3 mb-4">
                          <Brain className="h-6 w-6 text-blue-600" />
                          <h3 className="font-semibold text-gray-900">AI診断システム</h3>
                        </div>
                        <p className="text-gray-600 text-sm">
                          個別養生アドバイス、生薬データベース、ビッグデータを活用した高精度診断
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    KampoAIの詳細を見る
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                <div className="relative">
                  <div className="w-full h-80 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-lg flex items-center justify-center">
                    <Brain className="h-32 w-32 text-blue-600" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Royal Kampo Club Section */}
      <section id="royal-kampo" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-emerald-100">
            <CardContent className="p-8 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative order-2 lg:order-1">
                  <div className="w-full h-80 bg-gradient-to-br from-green-200 to-emerald-300 rounded-lg flex items-center justify-center">
                    <Leaf className="h-32 w-32 text-green-600" />
                  </div>
                </div>

                <div className="space-y-8 order-1 lg:order-2">
                  <div className="space-y-4">
                    <h2 className="text-4xl font-bold text-gray-900">ロイヤル漢方クラブ</h2>
                    <p className="text-xl text-green-600 font-medium">
                      Where Expertise Meets Heritage.
                      <br />
                      専門性が、漢方の真価をつなぐ場所。
                    </p>
                  </div>

                  <div className="space-y-6">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      国内屈指の漢方のプロフェッショナルが集結。医師、薬学博士、薬剤師、漢方治療アドバイザー、
                      体質管理士、東洋医療検査師、鍼灸師、AI開発者が新旧の知恵と知識を集積し、新たな解を提供します。
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <Users className="h-6 w-6 text-green-600 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">専門家ネットワーク</h3>
                          <p className="text-gray-600">医師・薬剤師・研究者による監修・執筆・講演サポート</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <Zap className="h-6 w-6 text-green-600 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">マッチングシステム</h3>
                          <p className="text-gray-600">正しい漢方実践のための新しい仕組みづくり</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    ロイヤル漢方クラブの詳細を見る
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Smart Functional Foods Section */}
      <section id="smart-foods" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-purple-50 to-pink-100">
            <CardContent className="p-8 lg:p-16">
              <div className="space-y-12">
                <div className="text-center space-y-4">
                  <h2 className="text-4xl font-bold text-gray-900">Smart Functional Foods Project</h2>
                  <p className="text-xl text-purple-600 font-medium">
                    From Idea to Impact: The functionality of food creates happiness.
                    <br />
                    アイデアから、社会的インパクトへ。食品の機能が幸福を創り出す。
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      MSGが運営する Smart Functional Food Project（Sフードプロジェクト）は、
                      健康実現のために「売れる＋売れ続ける」商品をプロデュースする全方位型支援プラットフォームです。
                    </p>

                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-gray-900">What We Do | 提供する価値</h3>
                      <p className="text-lg text-purple-600 font-medium">
                        We build enduring value.
                        <br />
                        私たちは、商品を"提供する"のではなく、"売れ続ける価値"を創造する。
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="w-full h-80 bg-gradient-to-br from-purple-200 to-pink-300 rounded-lg flex items-center justify-center">
                      <Stethoscope className="h-32 w-32 text-purple-600" />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="bg-white shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-purple-600">01. 商品開発 × ブランディング</CardTitle>
                      <CardDescription>Design to Win. Build to Last.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• 原料の厳選 × 訴求キーワード × パッケージ戦略</li>
                        <li>• 有識者・タレント・ドクター監修で信頼性の高い設計</li>
                        <li>• 「一目で伝わる・一口で納得する」商品開発</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-white shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-purple-600">02. メディア連携 × PR</CardTitle>
                      <CardDescription>Be Seen. Be Trusted. Be Desired.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• 新聞社、出版社、美容メディアとの連携</li>
                        <li>• Yahoo!・TRILL・シンデレラフィットでの継続露出</li>
                        <li>• インフルエンサーによるSNS拡散</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-white shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-purple-600">03. 販促 × 継続購入支援</CardTitle>
                      <CardDescription>Catch the Eye. Keep the Heart.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• 専門POP職人による店頭販促物</li>
                        <li>• 店頭＆ECサイトでの目に留まるディスプレイ演出</li>
                        <li>• 季節・特集に応じた小冊子／定期購入ツール</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                    Smart Functional Foods Projectの詳細を見る
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  )
}
