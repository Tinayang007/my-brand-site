type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};

function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-16 border-b border-border/50 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
        {subtitle && (
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">{subtitle}</p>
        )}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

function CardPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex min-h-40 items-center justify-center rounded-xl border-2 border-dashed border-border bg-muted/40 px-4 py-8 text-center text-sm text-muted-foreground">
      {label}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Hero / 个人简介 */}
      <section id="hero" className="scroll-mt-16">
        <div className="mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
          <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-medium text-primary">
            个人品牌网站
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
            MyBrand<span className="text-primary">Site</span>
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground sm:text-lg">
            展示技能、服务、项目案例、图书与客户评价，提供 AI 客服与博客。
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#services"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              了解服务
            </a>
            <a
              href="#cases"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              查看案例
            </a>
          </div>
        </div>
      </section>

      {/* 技能 */}
      <Section id="skills" title="技能" subtitle="擅长领域与技术栈">
        <CardPlaceholder label="技能标签云 / 技能分类占位" />
      </Section>

      {/* 服务 */}
      <Section id="services" title="服务" subtitle="可提供的服务项目">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <CardPlaceholder label="服务卡片 1" />
          <CardPlaceholder label="服务卡片 2" />
          <CardPlaceholder label="服务卡片 3" />
        </div>
      </Section>

      {/* 项目案例 */}
      <Section id="cases" title="项目案例" subtitle="精选项目截图（public/cases/）">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <CardPlaceholder label="案例卡片 1" />
          <CardPlaceholder label="案例卡片 2" />
          <CardPlaceholder label="案例卡片 3" />
        </div>
      </Section>

      {/* 图书 */}
      <Section id="books" title="图书" subtitle="出版图书封面（public/books/）">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <CardPlaceholder label="图书封面 1" />
          <CardPlaceholder label="图书封面 2" />
          <CardPlaceholder label="图书封面 3" />
        </div>
      </Section>

      {/* 客户评价 */}
      <Section id="reviews" title="客户评价" subtitle="来自 Supabase reviews 表（approved = true）">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <CardPlaceholder label="评价卡片 1" />
          <CardPlaceholder label="评价卡片 2" />
          <CardPlaceholder label="评价卡片 3" />
        </div>
      </Section>

      {/* AI 客服 */}
      <Section id="chat" title="AI 客服" subtitle="基于 DeepSeek 的智能问答">
        <CardPlaceholder label="AI 客服对话窗口占位" />
      </Section>

      {/* 博客 */}
      <Section id="blog" title="博客" subtitle="MDX 博客列表（搜索 + 分页，public/blogs/）">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <CardPlaceholder label="博客文章卡片 1" />
          <CardPlaceholder label="博客文章卡片 2" />
          <CardPlaceholder label="博客文章卡片 3" />
        </div>
      </Section>

      {/* 页脚 */}
      <footer id="footer" className="py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-4 text-sm text-muted-foreground sm:px-6">
          <p>© 2026 MyBrandSite · 我的个人品牌站</p>
          <p>联系方式 / 友情链接占位</p>
        </div>
      </footer>
    </div>
  );
}
