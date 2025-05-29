import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Users, MapPin, Calendar, DollarSign, Award } from "lucide-react"

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
              We Design the Future of Health.
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              COMPANY
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                会社概要
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              私たちMSGは、健康の未来をデザインする企業です。
              <br />
              東西医療の融合とAIテクノロジーで、真のウェルビーイングを実現します。
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-3">
                  <Building className="h-6 w-6 text-blue-600" />
                  <span>会社情報</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Building className="h-5 w-5 text-gray-600" />
                      <span className="font-medium text-gray-700">社名</span>
                    </div>
                    <span className="text-gray-900 font-semibold">MSG株式会社</span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-gray-600" />
                      <span className="font-medium text-gray-700">設立</span>
                    </div>
                    <span className="text-gray-900">2016年6月22日</span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-gray-600" />
                      <span className="font-medium text-gray-700">代表取締役</span>
                    </div>
                    <span className="text-gray-900">飯 寿行</span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <DollarSign className="h-5 w-5 text-gray-600" />
                      <span className="font-medium text-gray-700">資本金</span>
                    </div>
                    <span className="text-gray-900">95,000,000円</span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-gray-600" />
                      <span className="font-medium text-gray-700">従業員数</span>
                    </div>
                    <span className="text-gray-900">60名（医師・薬剤師含む）</span>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start space-x-3 mb-2">
                      <MapPin className="h-5 w-5 text-gray-600 mt-1" />
                      <span className="font-medium text-gray-700">所在地</span>
                    </div>
                    <div className="ml-8 text-gray-900">
                      〒150-0002
                      <br />
                      東京都渋谷区渋谷3-6-2
                      <br />
                      YAGI bldg.2 3F
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center space-x-3">
                  <Award className="h-6 w-6 text-green-600" />
                  <span>提携機関</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                      <span className="font-medium text-gray-900">一般社団法人国際統合治療協会</span>
                    </div>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                      <span className="font-medium text-gray-900">未病体質研究会</span>
                    </div>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                      <span className="font-medium text-gray-900">一般社団法人食と健康推進協会</span>
                    </div>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                      <span className="font-medium text-gray-900">一般社団法人日本サプリメント協会</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">経営理念・経営方針</h2>
            <p className="text-xl text-gray-600">心身ともに健やかで、幸せや喜びを感じられる社会をつくる</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">経営理念</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">心身ともに健やかで、幸せや喜びを感じられる社会をつくる</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="text-xl text-green-600">ミッション</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  一人ひとりの健幸な生活に最適な養生方法の研究と提案を行う
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="text-xl text-purple-600">ビジョン</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  西洋医療と伝統医療の融合による実践を通して、疾病予防と健康寿命の延伸に寄与する
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="text-xl text-orange-600">バリュー</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  医療に最適なテクノロジーを活用することで、古今東西の知恵を集約し、解を見い出す
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-0 shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">経営方針</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-sm">1</span>
                  </div>
                  <p className="text-gray-700">お客さま一人ひとりの健康のために、質の高いサービスを提供します。</p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold text-sm">2</span>
                  </div>
                  <p className="text-gray-700">
                    お客さまにより良いサービスを提供するため、常に「学び」「研究」「実践」などあらゆる努力をいたします。
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold text-sm">3</span>
                  </div>
                  <p className="text-gray-700">
                    社員一人ひとりが健康で幸せを感じ、成長と活躍ができる環境をつくります。
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 font-bold text-sm">4</span>
                  </div>
                  <p className="text-gray-700">コーポレート・ガバナンスの確立による健全な経営を行います。</p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-sm">5</span>
                  </div>
                  <p className="text-gray-700">常に新しい価値の創造により、継続的な成長を生み出します。</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
