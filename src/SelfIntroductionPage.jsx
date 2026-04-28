import React from "react";

const links = {
  github: "https://github.com/mkdworkkou-hue",
  contact: "#contact",
  portfolio: "/portfolio_fresh.pdf",
};

const achievements = [
  {
    title: "Discord勤怠管理システム",
    summary:
      "Discordのスラッシュコマンドから出退勤を記録し、AWS Lambda / API Gateway / DynamoDB / Google Apps Script と連携して月次集計を行う仕組みを構築。",
    impact:
      "日々の勤怠記録と月次集計を一つの流れにまとめ、手作業の確認・転記負担を減らせる構成にしました。",
    tags: ["Discord", "AWS Lambda", "DynamoDB", "GAS"],
  },
  {
    title: "請求書費用登録システム",
    summary:
      "Googleフォームとスプレッドシートを用いて請求書情報を登録管理し、freee連携を見据えたデータ整形・送信管理の仕組みを設計・実装。",
    impact:
      "入力から管理までの流れを整理し、後続の会計処理に使いやすいデータ形式を意識して設計しました。",
    tags: ["Google Forms", "Spreadsheet", "GAS", "freee連携"],
  },
  {
    title: "REINSスクレイピング",
    summary:
      "Seleniumを用いて検索結果ページと詳細ページを巡回し、HTML保存・ページ送り・エラーリトライを含むデータ取得処理を構築。",
    impact:
      "取得漏れや途中停止を防ぐため、保存処理とリトライを組み込み、安定して確認できる形にしました。",
    tags: ["Python", "Selenium", "HTML保存", "Retry"],
  },
  {
    title: "Excel / CSVデータ整形",
    summary:
      "pandas、Excel VBA、Google Apps Scriptを用いて、手作業の集計・転記・整形作業を自動化。",
    impact:
      "繰り返し発生する整形作業を自動化し、確認しやすいデータへそろえることで作業時間の削減につなげました。",
    tags: ["pandas", "Excel VBA", "CSV", "GAS"],
  },
];

const skillGroups = [
  {
    title: "Automation",
    skills: ["Python", "UiPath", "Google Apps Script", "Excel VBA"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Data",
    skills: ["pandas", "SQL", "CSV", "Excel"],
  },
  {
    title: "Cloud & Tools",
    skills: ["AWS Lambda", "API Gateway", "DynamoDB", "GitHub", "ChatGPT", "Codex"],
  },
];

const strengths = [
  "業務理解から自動化までつなげる力",
  "運用を見据えた設計とドキュメント整備",
  "早いキャッチアップ",
  "集中して改善を進める力",
];

const focusAreas = ["業務改善", "自動化", "データ処理", "運用改善", "社内ツール開発"];

function Section({ id, eyebrow, title, description, children }) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="mb-10 max-w-3xl">
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-600">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
            {description}
          </p>
        )}
      </div>
      {children}
    </section>
  );
}

function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm shadow-slate-200/70 ${className}`}
    >
      {children}
    </div>
  );
}

function ButtonLink({ href, children, variant = "primary" }) {
  const styles = {
    primary:
      "border-blue-700 bg-blue-700 text-white shadow-md shadow-blue-200/70 hover:bg-blue-800 hover:shadow-lg hover:shadow-blue-200",
    secondary:
      "border-slate-200 bg-white/80 text-slate-800 shadow-sm shadow-slate-200/60 hover:border-blue-300 hover:bg-white hover:text-blue-700",
    portfolio:
      "border-[#4a90e2] bg-[#4a90e2] text-white shadow-lg shadow-blue-200/80 hover:border-[#357abd] hover:bg-[#357abd] hover:shadow-xl hover:shadow-blue-200",
  }[variant];

  return (
    <a
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-xl border px-5 py-3 text-sm font-semibold transition duration-200 ${styles}`}
    >
      {children}
    </a>
  );
}

function Tag({ children }) {
  return (
    <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 shadow-sm shadow-blue-100/50">
      {children}
    </span>
  );
}

