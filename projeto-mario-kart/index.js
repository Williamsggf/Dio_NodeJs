const readline = require("readline-sync");

// Função delay para esperar entre rodadas
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const Personagens = [
  {
    player: 1,
    Nome: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
  },
  {
    player: 2,
    Nome: "Peach",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 2,
    PONTOS: 0,
  },
  {
    player: 3,
    Nome: "Yoshi",
    VELOCIDADE: 2,
    MANOBRABILIDADE: 4,
    PODER: 3,
    PONTOS: 0,
  },
  {
    player: 4,
    Nome: "Bowser",
    VELOCIDADE: 5,
    MANOBRABILIDADE: 2,
    PODER: 5,
    PONTOS: 0,
  },
  {
    player: 5,
    Nome: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
  },
  {
    player: 6,
    Nome: "Donkey Kong",
    VELOCIDADE: 2,
    MANOBRABILIDADE: 2,
    PODER: 4,
    PONTOS: 0,
  },
];

const Batalhas = [
  { id: 1, Batalha: "Reta", Descricao: "Vence o jogador mais rápido" },
  {
    id: 2,
    Batalha: "Curvas",
    Descricao: "Vence o jogador com mais manobrabilidade",
  },
  { id: 3, Batalha: "Confronto", Descricao: "Vence o jogador com mais poder" },
];

async function gerarBatalha(jogador, adversario) {
  console.log("\n🕒 Preparando primeira batalha... (3s)");
  await delay(3000);

  for (let i = 0; i < 5; i++) {
    const tipo = Math.floor(Math.random() * 3) + 1;
    const dadoJogador = Math.floor(Math.random() * 6) + 1;
    const dadoAdversario = Math.floor(Math.random() * 6) + 1;
    const nomeBatalha = Batalhas[tipo - 1].Batalha;

    console.log(`\n🧭 ${i + 1}ª Batalha: ${nomeBatalha}`);
    console.log(`🎲 ${jogador.Nome} rolou: ${dadoJogador}`);
    console.log(`🎲 ${adversario.Nome} rolou: ${dadoAdversario}`);

    let totalJogador = 0;
    let totalAdversario = 0;

    if (tipo === 1) {
      totalJogador = jogador.VELOCIDADE + dadoJogador;
      totalAdversario = adversario.VELOCIDADE + dadoAdversario;
    } else if (tipo === 2) {
      totalJogador = jogador.MANOBRABILIDADE + dadoJogador;
      totalAdversario = adversario.MANOBRABILIDADE + dadoAdversario;
    } else {
      totalJogador = jogador.PODER + dadoJogador;
      totalAdversario = adversario.PODER + dadoAdversario;
    }

    console.log(`📊 ${jogador.Nome}: ${totalJogador}`);
    console.log(`📊 ${adversario.Nome}: ${totalAdversario}`);

    if (totalJogador > totalAdversario) {
      jogador.PONTOS++;
      console.log(`✅ ${jogador.Nome} venceu a batalha!`);
    } else if (totalAdversario > totalJogador) {
      adversario.PONTOS++;
      console.log(`✅ ${adversario.Nome} venceu a batalha!`);
    } else {
      console.log("⚖️ Empate! Nenhum ponto foi atribuído.");
    }

    // 🕒 Delay de 3 segundos antes da próxima batalha
    if (i < 4) {
      console.log("🕒 Próxima rodada em 3 segundos...");
      await delay(3000);
    }
  }
}

async function main() {
  console.log("🎮 Personagens disponíveis:");
  Personagens.forEach((p) =>
    console.log(
      `${p.player} - ${p.Nome} | Vel: ${p.VELOCIDADE} | Man: ${p.MANOBRABILIDADE} | Pod: ${p.PODER}`
    )
  );

  const jogadorEscolhido = readline.questionInt(
    "\nEscolha seu personagem pelo número: "
  );
  const jogador = Personagens.find((p) => p.player === jogadorEscolhido);

  if (!jogador) {
    console.log("❌ Personagem inválido!");
    process.exit();
  }

  let adversarioId;
  do {
    adversarioId = Math.floor(Math.random() * Personagens.length) + 1;
  } while (adversarioId === jogadorEscolhido);

  const adversario = Personagens.find((p) => p.player === adversarioId);

  console.log(`\n👤 Você escolheu: ${jogador.Nome}`);
  console.log(`⚔️ Adversário sorteado: ${adversario.Nome}`);

  console.log("\n📜 Tipos de Batalha:");
  Batalhas.forEach((b) => console.log(`- ${b.Batalha}: ${b.Descricao}`));

  await gerarBatalha(jogador, adversario);

  console.log(`\n🏁 Pontuação final:`);
  console.log(`${jogador.Nome}: ${jogador.PONTOS} ponto(s)`);
  console.log(`${adversario.Nome}: ${adversario.PONTOS} ponto(s)`);

  if (jogador.PONTOS > adversario.PONTOS) {
    console.log(`🏆 Vencedor: ${jogador.Nome}`);
  } else if (adversario.PONTOS > jogador.PONTOS) {
    console.log(`🏆 Vencedor: ${adversario.Nome}`);
  } else {
    console.log("⚖️ Não houve vencedor. Foi um empate!");
  }

  const jogarNovamente = readline
    .question("\n🔄 Deseja jogar novamente? (s/n): ")
    .toLowerCase();
  if (jogarNovamente === "s") {
    console.clear(); // opcional: limpa a tela
    main(); // reinicia o jogo
  } else {
    console.log("👋 Obrigado por jogar! Até a próxima!");
  }
}

main();
