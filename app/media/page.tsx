import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, ArrowRight, FileText, Heart, Lightbulb } from "lucide-react"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'メディア展開',
  description: 'MSG株式会社のメディア展開 - 健タメ！、MedStyle、Kampo Contents Service',
}

export default function MediaPage() {
  return (
    <div className="bg-white font-sans">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
              A new health habit starts with one article.
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              MEDIA
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                メディア展開
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              情報から「行動」へ導くメディア展開
              <br />
              読んで楽しんで、行動して安心する体験型ヘルスメディアをお届けします。
            </p>
          </div>
        </div>
      </section>

      {/* 健タメ！ Section */}
      <section id="kentame" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-100">
            <CardContent className="p-8 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <BookOpen className="h-12 w-12 text-blue-600" />
                      <h2 className="text-4xl font-bold text-gray-900">健タメ！</h2>
                    </div>
                    <p className="text-xl text-blue-600 font-medium">
                      「1記事読めば悩みを解決できる」をコンセプトとした体験型ヘルスメディア
                    </p>
                  </div>

                  <div className="space-y-6">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      『健タメ！』は"読んで楽しんで、行動して安心する"を提供するメディアです。
                      「なんとなく不調」、「健康ではないけど病気ではない」という方々に医療を毎日の生活に取り入れ、
                      根本から改善を目指す新しい健康スタイルを広めています。
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <Heart className="h-6 w-6 text-blue-600 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">専門家による解決策</h3>
                          <p className="text-gray-600">不調に対する薬剤師や医師などの専門家が具体的に解決策を提示</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <Users className="h-6 w-6 text-blue-600 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">共感性の高い体験談</h3>
                          <p className="text-gray-600">
                            身近なトラブルにまつわる具体的な体験談で「気づき」から「行動」へ
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <Lightbulb className="h-6 w-6 text-blue-600 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">高い実用性</h3>
                          <p className="text-gray-600">記事を読んで興味を持ったらその場で専門家に相談できる</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    健タメ！を見る
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                <div className="relative">
                  <div className="w-full h-80 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-32 w-32 text-blue-600" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* MedStyle Section */}
      <section id="medstyle" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-emerald-100">
            <CardContent className="p-8 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative order-2 lg:order-1">
                  <div className="w-full h-80 bg-gradient-to-br from-green-200 to-emerald-300 rounded-lg flex items-center justify-center">
                    <FileText className="h-32 w-32 text-green-600" />
                  </div>
                </div>

                <div className="space-y-8 order-1 lg:order-2">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Users className="h-12 w-12 text-green-600" />
                      <h2 className="text-4xl font-bold text-gray-900">MedStyle</h2>
                    </div>
                    <p className="text-xl text-green-600 font-medium">
                      Medical + LifeStyle
                      <br />
                      医学（メディカル）を毎日の生活スタイルに取り入れる「メドスタイル」
                    </p>
                  </div>

                  <div className="space-y-6">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      「どうすれば健康な一生を送れるのか？」という課題に対し、医学（メディカル）を毎日の生活スタイルに取り入れる
                      「メドスタイル（メディカル＋生活スタイル）」を実践するために。
                    </p>

                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="font-semibold text-gray-900 mb-4">メディヘルス（メディカル＋ヘルス）</h3>
                      <p className="text-gray-600">
                        100歳を生きるようになった現代人にとって「健康」の価値はますます大きくなっています。
                        この健康問題を解決するために、セルフメディケーションの具体的な方策として、
                        伝統医療をデジタル化した新時代のヘルスケア情報を、医療チームとともに提供いたします。
                      </p>
                    </div>
                  </div>

                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    MedStyleを見る
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Kampo Contents Service Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Kampo Contents Service</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              中国医学の研究と実践を行っているプロフェッショナルが、漢方に関するコンテンツの執筆および監修を行うサービス
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">テレビ・ラジオ出演</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>専門家による番組出演や企画のご提案</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">記事執筆・監修</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>新聞・雑誌・Webメディアなどへの記事の執筆および監修</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">講演・セミナー</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>漢方に関する専門的な講演やセミナーの実施</CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-lg">全体監修</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription>漢方関連プロジェクトの全体監修とコンサルティング</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  )
}
