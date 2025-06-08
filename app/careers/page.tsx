"use client";

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Users,
  Heart,
  Lightbulb,
  Globe,
  ArrowRight,
  CheckCircle,
  MapPin,
  Clock,
  DollarSign,
  GraduationCap,
  Coffee,
  Zap,
} from "lucide-react"
import { useState } from "react"

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    motivation: "",
    resume: null as File | null,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Application submitted:", formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const jobPositions = [
    {
      title: "AIエンジニア",
      department: "技術開発部",
      type: "正社員",
      location: "東京（渋谷）",
      description:
        "KampoAIの開発・改善を担当。機械学習、自然言語処理の知識を活かして、伝統医学とAIの融合を推進します。",
      requirements: [
        "Python、機械学習フレームワークの実務経験3年以上",
        "自然言語処理、データ分析の経験",
        "ヘルスケア領域への興味・関心",
        "チームでの開発経験",
      ],
      preferred: ["医療・ヘルスケア業界での開発経験", "中国語または漢方に関する知識", "論文執筆・学会発表経験"],
    },
    {
      title: "薬剤師",
      department: "メディカル事業部",
      type: "正社員",
      location: "東京（渋谷）",
      description: "漢方薬の専門知識を活かし、コンテンツ監修、商品開発、顧客サポートを担当します。",
      requirements: ["薬剤師免許", "漢方薬に関する知識・経験", "顧客対応経験", "コミュニケーション能力"],
      preferred: ["漢方専門薬剤師資格", "中医学の知識", "メディア出演・執筆経験", "英語または中国語スキル"],
    },
    {
      title: "医師",
      department: "メディカル事業部",
      type: "正社員・業務委託",
      location: "東京（渋谷）・リモート可",
      description: "統合医療の観点から、サービス監修、研究開発、メディア出演などを担当します。",
      requirements: ["医師免許", "臨床経験5年以上", "統合医療・漢方医学への理解", "研究・執筆経験"],
      preferred: ["漢方専門医資格", "学会発表・論文執筆経験", "メディア出演経験", "起業・新規事業経験"],
    },
    {
      title: "マーケティング担当",
      department: "マーケティング部",
      type: "正社員",
      location: "東京（渋谷）",
      description: "デジタルマーケティング、コンテンツマーケティング、PR戦略の企画・実行を担当します。",
      requirements: [
        "マーケティング実務経験3年以上",
        "デジタルマーケティングの知識",
        "データ分析スキル",
        "企画・提案力",
      ],
      preferred: ["ヘルスケア業界での経験", "メディア運営経験", "SNSマーケティング経験", "広告運用経験"],
    },
    {
      title: "事業開発担当",
      department: "事業開発部",
      type: "正社員",
      location: "東京（渋谷）",
      description: "新規事業の企画・立案、パートナー企業との提携、事業戦略の策定を担当します。",
      requirements: [
        "事業開発・企画経験3年以上",
        "論理的思考力・分析力",
        "プレゼンテーション能力",
        "英語でのコミュニケーション能力",
      ],
      preferred: ["ヘルスケア・食品業界での経験", "MBA取得者", "起業・新規事業立ち上げ経験", "海外事業経験"],
    },
  ]

  return (
    <div className="bg-white font-sans">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
              Join Us. Redefine the Future of Health.
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              CAREERS
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                採用情報
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              共に「健康」を変える仲間を募集しています
              <br />
              医療、食品、AIのプロフェッショナルとして、未来のヘルスケアを創造しませんか？
            </p>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Why MSG?</h2>
            <p className="text-xl text-gray-600">MSGで働く理由</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">革新的な挑戦</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  AIと伝統医学の融合という、世界でも類を見ない革新的な事業に携わることができます。
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">多様な専門性</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  医師、薬剤師、エンジニア、マーケターなど、多様な専門性を持つメンバーと協働できます。
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">社会的インパクト</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  人々の健康と幸福に直接貢献する、社会的意義の高い仕事に取り組むことができます。
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-lg">成長環境</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  急成長中のスタートアップで、個人の成長と会社の成長を同時に実現できる環境です。
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">福利厚生・待遇</h2>
            <p className="text-xl text-gray-600">働きやすい環境を整えています</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <DollarSign className="h-6 w-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">競争力のある給与</h3>
                <p className="text-gray-600 text-sm">経験・スキルに応じた適正な評価と昇給制度</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">フレックスタイム制</h3>
                <p className="text-gray-600 text-sm">コアタイム10:00-15:00、ワークライフバランス重視</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-purple-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">リモートワーク可</h3>
                <p className="text-gray-600 text-sm">職種により在宅勤務・ハイブリッドワーク対応</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <GraduationCap className="h-6 w-6 text-orange-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">研修・学習支援</h3>
                <p className="text-gray-600 text-sm">書籍購入費、セミナー参加費、資格取得支援</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Heart className="h-6 w-6 text-red-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">健康サポート</h3>
                <p className="text-gray-600 text-sm">健康診断、メンタルヘルスケア、社内漢方相談</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Coffee className="h-6 w-6 text-yellow-600 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">快適なオフィス</h3>
                <p className="text-gray-600 text-sm">渋谷駅徒歩5分、フリードリンク、リフレッシュスペース</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Positions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">募集職種</h2>
            <p className="text-xl text-gray-600">現在募集中のポジション</p>
          </div>

          <div className="space-y-8">
            {jobPositions.map((job, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-4">
                          <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                          <Badge variant="outline">{job.type}</Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-gray-600">
                          <span>{job.department}</span>
                          <span>•</span>
                          <span className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-700 leading-relaxed">{job.description}</p>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">必須要件</h4>
                          <ul className="space-y-1">
                            {job.requirements.map((req, reqIndex) => (
                              <li key={reqIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">歓迎要件</h4>
                          <ul className="space-y-1">
                            {job.preferred.map((pref, prefIndex) => (
                              <li key={prefIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                                <Zap className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                <span>{pref}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center">
                      <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                        この職種に応募する
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">応募フォーム</h2>
              <p className="text-xl text-gray-600">ご興味をお持ちいただいた方は、以下のフォームからご応募ください</p>
            </div>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">お名前 *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">メールアドレス *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">電話番号</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position">希望職種 *</Label>
                      <Select onValueChange={(value) => handleInputChange("position", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="希望する職種を選択してください" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ai-engineer">AIエンジニア</SelectItem>
                          <SelectItem value="pharmacist">薬剤師</SelectItem>
                          <SelectItem value="doctor">医師</SelectItem>
                          <SelectItem value="marketing">マーケティング担当</SelectItem>
                          <SelectItem value="business-dev">事業開発担当</SelectItem>
                          <SelectItem value="other">その他</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">経験・スキル *</Label>
                    <Textarea
                      id="experience"
                      rows={4}
                      value={formData.experience}
                      onChange={(e) => handleInputChange("experience", e.target.value)}
                      placeholder="これまでの経験、保有スキル、資格などをご記入ください"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motivation">志望動機 *</Label>
                    <Textarea
                      id="motivation"
                      rows={4}
                      value={formData.motivation}
                      onChange={(e) => handleInputChange("motivation", e.target.value)}
                      placeholder="MSGへの志望動機、入社後に挑戦したいことなどをご記入ください"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="resume">履歴書・職務経歴書</Label>
                    <Input
                      id="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => {
                        const file = e.target.files?.[0] || null
                        setFormData((prev) => ({ ...prev, resume: file }))
                      }}
                    />
                    <p className="text-sm text-gray-500">PDF、Word形式のファイルをアップロードしてください</p>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                    応募する
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  )
}
