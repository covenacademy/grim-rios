
const spells = [
    // ==========================================
    // GRIMÓRIO COMUM — NÍVEL I
    // ==========================================

    {
        book: "comum",
        level: "I",
        title: "Lúmen",
        subtitle: "Encantamento da Luz",
        incantation: "Lux mea, viam illumina.",
        effect: "Produz uma pequena esfera de luz na palma da mão ou na ponta dos dedos, capaz de iluminar ambientes escuros."
    },
    {
        book: "comum",
        level: "I",
        title: "Vestigium",
        subtitle: "Encantamento da Localização",
        incantation: "Vestigia revela, quod quaero.",
        effect: "Permite localizar um objeto com o qual o bruxo já teve contato, indicando sua direção aproximada."
    },
    {
        book: "comum",
        level: "I",
        title: "Motus",
        subtitle: "Encantamento do Movimento",
        incantation: "Motus meus, voluntati pare.",
        effect: "Permite movimentar pequenos objetos à distância, desde que sejam leves e permaneçam dentro do campo de concentração do usuário."
    },
    {
        book: "comum",
        level: "I",
        title: "Aperire",
        subtitle: "Encantamento da Abertura",
        incantation: "Aperi quod clausum est.",
        effect: "Destranca fechaduras simples e abre portas, gavetas e recipientes sem proteção mágica."
    },
    {
        book: "comum",
        level: "I",
        title: "Revelio",
        subtitle: "Encantamento da Revelação",
        incantation: "Revela quod occultum est.",
        effect: "Revela inscrições, símbolos e mensagens escondidas por meios comuns, como tinta invisível ou disfarces superficiais."
    },
    {
        book: "comum",
        level: "I",
        title: "Impulsus",
        subtitle: "Encantamento do Impacto",
        incantation: "Vis mea, impelle!",
        effect: "Dispara uma pequena onda de energia mágica contra o alvo, provocando um impacto capaz de fazê-lo recuar ou perder o equilíbrio. Não causa ferimentos graves, mas pode interromper movimentos e ataques simples."
    },
    {
        book: "comum",
        level: "I",
        title: "Dolor",
        subtitle: "Encantamento da Dor",
        incantation: "Dolor, corpus eius affice!",
        effect: "Provoca uma pontada de dor localizada no corpo do alvo, semelhante a uma fisgada intensa. O efeito é breve e não causa danos físicos permanentes, mas pode atrapalhar sua concentração e interromper a execução de outros feitiços."
    },

    // ==========================================
    // GRIMÓRIO COMUM — NÍVEL II
    // ==========================================

    {
        book: "comum",
        level: "II",
        title: "Protego",
        subtitle: "Encantamento da Proteção",
        incantation: "Protego!",
        effect: "Cria uma barreira mágica capaz de bloquear ataques físicos, projéteis e feitiços de baixa a média intensidade. Também pode proteger outras pessoas próximas, desde que o bruxo consiga sustentar a barreira."
    },
    {
        book: "comum",
        level: "II",
        title: "Accio",
        subtitle: "Encantamento da Atração",
        incantation: "Accio!",
        effect: "Atrai objetos em direção ao bruxo, mesmo quando estão a uma distância considerável. Permite trazer itens de diferentes tamanhos, desde que não sejam excessivamente pesados ou estejam protegidos por outros encantamentos."
    },
    {
        book: "comum",
        level: "II",
        title: "Silencio",
        subtitle: "Encantamento do Silêncio",
        incantation: "Silentium!",
        effect: "Silencia completamente o alvo, impedindo a produção de sons pela voz. Pode interromper a execução de feitiços que dependam de encantamentos pronunciados, dificultando sua utilização durante confrontos."
    },
    {
        book: "comum",
        level: "II",
        title: "Ligare",
        subtitle: "Encantamento da Restrição",
        incantation: "Bind what moves, deny it flight. Seal it fast in golden light.",
        effect: "Conjura amarras mágicas que envolvem o alvo, restringindo seus movimentos e podendo imobilizá-lo completamente. As amarras possuem resistência suficiente para conter uma pessoa que tente escapar fisicamente, exigindo uma manifestação mágica de força considerável para rompê-las."
    },
    {
        book: "comum",
        level: "II",
        title: "Incendio",
        subtitle: "Encantamento das Chamas",
        incantation: "Incendio!",
        effect: "Produz chamas a partir das mãos ou de um objeto, permitindo incendiar superfícies e lançar pequenas rajadas de fogo contra adversários. Pode provocar queimaduras e iniciar incêndios, mas ainda não possui potência para grandes explosões."
    },
    {
        book: "comum",
        level: "II",
        title: "Depulso",
        subtitle: "Encantamento da Repulsão",
        incantation: "Depulso!",
        effect: "Lança uma forte descarga de energia que arremessa o alvo para longe, podendo derrubá-lo ou fazê-lo colidir contra superfícies. Também consegue deslocar objetos de médio porte."
    },
    {
        book: "comum",
        level: "II",
        title: "Glacius",
        subtitle: "Encantamento do Congelamento",
        incantation: "Glacius!",
        effect: "Libera uma rajada de frio capaz de congelar superfícies e objetos, além de atingir adversários, provocando dormência e restringindo seus movimentos. Com concentração, pode prender os pés de um alvo em uma camada de gelo."
    },
    {
        book: "comum",
        level: "II",
        title: "Confundo",
        subtitle: "Encantamento da Confusão",
        incantation: "Confundo!",
        effect: "Afeta temporariamente a percepção do alvo, provocando desorientação, confusão sensorial e dificuldade de concentração. Pode fazê-lo interpretar incorretamente movimentos e perder a precisão durante um confronto, mas não controla suas ações nem altera suas memórias."
    },

    // ==========================================
    // GRIMÓRIO COMUM — NÍVEL III
    // ==========================================

    {
        book: "comum",
        level: "III",
        title: "Metamorphosis",
        subtitle: "Encantamento da Metamorfose",
        incantation: "In vultu meo, alterius forma appareat!",
        effect: "Permite alterar completamente a aparência física do bruxo, assumindo o rosto e as características corporais de outra pessoa. Não concede suas habilidades, poderes ou conhecimentos. É necessário manter a concentração para sustentar a transformação."
    },
    {
        book: "comum",
        level: "III",
        title: "Teleportatio",
        subtitle: "Encantamento do Teletransporte",
        incantation: "Spatium aperi, me ad locum transfer!",
        effect: "Permite desaparecer de um local e reaparecer instantaneamente em outro, desde que o bruxo conheça ou consiga visualizar o destino. Também pode transportar outra pessoa, mas isso exige maior concentração e energia mágica."
    },
    {
        book: "comum",
        level: "III",
        title: "Sonorus",
        subtitle: "Encantamento da Amplificação Sonora",
        incantation: "Vox mea, tonitruum fiat!",
        effect: "Amplifica a voz do bruxo a ponto de produzir ondas sonoras intensas, capazes de desorientar adversários, estilhaçar vidros, provocar desequilíbrio e interromper conjurações pronunciadas. O efeito pode ser direcionado a uma área ou pessoa específica, exigindo controle para não atingir aliados."
    },
    {
        book: "comum",
        level: "III",
        title: "Terra Motus",
        subtitle: "Encantamento da Manipulação Terrestre",
        incantation: "Terra moveatur, forma mea pare!",
        effect: "Permite manipular terra, areia e pedras, levantando barreiras, abrindo passagens e deslocando porções do solo. Também pode provocar tremores localizados e lançar fragmentos de rocha contra adversários."
    },
    {
        book: "comum",
        level: "III",
        title: "Aquamancy",
        subtitle: "Encantamento da Manipulação da Água",
        incantation: "Aqua responde, forma mea accipe!",
        effect: "Permite controlar massas de água, alterando sua direção, formato e intensidade. Pode criar jatos de pressão para atingir adversários, formar correntes para arrastar objetos e utilizar a água presente no ambiente de diferentes maneiras."
    },
    {
        book: "comum",
        level: "III",
        title: "Impetus",
        subtitle: "Encantamento da Projeção Mágica",
        incantation: "Potentia mea, in hostem converte!",
        effect: "Concentra energia mágica nas mãos e a dispara em forma de projéteis de impacto. Permite lançar ataques sucessivos e direcionados, capazes de provocar ferimentos, derrubar adversários e danificar estruturas."
    },
    {
        book: "comum",
        level: "III",
        title: "Transmutatio",
        subtitle: "Encantamento da Transmutação",
        incantation: "Forma mutetur, materia transformetur!",
        effect: "Permite alterar temporariamente a composição e a aparência de objetos inanimados, transformando materiais simples em outros de características semelhantes. Pode, por exemplo, transformar madeira em pedra ou metal em areia. Não funciona em seres vivos nem cria materiais mágicos."
    },
    {
        book: "comum",
        level: "III",
        title: "Reparatio",
        subtitle: "Encantamento da Restauração Material",
        incantation: "Quod fractum est, integrum fiat!",
        effect: "Recompõe objetos danificados ou quebrados, reunindo suas partes e restaurando sua estrutura original. Pode reparar utensílios, móveis, vidros e outros materiais, desde que os fragmentos necessários ainda existam."
    },
    {
        book: "comum",
        level: "III",
        title: "Interruptio",
        subtitle: "Encantamento da Interrupção",
        incantation: "Magia solve, potentia frange!",
        effect: "Produz uma onda de energia direcionada capaz de interromper feitiços em execução e desfazer manifestações mágicas de intensidade semelhante ou inferior. Também pode enfraquecer encantamentos ativos, mas não rompe proteções permanentes ou conjurações muito superiores ao domínio do usuário."
    },
    {
        book: "comum",
        level: "III",
        title: "Scutum Magnum",
        subtitle: "Encantamento do Escudo Ampliado",
        incantation: "Aegis magica, circum me erige!",
        effect: "Cria uma barreira mágica de grandes proporções, capaz de proteger várias pessoas simultaneamente contra ataques físicos e sobrenaturais. Pode abranger uma área considerável e permanecer ativa por mais tempo, desde que o bruxo consiga sustentar seu consumo de energia mágica."
    },

    // ==========================================
    // GRIMÓRIO COMUM — NÍVEL IV
    // ==========================================

    {
        book: "comum",
        level: "IV",
        title: "Custodia Ardente",
        subtitle: "Encantamento da Proteção Ardente",
        incantation: "Custodi rem, ignis insurgat; manus inimica, dolore cedat!",
        effect: "Cria uma proteção ao redor de objetos ou espaços delimitados. Quem tentar tocar ou atravessar a barreira recebe uma descarga ardente que provoca queimaduras mágicas e debilidade física. Pode proteger pertences ou selar ambientes, impedindo a passagem."
    },
    {
        book: "comum",
        level: "IV",
        title: "Confringo",
        subtitle: "Encantamento da Explosão",
        incantation: "Confringo!",
        effect: "Provoca explosões mágicas de grande potência em pontos determinados, capazes de destruir estruturas, romper paredes e lançar estilhaços contra alvos próximos. A intensidade pode ser ampliada conforme a energia empregada."
    },
    {
        book: "comum",
        level: "IV",
        title: "Fulgur",
        subtitle: "Encantamento do Relâmpago",
        incantation: "Caelum, fulmen mitte!",
        effect: "Invoca descargas elétricas extremamente potentes, capazes de eletrocutar adversários, atravessar determinados materiais e atingir mais de um alvo próximo. Sua intensidade pode causar desde a incapacitação até danos potencialmente fatais."
    },
    {
        book: "comum",
        level: "IV",
        title: "Gravitas",
        subtitle: "Encantamento da Gravidade",
        incantation: "Gravitas augeatur, corpus succumbat!",
        effect: "Altera a gravidade sobre alvos ou regiões, podendo multiplicar o peso de pessoas e objetos, esmagar estruturas ou reduzir drasticamente o peso de grandes massas. Também permite suspender adversários no ar e submetê-los a variações bruscas de gravidade."
    },
    {
        book: "comum",
        level: "IV",
        title: "Corrosio",
        subtitle: "Encantamento da Corrosão",
        incantation: "Materia solve, forma tua corrumpe!",
        effect: "Provoca a deterioração acelerada de materiais, corroendo metais, destruindo armaduras e comprometendo estruturas resistentes. Com concentração suficiente, pode consumir completamente determinados objetos."
    },
    {
        book: "comum",
        level: "IV",
        title: "Ruptura",
        subtitle: "Encantamento da Fratura",
        incantation: "Intus frangere, forma dissolvere!",
        effect: "Provoca fraturas internas em materiais sólidos e estruturas, podendo atingir também o corpo de adversários, fraturando ossos e partes específicas do corpo. A precisão exige concentração, e a resistência do alvo influencia a eficácia do encantamento."
    },
    {
        book: "comum",
        level: "IV",
        title: "Disintegratio",
        subtitle: "Encantamento da Desintegração",
        incantation: "Materia in pulverem, forma in nihilum!",
        effect: "Desintegra matéria não viva, reduzindo objetos e estruturas a partículas. Pode destruir armas, armaduras e partes de construções, mas materiais muito resistentes exigem maior concentração e energia mágica."
    },
    {
        book: "comum",
        level: "IV",
        title: "Somnus Profundus",
        subtitle: "Encantamento do Sono Profundo",
        incantation: "Oculi claudantur, mens in somnum cadat!",
        effect: "Induz um sono mágico profundo, fazendo o alvo perder a consciência. A duração depende da resistência mágica do indivíduo e da energia empregada pelo conjurador."
    },
    {
        book: "comum",
        level: "IV",
        title: "Amplificatio",
        subtitle: "Encantamento da Amplificação",
        incantation: "Potentia augeatur, magia multiplicetur!",
        effect: "Amplifica temporariamente a potência de um encantamento, aumentando seu alcance, intensidade ou duração. Pode ser aplicado à própria magia ou à de outro bruxo, mas exige grande quantidade de energia e não ultrapassa os limites naturais do feitiço amplificado."
    },

    // ==========================================
    // GRIMÓRIO COMUM — NÍVEL V
    // ==========================================

    {
        book: "comum",
        level: "V",
        title: "Evocatio",
        subtitle: "Encantamento da Invocação",
        incantation: "Ex essentia magica, ad mandatum meum appare!",
        effect: "Invoca uma criatura formada por energia mágica para lutar ao lado do conjurador. Sua forma, tamanho e capacidades dependem da energia empregada, podendo assumir proporções monstruosas. A criatura permanece enquanto o conjurador conseguir sustentá-la."
    },
    {
        book: "comum",
        level: "V",
        title: "Exilium",
        subtitle: "Encantamento do Exílio",
        incantation: "Porta aperiatur, hostis in exilium mittatur!",
        effect: "Transporta um alvo para uma dimensão isolada, retirando-o temporariamente do plano físico. Enquanto estiver nesse espaço, o indivíduo não consegue interagir com o mundo exterior nem retornar por conta própria. Sua libertação exige que a prisão dimensional seja desfeita ou rompida."
    },
    {
        book: "comum",
        level: "V",
        title: "Reflexio Absoluta",
        subtitle: "Encantamento do Retorno",
        incantation: "Quod ad me venit, ad auctorem revertatur!",
        effect: "Cria uma proteção mágica capaz de devolver encantamentos direcionados ao conjurador contra seus próprios autores. Pode refletir ataques de grande potência, desde que o bruxo consiga suportar a energia envolvida."
    },
    {
        book: "comum",
        level: "V",
        title: "Ruptura Animae",
        subtitle: "Encantamento da Separação Espiritual",
        incantation: "Anima a corpore separetur, spiritus liberetur!",
        effect: "Projeta o espírito de um indivíduo para fora do próprio corpo, deixando sua forma física inconsciente e imóvel. A consciência permanece no espírito, que consegue observar o ambiente, mas não tocar ou interferir fisicamente nele. Um vínculo mágico mantém espírito e corpo conectados, permitindo o retorno quando o feitiço é desfeito. Uma separação prolongada pode colocar a vida do indivíduo em risco."
    },
    {
        book: "comum",
        level: "V",
        title: "Exorcismus Magnus",
        subtitle: "Encantamento do Grande Exorcismo",
        incantation: "Spiritus alienus, corpus relinque; lux te expellat!",
        effect: "Expulsa entidades sobrenaturais que estejam possuindo ou controlando um indivíduo, separando-as de seu hospedeiro e impedindo que retornem imediatamente. O conjurador também pode aprisionar a entidade em um recipiente previamente preparado."
    },
    {
        book: "comum",
        level: "V",
        title: "Lux Absoluta",
        subtitle: "Encantamento da Luz Absoluta",
        incantation: "Lux primordialis, omnem tenebrarum essentiam dissolve!",
        effect: "Libera uma manifestação de luz primordial capaz de consumir manifestações de Magia das Trevas. Pode destruir construções mágicas, desfazer criaturas sustentadas por essa energia e enfraquecer profundamente encantamentos sombrios."
    },
    {
        book: "comum",
        level: "V",
        title: "Transcendentia",
        subtitle: "Encantamento da Ascensão Mágica",
        incantation: "Potentia mea transcendat, omnis vis augeatur!",
        effect: "Eleva temporariamente a capacidade mágica do conjurador a um patamar extraordinário, ampliando drasticamente a potência dos encantamentos que executa. Entretanto, o consumo de energia é extremo e, quando o efeito termina, o bruxo sofre um esgotamento mágico severo."
    },
    {
        book: "comum",
        level: "V",
        title: "Sanguis Ruptio",
        subtitle: "Encantamento da Ruptura Interna",
        incantation: "Corpus frangatur, vis interna te devoret!",
        effect: "Concentra uma força mágica diretamente no interior do corpo do adversário, provocando rupturas nos tecidos e danos severos aos órgãos internos. A intensidade pode comprometer funções vitais e colocar a vida do alvo em risco. Sua execução exige precisão e grande domínio mágico."
    },
    {
        book: "comum",
        level: "V",
        title: "Lancea Divina",
        subtitle: "Encantamento da Lança Perfurante",
        incantation: "Lux condensetur, corpus hostis transfigatur!",
        effect: "Concentra uma quantidade extraordinária de energia luminosa em um único disparo extremamente denso e veloz. O ataque atravessa proteções físicas e pode perfurar profundamente o corpo do adversário, provocando ferimentos devastadores. Sua potência permite atingir até mesmo alvos com elevada resistência física."
    },
    {
        book: "comum",
        level: "V",
        title: "Oculus Omnium",
        subtitle: "Encantamento da Visão Onisciente",
        incantation: "Omnia revelentur, nihil mihi occultum maneat!",
        effect: "Permite ao conjurador observar acontecimentos em qualquer lugar do mundo, precisando ter visto previamente sua localização, mesmo que em fotos. A visão pode ser direcionada para pessoas, ambientes ou acontecimentos específicos, permitindo acompanhar situações em tempo real. Quanto mais distante ou difícil de identificar o alvo, maior o esforço mágico necessário."
    },

    // ==========================================
    // GRIMÓRIO DAS IRMANDADES — NÍVEL I
    // ==========================================

    {
        book: "irmandade",
        level: "I",
        title: "Communio",
        subtitle: "Encantamento da Comunhão",
        incantation: "Una perceptio, sensus inter nos transferantur!",
        effect: "Estabelece uma conexão sensorial entre os três integrantes. Enquanto o encantamento estiver ativo, todos compartilham aquilo que cada um vê e ouve, mesmo que estejam em lugares diferentes. A conexão não permite acessar pensamentos, sentimentos ou memórias."
    },
    {
        book: "irmandade",
        level: "I",
        title: "Praesidium Trinum",
        subtitle: "Encantamento do Guardião Tríplice",
        incantation: "Aegis surgat, per nos pericula dividantur!",
        effect: "Cria uma proteção compartilhada entre os três integrantes. Quando um deles é atingido, parte do impacto é distribuída entre os outros dois, reduzindo o dano recebido individualmente. A proteção depende da participação dos três e perde sua eficácia caso algum deles fique incapacitado."
    },

    // ==========================================
    // GRIMÓRIO DAS IRMANDADES — NÍVEL II
    // ==========================================

    {
        book: "irmandade",
        level: "II",
        title: "Confluxus",
        subtitle: "Encantamento da Convergência",
        incantation: "Potentia in unum coeant, impetum maximum efficiant!",
        effect: "Cada integrante projeta uma descarga mágica de uma posição diferente. As três descargas se encontram antes de atingir o alvo, formando um único ataque concentrado. O impacto resultante possui força suficiente para atravessar barreiras físicas, romper proteções mágicas e arremessar adversários. As três conjurações precisam atingir o mesmo ponto; se uma delas errar ou for interrompida, o ataque perde sua potência."
    },
    {
        book: "irmandade",
        level: "II",
        title: "Reversio",
        subtitle: "Encantamento da Restauração",
        incantation: "Quod fractum est, ad pristinam formam redeat!",
        effect: "Permite reconstruir completamente uma estrutura destruída, mesmo que seus componentes estejam espalhados, partidos ou reduzidos a fragmentos. Os três integrantes trabalham sobre a mesma construção, fazendo com que suas partes retornem às posições originais e recuperem sua integridade. O encantamento pode restaurar edifícios, pontes, muralhas e outras estruturas de grande porte, mas não recupera propriedades mágicas perdidas nem funciona sobre seres vivos. Quanto maior a destruição, maior o esforço exigido."
    },

    // ==========================================
    // GRIMÓRIO DAS IRMANDADES — NÍVEL III
    // ==========================================

    {
        book: "irmandade",
        level: "III",
        title: "Praesens Omnia",
        subtitle: "Encantamento da Presença Absoluta",
        incantation: "Quod longe est, ante oculos nostros appareat!",
        effect: "Permite que os três integrantes projetem uma manifestação mágica de si mesmos em qualquer lugar que consigam identificar, mesmo sem estarem fisicamente presentes. As projeções possuem aparência e voz próprias, podendo conversar, observar o ambiente e interagir com objetos. Não são ilusões simples: cada uma é sustentada pela energia de seu conjurador e pode ser percebida por outras pessoas e entidades. Entretanto, não possuem poderes sobrenaturais além daqueles necessários para a manifestação e desaparecem quando a conjuração é encerrada."
    },
    {
        book: "irmandade",
        level: "III",
        title: "Ruptura Concordiae",
        subtitle: "Encantamento da Ruptura Conjunta",
        incantation: "Omnis potentia surgat, caelum et terram concutiat!",
        effect: "Os três integrantes concentram suas energias em uma manifestação de grande escala, liberando uma onda mágica que se expande a partir do ponto de conjuração. A descarga atinge uma área extensa, destruindo construções, rompendo barreiras e arremessando tudo que estiver em seu alcance. Diferentemente de um ataque direcionado, sua força se espalha por toda a região atingida, tornando-o especialmente eficaz contra vários adversários ou estruturas ao mesmo tempo. A intensidade e o alcance dependem da energia reunida, e a conjuração exige que os três permaneçam concentrados até sua liberação."
    },

    // ==========================================
    // GRIMÓRIO DAS IRMANDADES — NÍVEL IV
    // ==========================================

    {
        book: "irmandade",
        level: "IV",
        title: "Dissolutio",
        subtitle: "Encantamento da Dissolução Arcana",
        incantation: "Nexus solvantur, incantamenta in nihilum cedant!",
        effect: "Os três integrantes unem suas energias para desfazer uma manifestação mágica já estabelecida. O encantamento permite desmontar proteções, selos, maldições, vínculos sobrenaturais e encantamentos complexos, mesmo aqueles sustentados por vários conjuradores ou por rituais antigos. Em vez de simplesmente interromper a magia, os integrantes desfazem sua estrutura até que o efeito deixe de existir. Quanto mais antigo, complexo ou poderoso for o encantamento, maior será o esforço necessário. Não funciona sobre dons inatos ou características naturais de seres sobrenaturais."
    },
    {
        book: "irmandade",
        level: "IV",
        title: "Interdictum",
        subtitle: "Encantamento da Interdição Mágica",
        incantation: "Magia sileat, potentia tua sub nostro sigillo cedat!",
        effect: "Os três integrantes lançam um selo conjunto sobre um alvo, bloqueando permanentemente sua capacidade de conjurar feitiços. Enquanto estiver sob o efeito, o alvo não consegue iniciar encantamentos, sustentar conjurações ou manipular energia mágica por meio de feitiços. O selo não retira dons inatos, não elimina poderes naturais e não desfaz manifestações que já estejam concluídas. Sua remoção exige a criação e execução de um contra-feitiço específico, desenvolvido para desfazer aquela interdição. Os integrantes só conseguem manter dois selos desse tipo ativos simultaneamente; tentar estabelecer um terceiro exige que um dos anteriores seja desfeito."
    },

    // ==========================================
    // GRIMÓRIO DAS IRMANDADES — NÍVEL V
    // ==========================================

    {
        book: "irmandade",
        level: "V",
        title: "Confuso Fatina",
        subtitle: "Encantamento da Tempestade Devastadora",
        incantation: "Caelum aperiatur, fulmina descendat, terra sub vi tempestatis tremat!",
        effect: "Os três integrantes invocam uma tempestade sobrenatural de proporções extraordinárias, capaz de se estender por uma cidade inteira. O céu é tomado por nuvens densas, ventos violentos e descargas elétricas de intensidade devastadora. As bruxas e feiticeiros podem determinar onde os raios atingirão, direcionando-os contra construções, grupos de adversários ou uma pessoa específica. Também conseguem concentrar toda a energia da tempestade em um único ponto, produzindo uma descarga extremamente potente, capaz de atravessar proteções mágicas, destruir estruturas e provocar danos fatais. A tempestade pode permanecer ativa enquanto os três sustentarem a conjuração, mas seu alcance e intensidade exigem uma quantidade imensa de energia. Uma utilização prolongada pode deixar os integrantes completamente exaustos."
    },
    {
        book: "irmandade",
        level: "V",
        title: "Fluctus Impulsa",
        subtitle: "Encantamento das Ondas de Choque",
        incantation: "Fluctus impulsa!",
        effect: "Os três integrantes concentram suas energias sobre um alvo e liberam ondas de choque mágicas sucessivas, que atingem seu corpo com força crescente. Os impactos podem interromper movimentos, provocar danos severos e, quando sustentados em conjunto, despedaçar criaturas de grande resistência física. Entretanto, o encantamento possui uma limitação específica: só funciona contra monstros ou bruxas e feiticeiros de Nível III ou inferior. Alvos acima desse nível não são afetados pela manifestação."
    },
    {
        book: "irmandade",
        level: "V",
        title: "Redemptio Vitae",
        subtitle: "Encantamento da Redenção da Vida",
        incantation: "Anima revocetur, vita iterum in corpus redeat!",
        effect: "Os três integrantes podem reviver uma pessoa falecida, restaurando a conexão entre corpo e alma e reativando suas funções vitais. Para que o encantamento funcione, a alma precisa existir e estar acessível, e o corpo deve ser capaz de recebê-la. Não é possível recuperar almas destruídas ou completamente aprisionadas. A conjuração exige um consumo extraordinário de energia mágica."
    }
];


