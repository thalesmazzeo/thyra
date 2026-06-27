import "./Landing.css";

const templates = ["CRM", "ERP", "Poker Club", "Restaurante", "Dashboard", "Marketplace"];

export default function Landing() {
  return (
    <main className="thyra-landing">
      <section className="thyra-stage">
        <div className="thyra-badge">✨ A IA que transforma ideias em sistemas</div>

        <h1 className="thyra-title">
          Crie software profissional
          <span> apenas descrevendo sua ideia.</span>
        </h1>

        <p className="thyra-subtitle">
          A Thyra entende, planeja, desenvolve e prepara seu projeto para publicação.
        </p>

        <div className="thyra-prompt">
          <textarea placeholder="Ex: Crie um sistema para gerenciar clubes de poker com torneios, cash game, caixa, WhatsApp integrado e painel de TV..." />

          <div className="thyra-actions">
            <div className="thyra-icons">
              <button>＋</button>
              <button>📎</button>
              <button>🎤</button>
            </div>

            <button className="thyra-submit">Criar projeto →</button>
          </div>
        </div>

        <div className="thyra-tags">
          {templates.map((item) => (
            <button key={item}>{item}</button>
          ))}
        </div>
      </section>
    </main>
  );
}