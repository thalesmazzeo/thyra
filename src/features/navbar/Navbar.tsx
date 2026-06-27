import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-logo">
        THYRA
      </div>

      <nav className="navbar-menu">

        {/* ================= SISTEMA ================= */}

        <div className="menu-item">

          <button>
            Sistema
            <span>▼</span>
          </button>

          <div className="mega-menu">

            <div className="mega-column">

              <h4>Sistemas</h4>

              <a href="#">🌐 Sistema Web</a>
              <a href="#">📱 Aplicativo Mobile</a>
              <a href="#">📊 Dashboard Executivo</a>
              <a href="#">🛒 Marketplace</a>

            </div>

            <div className="mega-column">

              <h4>Gestão</h4>

              <a href="#">📦 ERP Empresarial</a>
              <a href="#">👥 CRM</a>
              <a href="#">💰 Financeiro</a>
              <a href="#">📈 Business Intelligence</a>

            </div>

            <div className="mega-column">

              <h4>Inteligência Artificial</h4>

              <a href="#">🤖 Assistentes IA</a>
              <a href="#">💬 Chatbots</a>
              <a href="#">⚡ Automações</a>
              <a href="#">🔗 APIs</a>

            </div>

          </div>

        </div>

        {/* ================= SOLUÇÕES ================= */}

        <div className="menu-item">

          <button>
            Soluções
            <span>▼</span>
          </button>

          <div className="mega-menu">

            <div className="mega-column">

              <h4>Empresas</h4>

              <a href="#">🏢 Gestão Empresarial</a>
              <a href="#">🛒 Comércio</a>
              <a href="#">🏪 Varejo</a>
              <a href="#">🍽 Restaurantes</a>

            </div>

            <div className="mega-column">

              <h4>Automação</h4>

              <a href="#">⚡ Fluxos Automáticos</a>
              <a href="#">🤖 IA Empresarial</a>
              <a href="#">📈 Dashboards</a>
              <a href="#">📊 Analytics</a>

            </div>

          </div>

        </div>

        {/* ================= INTEGRAÇÕES ================= */}

        <div className="menu-item">

          <button>
            Integrações
            <span>▼</span>
          </button>

          <div className="mega-menu">

            <div className="mega-column">

              <h4>Principais</h4>

              <a href="#">WhatsApp Business</a>
              <a href="#">Google Workspace</a>
              <a href="#">Microsoft 365</a>
              <a href="#">OpenAI</a>

            </div>

            <div className="mega-column">

              <h4>APIs</h4>

              <a href="#">REST API</a>
              <a href="#">Webhooks</a>
              <a href="#">Mercado Pago</a>
              <a href="#">Stripe</a>

            </div>

          </div>

        </div>
                {/* ================= PLANOS ================= */}

        <div className="menu-item">

          <button>
            Planos
          </button>

        </div>

        {/* ================= MISSÃO ================= */}

        <div className="menu-item">

          <button>
            Missão
          </button>

        </div>

      </nav>

      <div className="navbar-actions">

        <button className="login-btn">
          Entrar
        </button>

        <button className="primary-btn">
          Criar Sistema
        </button>

      </div>

    </header>

  );
}