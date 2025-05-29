import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"

export default function NewsPage() {
  const newsItems = [
    {
      category: "プレスリリース",
      title: "新サービス「KampoAI 2.0」リリースのお知らせ",
      date: "2024.01.15",
      excerpt:
        "AI技術を活用した漢方診断システムの新バージョンをリリースしました。より高精度な体質判定と個別化された養生アドバイスを提供します。",
      featured: true,
    },
    {
      category: "研究成果",
      title: "国際学会での研究発表について",
      date: "2024.01.10",
      excerpt:
        "第15回国際統合医療学会にて、当社の研究成果を発表いたします。東西医療融合の新たな可能性について報告予定です。",
      featured: false,
    },
    {
      category: "メディア掲載",
      title: "日経新聞に掲載されました",
      date: "2024.01.05",
      excerpt:
        "当社の取り組みが日本経済新聞の健康特集で紹介されました。AIと伝統医学の融合による新しいヘルスケアの形について取り上げられています。",
      featured: false,
    },
    {
      category: "プレスリリース",
      title: "Smart Functional Foods Project 新パートナー企業との提携発表",
      date: "2023.12.20",
      excerpt:
        "機能性食品の開発・販売において、新たなパートナー企業との業務提携を開始いたします。より多くの方に健康的な食品をお届けします。",
      featured: false,
    },
    {
      category: "お知らせ",
      title: "年末年始休業のお知らせ",
      date: "2023.12.15",
      excerpt:
        "誠に勝手ながら、下記の期間を年末年始休業とさせていただきます。期間中にいただいたお問い合わせは、営業開始日以降に順次対応いたします。",
      featured: false,
    },
    {
      category: "研究成果",
      title: "漢方薬の効果に関する臨床研究結果を発表",
      date: "2023.12.01",
      excerpt:
        "当社が実施した漢方薬の効果に関する臨床研究の結果を学術誌に発表いたします。科学的エビデンスに基づく漢方医学の発展に貢献します。",
      featured: false,
    },
  ]

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
              Where Progress Speaks.
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              NEWS
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                ニュース
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              私たちの"今"が未来をつくる。
              <br />
              MSG株式会社の最新情報をお届けします。
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">注目のニュース</h2>
            {newsItems
              .filter((item) => item.featured)
              .map((item, index) => (
                <Card key={index} className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-100">
                  <CardContent className="p-8 lg:p-12">
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                          {item.category}
                        </Badge>
                        <div className="flex items-center space-x-2 text-gray-500">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{item.date}</span>
                        </div>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{item.title}</h3>
                      <p className="text-lg text-gray-700 leading-relaxed">{item.excerpt}</p>
                      <div className="flex items-center text-blue-600 hover:text-blue-700 cursor-pointer">
                        <span className="font-medium">続きを読む</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* All News */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">すべてのニュース</h2>

          <div className="grid gap-8">
            {newsItems
              .filter((item) => !item.featured)
              .map((item, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center space-x-4">
                          <Badge variant="outline" className="text-gray-600 border-gray-200">
                            {item.category}
                          </Badge>
                          <div className="flex items-center space-x-2 text-gray-500">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">{item.date}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.excerpt}</p>
                      </div>
                      <div className="lg:ml-8">
                        <div className="flex items-center text-blue-600 hover:text-blue-700 cursor-pointer">
                          <span className="font-medium">続きを読む</span>
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