// ==========================================
// CONFIGURAÇÕES DOS NÍVEIS
// ==========================================

const levelInfo = {
    I: {
        name: "Nível I — Noviciado",
        description: "Os primeiros encantamentos do aprendizado mágico. Conjurações fundamentais para desenvolver o controle e a familiaridade com a magia."
    },
    II: {
        name: "Nível II — Aprendiz",
        description: "Encantamentos que exigem maior domínio da energia mágica, permitindo manifestações mais complexas e aplicações variadas."
    },
    III: {
        name: "Nível III — Praticante",
        description: "Conjurações de maior complexidade, que exigem concentração, controle e experiência no uso da magia."
    },
    IV: {
        name: "Nível IV — Adepto",
        description: "Encantamentos de elevada complexidade e potência, capazes de produzir manifestações expressivas e efeitos difíceis de conter."
    },
    V: {
        name: "Nível V — Arquimago",
        description: "Os encantamentos mais complexos do grimório. Sua execução exige domínio avançado e reservas elevadas de energia mágica."
    }
};


// ==========================================
// ELEMENTOS DO HTML
// ==========================================

const spellList = document.getElementById("spellList");
const searchInput = document.getElementById("searchInput");
const recordCount = document.getElementById("recordCount");
const emptyState = document.getElementById("emptyState");
const levelIntro = document.getElementById("levelIntro");

