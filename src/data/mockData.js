// Mock Database for ASCENCE Construtora (Premium High-End Projects)

export const DEVELOPMENTS = [
  {
    id: "aura-residencial",
    name: "AURA Residencial",
    status: "Lançamento", // Lançamento, Em construção, Pronto para morar, Em breve
    neighborhood: "Batel",
    city: "Arapongas",
    priceRange: "Sob consulta",
    areaRange: "220m² a 380m²",
    bedrooms: "3 a 4",
    suites: "3 a 4",
    parkingSpots: "4",
    deliveryDate: "Dezembro 2028",
    constructionProgress: {
      total: 12,
      foundation: 45,
      structure: 0,
      finishing: 0
    },
    tagline: "A máxima expressão do design contemporâneo e sofisticação no Batel.",
    description: "O AURA Residencial é a máxima expressão da arquitetura contemporânea e do bem-estar. Um projeto exclusivo de torre única, no coração do Batel, com amplas esquadrias que privilegiam a iluminação natural e acabamentos de altíssimo padrão importados da Europa. Cada apartamento foi planejado como uma obra de arte viva, aliando materiais nobres, tecnologia de ponta e isolamento térmico e acústico absoluto.",
    aboutNeighborhood: "O Batel é a região mais nobre e cosmopolita de Arapongas. Com ruas arborizadas, reúne os melhores restaurantes de alta gastronomia, boutiques de luxo, centros de compras e galerias de arte da cidade. Morar no AURA é ter a conveniência de fazer tudo a pé, com total tranquilidade, segurança e exclusividade.",
    heroImage: "https://picsum.photos/seed/aura-hero/1600/1000",
    images: [
      "https://picsum.photos/seed/aura-exterior/1200/800",
      "https://picsum.photos/seed/aura-living/1200/800",
      "https://picsum.photos/seed/aura-suite/1200/800",
      "https://picsum.photos/seed/aura-pool/1200/800"
    ],
    amenities: [
      "Piscina coberta aquecida com raia de 25m",
      "Academia com equipamentos Technogym",
      "Espaço Gourmet assinado por chef renomado",
      "Wellness Center com sauna e sala de massagem",
      "Segurança preditiva com inteligência artificial",
      "Infraestrutura para abastecimento de veículos elétricos",
      "Elevador privativo com biometria e reconhecimento facial"
    ],
    plans: [
      {
        name: "Planta Tipo - Aura Garden",
        area: "220m² privativos",
        details: "3 suítes, living integrado com lareira ecológica, varanda gourmet com churrasqueira a carvão e dependência completa."
      },
      {
        name: "Planta Duplex - Aura Horizon",
        area: "380m² privativos",
        details: "4 suítes (sendo a master com closet ampliado e hidromassagem), pé-direito duplo no living, terraço privativo com spa."
      }
    ]
  },
  {
    id: "vanguard-cabral",
    name: "VANGUARD Cabral",
    status: "Em construção",
    neighborhood: "Cabral",
    city: "Arapongas",
    priceRange: "Sob consulta",
    areaRange: "180m² a 290m²",
    bedrooms: "3",
    suites: "3",
    parkingSpots: "3",
    deliveryDate: "Junho 2027",
    constructionProgress: {
      total: 64,
      foundation: 100,
      structure: 90,
      finishing: 22
    },
    tagline: "Onde o minimalismo contemporâneo encontra a exuberância da natureza.",
    description: "Linhas retas, concreto aparente, grandes vãos de vidro e madeira natural harmonizam de forma sublime no VANGUARD. Localizado no ponto mais alto do Cabral, este empreendimento proporciona uma vista panorâmica de tirar o fôlego de toda a cidade e da Serra do Mar. Um projeto que valoriza o espaço, o design biofílico e a flexibilidade total de plantas inteligentes.",
    aboutNeighborhood: "O Cabral é um bairro residencial charmoso e sofisticado, famoso pela sua tradicional tranquilidade e pelo seu polo gastronômico expressivo. O bairro combina a elegância de edifícios de altíssimo padrão com o verde dos parques e praças, proporcionando um refúgio calmo próximo ao centro financeiro.",
    heroImage: "https://picsum.photos/seed/vanguard-hero/1600/1000",
    images: [
      "https://picsum.photos/seed/vanguard-ext/1200/800",
      "https://picsum.photos/seed/vanguard-int/1200/800",
      "https://picsum.photos/seed/vanguard-lounge/1200/800",
      "https://picsum.photos/seed/vanguard-view/1200/800"
    ],
    amenities: [
      "Wine Lounge com adega climatizada exclusiva",
      "Quadra de tênis oficial em saibro",
      "Spa privativo com sauna seca e ofurô",
      "Horta orgânica comunitária e pomar nativo",
      "Espaço pet com equipamentos de agility",
      "Automação residencial completa controlável por voz"
    ],
    plans: [
      {
        name: "Planta Concept - Vanguard Linear",
        area: "180m² privativos",
        details: "3 suítes, cozinha americana integrada, rouparia, amplo living e janelas de piso a teto com vidros duplos acústicos."
      },
      {
        name: "Planta Premium - Vanguard Signature",
        area: "290m² privativos",
        details: "3 suítes com closet senhor e senhora, hall privativo, varanda panorâmica de 30m² integrada ao espaço gourmet."
      }
    ]
  },
  {
    id: "lharmonie-ecoville",
    name: "L'HARMONIE Ecoville",
    status: "Pronto para morar",
    neighborhood: "Ecoville",
    city: "Arapongas",
    priceRange: "Sob consulta",
    areaRange: "260m² a 450m²",
    bedrooms: "4",
    suites: "4",
    parkingSpots: "4 a 5",
    deliveryDate: "Entregue",
    constructionProgress: {
      total: 100,
      foundation: 100,
      structure: 100,
      finishing: 100
    },
    tagline: "O privilégio de viver integrado a uma floresta nativa privativa.",
    description: "O L'HARMONIE traz a serenidade clássica do Ecoville aliada a um design atemporal e extremamente sofisticado. Projetado com foco na integração ecológica, o empreendimento conta com um bosque nativo preservado de 4.000m². Cada apartamento oferece piso aquecido em toda a área íntima, aspiração central, e esquadrias de alta performance acústica alemã.",
    aboutNeighborhood: "O Ecoville é consagrado como a região mais verde e luxuosa de Arapongas. Conhecido pelos seus edifícios de altíssimo padrão dispostos em grandes lotes arborizados, o bairro é um ícone de qualidade de vida, ar puro, privacidade e elegância urbana.",
    heroImage: "https://picsum.photos/seed/lharmonie-hero/1600/1000",
    images: [
      "https://picsum.photos/seed/lharmonie-facade/1200/800",
      "https://picsum.photos/seed/lharmonie-balcony/1200/800",
      "https://picsum.photos/seed/lharmonie-kitchen/1200/800",
      "https://picsum.photos/seed/lharmonie-forest/1200/800"
    ],
    amenities: [
      "Bosque nativo privativo com trilha de caminhada",
      "Quadra de Beach Tennis profissional",
      "Salão de Festas com pé-direito triplo e lustre de cristal",
      "Piscina com borda infinita externa aquecida",
      "Praça do fogo (Fireplace) externa integrada",
      "Piso aquecido nos banheiros com controle individual digital"
    ],
    plans: [
      {
        name: "Planta Classic - L'Harmonie Soleil",
        area: "260m² privativos",
        details: "4 suítes, elevador privativo, varanda fechada com sistema retrátil (Reiki), cozinha gourmet espaçosa."
      },
      {
        name: "Planta Majestic - L'Harmonie Palace",
        area: "450m² privativos",
        details: "4 suítes amplas (suíte master com banheira de imersão), sala de cinema privativa, adega para 500 garrafas."
      }
    ]
  }
];

