const quoteEl = document.getElementById("quote");
const btn = document.getElementById("btnGenerate");

const frases = [
    "Vai dar certo? Provavelmente não.",
    "Calma. Sempre dá pra piorar.",
    "Confia no processo. O processo: caos.",
    "A motivação é temporária. O boleto é eterno.",
    "Acredite nos seus sonhos… assim você sofre duas vezes.",
    "Se você acha que está no fundo do poço, relaxa: sempre tem um alçapão.",
    "Não desista! Ainda dá tempo de fracassar mais um pouco.",
    "Trabalhe enquanto eles dormem… e continue pobre enquanto eles enriquecem.",
    "O impossível só demora mais… para continuar impossível.",
    "Confie no processo. Ele vai te decepcionar no tempo certo.",
    "Se deu errado, pelo menos serviu de aprendizado… de que dá errado.",
    "Você é capaz de tudo. Principalmente de se arrepender.",
    "Não deixe para amanhã o que você pode procrastinar hoje.",
    "O lado bom de estar no fundo é que você já sabe que não pode cair… muito.",
    "Seja você mesmo. As pessoas já não gostam assim mesmo.",
    "Persistência é continuar errando com convicção.",
    "A vida é curta. Mas parece longa quando você está trabalhando.",
    "Sonhe alto… para a queda ser proporcional.",
    "Se algo pode dar errado, provavelmente já deu e você ainda não percebeu.",
    "Não se compare com os outros. Eles também estão perdidos.",
    "Segunda-feira é só um lembrete de que o fim de semana foi curto demais.",
    "O sucesso é relativo. O fracasso é bem consistente.",
    "Às vezes o universo conspira… contra você.",
    "A meta é sobreviver. Viver já é luxo.",
    "O segredo do sucesso é desistir antes de tentar.",
    "A vida é uma montanha-russa... Pena que você esqueceu o cinto.",
    "O “não” está garantido, mas ainda dá pra correr atrás da humilhação.",
    "Se está difícil hoje, lembre-se: sempre dá pra piorar.",
    "Insista, persista, desista. Aceite o ciclo natural da vida.",
    "Sempre há luz no fim do túnel, mas é o trem vindo na sua direção.",
    "Se a vida te der limões, faça uma cara feia e aceite que vai ser azedo mesmo.",
    "O importante é competir... e perder com estilo.",
    "Nunca é tarde para desistir dos seus planos.",
    "Nada como acordar motivado para vencer! Nunca aconteceu comigo, mas deve ser ótimo. Bom dia!",
    "Ultimamente tenho trabalhado de forma culposa: quando não há intenção de trabalhar.",
    "Por motivos alheios à minha vontade, estou indo trabalhar.",
    "O tempo muda tudo, menos a minha capacidade de ser trouxa.",
    "Manda quem pode. Obedece quem tem boletos pra pagar.",
    "Uma história de terror em três palavras: hoje é segunda.",
    "Fácil é fazer miojo... Viver é complicado!",
    "Na minha situação atual, se eu for cortar uma cebola, é ela que chora.",
    "Tudo passa, nem que seja por cima de você...",
    "Você falhou hoje? Não se preocupe, amanhã você vai falhar mais.",
    "Sorria! O pior ainda está por vir.",
    "A vida é uma caixa de surpresas e, geralmente, são todas ruins.",
];

let ultimoIndice = -1;

function gerarFrase() {
  let indice;

  do {
    indice = Math.floor(Math.random() * frases.length);
  } while (indice === ultimoIndice && frases.length > 1);

  ultimoIndice = indice;
  quoteEl.textContent = frases[indice];
}

btn.addEventListener("click", gerarFrase);