const bookTabs = document.querySelectorAll(".book-tab");
const levelFilters = document.querySelectorAll(".level-filter");


// ==========================================
// ESTADO DOS FILTROS
// ==========================================

let currentBook = "comum";
let currentLevel = "all";
let currentSearch = "";


// ==========================================
// NOMES DOS GRIMÓRIOS
// ==========================================

function getBookName(book) {
    return book === "irmandade"
        ? "Grimório das Irmandades"
        : "Grimório Comum";
}


// ==========================================
// ATUALIZAÇÃO DA APRESENTAÇÃO DO NÍVEL
// ==========================================

function updateLevelIntro() {
    const bookName = getBookName(currentBook);

    if (currentLevel === "all") {
        levelIntro.innerHTML = `
            <span class="level-ornament">✧</span>

            <div>
                <p class="eyebrow">${bookName.toUpperCase()}</p>

                <h3>Todos os níveis</h3>

                <p>
                    Encantamentos disponíveis conforme o desenvolvimento
                    mágico do personagem.
                </p>
            </div>
        `;

        return;
    }

    const info = levelInfo[currentLevel];

    levelIntro.innerHTML = `
        <span class="level-ornament">✧</span>

        <div>
            <p class="eyebrow">${bookName.toUpperCase()}</p>

            <h3>${info.name}</h3>

            <p>${info.description}</p>
        </div>
    `;
}


