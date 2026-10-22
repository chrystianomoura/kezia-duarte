export const site = {
  name: 'Kezia Duarte',
  fullName: 'Kezia de Souza Lopes Colares Duarte',
  role: 'Psicóloga Clínica',
  crp: 'CRP 06/236846',
  email: 'keziaduarte.psicologia@gmail.com',
  instagram: 'keziaduarte.psi',
  whatsapp: '5511953129605',
  whatsappLabel: '(11) 95312-9605',
};

// Mensagem pré-preenchida de cada botão, para a Kezia saber de qual ponto do site a pessoa veio.
export const messages = {
  default: 'Olá, Kezia! Encontrei seu site e gostaria de saber mais sobre a psicoterapia.',
  nav: 'Olá, Kezia! Encontrei seu site e gostaria de agendar uma sessão.',
  hero: 'Olá, Kezia! Encontrei seu site e gostaria de começar minha jornada na psicoterapia.',
  sessions: 'Olá, Kezia! Li como funcionam as sessões e gostaria de iniciar a psicoterapia.',
  contact: 'Olá, Kezia! Gostaria de agendar minha sessão.',
};

export const whatsappUrl = (msg = messages.default) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

export const hero = {
  eyebrow: 'Psicoterapia online',
  title: 'Você não precisa ter todas as respostas para começar a se escutar.',
  text: 'A psicoterapia pode ser um espaço para compreender o que você sente, atravessar momentos de mudança e se aproximar de quem você é.',
  support: 'Atendimento online para todo o Brasil para adultos de todas as idades.',
  cta: 'Quero começar minha jornada',
};

export const nav = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Abordagem', href: '#abordagem' },
  { label: 'Psicoterapia', href: '#psicoterapia' },
  { label: 'Dúvidas', href: '#duvidas' },
  { label: 'Contato', href: '#contato' },
];

export const about = {
  title: 'Prazer, sou Kezia Duarte, psicóloga clínica.',
  paragraphs: [
    'Por meio da psicologia, pude compreender que cada pessoa carrega uma história única e que merece ser vista e ouvida. Ao longo da minha caminhada profissional, vivenciei diferentes contextos, entre a clínica, o campo social e o ambiente hospitalar, e essas experiências ampliaram minha escuta para as diferentes formas de sofrimento psíquico.',
    'Atualmente, acompanho adultos na clínica que atravessam momentos de transição de vida, questões ligadas a ansiedade e depressão, dificuldades nos relacionamentos, crises existenciais ou períodos de sobrecarga emocional. Em meio às exigências da vida e às expectativas externas, muitas pessoas podem sentir que se afastaram de quem são, ter dificuldade para reconhecer os próprios desejos ou buscar se reencontrar.',
    'Meu papel é caminhar ao seu lado, oferecendo uma escuta genuína e respeitosa para que você possa reconhecer suas próprias necessidades, construir suas referências e encontrar formas de viver que façam sentido para você.',
  ],
};

export const approach = {
  title: 'Uma psicoterapia que considera você em sua singularidade.',
  paragraphs: [
    'Meu trabalho é orientado pela Abordagem Centrada na Pessoa (ACP), desenvolvida pelo psicólogo Carl Rogers. De orientação humanista, essa abordagem valoriza a experiência individual e reconhece a capacidade de cada pessoa de participar ativamente do próprio processo de mudança.',
    'Nessa abordagem, a terapia não se trata de receber respostas prontas ou seguir um caminho determinado por outra pessoa, mas de encontrar um espaço para explorar suas experiências e construir uma compreensão mais própria de si e da vida.',
  ],
};

export const sessions = {
  title: 'Como funcionam as minhas sessões?',
  text: 'O primeiro passo é entrar em contato para agendarmos uma sessão inicial. Nesse encontro, você poderá compartilhar o que motivou sua busca pela psicoterapia, enquanto conversamos sobre o funcionamento do acompanhamento e esclareço suas dúvidas. Também combinaremos os dias e horários dos atendimentos, a frequência dos encontros e os valores das sessões.',
  cta: 'Quero iniciar a psicoterapia',
  cards: [
    { icon: 'video', title: 'Atendimento on-line', text: 'Sessões por videochamada, com os cuidados necessários para preservar a privacidade e o sigilo.' },
    { icon: 'clock', title: '50 minutos por sessão', text: 'Um tempo reservado para conversar sobre suas experiências, sentimentos e questões pessoais.' },
    { icon: 'calendar', title: 'Frequência dos encontros', text: 'Semanal ou quinzenal, conforme as necessidades do acompanhamento e o que for acordado entre nós.' },
    { icon: 'user', title: 'Público atendido', text: 'Atendimento psicológico para adultos. Para brasileiros que vivem em outros países, a possibilidade de atendimento será avaliada conforme as condições profissionais e legais aplicáveis.' },
  ],
};

export const faq = [
  { q: 'Quando devo procurar psicoterapia?', a: 'Você pode procurar psicoterapia quando sentir necessidade de compreender melhor suas emoções, lidar com situações difíceis, atravessar mudanças na vida ou desenvolver uma relação mais próxima consigo mesmo. Não é necessário esperar que o sofrimento se torne intenso para buscar acompanhamento psicológico.' },
  { q: 'Preciso saber o que quero trabalhar na terapia antes de começar?', a: 'Não. Você não precisa ter todas as respostas ou saber exatamente por onde começar. Podemos partir daquilo que você está sentindo ou vivendo no momento, respeitando seu tempo e suas necessidades.' },
  { q: 'Atende através de plano de saúde?', a: 'O atendimento psicológico é particular, no momento não atendemos com planos de saúde. No entanto, posso emitir recibo para você pedir reembolso pelo seu plano. Para mais informações sobre valores e agendamentos, entre em contato.' },
  { q: 'A psicoterapia on-line é sigilosa?', a: 'Sim. O atendimento psicológico é realizado com os cuidados necessários para preservar a privacidade e o sigilo profissional. Também é importante que você esteja em um ambiente reservado e utilize uma conexão segura durante as sessões.' },
  { q: 'Com que frequência acontecem as sessões?', a: 'A frequência é combinada entre nós, considerando as necessidades do acompanhamento. Os encontros podem ser semanais ou quinzenais, conforme a avaliação profissional e os acordos estabelecidos.' },
  { q: 'Como é feito o pagamento?', a: 'O pagamento deve ser realizado via Pix ou transferência bancária antes da sessão. Após a transação, é necessário enviar o comprovante de pagamento por mensagem no WhatsApp.' },
  { q: 'Qual é o valor da sessão?', a: 'Para conhecer os valores e as condições de pagamento, entre em contato comigo pelo WhatsApp. Terei prazer em esclarecer suas dúvidas antes do agendamento.' },
  { q: 'Como posso agendar uma sessão?', a: 'Você pode entrar em contato comigo pelo WhatsApp para esclarecer suas dúvidas, conhecer as condições do atendimento e verificar os horários disponíveis. Será um prazer conversar com você.' },
];

export const contact = {
  title: 'Que tal começar a olhar para si com mais cuidado?',
  text: 'Se você sente que este pode ser um momento para se escutar, compreender suas experiências e explorar novas possibilidades, entre em contato. Estou disponível para esclarecer suas dúvidas sobre o atendimento e o agendamento.',
  cta: 'Agendar minha sessão',
};
