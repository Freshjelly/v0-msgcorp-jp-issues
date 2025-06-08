"use client";

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
import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible"
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer"
import { AnimatedButton } from "@/components/animations/AnimatedButton"
import { AnimatedCard } from "@/components/animations/AnimatedCard"

export default function HomePage() {
  const company = companyData.basic
  const philosophy = companyData.philosophy
  const services = servicesData.services
  const latestNews = newsData.news.slice(0, 3)

  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-green-200"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)`,
          }}></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-8 max-w-5xl mx-auto">
            <FadeInWhenVisible>
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
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.3}>
              <div className="text-lg text-gray-700 mb-8">人生100年時代、あなたは"幸福・健康"を実感できていますか？</div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#vision">
                  <AnimatedButton 
                    className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border-2 border-green-600 px-8 py-4 text-lg font-bold text-green-600 transition-all duration-300 hover:bg-green-600 hover:text-white hover:shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>Our Vision</span>
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </AnimatedButton>
                </Link>
                <Link href="/services">
                  <AnimatedButton 
                    className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border-2 border-gray-300 px-8 py-4 text-lg font-semibold text-gray-700 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>Explore Services</span>
                    <ArrowRight className="h-5 w-5 opacity-0 -ml-3 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0" />
                  </AnimatedButton>
                </Link>
                <Link href="/news">
                  <AnimatedButton 
                    className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border-2 border-gray-300 px-8 py-4 text-lg font-semibold text-gray-700 transition-all duration-300 hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>Latest News</span>
                    <ArrowRight className="h-5 w-5 opacity-0 -ml-3 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0" />
                  </AnimatedButton>
                </Link>
              </div>
            </FadeInWhenVisible>

            {/* Stats */}
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16">
              <StaggerItem className="text-center">
                <div className="text-3xl font-bold text-blue-600">{company.founded.split('年')[0]}年</div>
                <div className="text-sm text-gray-600">設立</div>
              </StaggerItem>
              <StaggerItem className="text-center">
                <div className="text-3xl font-bold text-green-600 whitespace-nowrap">{company.employees}</div>
                <div className="text-sm text-gray-600">従業員数</div>
              </StaggerItem>
              <StaggerItem className="text-center">
                <div className="text-3xl font-bold text-purple-600">{company.capital}</div>
                <div className="text-sm text-gray-600">資本金</div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="text-center space-y-4 mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900">■ VISION｜私たちのビジョン</h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                <span className="font-semibold">Personal Health, Shared Future.</span>
                <br />
                一人の健康が、社会全体の幸福と未来を支える。
                <br />
                私たちはその仕組みを、科学と医学の力でデザインします。
              </p>
            </div>
          </FadeInWhenVisible>

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
            <StaggerItem>
              <AnimatedCard className="border-0 shadow-lg bg-white h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <Heart className="h-6 md:h-8 w-6 md:w-8 text-red-500" />
                    <div>
                      <CardTitle className="text-lg md:text-xl">{philosophy.management.title} | {philosophy.management.titleEn}</CardTitle>
                      <CardDescription className="text-xs md:text-sm text-gray-600">
                        Creating a society where mind and body thrive in harmony and happiness.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-900">
                      {philosophy.management.content}
                    </span>
                    <br />
                    <br />
                    {philosophy.management.description}
                  </p>
                </CardContent>
              </AnimatedCard>
            </StaggerItem>

            <StaggerItem>
              <AnimatedCard className="border-0 shadow-lg bg-white h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <Zap className="h-6 md:h-8 w-6 md:w-8 text-blue-500" />
                    <div>
                      <CardTitle className="text-lg md:text-xl">{philosophy.mission.title} | {philosophy.mission.titleEn}</CardTitle>
                      <CardDescription className="text-xs md:text-sm text-gray-600">
                        Enhancing lifelong happiness through healthy living.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-900">{philosophy.mission.content}</span>
                    <br />
                    <br />
                    {philosophy.mission.description}
                  </p>
                </CardContent>
              </AnimatedCard>
            </StaggerItem>
          </StaggerContainer>

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <StaggerItem>
              <AnimatedCard className="border-0 shadow-lg bg-white h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <Globe className="h-6 md:h-8 w-6 md:w-8 text-green-500" />
                    <div>
                      <CardTitle className="text-lg md:text-xl">{philosophy.vision.title} | {philosophy.vision.titleEn}</CardTitle>
                      <CardDescription className="text-xs md:text-sm text-gray-600">
                        Creating accessible, safe, and satisfying healthcare for all.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                    <span className="font-semibold text-gray-900">
                      {philosophy.vision.content}
                    </span>
                    <br />
                    <br />
                    {philosophy.vision.description}
                  </p>
                </CardContent>
              </AnimatedCard>
            </StaggerItem>

            <StaggerItem>
              <AnimatedCard className="border-0 shadow-lg bg-white h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <Brain className="h-6 md:h-8 w-6 md:w-8 text-purple-500" />
                    <div>
                      <CardTitle className="text-lg md:text-xl">{philosophy.values.title} | {philosophy.values.titleEn}</CardTitle>
                      <CardDescription className="text-xs md:text-sm text-gray-600">
                        Delivering effective and efficient healthcare.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed">
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
              </AnimatedCard>
            </StaggerItem>
          </StaggerContainer>

          {/* Business Policy Section */}
          <FadeInWhenVisible className="mt-12 md:mt-16">
            <AnimatedCard className="border-0 shadow-lg bg-white">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Building className="h-6 md:h-8 w-6 md:w-8 text-indigo-500" />
                  <div>
                    <CardTitle className="text-lg md:text-xl">{philosophy.businessPolicy.title} | Business Policy</CardTitle>
                    <CardDescription className="text-xs md:text-sm text-gray-600">
                      Creating an environment where all employees can work with challenge, execution, and pride.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                  <span className="font-semibold text-gray-900">
                    {philosophy.businessPolicy.content}
                  </span>
                </p>
                <ul className="space-y-2">
                  {philosophy.businessPolicy.policies.map((policy, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                      <span className="text-sm md:text-base text-gray-700">{policy}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </AnimatedCard>
          </FadeInWhenVisible>

          {/* MESSAGE Section */}
          <FadeInWhenVisible className="mt-12 md:mt-16">
            <AnimatedCard className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-green-50">
              <CardContent className="p-6 md:p-8 lg:p-12">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">MESSAGE</h3>
                <div className="prose prose-sm md:prose-lg max-w-none text-gray-700">
                  <p className="text-sm md:text-base leading-relaxed">
                    健康は、紀元前から人々が追い求めてきたテーマです。しかし、どれほど医学が進歩しても、私たちはまだ「真の健康」の定義すら明確にできていません。
                  </p>
                  <p className="text-sm md:text-base leading-relaxed mt-4">
                    MSGは、東洋の叡智と西洋科学、そして最新のデジタルテクノロジーを融合させることで、新しい健康の在り方を提案します。私たちが目指すのは、単に病気を治すことではなく、一人ひとりが自分らしく、豊かに生きるための「ウェルビーイング」の実現です。
                  </p>
                  <p className="text-sm md:text-base leading-relaxed mt-4">
                    100年時代を生きる私たちにとって、健康とは何か。幸福とは何か。その答えを、共に見つけていきましょう。
                  </p>
                  <div className="mt-6 text-center">
                    <p className="text-lg md:text-xl font-semibold text-blue-600">
                      未来型ヘルスケア = Eastern Wisdom × Western Science × Digital Intelligence
                    </p>
                  </div>
                </div>
              </CardContent>
            </AnimatedCard>
          </FadeInWhenVisible>

          {/* CTA Section for Vision */}
          <FadeInWhenVisible className="text-center mt-12">
            <div className="space-y-4">
              <p className="text-base md:text-lg text-gray-600">
                私たちのビジョンに共感いただけましたか？
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services">
                  <AnimatedButton className="inline-flex items-center gap-2 whitespace-nowrap bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg">
                    <span>サービス詳細を見る</span>
                    <ArrowRight className="h-5 w-5" />
                  </AnimatedButton>
                </Link>
                <Link href="/partnership">
                  <AnimatedButton className="inline-flex items-center gap-2 whitespace-nowrap border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg">
                    <span>パートナーシップについて</span>
                    <ArrowRight className="h-5 w-5" />
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInWhenVisible>
            <div className="space-y-6 max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-bold text-white">Join Us. Redefine the Future of Health.</h2>
              <p className="text-xl text-blue-100">
                共に「健康」を変える仲間を募集しています
                <br />
                医療、食品、AIのプロフェッショナルを募集
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/careers">
                  <AnimatedButton className="inline-flex items-center gap-2 whitespace-nowrap bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg rounded-lg shadow-lg">
                    <span>採用情報を見る</span>
                  </AnimatedButton>
                </Link>
                <Link href="/contact">
                  <AnimatedButton className="inline-flex items-center gap-2 whitespace-nowrap border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 text-lg rounded-lg">
                    <span>Partner with Us | お問い合わせ</span>
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>
    </div>
  )
}