// ==========================================
// CRIAÇÃO DOS CARTÕES
// ==========================================

function createSpellCard(spell, index) {
    return `
        <article class="spell-entry">

            <div class="entry-top">
                <span class="entry-index">
                    REGISTRO ${String(index + 1).padStart(2, "0")}
                </span>

                <span class="entry-level">
                    NÍVEL ${spell.level}
                </span>
            </div>

            <h4>${spell.title}</h4>

            <p class="spell-subtitle">
                ${spell.subtitle}
            </p>

            <p class="incantation">
                “${spell.incantation}”
            </p>

            <div class="effect-label">
                EFEITO
            </div>

            <p class="effect">
                ${spell.effect}
            </p>

        </article>
    `;
}


// ==========================================
// FILTRAGEM DOS FEITIÇOS
// ==========================================

function getFilteredSpells() {
    return spells.filter(spell => {

        const matchesBook = spell.book === currentBook;

        const matchesLevel =
            currentLevel === "all" ||
            spell.level === currentLevel;

        const searchContent = `
            ${spell.title}
            ${spell.subtitle}
            ${spell.incantation}
            ${spell.effect}
        `.toLowerCase();

        const matchesSearch =
            searchContent.includes(currentSearch.toLowerCase());

        return matchesBook && matchesLevel && matchesSearch;
    });
}


