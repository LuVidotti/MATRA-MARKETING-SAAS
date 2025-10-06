import Image from 'next/image'
import {
  CheckCircle,
  Star,
  Sparkles,
  Zap,
  Users,
  Code,
  Shield,
} from 'lucide-react'
import { LeadFormButton } from './_components/lead-form-button'
import Video from './_components/video'
import { CountdownTimer } from './_components/countdown-timer'
import { CreateSpotLeadSheet } from '@/features/spot-leads/components/create-spot-lead-sheet'
import { FacebookPixel } from '@/components/facebook-pixel'

export default function MatraLandingPage() {
  return (
    <>
      <main className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-slate-800 opacity-95" />
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-600/20 via-transparent to-transparent" />

        {/* Header Ultra-Conversão */}
        <div className="sticky top-0 z-50 border-b border-gray-600/30 bg-black/80 shadow-2xl backdrop-blur-xl">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col items-center gap-4">
              {/* Urgência no Header */}
              <div className="rounded-full border border-gray-500/20 bg-gradient-to-r from-gray-800 to-gray-700 px-6 py-2">
                <p className="text-sm font-semibold text-white">
                  ⏰ <span className="text-gray-200">OFERTA LIMITADA:</span>{' '}
                  Apenas <span className="font-bold text-white">47 vagas</span>{' '}
                  restantes este mês!
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-gradient-to-br from-gray-400 to-gray-600 p-2 shadow-lg">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h1 className="bg-gradient-to-r from-white via-gray-200 to-gray-100 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
                  MATRA TECNOLOGIA
                </h1>
              </div>

              <div className="text-center">
                <h2 className="mb-2 text-lg font-bold text-white md:text-xl">
                  🚀{' '}
                  <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                    Multiplique seu Faturamento com Marketing Digital!
                  </span>
                </h2>
                <p className="text-sm text-gray-300">
                  ✅ 487+ Clientes atendidos | ✅ R$ 2.3M+ em vendas geradas
                </p>
              </div>

              <div className="group">
                <LeadFormButton title="🎯 QUERO ACESSO AGORA" />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section Ultra-Modern */}
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
          {/* Floating Elements */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-white/5 blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 h-80 w-80 animate-pulse rounded-full bg-gray-500/10 blur-3xl delay-1000" />
          </div>

          <div className="container relative z-10 mx-auto px-4 py-20">
            <div className="space-y-12 text-center">
              {/* Logo Container */}
              <Image
                src="/logo.png"
                alt="MATRA Logo"
                width={200}
                height={200}
                className="mx-auto rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105"
              />

              {/* Main Headline Ultra-Conversão */}
              <div className="space-y-8">
                <div className="inline-block rounded-full border border-gray-500/30 bg-gradient-to-r from-gray-800/50 to-gray-700/50 px-6 py-3 backdrop-blur-sm">
                  <p className="text-sm font-bold text-white">
                    💎 MÉTODO EXCLUSIVO - Usado por +487 Empresários
                  </p>
                </div>

                <h1 className="text-4xl font-bold leading-tight md:text-7xl">
                  <span className="bg-gradient-to-r from-white via-gray-200 to-gray-100 bg-clip-text text-transparent">
                    De ZERO a
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-gray-100 via-white to-gray-200 bg-clip-text text-transparent">
                    R$ 50K/MÊS
                  </span>
                  <br />
                  <span className="text-2xl text-white md:text-4xl">
                    COM MARKETING DIGITAL!
                  </span>
                </h1>

                <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <p className="mb-4 text-xl font-semibold leading-relaxed text-white md:text-2xl">
                    ⚡ <span className="text-gray-200">GARANTIDO:</span> Seu
                    negócio vendendo ou
                    <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text font-bold text-transparent">
                      {' '}
                      DINHEIRO DE VOLTA!
                    </span>
                  </p>
                  <p className="text-lg text-gray-300">
                    💰 Clientes já faturaram{' '}
                    <span className="font-bold text-white">R$ 2.3M+</span> | ⏱️
                    Resultados em{' '}
                    <span className="font-bold text-white">30 dias</span> ou
                    menos
                  </p>
                </div>

                {/* Prova Social Numérica */}
                <div className="mx-auto grid max-w-2xl grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white md:text-3xl">
                      487+
                    </div>
                    <div className="text-sm text-gray-300">
                      Clientes Atendidos
                    </div>
                  </div>
                  <div className="border-x border-gray-600/30 text-center">
                    <div className="text-2xl font-bold text-white md:text-3xl">
                      R$ 2.3M+
                    </div>
                    <div className="text-sm text-gray-300">Vendas Geradas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white md:text-3xl">
                      97%
                    </div>
                    <div className="text-sm text-gray-300">Satisfação</div>
                  </div>
                </div>
              </div>

              {/* Video Container */}
              <div className="group relative mx-auto max-w-sm md:max-w-md">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 opacity-50 blur-xl transition-opacity duration-500 group-hover:opacity-70" />
                <div className="relative rounded-2xl border border-white/20 bg-black/20 p-2 backdrop-blur-sm">
                  <Video src="/MATRA-MARKETING-VIDEO.mp4" />
                </div>
              </div>

              {/* Features Grid */}
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
                {[
                  { icon: Zap, title: 'Suporte 24h', desc: 'Especializado' },
                  {
                    icon: Code,
                    title: 'Tráfego Pago',
                    desc: 'Facebook & Google Ads',
                  },
                  {
                    icon: Shield,
                    title: 'Conversão',
                    desc: 'Landing Pages otimizadas',
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group transition-all duration-300 hover:scale-105"
                  >
                    <div className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm hover:border-white/40">
                      <div className="mx-auto mb-4 w-fit rounded-lg bg-gradient-to-br from-gray-500 to-gray-700 p-3 transition-shadow group-hover:shadow-lg group-hover:shadow-gray-500/25">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="mb-2 text-lg font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="text-white/70">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <div className="group relative">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-gray-500 to-gray-700 opacity-75 blur transition-opacity group-hover:opacity-100" />
                  <LeadFormButton title="Começar Agora" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section Ultra-Modern */}
        <section className="relative overflow-hidden py-20">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-black/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-gray-600/20 via-transparent to-transparent" />

          <div className="container relative z-10 mx-auto px-4">
            {/* Section Header */}
            <div className="mb-16 space-y-6 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-sm">
                <Sparkles className="h-5 w-5 text-gray-300" />
                <span className="font-semibold text-white/80">O Problema</span>
              </div>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                <span className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500 bg-clip-text text-transparent">
                  Você tem ideia do trabalho
                </span>
                <br />
                <span className="text-white">
                  que dá para gerar vendas online?
                </span>
              </h2>

              <p className="mx-auto max-w-4xl text-xl leading-relaxed text-white/80">
                Imagine gastar{' '}
                <span className="font-bold text-gray-300">
                  milhares em anúncios
                </span>{' '}
                sem conversão, perdendo clientes por falta de estratégia, sem
                saber onde investir... Essa complexidade pode custar{' '}
                <span className="font-bold text-gray-200">
                  milhares e meses
                </span>{' '}
                de tentativas frustradas.
              </p>
            </div>

            {/* Solution Header */}
            <div className="mb-16 space-y-6 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-400/20 bg-gradient-to-r from-gray-500/20 to-gray-600/20 px-6 py-3 backdrop-blur-sm">
                <CheckCircle className="h-5 w-5 text-gray-300" />
                <span className="font-semibold text-white/90">
                  Nossa Solução
                </span>
              </div>

              <h3 className="text-3xl font-bold md:text-5xl">
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                  Nossa Agência
                </span>
                <br />
                <span className="text-xl text-white md:text-3xl">
                  A solução mais completa para marketing digital do Brasil
                </span>
              </h3>
            </div>

            {/* Features Showcase */}
            <div className="space-y-16">
              {/* Feature 1 - Gestão de Tráfego Pago */}
              <div className="mx-auto max-w-4xl text-center">
                <div className="space-y-6">
                  <div className="flex items-center justify-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gray-500 to-gray-700 text-xl font-bold text-white">
                      1
                    </div>
                    <h4 className="text-2xl font-bold text-white md:text-3xl">
                      Gestão de Tráfego Pago
                    </h4>
                  </div>
                  <p className="text-lg leading-relaxed text-white/80">
                    Campanhas otimizadas{' '}
                    <span className="font-bold text-gray-200">
                      com gestão completa de anúncios
                    </span>
                    , analytics em tempo real e controle total do seu
                    investimento.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {['Facebook Ads', 'Google Ads', 'Otimização Contínua'].map(
                      (tag, i) => (
                        <div
                          key={i}
                          className="rounded-full border border-gray-400/30 bg-gray-500/20 px-4 py-2 text-sm font-medium text-gray-300"
                        >
                          {tag}
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>

              {/* Feature 2 - Landing Pages de Conversão */}
              <div className="mx-auto max-w-4xl text-center">
                <div className="space-y-6">
                  <div className="flex items-center justify-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gray-600 to-gray-800 text-xl font-bold text-white">
                      2
                    </div>
                    <h4 className="text-2xl font-bold text-white md:text-3xl">
                      Landing Pages de Conversão
                    </h4>
                  </div>
                  <p className="text-lg leading-relaxed text-white/80">
                    Páginas de alta conversão{' '}
                    <span className="font-bold text-gray-200">
                      totalmente otimizadas
                    </span>
                    e integradas com sistemas de captura e automação.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {[
                      'Design Profissional',
                      'A/B Testing',
                      'Automação Completa',
                    ].map((tag, i) => (
                      <div
                        key={i}
                        className="rounded-full border border-gray-400/30 bg-gray-500/20 px-4 py-2 text-sm font-medium text-gray-300"
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section Ultra-Modern */}
        <section className="relative overflow-hidden py-20">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-slate-900/90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-600/10 via-transparent to-transparent" />

          <div className="container relative z-10 mx-auto px-4">
            {/* Section Header */}
            <div className="mb-16 space-y-6 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-sm">
                <Users className="h-5 w-5 text-gray-300" />
                <span className="font-semibold text-white/90">Depoimentos</span>
              </div>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                  Resultados REAIS de quem
                </span>
                <br />
                <span className="text-white">FATUROU com nosso marketing</span>
              </h2>

              <div className="mx-auto max-w-2xl rounded-xl border border-gray-500/20 bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-4 backdrop-blur-sm">
                <p className="font-semibold text-white">
                  💰 <span className="text-gray-200">VENDAS GERADAS:</span> R$
                  2.347.832 em 12 meses
                </p>
              </div>
            </div>

            {/* Testimonials Grid */}
            <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-2">
              {[
                {
                  name: 'Carlos Silva',
                  role: 'E-commerce',
                  company: 'R$ 47K/mês em vendas',
                  quote:
                    'EM 30 DIAS aumentei minhas vendas de R$ 3K para R$ 47.000/mês! A MATRA revolucionou meu marketing digital. ROI de 1.500% no primeiro mês!',
                  gradient: 'from-gray-500/20 to-gray-600/20',
                  avatar: 'C',
                },
                {
                  name: 'Marina Costa',
                  role: 'Consultora',
                  company: 'R$ 23K/mês recorrente',
                  quote:
                    'Não acreditava que fosse TÃO EFICAZ! Minhas campanhas passaram a converter 15x mais. ROI de 800% no primeiro mês. A MATRA transformou meu negócio!',
                  gradient: 'from-gray-600/20 to-gray-700/20',
                  avatar: 'M',
                },
                {
                  name: 'Roberto Santos',
                  role: 'Empresário',
                  company: 'R$ 89K/mês com 3 negócios',
                  quote:
                    'ESTRATÉGIA EXPLOSIVA! Aumentei o faturamento de 3 negócios usando MATRA e hoje faturo R$ 89K/mês. Deixei meu emprego e agora trabalho de casa. Minha família não acredita na transformação!',
                  gradient: 'from-gray-400/20 to-gray-600/20',
                  avatar: 'R',
                },
                {
                  name: 'Juliana Lima',
                  role: 'Empreendedora',
                  company: 'R$ 156K/mês NET',
                  quote:
                    'IMPRESSIONANTE! Meu negócio com marketing da MATRA fatura R$ 156K/mês LÍQUIDO. Comprei minha casa própria e carro do ano. A MATRA é a MELHOR decisão que já tomei!',
                  gradient: 'from-gray-700/20 to-gray-800/20',
                  avatar: 'J',
                },
              ].map((testimonial, i) => (
                <div
                  key={i}
                  className="group transition-all duration-500 hover:scale-[1.02]"
                >
                  <div
                    className={`relative bg-gradient-to-br ${testimonial.gradient} rounded-2xl border border-white/10 p-8 backdrop-blur-sm transition-colors hover:border-white/20`}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-white/5" />

                    <div className="relative">
                      {/* Stars */}
                      <div className="mb-6 flex gap-1">
                        {[1, 2, 3, 4, 5].map(star => (
                          <Star
                            key={star}
                            className="h-5 w-5 fill-gray-300 text-gray-300"
                          />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="relative mb-8 text-lg leading-relaxed text-white/90">
                        <span className="absolute -left-2 -top-2 text-4xl text-white/20">
                          &ldquo;
                        </span>
                        {testimonial.quote}
                      </p>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gray-500 to-gray-700 text-xl font-bold text-white">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white">
                            {testimonial.name}
                          </h4>
                          <p className="text-white/70">{testimonial.role}</p>
                          <p className="text-sm text-white/50">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Value Proposition */}
            <div className="space-y-8 text-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold md:text-5xl">
                  <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                    A ÚNICA agência brasileira
                  </span>
                  <br />
                  <span className="text-xl text-white md:text-3xl">
                    com PREÇO JUSTO e resultados ENTERPRISE
                  </span>
                </h3>

                <p className="mx-auto max-w-4xl text-xl leading-relaxed text-white/80">
                  Com a MATRA você vai{' '}
                  <span className="font-bold text-gray-200">
                    multiplicar suas vendas profissionalmente
                  </span>
                  , automatizar campanhas, escalar sem limites e{' '}
                  <span className="font-bold text-white">
                    aumentar seu faturamento
                  </span>{' '}
                  exponencialmente.
                </p>

                <p className="mx-auto max-w-3xl text-lg text-white/70">
                  Além de{' '}
                  <span className="font-bold text-gray-200">
                    TRANSFORMAR SEU NEGÓCIO EM MÁQUINA DE VENDAS
                  </span>{' '}
                  com estratégias comprovadas!
                </p>
              </div>

              {/* Benefits Comparison - Modern Style */}
              <div className="mx-auto max-w-6xl space-y-8">
                {/* Problems (What you WON'T have) */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {[
                    'Não perderá mais dinheiro com anúncios que não convertem',
                    'Não ficará mais perdido sem saber onde investir',
                  ].map((problem, i) => (
                    <div
                      key={i}
                      className="group transition-all duration-300 hover:scale-105"
                    >
                      <div className="rounded-xl border border-gray-400/20 bg-gradient-to-r from-gray-600/10 to-gray-700/10 p-6 backdrop-blur-sm hover:border-gray-400/40">
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-gray-500/20 p-3">
                            <CheckCircle className="h-6 w-6 rotate-45 text-gray-400" />
                          </div>
                          <p className="font-semibold text-white">{problem}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Solutions (What you WILL have) */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {[
                    'Terá suas vendas aumentando em dias, não meses',
                    'Poderá focar no seu produto, não no marketing',
                    'Poderá escalar automaticamente conforme cresce',
                  ].map((solution, i) => (
                    <div
                      key={i}
                      className="group transition-all duration-300 hover:scale-105"
                    >
                      <div className="rounded-xl border border-gray-400/20 bg-gradient-to-br from-gray-500/10 to-gray-600/10 p-6 backdrop-blur-sm hover:border-gray-400/40">
                        <div className="mb-3 flex items-center gap-4">
                          <div className="rounded-full bg-gray-500/20 p-3">
                            <CheckCircle className="h-6 w-6 text-gray-300" />
                          </div>
                        </div>
                        <p className="font-semibold text-white">{solution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Final CTA */}
              <div className="space-y-6">
                <p className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
                  Esse é o jeito mais INTELIGENTE e RÁPIDO!
                </p>

                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <div className="group relative">
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-gray-500 to-gray-700 opacity-75 blur transition-opacity group-hover:opacity-100" />
                    <LeadFormButton title="COMEÇAR AGORA" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Ultra-Modern */}
        <footer className="relative overflow-hidden py-12">
          <div className="absolute inset-0 bg-gradient-to-t from-black to-slate-900" />
          <div className="container relative z-10 mx-auto px-4">
            <div className="space-y-8 text-center">
              <div className="flex items-center justify-center gap-3">
                <div className="rounded-xl bg-gradient-to-br from-gray-500 to-gray-700 p-3 shadow-lg">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="bg-gradient-to-r from-white via-gray-200 to-gray-100 bg-clip-text text-3xl font-bold text-transparent">
                  MATRA TECNOLOGIA
                </h3>
              </div>

              {/* CTA Final Footer */}
              <div className="mx-auto max-w-4xl rounded-2xl border border-gray-500/20 bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-8 backdrop-blur-sm">
                <div className="space-y-6 text-center">
                  <h4 className="text-2xl font-bold text-white md:text-3xl">
                    🚨 ÚLTIMA CHANCE:{' '}
                    <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                      67% OFF
                    </span>{' '}
                    expira em:
                  </h4>

                  <CountdownTimer />

                  <div className="group relative inline-block">
                    <div className="absolute inset-0 animate-pulse rounded-lg bg-gradient-to-r from-white via-gray-200 to-gray-300 opacity-40 blur-sm transition-opacity group-hover:opacity-60" />
                    <LeadFormButton title="🔥 GARANTIR MINHA VAGA AGORA" />
                  </div>

                  <p className="text-sm text-gray-300">
                    ⚡ <span className="font-bold text-white">47 pessoas</span>{' '}
                    visualizando esta oferta agora | 🎯 Apenas{' '}
                    <span className="font-bold text-white">12 vagas</span>{' '}
                    restantes hoje
                  </p>
                </div>
              </div>

              <p className="mx-auto max-w-2xl text-white/60">
                Mais de 487 empresários já transformaram seus negócios com
                marketing digital.
                <span className="font-bold text-white">
                  {' '}
                  Você será o próximo?
                </span>
              </p>

              <div className="border-t border-white/10 pt-8 text-sm text-white/40">
                <p>
                  &copy; 2025 MATRA TECNOLOGIA. Todos os direitos reservados. |
                  <span className="text-gray-300">
                    {' '}
                    ✅ Garantia incondicional | 🔒 Pagamento seguro
                  </span>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
      <FacebookPixel />
      <CreateSpotLeadSheet />
    </>
  )
}
