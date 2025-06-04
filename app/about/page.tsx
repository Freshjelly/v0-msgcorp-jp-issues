import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Brain, Users, Globe, Lightbulb, Target } from "lucide-react"
import type { Metadata } from 'next'

// ✏️ このページのメタデータを変更する場合はここを編集してください
export const metadata: Metadata = {
  title: 'About',
  description: 'MSG株式会社について - 東西医療の融合とAIテクノロジーで健康の未来を創造します。',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
              About MSG Corporation
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              ABOUT
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                私たちについて
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              伝統と革新の融合で、健康の未来を創造する
              <br />
              MSGは、すべての人の健康と幸福を実現するために挑戦を続けます。
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Story</h2>
              <p className="text-xl text-gray-600">私たちのストーリー</p>
            </div>

            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="leading-relaxed mb-6">
                MSG株式会社は2016年、「健康はすべての人の幸せのためにある」という理念のもとに設立されました。
                西洋医学の科学的アプローチと、東洋医学の全人的な視点を融合させ、
                さらに最新のAIテクノロジーを活用することで、新しいヘルスケアの形を創造しています。
              </p>
              <p className="leading-relaxed mb-6">
                私たちは、単に病気を治すだけでなく、人々が心身ともに健やかで、
                日々の生活に喜びと幸せを感じられる世界の実現を目指しています。
                これは、医療の枠を超えた、人生そのものを豊かにする取り組みです。
              </p>
              <p className="leading-relaxed">
                創業以来、医師、薬剤師、研究者、エンジニアなど多様な専門家が集まり、
                それぞれの知見を結集させながら、革新的なサービスを開発してきました。
                これからも、伝統と革新を融合させながら、健康の未来を切り拓いていきます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Approach</h2>
            <p className="text-xl text-gray-600">私たちのアプローチ</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Brain className="h-10 w-10 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-center">東西医療の融合</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  西洋医学の科学的根拠と東洋医学の全人的アプローチを組み合わせ、
                  より効果的で包括的な健康ソリューションを提供します。
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="h-10 w-10 text-green-600" />
                </div>
                <CardTitle className="text-xl text-center">AIテクノロジー</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  最新のAI技術を活用し、個人に最適化された健康アドバイスと、
                  精度の高い診断サポートを実現します。
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="mx-auto w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-10 w-10 text-purple-600" />
                </div>
                <CardTitle className="text-xl text-center">人に寄り添う</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  技術だけでなく、一人ひとりの生活や価値観に寄り添い、
                  本当に必要とされるサービスを提供します。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Impact</h2>
            <p className="text-xl text-gray-600">私たちの社会的インパクト</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Target className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">予防医療の普及</h3>
                  <p className="text-gray-600">
                    病気になる前の段階から健康をサポートし、医療費の削減と健康寿命の延伸に貢献しています。
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Globe className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">医療格差の解消</h3>
                  <p className="text-gray-600">
                    テクノロジーを活用し、地域や経済状況に関わらず、質の高いヘルスケアへのアクセスを可能にします。
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Users className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">専門家の育成</h3>
                  <p className="text-gray-600">
                    統合医療の専門家を育成し、次世代のヘルスケアを担う人材の輩出に取り組んでいます。
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">10万人+</div>
                <p className="text-gray-600">サービス利用者数</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
                <p className="text-gray-600">提携医療機関</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">200+</div>
                <p className="text-gray-600">専門家ネットワーク</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">8年</div>
                <p className="text-gray-600">業界での実績</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              健康の未来を、共に創る
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              私たちMSGは、これからも挑戦を続けます。
              <br />
              伝統の知恵と最新技術を融合させ、すべての人が健康で幸せな人生を送れる社会の実現に向けて。
              <br />
              一緒に、健康の未来を創造していきましょう。
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}