// ==========================================
// RENDERIZAÇÃO
// ==========================================

function renderSpells() {
    const filteredSpells = getFilteredSpells();

    updateLevelIntro();

    recordCount.textContent =
        `${filteredSpells.length} REGISTRO${filteredSpells.length === 1 ? "" : "S"}`;

    if (filteredSpells.length === 0) {
        spellList.innerHTML = "";
        emptyState.hidden = false;
        return;
    }

    emptyState.hidden = true;

    spellList.innerHTML = filteredSpells
        .map((spell, index) => createSpellCard(spell, index))
        .join("");
}


// ==========================================
// TROCA DE GRIMÓRIO
// ==========================================

bookTabs.forEach(tab => {
    tab.addEventListener("click", () => {

        currentBook = tab.dataset.book;
        currentLevel = "all";

        bookTabs.forEach(item => {
            item.classList.remove("active");
            item.setAttribute("aria-selected", "false");
        });

        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");

        levelFilters.forEach(filter => {
            filter.classList.remove("active");
        });

        document
            .querySelector('.level-filter[data-level="all"]')
            .classList.add("active");

        renderSpells();
    });
});


// ==========================================
// FILTRO POR NÍVEL
// ==========================================

levelFilters.forEach(filter => {
    filter.addEventListener("click", () => {

        currentLevel = filter.dataset.level;

        levelFilters.forEach(item => {
            item.classList.remove("active");
        });

        filter.classList.add("active");

        renderSpells();
    });
});


// ==========================================
// PESQUISA
// ==========================================

searchInput.addEventListener("input", event => {
    currentSearch = event.target.value.trim();
    renderSpells();
});


// ==========================================
// INICIALIZAÇÃO
// ==========================================

renderSpells();
