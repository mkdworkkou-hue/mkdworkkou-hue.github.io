import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Mail, ExternalLink } from "lucide-react";

/**
 * UiPath/RPA Portfolio - Home Page
 * Design: Business-focused Minimalism
 * - White background with deep blue accents
 * - Clear hierarchy and ample whitespace
 * - Professional, trustworthy aesthetic
 * - Optimized for ITに詳しくない発注者 (non-technical clients)
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-50">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">RPA</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900">UiPath/RPA ポートフォリオ</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
              できること
            </a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">
              実績
            </a>
            <a href="#process" className="text-gray-700 hover:text-blue-600 transition-colors">
              進め方
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              お問い合わせ
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url(/images/hero-background.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              UiPathで業務を
              <br />
              <span className="text-blue-600">自動化します</span>
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              RPA・UiPathを中心に、業務自動化・Webスクレイピング・データ処理を行っています。
              既存フローの改修やエラー対応も対応可能です。
              実案件だけでなく、練習・検証案件も実力の証明として取り組んでいます。
            </p>
            <div className="flex gap-4">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                お問い合わせ
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-6 text-base"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                詳しく見る
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">できること</h3>
            <div className="w-16 h-1 bg-blue-600" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "UiPathによる業務自動化",
                description:
                  "ルーティン業務を自動化し、作業時間を削減。複雑なワークフローにも対応します。",
                icon: "⚙️",
              },
              {
                title: "Webスクレイピング",
                description:
                  "Webサイトから必要なデータを自動抽出。一覧ページから詳細ページまで対応可能です。",
                icon: "🌐",
              },
              {
                title: "Excel / CSV 出力",
                description:
                  "スクレイピングや自動化で取得したデータを、ExcelやCSV形式で出力します。",
                icon: "📊",
              },
              {
                title: "既存フローの修正・改善",
                description:
                  "既に構築されたフローの改修や最適化。新機能追加や性能向上に対応します。",
                icon: "🔧",
              },
              {
                title: "エラー調査・安定化対応",
                description:
                  "フローが停止する原因を調査し、安定的に動作するように改善します。",
                icon: "🐛",
              },
              {
                title: "その他RPA関連業務",
                description:
                  "上記以外のRPA・自動化関連のご相談もお気軽にどうぞ。",
                icon: "💼",
              },
            ].map((service, idx) => (
              <Card
                key={idx}
                className="p-6 border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24">
        <div className="container">
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">実績・練習例</h3>
            <div className="w-16 h-1 bg-blue-600" />
            <p className="text-gray-600 mt-4">
              実案件だけでなく、練習・検証案件も実力の証明として取り組んでいます。
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "REINS物件情報スクレイピング",
                description:
                  "不動産情報サイトREINSから物件データを自動抽出するプロジェクト。条件分岐による絞り込み、CSV出力、途中から再開する機能を実装。",
                features: ["条件分岐", "CSV出力", "途中再開対応", "エラーハンドリング"],
                type: "実績例",
              },
              {
                title: "Books to Scrape 練習サイト",
                description:
                  "スクレイピング学習用サイト「Books to Scrape」を対象とした練習プロジェクト。一覧ページから詳細ページへの遷移、データ整形を実装。",
                features: ["ページネーション", "詳細ページ遷移", "データ整形", "構造化出力"],
                type: "練習例",
              },
            ].map((project, idx) => (
              <Card key={idx} className="p-8 border-l-4 border-l-blue-600">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-2xl font-semibold text-gray-900">{project.title}</h4>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded">
                    {project.type}
                  </span>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature, fidx) => (
                    <div
                      key={fidx}
                      className="flex items-center gap-2 px-3 py-2 bg-gray-50 border border-gray-200 rounded text-sm text-gray-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      {feature}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">仕事の進め方</h3>
            <div className="w-16 h-1 bg-blue-600" />
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "要件確認",
                description: "お客様のご要望を詳しくお聞きして、実現可能性を確認します。",
              },
              {
                step: "02",
                title: "サンプル作成",
                description: "簡易版のフローを作成して、動作確認とご提案をさせていただきます。",
              },
              {
                step: "03",
                title: "実装",
                description: "確認いただいた内容に基づいて、本格的なフロー開発を進めます。",
              },
              {
                step: "04",
                title: "修正対応",
                description: "テスト実施後、必要な修正やチューニングを行います。",
              },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <Card className="p-6 h-full">
                  <div className="text-4xl font-bold text-blue-600 mb-3">{item.step}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                </Card>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-blue-600 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container max-w-2xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">お問い合わせ</h3>
            <p className="text-gray-700 text-lg">
              RPA・UiPath関連のご依頼やご相談は、クラウドワークスのプロフィールからご連絡ください。
            </p>
          </div>

          <Card className="p-8 bg-blue-50 border-blue-200">
            <div className="flex items-start gap-4 mb-6">
              <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">クラウドワークスでのご連絡</h4>
                <p className="text-gray-700">
                  クラウドワークスのプロフィールページからメッセージをお送りください。
                  <br />
                  詳細なご要望や質問にも、丁寧にお応えいたします。
                </p>
              </div>
            </div>
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-base"
              onClick={() => {
                window.open("https://crowdworks.jp", "_blank");
              }}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              クラウドワークスを開く
            </Button>
          </Card>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">ご依頼の際のポイント</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>現在の業務フローや課題について、できるだけ詳しくお知らせください</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>対象となるWebサイトやシステムの情報があると、より正確なお見積もりができます</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>納期や予算のご要望があれば、事前にお知らせください</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 py-8">
        <div className="container text-center text-gray-600 text-sm">
          <p>UiPath/RPA ポートフォリオ | クラウドワークス専用</p>
          <p className="mt-2">
            © 2024 UiPath/RPA Services. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
