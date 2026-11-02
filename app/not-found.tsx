import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
        [404] Página Não Encontrada
      </span>
      <h1 className="font-editorial text-5xl sm:text-7xl font-normal text-white tracking-editorial">
        Página Inexistente.
      </h1>
      <p className="mt-4 text-base text-muted-foreground max-w-md font-sans">
        A rota que você tentou acessar não existe ou foi movida.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-mono text-xs uppercase tracking-wider font-semibold hover:bg-neutral-200 transition-colors"
      >
        <ArrowLeft size={14} />
        <span>Voltar à Página Inicial</span>
      </Link>
    </div>
  );
}
