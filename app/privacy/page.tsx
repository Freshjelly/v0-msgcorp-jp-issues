import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
              Privacy Policy
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">プライバシーポリシー</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              MSG株式会社は、お客様の個人情報保護を重要な責務と考えています。
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">個人情報保護方針</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">1. 個人情報の取得について</h3>
                <p className="text-gray-700 leading-relaxed">
                  当社は、適法かつ公正な手段により個人情報を取得いたします。
                  また、個人情報を取得する際は、利用目的を明示し、その目的の達成に必要な範囲内で取得いたします。
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">2. 個人情報の利用目的</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  当社は、取得した個人情報を以下の目的で利用いたします：
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>サービスの提供・運営</li>
                  <li>お客様からのお問い合わせへの対応</li>
                  <li>サービスの改善・新サービスの開発</li>
                  <li>重要なお知らせの配信</li>
                  <li>マーケティング・広告配信</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">3. 個人情報の第三者提供</h3>
                <p className="text-gray-700 leading-relaxed">
                  当社は、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供することはありません。
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">4. 個人情報の管理</h3>
                <p className="text-gray-700 leading-relaxed">
                  当社は、個人情報の漏洩、滅失、毀損等を防止するため、適切な安全管理措置を講じます。
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">5. お問い合わせ窓口</h3>
                <p className="text-gray-700 leading-relaxed">
                  個人情報の取扱いに関するお問い合わせは、以下までご連絡ください：
                  <br />
                  MSG株式会社 個人情報保護担当
                  <br />
                  メール: privacy@msgcorp.jp
                </p>
              </div>

              <div className="text-sm text-gray-500 pt-8 border-t">
                制定日：2024年1月1日
                <br />
                最終更新日：2024年1月1日
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
