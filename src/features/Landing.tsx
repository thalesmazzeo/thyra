import { useState } from "react";
import "./Landing.css";

const templates = [
  "CRM",
  "ERP",
  "Poker Club",
  "Restaurante",
  "Dashboard",
  "Marketplace",
];

export default function Landing() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  async function criarProjeto() {
    if (!prompt.trim()) {
      alert("Descreva seu projeto primeiro.");
      return;
    }

    try {
      setLoading(true);
      setResponse("");

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          provider: "thyra",
          model: "local",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Erro ao chamar a API");
      }

      setResponse(data.result.content);
    } catch (err: any) {
      setResponse("Erro: " + err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="thyra-landing">
      <section className="thyra-stage">
        <div className="thyra-badge">
          ✨ A IA que transforma ideias em sistemas
        </div>

        <h1 className="thyra-title">
          Crie software profissional
          <span> apenas descrevendo sua ideia.</span>
        </h1>

        <p className="thyra-subtitle">
          A Thyra entende, planeja, desenvolve e prepara seu projeto para publicação.
        </p>

        <div className="thyra-prompt">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ex: Crie um sistema para gerenciar clubes de poker com torneios, cash game, caixa, WhatsApp integrado e painel de TV..."
          />

          <div className="thyra-actions">
            <div className="thyra-icons">
              <button>＋</button>
              <button>📎</button>
              <button>🎤</button>
            </div>

            <button
              className="thyra-submit"
              onClick={criarProjeto}
              disabled={loading}
            >
              {loading ? "Criando..." : "Criar projeto →"}
            </button>
          </div>
        </div>

        {response && (
          <div
            style={{
              marginTop: 30,
              background: "#fff",
              borderRadius: 20,
              padding: 25,
              textAlign: "left",
              whiteSpace: "pre-line",
              boxShadow: "0 20px 50px rgba(0,0,0,.08)",
            }}
          >
            {response}
          </div>
        )}

        <div className="thyra-tags">
          {templates.map((item) => (
            <button key={item}>{item}</button>
          ))}
        </div>
      </section>
    </main>
  );
}