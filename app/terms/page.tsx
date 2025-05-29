import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
              Terms of Service
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">利用規約</h1>
            <p className="text-xl text-gray-600 leading-relaxed">MSG株式会社のサービス利用に関する規約です。</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">サービス利用規約</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">第1条（適用）</h3>
                <p className="text-gray-700 leading-relaxed">
                  本規約は、MSG株式会社（以下「当社」）が提供するサービス（以下「本サービス」）の利用条件を定めるものです。
                  利用者は、本規約に同意した上で本サービスを利用するものとします。
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">第2条（利用登録）</h3>
                <p className="text-gray-700 leading-relaxed">
                  本サービスの利用を希望する者は、当社の定める方法により利用登録を申請し、
                  当社がこれを承認することによって利用登録が完了するものとします。
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">第3条（禁止事項）</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  利用者は、本サービスの利用にあたり、以下の行為をしてはなりません：
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>法令または公序良俗に違反する行為</li>
                  <li>犯罪行為に関連する行為</li>
                  <li>当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                  <li>当社のサービスの運営を妨害するおそれのある行為</li>
                  <li>他の利用者に関する個人情報等を収集または蓄積する行為</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">第4条（本サービスの提供の停止等）</h3>
                <p className="text-gray-700 leading-relaxed">
                  当社は、以下のいずれかの事由があると判断した場合、利用者に事前に通知することなく
                  本サービスの全部または一部の提供を停止または中断することができるものとします。
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">第5条（免責事項）</h3>
                <p className="text-gray-700 leading-relaxed">
                  当社は、本サービスに関して、明示または黙示を問わず、完全性、正確性、確実性、有用性等について
                  いかなる保証も行いません。
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">第6条（規約の変更）</h3>
                <p className="text-gray-700 leading-relaxed">
                  当社は、利用者の一般の利益に適合する場合、または本サービスの提供に係る当社の業務上
                  相当な必要性がある場合には、利用者に通知することにより、いつでも本規約を変更することができるものとします。
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
