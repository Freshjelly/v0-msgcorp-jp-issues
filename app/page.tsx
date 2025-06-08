import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Brain,
  Users,
  ArrowRight,
  Stethoscope,
  Leaf,
  Zap,
  Globe,
  BookOpen,
  Building,
} from "lucide-react"
import Link from "next/link"
import companyData from "@/data/company.json"
import servicesData from "@/data/services.json"
import newsData from "@/data/news.json"
import type { Metadata } from 'next'

// ✏️ ホームページのメタデータを変更する場合はここを編集してください
export const metadata: Metadata = {
  title: {
    absolute: 'MSG株式会社 - True health belongs to everyone.',
  },
}

export default function HomePage() {
  // ✏️ 会社情報を変更する場合は /data/company.json を編集してください
  const company = companyData.basic
  const philosophy = companyData.philosophy
  
  // ✏️ サービス情報を変更する場合は /data/services.json を編集してください
  const services = servicesData.services
  
  // ✏️ ニュース情報を変更する場合は /data/news.json を編集してください
  const latestNews = newsData.news.slice(0, 3)

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-8 max-w-5xl mx-auto">
            <div className="space-y-4">
              <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                {company.tagline}
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                健康はすべての人の
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                  幸せのためにある
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                MSGは、<span className="font-semibold text-blue-600">西洋医学 × 東洋の叡智 × AIテクノロジー</span>
                で、あなたの体と心に寄り添い、
                <br className="hidden sm:block" />
                "100年時代"を健やかに生きるすべての人へ、真のウェルビーイングを届けます。
              </p>
            </div>

            <div className="text-lg text-gray-700 mb-8">人生100年時代、あなたは"幸福・健康"を実感できていますか？</div>

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
                <div className="text-3xl font-bold text-blue-600">{company.founded.split('年')[0]}年</div>
                <div className="text-sm text-gray-600">設立</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">{company.employees}</div>
                <div className="text-sm text-gray-600">従業員数</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">{company.capital}</div>
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
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">■ VISION｜私たちのビジョン</h2>
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
                    <CardTitle className="text-xl">{philosophy.management.title} | {philosophy.management.titleEn}</CardTitle>
                    <CardDescription className="text-sm text-gray-500">
                      Creating a society where mind and body thrive in harmony and happiness.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-gray-900">
                    {philosophy.management.content}
                  </span>
                  <br />
                  <br />
                  {philosophy.management.description}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Zap className="h-8 w-8 text-blue-500" />
                  <div>
                    <CardTitle className="text-xl">{philosophy.mission.title} | {philosophy.mission.titleEn}</CardTitle>
                    <CardDescription className="text-sm text-gray-500">
                      Enhancing lifelong happiness through healthy living.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-gray-900">{philosophy.mission.content}</span>
                  <br />
                  <br />
                  {philosophy.mission.description}
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
                    <CardTitle className="text-xl">{philosophy.vision.title} | {philosophy.vision.titleEn}</CardTitle>
                    <CardDescription className="text-sm text-gray-500">
                      Creating accessible, safe, and satisfying healthcare for all.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-gray-900">
                    {philosophy.vision.content}
                  </span>
                  <br />
                  <br />
                  {philosophy.vision.description}
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Brain className="h-8 w-8 text-purple-500" />
                  <div>
                    <CardTitle className="text-xl">{philosophy.values.title} | {philosophy.values.titleEn}</CardTitle>
                    <CardDescription className="text-sm text-gray-500">
                      Delivering effective and efficient healthcare.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-gray-900">
                    {philosophy.values.content}
                  </span>
                  <br />
                  <br />
                  {philosophy.values.description}
                  <br />
                  <span className="text-blue-600 font-medium">
                    {philosophy.values.formula}
                  </span>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Business Policy Section */}
          <div className="mt-16">
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Building className="h-8 w-8 text-indigo-500" />
                  <div>
                    <CardTitle className="text-xl">{philosophy.businessPolicy.title} | Business Policy</CardTitle>
                    <CardDescription className="text-sm text-gray-500">
                      Creating an environment where all employees can work with challenge, execution, and pride.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <span className="font-semibold text-gray-900">
                    {philosophy.businessPolicy.content}
                  </span>
                </p>
                <ul className="space-y-2">
                  {philosophy.businessPolicy.policies.map((policy, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                      <span className="text-gray-700">{policy}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* MESSAGE Section */}
          <div className="mt-16">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-green-50">
              <CardContent className="p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">MESSAGE</h3>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="leading-relaxed">
                    健康は、紀元前から人々が追い求めてきたテーマです。しかし、どれほど医学が進歩しても、私たちはまだ「真の健康」の定義すら明確にできていません。
                  </p>
                  <p className="leading-relaxed mt-4">
                    MSGは、東洋の叡智と西洋科学、そして最新のデジタルテクノロジーを融合させることで、新しい健康の在り方を提案します。私たちが目指すのは、単に病気を治すことではなく、一人ひとりが自分らしく、豊かに生きるための「ウェルビーイング」の実現です。
                  </p>
                  <p className="leading-relaxed mt-4">
                    100年時代を生きる私たちにとって、健康とは何か。幸福とは何か。その答えを、共に見つけていきましょう。
                  </p>
                  <div className="mt-6 text-center">
                    <p className="text-xl font-semibold text-blue-600">
                      未来型ヘルスケア = Eastern Wisdom × Western Science × Digital Intelligence
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">■ SERVICE｜サービス紹介</h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
              Healthcare that evolves with you.
              <br />
              あなたに最適化された、進化するヘルスケア。
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <Card key={service.id} className={`border-0 shadow-xl bg-gradient-to-br from-${service.color}-50 to-${service.color === 'blue' ? 'indigo' : service.color === 'green' ? 'emerald' : 'pink'}-100`}>
                <CardContent className="p-8 lg:p-12">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div className={`space-y-6 ${index % 2 === 1 ? 'order-2' : ''}`}>
                      <div className="space-y-2">
                        <h3 className="text-3xl font-bold text-gray-900">{service.name}</h3>
                        <p className={`text-lg text-${service.color}-600 font-medium`}>
                          {service.tagline}
                          <br />
                          {service.taglineJa}
                        </p>
                      </div>
                      {service.features && (
                        <ul className="space-y-3 text-gray-700">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-3">
                              <div className={`w-2 h-2 bg-${service.color}-600 rounded-full`}></div>
                              <span>{feature.title}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {service.phases && (
                        <p className="text-gray-700 leading-relaxed">
                          {service.description}
                        </p>
                      )}
                      {service.consumerService && (
                        <div className="bg-white rounded-lg p-6 shadow-md">
                          <h4 className="text-xl font-bold text-gray-900 mb-4">{service.consumerService.name}</h4>
                          <ul className="space-y-2 mb-4">
                            {service.consumerService.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                <span className="text-gray-700">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="bg-green-50 rounded-lg p-4">
                            <div className="text-center">
                              <p className="text-3xl font-bold text-green-600 mb-1">
                                {service.consumerService.pricing.trial.duration}
                                <span className="text-2xl ml-2">{service.consumerService.pricing.trial.price}から始められて</span>
                              </p>
                              <p className="text-lg font-semibold text-green-700">{service.consumerService.pricing.trial.highlight}</p>
                              <p className="text-base text-gray-600 mt-2">
                                {service.consumerService.pricing.regular.note} {service.consumerService.pricing.regular.duration} 
                                <span className="font-semibold text-gray-900 ml-1">{service.consumerService.pricing.regular.price}</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                      <Button className={`bg-${service.color}-600 hover:bg-${service.color}-700`}>
                        詳細を見る
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    <div className={`relative ${index % 2 === 1 ? 'order-1' : ''}`}>
                      <div className={`w-full h-64 bg-gradient-to-br from-${service.color}-200 to-${service.color === 'blue' ? 'indigo' : service.color === 'green' ? 'emerald' : 'pink'}-300 rounded-lg flex items-center justify-center`}>
                        {service.id === 'kampoai' && <Brain className="h-24 w-24 text-blue-600" />}
                        {service.id === 'royal-kampo' && <Leaf className="h-24 w-24 text-green-600" />}
                        {service.id === 'smart-foods' && <Stethoscope className="h-24 w-24 text-purple-600" />}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section id="media" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">■ MEDIA｜メディア展開</h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
              A new health habit starts with one article.
              <br />
              情報から「行動」へ導くメディア展開
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
                    <span>専門家が具体的に解決策を提示</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span>共感性の高い体験談</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <span>相談窓口に直結する高い実用性</span>
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

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Zap className="h-8 w-8 text-purple-600" />
                  <CardTitle className="text-2xl">Kampo Contents Service</CardTitle>
                </div>
                <CardDescription className="text-lg">
                  漢方・東洋医学に特化したコンテンツ配信サービス
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  メディアや企業向けに、漢方・東洋医学の専門知識をベースにした質の高いコンテンツを提供。
                  記事執筆、監修、教育コンテンツの開発まで、幅広いニーズに対応します。
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
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">■ NEWS｜ニュース</h2>
            <p className="text-xl lg:text-2xl text-gray-600">
              Where Progress Speaks.
              <br />
              私たちの今が未来をつくる。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {latestNews.map((news) => (
              <Card key={news.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <Badge variant="outline" className="w-fit mb-2">
                    {news.category}
                  </Badge>
                  <CardTitle className="text-lg">{news.title}</CardTitle>
                  <CardDescription>{news.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{news.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/news">
              <Button variant="outline" size="lg">
                すべてのニュースを見る
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section id="partnership" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">■ PARTNERSHIP｜投資家・企業パートナー</h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
              Health Revolution, Co-Created.
              <br />
              共創が拓く、新しい健康の常識。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Building className="h-8 w-8 text-blue-600" />
                  <CardTitle className="text-xl">官民連携プロジェクト</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  政府機関・自治体との連携により、地域医療の発展と健康格差の解消に取り組んでいます。
                  予防医療の普及と健康寿命の延伸を目指した実証実験を展開中。
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Brain className="h-8 w-8 text-green-600" />
                  <CardTitle className="text-xl">学術連携・研究機関</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  国内外の大学・研究機関と共同研究を実施。東西医療の融合と科学的エビデンスの蓄積により、
                  新しい医療の形を創造します。
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                  <CardTitle className="text-xl">事業参画・OEM開発</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  ヘルスケア事業への参入をお考えの企業様へ、商品開発から販売戦略まで一貫してサポート。
                  貴社のビジョンを形にします。
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
              パートナーシップについて詳しく見る
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section id="company" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">■ COMPANY PROFILE｜会社概要</h2>
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
                    <span className="text-gray-900">{company.founded}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">代表取締役</span>
                    <span className="text-gray-900">{company.ceo}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">資本金</span>
                    <span className="text-gray-900">{company.capital}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">従業員数</span>
                    <span className="text-gray-900">{company.employees}</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="font-medium text-gray-700">所在地</span>
                    <span className="text-gray-900 text-right">
                      〒{company.address.postal}
                      <br />
                      {company.address.prefecture}{company.address.city}
                      <br />
                      {company.address.building}
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
                  {companyData.partners.map((partner, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span>{partner}</span>
                    </li>
                  ))}
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
    </div>
  )
}