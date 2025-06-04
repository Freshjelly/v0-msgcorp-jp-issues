import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"
import newsData from "@/data/news.json"
import type { Metadata } from 'next'

// ✏️ このページのメタデータを変更する場合はここを編集してください
export const metadata: Metadata = {
  title: 'ニュース',
  description: 'MSG株式会社の最新ニュース、プレスリリース、研究成果をお届けします。',
}

export default function NewsPage() {
  // ✏️ ニュースを追加・編集する場合は /data/news.json ファイルを編集してください
  const newsItems = newsData.news

  return (
    <div className="min-h-screen bg-white font-sans">

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

    </div>
  )
}