export const COMPANY_INFO = {
  name: "ASCENCE Construtora",
  foundedYear: 2012,
  aboutBrief: "Uma construtora e incorporadora focada na excelência construtiva, design contemporâneo e projetos sob medida para o público de alto padrão.",
  aboutFull: "Fundada em 2012, a ASCENCE Construtora nasceu com o firme propósito de redefinir o conceito de morar bem em Curitiba. Nossa trajetória é pautada pela busca incessante da perfeição em cada etapa da construção, desde a escolha estratégica dos terrenos em bairros tradicionais e valorizados até a curadoria cirúrgica de acabamentos de grifes internacionais. Acreditamos que a arquitetura deve transcender a barreira de quatro paredes e criar experiências que promovam harmonia, bem-estar e sofisticação.",
  manifest: [
    {
      title: "Artesania & Detalhe",
      description: "Tratamos cada obra com o cuidado e a precisão de uma joia lapidada à mão, onde cada acabamento e detalhe invisível faz a diferença."
    },
    {
      title: "Arquitetura Autoral",
      description: "Nossos parceiros são arquitetos renomados nacionais e globais que criam projetos que desafiam o tempo, aliando forma, luz e estética."
    },
    {
      title: "Solidez e Transparência",
      description: "Nossa reputação é baseada na entrega rigorosa dos prazos estabelecidos, engenharia de ponta e uma relação de transparência inabalável."
    }
  ],
  contact: {
    address: "R. Tucanos, 273 - Sl 02 - Centro, Arapongas - PR, 86700-070",
    phone: "(43) 99932-3043",
    whatsapp: "+5543999323043",
    whatsappLink: "https://wa.me/5543999323043?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20consultor%20da%20ASCENCE%20Construtora.",
    email: "contato@ascence.com.br",
    hours: "Segunda a Sexta, das 09h às 19h. Sábados e Domingos sob agendamento.",
    instagram: "https://www.instagram.com/ascence_construtora/"
  }
};

export const DIFFERENTIALS = [
  {
    id: "localizacao",
    title: "Localização Privilegiada",
    description: "Escolha minuciosa dos terrenos mais valorizados, ensolarados e seguros de Arapongas, garantindo valorização constante."
  },
  {
    id: "arquitetura",
    title: "Design Contemporâneo",
    description: "Projetos de fachadas autorais que misturam concreto, madeira, vidro e aço, integrando-se harmonicamente à paisagem."
  },
  {
    id: "acabamento",
    title: "Acabamento de Alto Padrão",
    description: "Uso exclusivo de mármores importados, louças e metais alemães, automação predial e pisos em madeira natural estruturada."
  },
  {
    id: "plantas",
    title: "Plantas Inteligentes",
    description: "Vãos livres colossais que permitem total readequação de layout de forma simplificada, de acordo com o estilo do morador."
  },
  {
    id: "funcionalidade",
    title: "Ambientes Funcionais",
    description: "Áreas comuns decoradas por designers de renome, pensadas para o uso efetivo diário com conforto supremo e sem excessos."
  },
  {
    id: "tecnologia",
    title: "Tecnologia Construtiva",
    description: "Lajes com isolamento acústico superior, vidros duplos insulados com controle térmico e infraestrutura de aspiração central."
  },
  {
    id: "atendimento",
    title: "Atendimento Consultivo",
    description: "Atendimento exclusivo com assessoria de engenharia e arquitetura interna para personalização completa do apartamento durante a obra."
  },
  {
    id: "seguranca",
    title: "Segurança e Solidez",
    description: "Processos certificados com auditorias externas e patrimônio de afetação em todas as obras para blindagem financeira total do cliente."
  }
];
