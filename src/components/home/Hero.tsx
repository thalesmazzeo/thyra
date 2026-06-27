import HeroPrompt from "./HeroPrompt";

export default function Hero() {
  return (
    <main className="thyra-home">
      <section className="thyra-hero">
        <div className="hero-pill">✨ A Thyra cria sistemas completos</div>

        <h1>
          Transforme uma ideia em um
          <span> software profissional.</span>
        </h1>

        <p>
          Descreva o que você precisa. A Thyra entende, organiza e começa a construir.
        </p>

        <HeroPrompt />
      </section>
    </main>
  );
}