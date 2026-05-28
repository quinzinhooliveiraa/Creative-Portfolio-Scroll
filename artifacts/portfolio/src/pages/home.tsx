function YouTubeEmbed({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">

      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-2">2</h2>
        <h3 className="text-3xl font-light mb-2">Olho que Fala</h3>
        <p className="text-gray-400 text-sm mb-10 leading-relaxed">
          Entrevista dada ao Canal Brasil sobre o projeto de pesquisa sobre ensino de fotografia para pessoas cegas.
        </p>
        <YouTubeEmbed videoId="-dYIi7iYmdw" title="Olho que Fala — Canal Brasil" />
      </section>

      <div className="border-t border-white/10 max-w-4xl mx-auto" />

      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-2">3</h2>
        <h3 className="text-3xl font-light mb-10">Olho que Escuta</h3>

        <div className="space-y-12">
          <div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Concepção, Roteiro, direção e edição — Clipe <em>Con-Fiar</em> de Ana Leana
            </p>
            <YouTubeEmbed videoId="5GWP-GcDzBs" title="Con-Fiar — Ana Leana" />
          </div>

          <div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Concepção e direção — Clipe <em>Con-Fiar</em> de Ana Leana
            </p>
            <YouTubeEmbed videoId="uSwd2NAgF-E" title="Con-Fiar — Ana Leana (direção)" />
          </div>

          <div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Concepção e direção — Clipe <em>Vestida de Estrelas</em> de Ana Leana
            </p>
            <YouTubeEmbed videoId="uSwd2NAgF-E" title="Vestida de Estrelas — Ana Leana" />
          </div>
        </div>
      </section>

    </main>
  );
}
