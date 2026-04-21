"use client";

/**
 * Landing — /fundadora (v4)
 *
 * Paleta rigorosamente AZUL + BRANCO (Auton Health DS).
 * Cores aplicadas via hex diretos (fallback seguro, independente de CSS vars).
 *
 * Paleta oficial:
 *  #EBF3F6 — background global
 *  #D6E8F0 — seções destacadas
 *  #FFFFFF — cards
 *  #1e3a5f — Auton Blue (CTAs, ícones, destaques)
 *  #2d4a6f — hover
 *  #4FA2FF — azul médio (acentos suaves)
 *  #C4D9E5 — bordas
 *  #1A1A1A — texto primary
 *  #5B5B5B — texto secondary
 *  #7A7A7A — texto tertiary
 */

import { useState } from "react";
import {
  Calendar,
  Video,
  FileText,
  Brain,
  FlaskConical,
  ClipboardList,
  Smartphone,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Lock,
  Play,
  Activity,
  Sparkles,
  Instagram,
  Linkedin,
  Youtube,
  Menu as MenuIcon,
  X,
  AlertTriangle,
  Microscope,
  HeartPulse,
  Puzzle,
  GraduationCap,
  Briefcase,
  Building2,
  Network,
  MessageSquare,
  Layers,
  Droplets,
  Utensils,
} from "lucide-react";

// Paleta
const C = {
  bg: "#EBF3F6",
  bg2: "#D6E8F0",
  card: "#FFFFFF",
  primary: "#1e3a5f",
  primaryHover: "#2d4a6f",
  primarySoft: "#E0ECF5", // azul-claríssimo pra ícones em círculo
  accent: "#4FA2FF",
  border: "#C4D9E5",
  text: "#1A1A1A",
  text2: "#5B5B5B",
  text3: "#7A7A7A",
  error: "#EF4444",
};

// ============================================================
// NAV
// ============================================================

const NAV_LINKS = [
  { label: "Para quem", href: "#para-quem" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Comunidade", href: "#comunidade" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Planos", href: "#planos" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b"
      style={{ background: "rgba(255,255,255,0.92)", borderColor: C.border }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-bold text-xl" style={{ color: C.primary }}>
          Auton
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: C.text2 }}
            >
              {l.label}
            </a>
          ))}
          <button
            className="px-4 py-2 rounded-[14px] text-white text-sm font-semibold transition-colors"
            style={{ background: C.primary }}
            onMouseEnter={(e) => (e.currentTarget.style.background = C.primaryHover)}
            onMouseLeave={(e) => (e.currentTarget.style.background = C.primary)}
          >
            Começar agora
          </button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          style={{ color: C.text }}
        >
          {open ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden border-t px-6 py-4"
          style={{ background: C.card, borderColor: C.border }}
        >
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium"
                style={{ color: C.text }}
              >
                {l.label}
              </a>
            ))}
            <button
              className="w-full py-3 rounded-[14px] text-white font-semibold"
              style={{ background: C.primary }}
            >
              Começar agora
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

// ============================================================
// BUTTONS
// ============================================================

function PrimaryBtn({
  children,
  big = false,
  onWhiteBg = false,
}: {
  children: React.ReactNode;
  big?: boolean;
  onWhiteBg?: boolean;
}) {
  const bg = onWhiteBg ? "#FFFFFF" : C.primary;
  const color = onWhiteBg ? C.primary : "#FFFFFF";
  return (
    <button
      className={`${big ? "px-8 py-5 text-base" : "px-6 py-3 text-sm"} rounded-[14px] font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition-all hover:shadow-[0_18px_44px_rgba(0,0,0,0.18)] inline-flex items-center gap-2`}
      style={{ background: bg, color }}
    >
      {children}
    </button>
  );
}

function OutlineBtn({
  children,
  big = false,
  onDarkBg = false,
}: {
  children: React.ReactNode;
  big?: boolean;
  onDarkBg?: boolean;
}) {
  const border = onDarkBg ? "rgba(255,255,255,0.4)" : C.primary;
  const color = onDarkBg ? "#FFFFFF" : C.primary;
  return (
    <button
      className={`${big ? "px-8 py-5 text-base" : "px-6 py-3 text-sm"} rounded-[14px] font-semibold border-2 transition-all inline-flex items-center gap-2 hover:opacity-80`}
      style={{ borderColor: border, color, background: "transparent" }}
    >
      {children}
    </button>
  );
}

