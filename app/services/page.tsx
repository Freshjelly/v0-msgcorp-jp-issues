"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Leaf, Stethoscope, ArrowRight, Users, Database, Zap } from "lucide-react"
import Link from "next/link"
import servicesData from "@/data/services.json"
import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible"
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer"
import { AnimatedButton } from "@/components/animations/AnimatedButton"
import { AnimatedCard } from "@/components/animations/AnimatedCard"

export default function ServicesPage() {
  const services = servicesData.services

  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50 text-sm md:text-base">
                Healthcare that evolves with you.
              </Badge>
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-900">
                SERVICE
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                  サービス紹介
                </span>
              </h1>
              <p className="text-base md:text-xl text-gray-600 leading-relaxed">
                あなたに最適化された、進化するヘルスケア。
                <br />
                東西医療の叡智とAIテクノロジーが融合した革新的なサービスをご提供します。
              </p>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="space-y-16 md:space-y-20">
            {services.map((service, index) => (
              <StaggerItem key={service.id}>
                <AnimatedCard className={`border-0 shadow-xl bg-gradient-to-br from-${service.color}-50 to-${service.color === 'blue' ? 'indigo' : service.color === 'green' ? 'emerald' : 'pink'}-100 overflow-hidden`}>
                  <CardContent className="p-8 lg:p-12">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      <div className={`space-y-6 ${index % 2 === 1 ? 'order-2' : ''}`}>
                        <div className="space-y-2">
                          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{service.name}</h3>
                          <p className={`text-lg md:text-xl text-${service.color}-600 font-medium`}>
                            {service.tagline}
                            <br />
                            {service.taglineJa}
                          </p>
                        </div>
                        
                        {service.features && (
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">主な機能・特徴</h4>
                            <ul className="space-y-3 text-gray-700">
                              {service.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start space-x-3">
                                  <div className={`w-2 h-2 bg-${service.color}-600 rounded-full mt-2 flex-shrink-0`}></div>
                                  <div>
                                    <span className="font-medium">{feature.title}</span>
                                    {feature.description && (
                                      <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                                    )}
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {service.phases && (
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">サービス展開フェーズ</h4>
                            <p className="text-gray-700 leading-relaxed mb-4">{service.description}</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              {service.phases.map((phase, phaseIndex) => (
                                <div key={phaseIndex} className="bg-white rounded-lg p-4 shadow-sm">
                                  <div className={`text-sm font-semibold text-${service.color}-600 mb-1`}>
                                    Phase {phase.phase}
                                  </div>
                                  <div className="font-medium text-gray-900">{phase.title}</div>
                                  <div className="text-sm text-gray-600 mt-1">{phase.description}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {service.consumerService && (
                          <div className="bg-white rounded-lg p-6 shadow-md">
                            <h4 className="text-xl font-bold text-gray-900 mb-4">{service.consumerService.name}</h4>
                            <p className="text-gray-700 mb-4">{service.consumerService.description}</p>
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
                        
                        <AnimatedButton className={`bg-${service.color}-600 hover:bg-${service.color}-700 text-white px-8 py-3 rounded-lg font-semibold`}>
                          詳細を見る
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </AnimatedButton>
                      </div>
                      
                      <div className={`relative ${index % 2 === 1 ? 'order-1' : ''}`}>
                        <div className={`w-full h-64 md:h-80 bg-gradient-to-br from-${service.color}-200 to-${service.color === 'blue' ? 'indigo' : service.color === 'green' ? 'emerald' : 'pink'}-300 rounded-lg flex items-center justify-center`}>
                          {service.id === 'kampoai' && <Brain className="h-20 md:h-24 w-20 md:w-24 text-blue-600" />}
                          {service.id === 'royal-kampo' && <Leaf className="h-20 md:h-24 w-20 md:w-24 text-green-600" />}
                          {service.id === 'smart-foods' && <Stethoscope className="h-20 md:h-24 w-20 md:w-24 text-purple-600" />}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInWhenVisible>
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                サービスについてお気軽にお問い合わせください
              </h2>
              <p className="text-lg text-gray-600">
                私たちのサービスが、あなたの健康やビジネスにどのように貢献できるかご相談ください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <AnimatedButton className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg">
                    お問い合わせ
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </AnimatedButton>
                </Link>
                <Link href="/partnership">
                  <AnimatedButton className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg">
                    パートナーシップについて
                    <ArrowRight className="ml-2 h-5 w-5" />
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