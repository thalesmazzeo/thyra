export default function HeroPrompt() {
  return (
    <div className="prompt-card">
      <textarea placeholder="Ex: Crie um sistema para gerenciar clubes de poker com torneios, cash game, caixa e WhatsApp integrado..." />

      <div className="prompt-bar">
        <div className="prompt-actions-left">
          <button>＋</button>
          <button>🎤</button>
        </div>

        <button className="prompt-submit">Criar sistema →</button>
      </div>

      <div className="prompt-examples">
        <button>ERP</button>
        <button>Restaurante</button>
        <button>Poker Club</button>
        <button>CRM</button>
        <button>Dashboard</button>
      </div>
    </div>
  );
}