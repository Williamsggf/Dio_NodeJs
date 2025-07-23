export interface ClubModel {
  id: number;
  nome: string;
  statistics: {
    vitorias: number;
    empates: number;
    derrotas: number;
    gols_pro: number;
    gols_contra: number;
    saldo_gols: number;
    pontos: number;
  };
}