// ============================================================
// SECTION TITLE
// ============================================================

const SectionTitle = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  onDark = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  onDark?: boolean;
}) => (
  <div className={`max-w-3xl mb-12 ${align === "center" ? "mx-auto text-center" : ""}`}>
    {eyebrow && (
      <p
        className="text-xs font-semibold uppercase mb-4"
        style={{
          letterSpacing: "0.18em",
          color: onDark ? "rgba(255,255,255,0.7)" : C.primary,
        }}
      >
        {eyebrow}
      </p>
    )}
    <h2
      className="text-3xl md:text-4xl font-bold leading-tight"
      style={{ color: onDark ? "#FFFFFF" : C.text }}
    >
      {title}
    </h2>
    {subtitle && (
      <p
        className="text-lg mt-4 leading-relaxed"
        style={{ color: onDark ? "rgba(255,255,255,0.8)" : C.text2 }}
      >
        {subtitle}
      </p>
    )}
  </div>
);

// ============================================================
// PAGE
// ============================================================

export default function FundadoraPage() {
  return (
    <main id="top" className="min-h-screen" style={{ background: C.bg, color: C.text }}>
      <Nav />

      {/* ========================================================
          HERO
      ======================================================== */}
      <section
        className="relative min-h-screen flex items-center pt-24 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${C.primary} 0%, ${C.primaryHover} 50%, #3a5e88 100%)`,
        }}
      >
        {/* Pattern sutil pra dar textura */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(79,162,255,0.25) 0%, transparent 50%)",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div
            className="inline-block mb-6 px-4 py-1.5 rounded-full text-xs font-semibold"
            style={{
              letterSpacing: "0.15em",
              background: "rgba(255,255,255,0.12)",
              color: "#FFFFFF",
              border: "1px solid rgba(255,255,255,0.25)",
              backdropFilter: "blur(8px)",
            }}
          >
            FEITO POR PROFISSIONAIS, PARA PROFISSIONAIS
          </div>

          <h1
            className="text-4xl md:text-6xl font-bold leading-[1.1] max-w-4xl mb-6 tracking-tight"
            style={{ color: "#FFFFFF" }}
          >
            A primeira IA focada 100% em ajudar profissionais da saúde a
            identificar e tratar a <span style={{ color: "#A8D0F0" }}>causa raiz</span>.
          </h1>

          <p
            className="text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            Criada por profissionais da saúde, para profissionais da saúde.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <PrimaryBtn big onWhiteBg>
              Começar agora por R$ 997/mês
              <ArrowRight className="w-5 h-5" />
            </PrimaryBtn>
            <OutlineBtn big onDarkBg>
              Conhecer a plataforma
            </OutlineBtn>
          </div>

          <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
            7 dias de garantia incondicional · sem fidelidade
          </p>
        </div>
      </section>

      {/* ========================================================
          PROPÓSITO
      ======================================================== */}
      <section className="py-24" style={{ background: C.card }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p
            className="text-xs font-semibold uppercase mb-6"
            style={{ letterSpacing: "0.18em", color: C.primary }}
          >
            Nosso propósito
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold leading-tight mb-8"
            style={{ color: C.text }}
          >
            Tornar o mundo um lugar mais saudável.
          </h2>
          <div className="space-y-5 text-lg md:text-xl leading-relaxed" style={{ color: C.text2 }}>
            <p>
              Chega de <strong style={{ color: C.text }}>tentativa e erro disfarçada de ciência</strong>.
            </p>
            <p>Chega de tratar sintomas e ignorar a causa.</p>
            <p className="pt-4">
              A Auton nasceu para dar ao profissional de saúde a estrutura que a medicina moderna
              nunca entregou: uma forma de{" "}
              <strong style={{ color: C.primary }}>pensar o paciente inteiro, em tempo real, com método</strong>{" "}
              — e não com intuição solta.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================
          PARA QUEM
      ======================================================== */}
      <section id="para-quem" className="py-24" style={{ background: C.bg }}>
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            eyebrow="Para quem"
            title="Auton com você em qualquer momento da sua carreira."
            subtitle="Estudante, recém-formado, autônomo ou dono de clínica — a Auton se adapta ao seu momento."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                icon: GraduationCap,
                label: "Sou estudante",
                desc: "Nossos agentes de IA combinam mais de 50 anos de experiência e prática clínica — e serão o seu companheiro nessa jornada.",
              },
              {
                icon: Sparkles,
                label: "Sou recém-formado",
                desc: "Nossa rede de apoio multidisciplinar, aliada a uma comunidade ativa, está aqui pra te ajudar a começar firme.",
              },
              {
                icon: Briefcase,
                label: "Sou autônomo",
                desc: "Nossa estrutura te ajuda a organizar o consultório e te prepara pro crescimento — sem virar administrador.",
              },
              {
                icon: Building2,
                label: "Tenho uma clínica",
                desc: "Nossa estrutura te ajuda a organizar e escalar seus negócios, focando no que realmente importa: o paciente.",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="p-6 rounded-[24px] transition-all hover:-translate-y-1"
                style={{
                  background: C.card,
                  border: `1px solid ${C.border}`,
                  boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-[14px] flex items-center justify-center mb-4"
                  style={{ background: C.primarySoft }}
                >
                  <p.icon className="w-6 h-6" style={{ color: C.primary }} />
                </div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: C.text }}>
                  {p.label}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: C.text2 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          PROBLEMAS
      ======================================================== */}
      <section className="py-24" style={{ background: C.bg2 }}>
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            eyebrow="O dia a dia da prática clínica"
            title="Te ajudamos com problemas que ninguém resolve."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              "Dois pacientes com o mesmo diagnóstico evoluem de forma totalmente diferente.",
              "Exames “dentro da referência” não explicam os sintomas reais.",
              "Falta tempo clínico para análise causal profunda.",
              "Protocolos funcionam em alguns casos... e falham na maioria.",
              "A consulta vira tentativa e erro disfarçada de ciência.",
              "E quando o caso é complexo... tudo depende da sua cabeça.",
            ].map((p, i) => (
              <div
                key={i}
                className="p-6 rounded-[24px] flex gap-4 items-start"
                style={{
                  background: C.card,
                  border: `1px solid ${C.border}`,
                  boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "rgba(239,68,68,0.1)" }}
                >
                  <AlertTriangle className="w-5 h-5" style={{ color: C.error }} />
                </div>
                <p className="leading-relaxed" style={{ color: C.text }}>
                  {p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          COMO RESOLVEMOS
      ======================================================== */}
      <section className="py-24" style={{ background: C.bg }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p
              className="text-xs font-semibold uppercase mb-4"
              style={{ letterSpacing: "0.18em", color: C.primary }}
            >
              Como resolvemos
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6" style={{ color: C.text }}>
              O problema não é falta de conhecimento.
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: C.text2 }}>
              O problema é que a saúde moderna nunca criou um sistema para integrar complexidade
              biológica e pensar a causa raiz em tempo real. A Auton faz exatamente isso.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            {[
              {
                icon: Layers,
                title: "Integra dados clínicos fragmentados",
                desc: "Anamnese, exames, histórico, estilo de vida — tudo em um só mapa clínico.",
              },
              {
                icon: Brain,
                title: "Estrutura o raciocínio clínico em tempo real",
                desc: "Durante a consulta, não horas depois no caderno em casa.",
              },
              {
                icon: Microscope,
                title: "Revela padrões fisiopatológicos invisíveis",
                desc: "Correlações entre sistemas que a análise tradicional perde.",
              },
              {
                icon: HeartPulse,
                title: "Constrói tratamentos personalizados da causa raiz",
                desc: "Sugestões terapêuticas que consideram o paciente inteiro.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-[24px]"
                style={{
                  background: C.card,
                  border: `1px solid ${C.border}`,
                  boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-[14px] flex items-center justify-center mb-4"
                  style={{ background: C.primarySoft }}
                >
                  <item.icon className="w-5 h-5" style={{ color: C.primary }} />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: C.text }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: C.text2 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <p
              className="text-center text-sm font-semibold uppercase mb-6"
              style={{ letterSpacing: "0.18em", color: C.text3 }}
            >
              Tudo isso aplicado a
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Doenças crônicas",
                "Distúrbios metabólicos",
                "Autoimunidade",
                "Saúde mental",
                "Sintomas do espectro autista (TEA)",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 text-sm font-medium rounded-full"
                  style={{
                    background: C.card,
                    border: `1px solid ${C.border}`,
                    color: C.text,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          TAG DE TRANSIÇÃO
      ======================================================== */}
      <section className="py-16" style={{ background: C.primary }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-4xl font-bold tracking-wide" style={{ color: "#FFFFFF" }}>
            DESENVOLVIDO POR PROFISSIONAIS,
            <br />
            PARA PROFISSIONAIS.
          </h2>
        </div>
      </section>

      {/* ========================================================
          8 CAPACIDADES
      ======================================================== */}
      <section id="solucoes" className="py-24" style={{ background: C.card }}>
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            eyebrow="Na prática"
            title="O que a Auton Health entrega no seu dia a dia."
            subtitle="Oito capacidades integradas que transformam sua forma de atender."
          />

          <div className="space-y-6 mt-12">
            {[
              {
                n: "01",
                icon: FlaskConical,
                title: "Análise integrativa de exames laboratoriais",
                bullets: [
                  "Correlação entre múltiplos biomarcadores (isolados e em conjunto)",
                  "Identificação de padrões ocultos (inflamação silenciosa, resistência imunológica, disfunções hormonais, eixos intestino-cérebro, mitocôndria)",
                  "Detecção de causas raiz que passariam despercebidas na análise tradicional",
                ],
              },
              {
                n: "02",
                icon: Brain,
                title: "Método ADS codificado (Análise → Diagnóstico → Solução)",
                bullets: [
                  "Anamnese integrativa estruturada (física, metabólica, emocional, comportamental)",
                  "Raciocínio clínico estruturado e replicável",
                  "Guias inteligentes que conduzem o raciocínio clínico",
                  "Padronização do pensamento integrativo sem engessar a consulta",
                  "Priorização do que tratar primeiro (ordem terapêutica correta)",
                ],
              },
              {
                n: "03",
                icon: Video,
                title: "Teleconsulta com IA para apoio à decisão clínica",
                bullets: [
                  "Teleconsulta integrada à Auton Health",
                  "O prontuário é preenchido automaticamente",
                  "Os agentes analisam dados em tempo real",
                  "Você foca onde realmente precisa",
                ],
              },
              {
                n: "04",
                icon: Sparkles,
                title: "Base de conhecimento aplicada (agentes integrativos)",
                bullets: [
                  "Digite sua pergunta e receba recomendações instantâneas e claras",
                  "Ajuda você a criar estratégias de atendimento em minutos",
                  "Protocolos atualizados com base em estudos de caso",
                ],
              },
              {
                n: "05",
                icon: ClipboardList,
                title: "Soluções terapêuticas personalizadas",
                bullets: [
                  "Protocolos com base em evidência científica, experiência clínica real e visão sistêmica do paciente",
                  "Sugestão de intervenções integradas",
                  "Construção de planos de tratamento da causa raiz",
                  "Sempre respeitando escopo legal, segurança e personalização",
                ],
              },
              {
                n: "06",
                icon: MessageSquare,
                title: "Comunidade fechada e exclusiva",
                bullets: [
                  "Tire dúvidas e compartilhe experiências com colegas integrativos",
                  "Acesso a casos clínicos discutidos por pares",
                  "Espaço seguro, sem ruído de redes abertas",
                ],
              },
              {
                n: "07",
                icon: Network,
                title: "Rede de apoio multidisciplinar",
                bullets: [
                  "Contrate colegas integrativos e amplie seus protocolos",
                  "Seja contratado e aumente sua receita",
                  "Encaminhamentos inteligentes com base no caso clínico",
                ],
              },
              {
                n: "08",
                icon: Calendar,
                title: "Controle da sua agenda",
                bullets: [
                  "Controle sua agenda e organize seus atendimentos",
                  "Notificações automáticas para o paciente",
                  "Visão consolidada do seu tempo clínico",
                ],
              },
            ].map((cap) => (
              <div
                key={cap.n}
                className="p-8 rounded-[24px] grid md:grid-cols-[auto_1fr] gap-6"
                style={{
                  background: C.bg,
                  border: `1px solid ${C.border}`,
                  boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
                }}
              >
                <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-3">
                  <span className="text-4xl font-bold" style={{ color: C.border }}>
                    {cap.n}
                  </span>
                  <div
                    className="w-12 h-12 rounded-[14px] flex items-center justify-center"
                    style={{ background: C.primarySoft }}
                  >
                    <cap.icon className="w-6 h-6" style={{ color: C.primary }} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4" style={{ color: C.text }}>
                    {cap.title}
                  </h3>
                  <ul className="space-y-2">
                    {cap.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 leading-relaxed"
                        style={{ color: C.text2 }}
                      >
                        <CheckCircle2
                          className="w-4 h-4 mt-1 shrink-0"
                          style={{ color: C.primary }}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          9 DOMÍNIOS CLÍNICOS
      ======================================================== */}
      <section id="sobre" className="py-24" style={{ background: C.bg2 }}>
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            eyebrow="Abordagem multidisciplinar integrada"
            title="Centenas de agentes de IA como uma equipe multidisciplinar invisível."
            subtitle="A Auton é composta por centenas de agentes especializados, organizados em camadas clínicas. Trabalham de forma orquestrada, disponíveis 24/7 — cada um responsável por uma parte do raciocínio integrativo."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12 max-w-4xl mx-auto">
            {[
              { icon: Activity, label: "Metabolismo" },
              { icon: Droplets, label: "Hormônios" },
              { icon: Brain, label: "Psiquiatria integrativa" },
              { icon: HeartPulse, label: "Saúde mental" },
              { icon: Puzzle, label: "Neurodivergência" },
              { icon: AlertTriangle, label: "Inflamação crônica" },
              { icon: ShieldCheck, label: "Autoimunidade" },
              { icon: Utensils, label: "Saúde intestinal" },
              { icon: TrendingUp, label: "Longevidade e performance" },
            ].map((d, i) => (
              <div
                key={i}
                className="p-5 rounded-[18px] flex items-center gap-3 transition-all hover:-translate-y-1"
                style={{
                  background: C.card,
                  border: `1px solid ${C.border}`,
                  boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-[14px] flex items-center justify-center shrink-0"
                  style={{ background: C.primarySoft }}
                >
                  <d.icon className="w-5 h-5" style={{ color: C.primary }} />
                </div>
                <p className="text-sm font-medium" style={{ color: C.text }}>
                  {d.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          MÉTODO ADS
      ======================================================== */}
      <section className="py-24" style={{ background: C.bg }}>
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            eyebrow="Método ADS"
            title="O que é o Método ADS."
            subtitle="Três passos clínicos estruturados — codificados em IA pelos próprios criadores."
          />

          <div className="space-y-6 mt-12">
            {[
              {
                letter: "A",
                name: "Análise",
                tagline: "Mapear a realidade biológica do paciente.",
                bullets: [
                  "Anamnese inteligente adaptativa",
                  "Análise de sintomas por sistemas",
                  "Leitura e interpretação de exames laboratoriais",
                  "Análise de histórico clínico e medicamentoso",
                  "Avaliação de estilo de vida (sono, estresse, nutrição, atividade física)",
                  "Análise de microbioma, inflamação, metabolismo, hormônios",
                ],
              },
              {
                letter: "D",
                name: "Diagnóstico",
                tagline: "Conectar os pontos antes invisíveis.",
                bullets: [
                  "Diagnóstico da causa raiz (não apenas CID)",
                  "Correlação intestino-cérebro-hormônios-imunidade",
                  "Identificação de padrões inflamatórios",
                  "Leitura funcional dos biomarcadores",
                ],
              },
              {
                letter: "S",
                name: "Solução",
                tagline: "Plano terapêutico personalizado e sistêmico.",
                bullets: [
                  "Sugestão de tratamentos inovadores",
                  "Combinação inteligente de nutrição funcional, suplementação, fitoterapia, hormônios, peptídeos, injetáveis e soroterapia",
                  "Ajustes conforme idade, comorbidades, exames e objetivos do paciente",
                  "Planos de curto, médio e longo prazo",
                ],
              },
            ].map((step) => (
              <div
                key={step.letter}
                className="rounded-[24px] overflow-hidden grid md:grid-cols-[200px_1fr]"
                style={{
                  background: C.card,
                  border: `1px solid ${C.border}`,
                  boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
                }}
              >
                <div
                  className="flex items-center justify-center p-8"
                  style={{ background: C.primary }}
                >
                  <div className="text-center">
                    <p
                      className="text-6xl font-bold leading-none"
                      style={{ color: "#FFFFFF" }}
                    >
                      {step.letter}
                    </p>
                    <p
                      className="mt-3 text-xs font-semibold uppercase"
                      style={{
                        letterSpacing: "0.18em",
                        color: "rgba(255,255,255,0.85)",
                      }}
                    >
                      {step.name}
                    </p>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-4" style={{ color: C.text }}>
                    {step.tagline}
                  </h3>
                  <ul className="space-y-2" style={{ color: C.text2 }}>
                    {step.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2
                          className="w-4 h-4 mt-1 shrink-0"
                          style={{ color: C.primary }}
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          PLANOS
      ======================================================== */}
      <section id="planos" className="py-24" style={{ background: C.bg2 }}>
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            eyebrow="Planos"
            title="Selecione o seu plano Auton."
            subtitle="Escolha o plano que acompanha o momento da sua prática clínica."
          />

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <PlanCard
              name="Starter"
              price="R$ 997"
              annual="R$ 797/mês no anual"
              cta="Escolher Starter"
              items={[
                "Dashboard de casos",
                "Agenda",
                "Teleconsulta",
                "Prontuário eletrônico automático",
                "Leitura de exames",
                "AI ADS (motor do método)",
                "Protocolo personalizado",
                "Módulo Solução (Livro da Vida, Alimentação, Suplementação, Atividade Física)",
                "App do paciente (Soluções, Check-in diário, Relatório antes/depois)",
                "Comunidade fechada",
                "Onboarding concierge",
              ]}
            />
            <PlanCard
              hero
              name="Pro"
              price="R$ 1.497"
              annual="R$ 1.197/mês no anual"
              cta="Escolher Pro"
              items={[
                "Tudo do Starter, mais:",
                "Chat IA contextual",
                "Rede de apoio multidisciplinar",
                "Encaminhamentos entre colegas",
              ]}
            />
            <PlanCard
              name="Enterprise"
              price="R$ 4.997"
              priceHint="/mês a partir de"
              annual="R$ 3.997/mês no anual"
              cta="Falar com o time"
              items={[
                "Tudo do Pro, mais:",
                "Múltiplos usuários",
                "Diagnóstico de implantação",
                "Onboarding dedicado",
                "SLA de suporte",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ========================================================
          COMUNIDADE (CARROSSEL)
      ======================================================== */}
      <section id="comunidade" className="py-24" style={{ background: C.card }}>
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            eyebrow="Comunidade Auton"
            title="Junte-se à primeira comunidade integrativa do país."
            subtitle="Profissionais que já cruzaram a ponte entre tratar sintoma e tratar causa."
          />

          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-6 px-6 mt-12">
            {[
              {
                name: "Dra. Paula",
                role: "Nutricionista integrativa",
                city: "São Paulo, SP",
                quote:
                  "Recuperei 6h da minha semana só no prontuário. O paciente percebeu a diferença na 2ª consulta.",
              },
              {
                name: "Dr. Caio",
                role: "Médico",
                city: "Belo Horizonte, MG",
                quote:
                  "Pela primeira vez tenho um raciocínio de causa raiz estruturado — e o paciente continua engajado em casa.",
              },
              {
                name: "Dra. Juliana",
                role: "Biomédica integrativa",
                city: "Porto Alegre, RS",
                quote:
                  "Parei de ter aquela sensação de que tô vendendo consulta. Volto pra casa sentindo que resolvi.",
              },
              {
                name: "Dra. Marina",
                role: "Médica integrativa",
                city: "Curitiba, PR",
                quote:
                  "A Auton trouxe método para algo que eu fazia por intuição. Meu raciocínio clínico amadureceu em meses.",
              },
              {
                name: "Dr. Rafael",
                role: "Nutrólogo",
                city: "Florianópolis, SC",
                quote:
                  "Meus pacientes complexos finalmente têm um caminho claro. E eu não preciso mais levar caso pra casa.",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="p-8 rounded-[24px] snap-start shrink-0 w-[320px] md:w-[400px]"
                style={{
                  background: C.bg2,
                  border: `1px solid ${C.border}`,
                  boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
                }}
              >
                <div
                  className="aspect-video rounded-[14px] flex items-center justify-center mb-6 cursor-pointer"
                  style={{ background: C.primarySoft }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: C.primary }}
                  >
                    <Play className="w-6 h-6 ml-1" fill="white" style={{ color: "#FFFFFF" }} />
                  </div>
                </div>
                <p className="italic leading-relaxed mb-6" style={{ color: C.text }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold" style={{ color: C.text }}>
                    {t.name}
                  </p>
                  <p className="text-sm" style={{ color: C.text2 }}>
                    {t.role} · {t.city}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-center mt-8" style={{ color: C.text3 }}>
            * Nomes alterados. Depoimentos baseados em casos reais, com consentimento dos
            profissionais.
          </p>
        </div>
      </section>

      {/* ========================================================
          FUNCIONALIDADES (CARROSSEL)
      ======================================================== */}
      <section className="py-24" style={{ background: C.bg }}>
        <div className="max-w-6xl mx-auto px-6">
          <SectionTitle
            eyebrow="Mais sobre como fazemos"
            title="Tecnologia a serviço do raciocínio clínico."
          />

          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-6 px-6 mt-12">
            {[
              {
                icon: Brain,
                title: "AI ADS — motor clínico",
                desc: "Raciocina no modelo Análise → Diagnóstico → Solução em tempo real durante a consulta.",
              },
              {
                icon: FlaskConical,
                title: "Leitura funcional de exames",
                desc: "Interpreta biomarcadores dentro do contexto individual — não só faixas de referência.",
              },
              {
                icon: ClipboardList,
                title: "Protocolo personalizado",
                desc: "Plano terapêutico integrativo gerado e priorizado pela IA, pronto pra sua revisão.",
              },
              {
                icon: FileText,
                title: "Prontuário automático",
                desc: "A teleconsulta gera o prontuário sozinha. Você foca no paciente, não no teclado.",
              },
              {
                icon: Smartphone,
                title: "App do paciente",
                desc: "Check-in diário, relatórios antes/depois, adesão em tempo real.",
              },
              {
                icon: Network,
                title: "Rede multidisciplinar",
                desc: "Encaminhe pacientes para colegas integrativos. Seja encaminhado. Ganhe junto.",
              },
              {
                icon: MessageSquare,
                title: "Comunidade fechada",
                desc: "Discussão clínica séria, só com profissionais. Sem ruído, sem exposição.",
              },
              {
                icon: Layers,
                title: "Camadas clínicas integradas",
                desc: "Metabolismo, hormônios, intestino, inflamação, mente — todos conversando.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="p-6 rounded-[24px] snap-start shrink-0 w-[280px] md:w-[340px] transition-shadow"
                style={{
                  background: C.card,
                  border: `1px solid ${C.border}`,
                  boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-[14px] flex items-center justify-center mb-4"
                  style={{ background: C.primarySoft }}
                >
                  <f.icon className="w-5 h-5" style={{ color: C.primary }} />
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: C.text }}>
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: C.text2 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          CTA FINAL
      ======================================================== */}
      <section className="py-24" style={{ background: C.primary }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-5xl font-bold leading-tight mb-6"
            style={{ color: "#FFFFFF" }}
          >
            Pronto pra mudar a forma como você atende?
          </h2>
          <p
            className="text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            Comece hoje por R$ 997/mês. Teste por 7 dias com garantia incondicional. Decida com
            calma.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PrimaryBtn big onWhiteBg>
              Começar agora
              <ArrowRight className="w-5 h-5" />
            </PrimaryBtn>
            <OutlineBtn big onDarkBg>
              Falar com um especialista
            </OutlineBtn>
          </div>
        </div>
      </section>

      {/* ========================================================
          RODAPÉ
      ======================================================== */}
      <footer className="py-16" style={{ background: "#0F1E33", color: "#FFFFFF" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <p className="text-2xl font-bold mb-4">Auton Health</p>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                A plataforma sistêmica da saúde integrativa. Feita por profissionais, para
                profissionais.
              </p>
            </div>
            {[
              {
                title: "Produto",
                links: [
                  { href: "#solucoes", label: "Soluções" },
                  { href: "#planos", label: "Planos" },
                  { href: "#comunidade", label: "Comunidade" },
                  { href: "#sobre", label: "Método ADS" },
                ],
              },
              {
                title: "Institucional",
                links: [
                  { href: "#", label: "Sobre nós" },
                  { href: "#", label: "Fundadores" },
                  { href: "#", label: "Contato" },
                  { href: "#", label: "Carreiras" },
                ],
              },
              {
                title: "Legal",
                links: [
                  { href: "#", label: "Termos de Uso" },
                  { href: "#", label: "Privacidade" },
                  { href: "#", label: "LGPD" },
                  { href: "#", label: "Canal de Denúncias" },
                ],
              },
            ].map((col) => (
              <div key={col.title}>
                <p
                  className="text-sm font-semibold mb-4 uppercase"
                  style={{ letterSpacing: "0.1em", color: "rgba(255,255,255,0.85)" }}
                >
                  {col.title}
                </p>
                <ul className="space-y-2 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="hover:text-white">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div
            className="border-t pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            style={{ borderColor: "rgba(255,255,255,0.1)" }}
          >
            <div className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
              <p>Auton Health · CNPJ 00.000.000/0001-00</p>
              <p className="mt-1 flex items-center gap-2">
                <Lock className="w-3 h-3" /> Dados criptografados · Conformidade LGPD · Servidores
                no Brasil
              </p>
            </div>
            <div className="flex gap-4" style={{ color: "rgba(255,255,255,0.7)" }}>
              <a href="#" className="hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

// ============================================================
// PlanCard
// ============================================================

function PlanCard({
  name,
  price,
  priceHint = "/mês",
  annual,
  items,
  cta,
  hero = false,
}: {
  name: string;
  price: string;
  priceHint?: string;
  annual: string;
  items: string[];
  cta: string;
  hero?: boolean;
}) {
  if (hero) {
    return (
      <div
        className="rounded-[24px] relative md:-translate-y-4 p-8 flex flex-col"
        style={{
          background: C.primary,
          color: "#FFFFFF",
          boxShadow: "0 18px 44px rgba(0,0,0,0.18)",
        }}
      >
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold rounded-full"
          style={{
            background: "#FFFFFF",
            color: C.primary,
            letterSpacing: "0.08em",
          }}
        >
          MAIS ESCOLHIDO
        </div>
        <p
          className="text-xs font-semibold uppercase mb-3"
          style={{ letterSpacing: "0.18em", color: "rgba(255,255,255,0.85)" }}
        >
          {name}
        </p>
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>
            {priceHint}
          </span>
        </div>
        <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.7)" }}>
          {annual}
        </p>
        <ul className="space-y-2.5 flex-1 mb-6">
          {items.map((it, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.95)" }}
            >
              <CheckCircle2
                className="w-4 h-4 mt-0.5 shrink-0"
                style={{ color: "#A8D0F0" }}
              />
              <span>{it}</span>
            </li>
          ))}
        </ul>
        <button
          className="w-full py-3 rounded-[14px] font-semibold"
          style={{ background: "#FFFFFF", color: C.primary }}
        >
          {cta}
        </button>
      </div>
    );
  }

  return (
    <div
      className="rounded-[24px] p-8 flex flex-col"
      style={{
        background: C.card,
        border: `1px solid ${C.border}`,
        boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
      }}
    >
      <p
        className="text-xs font-semibold uppercase mb-3"
        style={{ letterSpacing: "0.18em", color: C.text3 }}
      >
        {name}
      </p>
      <div className="flex items-baseline gap-2 mb-1">
        <span className="text-4xl font-bold" style={{ color: C.primary }}>
          {price}
        </span>
        <span className="text-sm" style={{ color: C.text2 }}>
          {priceHint}
        </span>
      </div>
      <p className="text-sm mb-6" style={{ color: C.text2 }}>
        {annual}
      </p>
      <ul className="space-y-2.5 flex-1 mb-6">
        {items.map((it, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-sm leading-relaxed"
            style={{ color: C.text2 }}
          >
            <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: C.primary }} />
            <span>{it}</span>
          </li>
        ))}
      </ul>
      <button
        className="w-full py-3 rounded-[14px] font-semibold border-2 transition-colors"
        style={{
          borderColor: C.primary,
          color: C.primary,
          background: "transparent",
        }}
      >
        {cta}
      </button>
    </div>
  );
}