export default function SelfIntroductionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50 text-slate-700">
      <section className="relative overflow-hidden border-b border-slate-200/70">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(74,144,226,0.18),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.12),transparent_28%)]" />
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-xs font-semibold text-blue-700 shadow-sm shadow-blue-100/70 backdrop-blur">
              Automation Portfolio
            </div>
            <p className="mt-6 text-sm font-semibold text-blue-700">
              業務自動化・ITサポート / Python・GAS・UiPath
            </p>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
              手作業を減らし、
              <span className="bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
                業務を仕組みで回す
              </span>
              自動化エンジニア
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Python、Google Apps Script、UiPath、Excel VBAを用いて、業務フローの整理から自動化・運用改善まで一貫して対応します。現場で使い続けられる仕組みづくりと、ドキュメント整備を重視しています。
            </p>
            <p className="mt-3 max-w-3xl text-base leading-8 text-slate-600">
              HTML/CSS/JavaScriptでのサイト更新・改修にも対応可能です。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <p className="w-full text-sm leading-7 text-slate-600">
                実務での設計・構成・工夫点をPDFにまとめています。
              </p>
              <ButtonLink href={links.portfolio} variant="portfolio">
                ポートフォリオPDF
              </ButtonLink>
              <ButtonLink href="#works" variant="secondary">
                実績を見る
              </ButtonLink>
              <ButtonLink href="#skills" variant="secondary">
                スキルを見る
              </ButtonLink>
              <ButtonLink href={links.github} variant="secondary">
                GitHubを見る
              </ButtonLink>
            </div>
          </div>

          <Card className="bg-white/75 shadow-xl shadow-blue-100/60 backdrop-blur lg:ml-auto lg:max-w-md">
            <p className="text-sm font-semibold text-slate-500">Available for</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950">
              採用・業務委託向けポートフォリオ
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              PDFでは、制作物の概要・使用技術・工夫した点を採用担当者や依頼者向けにまとめています。
              実績の全体像を短時間で確認できます。
            </p>
            <div className="mt-6 grid gap-3">
              {focusAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-white/80 px-4 py-3 shadow-sm shadow-slate-100"
                >
                  <span className="font-semibold text-slate-800">{area}</span>
                  <span className="text-sm text-blue-700">対応可</span>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <p className="text-sm leading-7 text-slate-600 sm:col-span-2 lg:col-span-1">
                実務での設計・構成・工夫点をPDFにまとめています。
              </p>
              <ButtonLink href={links.portfolio} variant="portfolio">
                ポートフォリオPDF
              </ButtonLink>
              <ButtonLink href={links.contact} variant="secondary">
                問い合わせ
              </ButtonLink>
            </div>
          </Card>
        </div>
      </section>

      <Section
        id="works"
        eyebrow="Works"
        title="実績"
        description="現場の手作業、転記、集計、確認作業を減らすための自動化・業務改善に取り組んできました。"
      >
        <div className="grid gap-5 md:grid-cols-2">
          {achievements.map((item) => (
            <Card
              key={item.title}
              className="flex h-full flex-col transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/70"
            >
              <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
              <p className="mt-4 flex-1 text-base leading-8 text-slate-600">
                {item.summary}
              </p>
              <p className="mt-4 rounded-lg border border-blue-100 bg-blue-50 px-4 py-3 text-sm leading-7 text-slate-700">
                <span className="font-semibold text-blue-700">成果：</span>
                {item.impact}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="skills"
        eyebrow="Skills"
        title="スキル"
        description="自動化、データ処理、社内ツール開発に必要な技術を組み合わせ、業務に合わせた形で実装します。"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <Card key={group.title}>
              <h3 className="text-lg font-bold text-slate-950">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Strengths"
        title="強み"
        description="作って終わりではなく、現場で使い続けられる状態まで整えることを大切にしています。"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {strengths.map((item) => (
            <Card key={item}>
              <p className="text-base font-semibold leading-7 text-slate-900">{item}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="contact"
        eyebrow="Contact"
        title="問い合わせ・関連リンク"
        description="採用、業務委託、スポットでの業務改善相談などに対応できます。リンク先は運用に合わせて差し替え可能です。"
      >
        <Card className="bg-gradient-to-br from-white to-blue-50/70 p-8 shadow-lg shadow-blue-100/70">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                Next Step
              </p>
              <h3 className="mt-3 text-2xl font-bold text-slate-950">
                実績PDFとGitHubから詳細を確認できます
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                採用、業務委託、スポットでの業務改善相談など、用途に合わせてご連絡ください。
              </p>
              <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">
                採用・業務委託いずれも対応可能です。お気軽にご連絡ください。
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:min-w-[520px]">
              <ButtonLink href={links.github} variant="secondary">
                GitHubを見る
              </ButtonLink>
              <ButtonLink href={links.portfolio} variant="portfolio">
                ポートフォリオPDF
              </ButtonLink>
              <ButtonLink href="mailto:mkdtnsy0604@gmail.com" variant="secondary">
                メールで問い合わせ
              </ButtonLink>
            </div>
          </div>
        </Card>
      </Section>
    </main>
  );
}
