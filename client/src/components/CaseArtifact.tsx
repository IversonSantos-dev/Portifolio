/** Direção de design: Operações em Movimento — artefatos técnicos que evidenciam produto e fluxo. */
import { Database, Gift, ListChecks, ScanLine } from "lucide-react";

export function CaseArtifact({ caseIndex }: { caseIndex: string }) {
  const isWedding = caseIndex === "01";

  if (isWedding) {
    return (
      <div className="case-artifact case-artifact--wedding" aria-hidden="true">
        <div className="artifact-label">fluxo do produto</div>
        <div className="artifact-wedding-nodes">
          <div className="artifact-node"><ListChecks className="h-3.5 w-3.5" /><span>CONVITE</span></div>
          <div className="artifact-node artifact-node--active"><Gift className="h-3.5 w-3.5" /><span>PRESENTES</span></div>
          <div className="artifact-node"><span className="artifact-person">+1</span><span>LISTA</span></div>
        </div>
        <div className="artifact-flow-line"><span /><span /><span /></div>
        <div className="artifact-pix">PIX <small>direto ao casal</small></div>
      </div>
    );
  }

  return (
    <div className="case-artifact case-artifact--inventory" aria-hidden="true">
      <div className="artifact-label">consulta operacional</div>
      <div className="artifact-query"><ScanLine className="h-4 w-4" /><span>SKU · produto · localização</span><b>⌕</b></div>
      <div className="artifact-table">
        <span>PRD-184</span><span>ESTOQUE</span><span className="artifact-table-status">LOCALIZADO</span>
        <span>PRD-029</span><span>CONFERÊNCIA</span><span className="artifact-table-status">PRONTO</span>
      </div>
      <div className="artifact-database"><Database className="h-3.5 w-3.5" /> base de produtos centralizada</div>
    </div>
  );
}
