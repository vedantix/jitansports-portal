export const TOPIC_AREAS = ['Den Bosch', 'Rosmalen', 'Vught', 'Sint-Michielsgestel', 'Boxtel'];

const trainingImage = '/images/optimized/page-training-hero-960.jpg';
const massageImage = '/images/optimized/page-massage-hero-960.jpg';
const voedingImage = '/images/optimized/page-getfit-hero-960.jpg';

export const topicPillars = [
  {
    label: 'Personal Training',
    path: '/personal-training',
    description: '1-op-1 begeleiding voor afvallen, krachttraining, conditie, techniek en structuur.',
  },
  {
    label: 'Massage & Herstel',
    path: '/massage',
    description: 'Deep Tissue Massage, sportmassage en herstelbegeleiding voor een lichaam dat vrijer beweegt.',
  },
  {
    label: 'Voeding & Leefstijl',
    path: '/voedingsbegeleiding',
    description: 'Praktische voedingsbegeleiding voor afvallen, spieropbouw, energie en duurzame gewoontes.',
  },
];

const coreLinks = [
  ['Personal Training', '/personal-training'],
  ['Massage', '/massage'],
  ['Voedingsbegeleiding', '/voedingsbegeleiding'],
  ['Tarieven', '/tarieven'],
  ['Over Jitan', '/over-ons'],
  ['Contact', '/contact'],
];

const personalFaqs = [
  {
    question: 'Wat doet een personal trainer?',
    answer:
      'Een personal trainer geeft structuur, techniekcorrectie en persoonlijke begeleiding. Bij Jitan Sports kijk ik naar je doel, lichaam, agenda, voeding en herstel zodat je gericht traint en niet zomaar oefeningen afwerkt.',
  },
  {
    question: 'Hoe snel zie ik resultaat?',
    answer:
      'Veel klanten merken binnen enkele weken meer energie, betere houding en meer controle over hun training. Zichtbaar resultaat bij afvallen of spieropbouw hangt af van training, voeding, herstel en consistentie.',
  },
  {
    question: 'Hoeveel kost personal training?',
    answer:
      'De prijs hangt af van je traject, frequentie en doel. Op de tarievenpagina vind je de actuele opties. Je kunt starten met een gratis intake zodat we eerst kijken wat verstandig is.',
  },
  {
    question: 'Kan ik afvallen met personal training?',
    answer:
      'Ja. Afvallen werkt het beste met krachttraining, voedingsbegeleiding, lichaamsanalyse en begeleiding die je volhoudt. Jitan Sports combineert die onderdelen in een persoonlijk plan.',
  },
];

const massageFaqs = [
  {
    question: 'Wat is een deep tissue massage?',
    answer:
      'Deep Tissue Massage is een stevige behandeling voor diepere spierlagen en bindweefsel. De massage helpt vastzittende spanning verminderen en ondersteunt herstel bij rug-, nek-, schouder- en sportklachten.',
  },
  {
    question: 'Helpt massage tegen rugpijn?',
    answer:
      'Massage kan rugklachten verminderen wanneer spanning, overbelasting of beperkte mobiliteit een rol speelt. Bij Jitan Sports kijk ik ook naar training en belastbaarheid, zodat klachten niet steeds terugkomen.',
  },
  {
    question: 'Hoe vaak moet ik een massage nemen?',
    answer:
      'Bij acute spanning kan een korte reeks behandelingen helpen. Voor onderhoud en herstel is eens per drie tot zes weken voor veel klanten voldoende. Het juiste ritme hangt af van je klachten, training en stressniveau.',
  },
  {
    question: 'Wat is het verschil tussen sportmassage en deep tissue massage?',
    answer:
      'Sportmassage richt zich vaak op herstel rond training en spiervermoeidheid. Deep Tissue Massage werkt dieper op bindweefsel, blokkades en hardnekkige spanning. De beste keuze hangt af van je klacht en doel.',
  },
];

const voedingFaqs = [
  {
    question: 'Hoeveel eiwitten heb ik nodig?',
    answer:
      'Dat hangt af van je lichaamsgewicht, doel en training. Wie wil afvallen of spiermassa wil opbouwen heeft meestal meer eiwit nodig dan iemand die weinig traint. Bij Jitan Sports berekenen we dit praktisch en haalbaar.',
  },
  {
    question: 'Hoe val ik gezond af?',
    answer:
      'Gezond afvallen draait om een haalbaar energietekort, voldoende eiwitten, krachttraining, dagelijkse beweging en slaap. Geen crashdieet, maar een ritme dat bij je leven past.',
  },
  {
    question: 'Moet ik calorieen tellen?',
    answer:
      'Niet altijd. Calorieen tellen kan tijdelijk inzicht geven, maar veel klanten werken beter met porties, vaste eetmomenten en duidelijke keuzes. Het doel is dat je begrijpt wat je doet.',
  },
  {
    question: 'Welke voeding helpt bij herstel?',
    answer:
      'Voor herstel heb je voldoende eiwitten, koolhydraten, vocht, micronutrienten en regelmaat nodig. Na zware training helpt een goede maaltijd vaak meer dan een losse shake zonder structuur.',
  },
];

const planSteps = [
  'We starten met een gratis intake waarin je doel, klachten, agenda en ervaring helder worden.',
  'Daarna maak ik een praktisch plan voor training, massage of voeding dat past bij jouw week.',
  'We meten voortgang, sturen bij en bouwen stap voor stap aan een lichaam dat sterker en vrijer voelt.',
];

const makePage = ({
  path,
  pillar,
  title,
  h1 = title,
  seoTitle,
  description,
  hero,
  image,
  serviceType,
  summary,
  intro,
  sections,
  benefits,
  faqs,
  relatedLinks = [],
}) => ({
  path,
  pillar,
  title,
  h1,
  seoTitle,
  description,
  hero,
  image,
  serviceType,
  summary,
  intro,
  sections,
  benefits,
  process: planSteps,
  faqs,
  relatedLinks: [...relatedLinks, ...coreLinks],
});

export const topicPages = [
  makePage({
    path: '/voedingsbegeleiding',
    pillar: 'Voeding & Leefstijl',
    title: 'Voedingsbegeleiding',
    h1: 'Voedingsbegeleiding voor een leefstijl die blijft werken',
    seoTitle: 'Voedingsbegeleiding Den Bosch | Jitan Sports',
    description:
      'Voedingsbegeleiding bij Jitan Sports in Den Bosch voor afvallen, spieropbouw, herstel en een gezonde leefstijl zonder crashdieet.',
    hero: 'Praktische begeleiding met voedingsschema’s, lichaamsanalyse en duidelijke keuzes die bij jouw leven passen.',
    image: voedingImage,
    serviceType: 'Voedingsbegeleiding',
    summary: [
      'Jitan Sports is een praktijk in Den Bosch gespecialiseerd in personal training, deep tissue massage, sportmassage en voedingsbegeleiding.',
      'Voedingsbegeleiding bij Jitan draait om afvallen, spieropbouw, herstel en een gezonde leefstijl die je volhoudt.',
    ],
    intro:
      'Voeding hoeft niet ingewikkeld te zijn. Je hebt vooral inzicht, ritme en iemand nodig die met je meekijkt zonder oordeel.',
    sections: [
      {
        title: 'Waarom voeding zoveel bepaalt',
        text:
          'Training geeft de prikkel, maar voeding bepaalt voor een groot deel of je lichaam kan herstellen, sterker wordt en vet verliest. Daarom is voeding bij Jitan Sports geen losse bijlage, maar onderdeel van de complete aanpak.',
      },
      {
        title: 'Voor wie dit geschikt is',
        text:
          'Voor klanten die willen afvallen, aankomen, spiermassa opbouwen, minder snaaien, beter herstellen of eindelijk duidelijkheid willen over wat zij dagelijks nodig hebben.',
      },
      {
        title: 'Werkwijze van Jitan',
        text:
          'We starten met meten, bespreken je ritme en maken daarna een plan dat past bij je gezin, werk, sportmomenten en voorkeuren. Geen perfect plaatje, wel een aanpak die je kunt blijven herhalen.',
      },
    ],
    benefits: ['Voedingsschema op maat', 'Lichaamsanalyse', 'Digitaal weegrapport', 'Meer energie', 'Betere herstelbasis', 'Minder twijfel over eten'],
    faqs: voedingFaqs,
    relatedLinks: [
      ['Gezond afvallen', '/gezond-afvallen'],
      ['Voeding voor spieropbouw', '/voeding-voor-spieropbouw'],
      ['Voeding en herstel', '/voeding-en-herstel'],
    ],
  }),
  makePage({
    path: '/afvallen-met-personal-training',
    pillar: 'Personal Training',
    title: 'Afvallen met personal training',
    h1: 'Afvallen met personal training in Den Bosch',
    seoTitle: 'Afvallen met Personal Training Den Bosch | Jitan Sports',
    description:
      'Afvallen met personal training bij Jitan Sports: krachttraining, voedingsbegeleiding, coaching en metingen voor blijvend resultaat.',
    hero: 'Afvallen zonder crashdieet, met krachttraining en begeleiding die past bij jouw lichaam en week.',
    image: trainingImage,
    serviceType: 'Personal Training',
    summary: [
      'Afvallen met personal training bij Jitan Sports betekent trainen met structuur, beter eten en voortgang meten.',
      'De focus ligt op vetverlies, spierbehoud, energie en een gezonde leefstijl in Den Bosch en omgeving.',
    ],
    intro:
      'De meeste mensen weten best dat ze meer moeten bewegen en beter moeten eten. Het lastige is volhouden, bijsturen en weten wat voor jouw lichaam werkt.',
    sections: [
      {
        title: 'Waarom personal training werkt bij afvallen',
        text:
          'Je krijgt een concreet plan, iemand die je techniek bewaakt en begeleiding op momenten waarop je normaal zou stoppen. Krachttraining helpt spiermassa behouden terwijl je vet verliest.',
      },
      {
        title: 'Voor wie het geschikt is',
        text:
          'Voor starters, drukke professionals, mensen na hun 40e en iedereen die al vaker is begonnen maar geen blijvend resultaat kreeg.',
      },
      {
        title: 'Resultaat meten',
        text:
          'We kijken niet alleen naar gewicht, maar ook naar energie, kracht, houding, vetpercentage en hoe je kleding zit. Dat geeft een eerlijker beeld dan de weegschaal alleen.',
      },
    ],
    benefits: ['Vetverlies met behoud van spiermassa', 'Meer kracht', 'Betere conditie', 'Voedingsschema op maat', 'Lichaamsanalyse', 'Accountability'],
    faqs: personalFaqs,
    relatedLinks: [
      ['Gezond afvallen', '/gezond-afvallen'],
      ['Personal Trainer Den Bosch', '/personal-trainer-den-bosch'],
      ['Get Fit Programma', '/get-fit'],
    ],
  }),
  makePage({
    path: '/spiermassa-opbouwen',
    pillar: 'Personal Training',
    title: 'Spiermassa opbouwen',
    h1: 'Spiermassa opbouwen met persoonlijke begeleiding',
    seoTitle: 'Spiermassa Opbouwen Den Bosch | Jitan Sports',
    description:
      'Spiermassa opbouwen met personal training, vintage krachttraining, voeding en herstelbegeleiding bij Jitan Sports.',
    hero: 'Sterker worden met basisoefeningen, goede techniek en voeding die je training ondersteunt.',
    image: trainingImage,
    serviceType: 'Krachttraining',
    summary: [
      'Spiermassa opbouwen vraagt om progressieve krachttraining, voldoende voeding en goed herstel.',
      'Jitan Sports begeleidt klanten in Den Bosch met duidelijke techniek, opbouw en voedingsbegeleiding.',
    ],
    intro:
      'Spieren groeien niet door willekeurige oefeningen. Je lichaam heeft herhaling, progressie en herstel nodig.',
    sections: [
      {
        title: 'Waarom vintage krachttraining werkt',
        text:
          'Ik werk graag met duidelijke basisoefeningen. Denk aan duwen, trekken, squatten, heupbuigen en dragen. Simpel in opzet, technisch precies en heel effectief.',
      },
      {
        title: 'Voeding voor spiergroei',
        text:
          'Zonder genoeg energie en eiwitten blijft spieropbouw achter. Daarom kijken we naar maaltijden, timing, eiwitinname en herstel.',
      },
      {
        title: 'Rustig zwaarder worden',
        text:
          'Progressie hoeft niet wild. We verhogen stap voor stap de belasting zodat je sterker wordt zonder je gewrichten onnodig te slopen.',
      },
    ],
    benefits: ['Meer kracht', 'Betere houding', 'Spiermassa behouden na je 40e', 'Techniekcorrectie', 'Voedingsplan', 'Minder blessurerisico'],
    faqs: personalFaqs,
    relatedLinks: [
      ['Krachttraining beginners', '/krachttraining-beginners'],
      ['Voeding voor spieropbouw', '/voeding-voor-spieropbouw'],
      ['Personal Training', '/personal-training'],
    ],
  }),
  makePage({
    path: '/krachttraining-beginners',
    pillar: 'Personal Training',
    title: 'Krachttraining voor beginners',
    h1: 'Krachttraining voor beginners',
    seoTitle: 'Krachttraining voor Beginners Den Bosch | Jitan Sports',
    description:
      'Begin veilig met krachttraining bij Jitan Sports. Persoonlijke begeleiding, techniek, opbouw en vertrouwen voor starters.',
    hero: 'Geen ingewikkelde sportschooltaal, maar rustig leren bewegen, sterker worden en vertrouwen opbouwen.',
    image: trainingImage,
    serviceType: 'Personal Training',
    summary: [
      'Krachttraining voor beginners bij Jitan Sports is rustige, persoonlijke begeleiding voor mensen die veilig willen starten.',
      'De focus ligt op techniek, vertrouwen, kracht, mobiliteit en een gezonde leefstijl.',
    ],
    intro:
      'Je hoeft niet fit te zijn om te starten. Je moet alleen bereid zijn om stap voor stap te leren.',
    sections: [
      {
        title: 'Eerst techniek, dan gewicht',
        text:
          'We bouwen oefeningen rustig op. Je leert hoe je moet ademen, staan, aanspannen en bewegen voordat we zwaarder gaan.',
      },
      {
        title: 'Voor wie dit ideaal is',
        text:
          'Voor mensen die drempelvrees hebben, lang niets hebben gedaan, na klachten opnieuw willen starten of begeleiding willen zonder drukte om zich heen.',
      },
      {
        title: 'Een basis voor de rest van je leven',
        text:
          'Goede krachttraining helpt bij houding, energie, belastbaarheid en zelfvertrouwen. Je bouwt een fundament dat je ook buiten de training merkt.',
      },
    ],
    benefits: ['Veilig starten', 'Duidelijke techniek', 'Meer vertrouwen', 'Rustige opbouw', 'Persoonlijke correcties', 'Training aan huis of outdoor'],
    faqs: personalFaqs,
    relatedLinks: [
      ['Personal Training', '/personal-training'],
      ['Personal training 50 plus', '/personal-training-50-plus'],
      ['Hoe vaak trainen per week', '/hoe-vaak-trainen-per-week'],
    ],
  }),
  makePage({
    path: '/personal-training-50-plus',
    pillar: 'Personal Training',
    title: 'Personal training 50 plus',
    h1: 'Personal training voor 50 plus',
    seoTitle: 'Personal Training 50 Plus Den Bosch | Jitan Sports',
    description:
      'Personal training voor 50-plussers die sterker, fitter en mobieler willen worden met veilige krachttraining en herstelbegeleiding.',
    hero: 'Sterker en fitter worden na je 50e, met aandacht voor techniek, herstel en duurzame energie.',
    image: trainingImage,
    serviceType: 'Personal Training 50 plus',
    summary: [
      'Personal training 50 plus bij Jitan Sports helpt klanten sterker, mobieler en energieker worden.',
      'De aanpak combineert vintage krachttraining, voedingsbegeleiding en herstel met aandacht voor je lichaam.',
    ],
    intro:
      'Na je 50e kun je nog steeds veel kracht, conditie en zelfvertrouwen opbouwen. Je lichaam vraagt alleen om een slimmere aanpak.',
    sections: [
      {
        title: 'Waarom krachttraining belangrijker wordt',
        text:
          'Spiermassa, balans en mobiliteit zijn geen luxe. Ze bepalen hoe vrij je beweegt, hoe makkelijk dagelijkse dingen gaan en hoe vitaal je je voelt.',
      },
      {
        title: 'Rustig, veilig en persoonlijk',
        text:
          'We starten op jouw niveau. Geen schreeuwende groepsles, maar rustige begeleiding, heldere uitleg en oefeningen die bij je lichaam passen.',
      },
      {
        title: 'Herstel hoort erbij',
        text:
          'Deep Tissue Massage en sportmassage kunnen helpen als rug, nek of schouders vastzitten. Zo blijft training haalbaar en prettig.',
      },
    ],
    benefits: ['Meer energie', 'Sterkere spieren', 'Betere mobiliteit', 'Minder onzekerheid', 'Veiliger bewegen', 'Persoonlijke begeleiding'],
    faqs: personalFaqs,
    relatedLinks: [
      ['Personal Training na je 40e', '/blog/personal-training-na-je-40e'],
      ['Deep Tissue Massage', '/deep-tissue-massage'],
      ['Voedingsbegeleiding', '/voedingsbegeleiding'],
    ],
  }),
  makePage({
    path: '/personal-training-voor-drukke-ondernemers',
    pillar: 'Personal Training',
    title: 'Personal training voor drukke ondernemers',
    h1: 'Personal training voor drukke ondernemers',
    seoTitle: 'Personal Training voor Ondernemers Den Bosch | Jitan Sports',
    description:
      'Personal training voor ondernemers en drukke professionals in Den Bosch die fitter willen worden zonder ingewikkeld schema.',
    hero: 'Efficient trainen met een plan dat past tussen werk, gezin, afspraken en herstel.',
    image: trainingImage,
    serviceType: 'Personal Training',
    summary: [
      'Personal training voor drukke ondernemers bij Jitan Sports draait om efficient trainen, betere energie en minder fysieke spanning.',
      'Jitan helpt met planning, krachttraining, voeding en herstel in Den Bosch en omgeving.',
    ],
    intro:
      'Als je agenda vol zit, moet je plan simpel en scherp zijn. Niet meer opties, maar minder twijfel.',
    sections: [
      {
        title: 'Waarom ondernemers begeleiding nodig hebben',
        text:
          'Veel ondernemers schuiven gezondheid vooruit. Tot energie, rugklachten of stress het werk gaan raken. Met vaste begeleiding staat je lichaam weer in de agenda.',
      },
      {
        title: 'Compact en doelgericht',
        text:
          'We kiezen trainingen die veel opleveren in beperkte tijd. Kracht, conditie, mobiliteit en herstel krijgen een plek zonder dat je hele week om moet.',
      },
      {
        title: 'Voeding zonder gedoe',
        text:
          'Je krijgt praktische keuzes voor drukke dagen, afspraken buiten de deur en avonden waarop koken niet ideaal loopt.',
      },
    ],
    benefits: ['Meer energie op werkdagen', 'Minder rug- en nekspanning', 'Haalbare planning', 'Korte lijnen', 'Voeding voor drukke dagen', 'Betere stressbuffer'],
    faqs: personalFaqs,
    relatedLinks: [
      ['Voeding voor drukke professionals', '/voeding-voor-drukke-professionals'],
      ['Massage bij nekklachten', '/massage-bij-nekklachten'],
      ['Tarieven', '/tarieven'],
    ],
  }),
  makePage({
    path: '/hoe-vaak-trainen-per-week',
    pillar: 'Personal Training',
    title: 'Hoe vaak trainen per week?',
    h1: 'Hoe vaak moet je trainen per week?',
    seoTitle: 'Hoe vaak trainen per week? | Jitan Sports',
    description:
      'Hoe vaak moet je trainen voor afvallen, kracht of conditie? Praktisch advies van Jitan Sports over training, herstel en consistentie.',
    hero: 'Het beste schema is niet het zwaarste schema, maar het schema dat je lichaam aankan en jij volhoudt.',
    image: trainingImage,
    serviceType: 'Personal Training',
    summary: [
      'Hoe vaak je moet trainen hangt af van je doel, niveau, herstel en agenda.',
      'Bij Jitan Sports starten veel klanten met een tot twee goede sessies per week, gecombineerd met voeding en dagelijkse beweging.',
    ],
    intro:
      'Meer trainen is niet automatisch beter. Je lichaam moet de prikkel kunnen verwerken.',
    sections: [
      {
        title: 'Voor afvallen',
        text:
          'Een tot twee personal trainings per week kan al genoeg zijn als voeding en dagelijkse beweging goed staan. Kwaliteit en herhaling winnen van losse motivatiepieken.',
      },
      {
        title: 'Voor kracht en spieropbouw',
        text:
          'Twee tot drie prikkels per week werkt vaak goed, maar de opbouw moet passen bij je ervaring en herstel.',
      },
      {
        title: 'Voor herstel en pijnvrij bewegen',
        text:
          'Soms moet je tijdelijk minder hard trainen en meer werken aan mobiliteit, techniek en massage. Dat is geen stap terug, maar slim bouwen.',
      },
    ],
    benefits: ['Duidelijk trainingsritme', 'Minder overbelasting', 'Betere progressie', 'Meer herstel', 'Haalbaar schema', 'Persoonlijke opbouw'],
    faqs: personalFaqs,
    relatedLinks: [
      ['Herstel na training', '/herstel-na-training'],
      ['Waarom herstel belangrijk is', '/blog/waarom-herstel-net-zo-belangrijk-is-als-trainen'],
      ['Personal Training', '/personal-training'],
    ],
  }),
  makePage({
    path: '/deep-tissue-massage',
    pillar: 'Massage & Herstel',
    title: 'Deep Tissue Massage',
    h1: 'Deep Tissue Massage',
    seoTitle: 'Deep Tissue Massage | Jitan Sports Den Bosch',
    description:
      'Deep Tissue Massage bij Jitan Sports voor vastzittende spieren, bindweefsel, rugklachten, nekklachten en herstel.',
    hero: 'Diepe, rustige druk voor hardnekkige spanning, blokkades en spieren die niet vanzelf loslaten.',
    image: massageImage,
    serviceType: 'Deep Tissue Massage',
    summary: [
      'Deep Tissue Massage bij Jitan Sports richt zich op diepe spierlagen, bindweefsel en hardnekkige spanning.',
      'De behandeling wordt vaak ingezet bij rugklachten, nekklachten, sportbelasting en herstel in Den Bosch en omgeving.',
    ],
    intro:
      'Deep Tissue Massage is niet bedoeld om zomaar hard te masseren. Het gaat om gericht werken op plekken waar spanning is opgebouwd.',
    sections: [
      {
        title: 'Wat is deep tissue massage?',
        text:
          'Met rustige, stevige druk werk ik laag voor laag door gespannen weefsel. Zo krijgt het lichaam ruimte om te ontspannen en beter te bewegen.',
      },
      {
        title: 'Wanneer toepassen',
        text:
          'Bij terugkerende rug-, nek- of schouderklachten, stijve heupen, sportbelasting en spanning die al langer aanwezig is.',
      },
      {
        title: 'Combinatie met training',
        text:
          'Massage vermindert spanning. Krachttraining bouwt belastbaarheid op. Samen geeft dat vaak een duurzamer resultaat.',
      },
    ],
    benefits: ['Minder spierspanning', 'Meer bewegingsvrijheid', 'Betere doorbloeding', 'Ondersteuning bij herstel', 'Gericht op bindweefsel', 'Aan huis mogelijk'],
    faqs: massageFaqs,
    relatedLinks: [
      ['Deep Tissue Massage Den Bosch', '/deep-tissue-massage-den-bosch'],
      ['Massage bij rugklachten', '/massage-bij-rugklachten'],
      ['Massage bij nekklachten', '/massage-bij-nekklachten'],
    ],
  }),
  makePage({
    path: '/sportmassage',
    pillar: 'Massage & Herstel',
    title: 'Sportmassage',
    h1: 'Sportmassage',
    seoTitle: 'Sportmassage | Jitan Sports Den Bosch',
    description:
      'Sportmassage bij Jitan Sports voor herstel, vermoeide spieren, blessurepreventie en betere belastbaarheid.',
    hero: 'Voor sporters en actieve mensen die sneller willen herstellen en minder vast willen lopen.',
    image: massageImage,
    serviceType: 'Sportmassage',
    summary: [
      'Sportmassage bij Jitan Sports ondersteunt herstel na training, vermindert spierspanning en helpt overbelasting eerder signaleren.',
      'De behandeling is geschikt voor sporters, actieve mensen en klanten die veel fysieke belasting ervaren.',
    ],
    intro:
      'Sportmassage is praktisch herstelwerk. Je gebruikt het niet alleen als er pijn is, maar ook om je lichaam soepel en belastbaar te houden.',
    sections: [
      {
        title: 'Wat doet sportmassage?',
        text:
          'Sportmassage stimuleert doorbloeding, vermindert spierspanning en helpt je lichaam na training beter ontspannen.',
      },
      {
        title: 'Voor sporters en recreanten',
        text:
          'Je hoeft geen topsporter te zijn. Ook hardlopers, krachtsporters, voetballers en mensen met actief werk hebben baat bij herstelmassage.',
      },
      {
        title: 'Onderdeel van een herstelplan',
        text:
          'Ik kijk naar je training, klachten en herstel. Zo wordt sportmassage geen losse behandeling, maar onderdeel van je vooruitgang.',
      },
    ],
    benefits: ['Sneller herstel', 'Minder spierpijn', 'Betere mobiliteit', 'Blessurepreventie', 'Onderhoud voor sporters', 'Persoonlijke druk'],
    faqs: massageFaqs,
    relatedLinks: [
      ['Sportmassage Den Bosch', '/sportmassage-den-bosch'],
      ['Massage voor sporters', '/massage-voor-sporters'],
      ['Herstel na training', '/herstel-na-training'],
    ],
  }),
  makePage({
    path: '/massage-bij-rugklachten',
    pillar: 'Massage & Herstel',
    title: 'Massage bij rugklachten',
    h1: 'Massage bij rugklachten',
    seoTitle: 'Massage bij Rugklachten Den Bosch | Jitan Sports',
    description:
      'Massage bij rugklachten door Jitan Sports. Deep Tissue Massage, sportmassage en hersteladvies voor spanning en beperkte mobiliteit.',
    hero: 'Gerichte massage voor een rug die vastzit, moe voelt of steeds terugkerende spanning geeft.',
    image: massageImage,
    serviceType: 'Deep Tissue Massage',
    summary: [
      'Massage bij rugklachten bij Jitan Sports richt zich op spierspanning, bindweefsel, houding en herstel.',
      'Jitan combineert massage waar nodig met personal training om de rug sterker en belastbaarder te maken.',
    ],
    intro:
      'Rugklachten komen vaak terug als je alleen de pijn behandelt. Daarom kijk ik naar spanning, beweging en belastbaarheid.',
    sections: [
      {
        title: 'Waar rugspanning vandaan kan komen',
        text:
          'Veel zitten, stress, verkeerd tillen, te weinig kracht of te snel opbouwen in training kunnen allemaal bijdragen.',
      },
      {
        title: 'Wat massage doet',
        text:
          'Met diepe druk en rustig tempo werken we aan gespannen spieren en bindweefsel rond rug, heupen en schouders.',
      },
      {
        title: 'Wanneer training nodig is',
        text:
          'Als zwakke schakels meespelen, helpt krachttraining om je rug beter te ondersteunen in het dagelijks leven.',
      },
    ],
    benefits: ['Minder rugspanning', 'Meer bewegingsruimte', 'Betere houding', 'Aanpak van heupen en schouders', 'Hersteladvies', 'Aan huis mogelijk'],
    faqs: massageFaqs,
    relatedLinks: [
      ['Deep Tissue Massage', '/deep-tissue-massage'],
      ['Personal Training', '/personal-training'],
      ['Massage aan huis Den Bosch', '/massage-aan-huis-den-bosch'],
    ],
  }),
  makePage({
    path: '/massage-bij-nekklachten',
    pillar: 'Massage & Herstel',
    title: 'Massage bij nekklachten',
    h1: 'Massage bij nekklachten',
    seoTitle: 'Massage bij Nekklachten Den Bosch | Jitan Sports',
    description:
      'Massage bij nekklachten, schouderklachten en spanning door werkhouding of stress. Deep Tissue Massage bij Jitan Sports.',
    hero: 'Voor nek en schouders die vastzitten door stress, schermwerk, training of langdurige spanning.',
    image: massageImage,
    serviceType: 'Deep Tissue Massage',
    summary: [
      'Massage bij nekklachten bij Jitan Sports helpt spanning in nek, schouders en bovenrug verminderen.',
      'De behandeling is geschikt bij schermwerk, stress, sportbelasting en terugkerende spierspanning.',
    ],
    intro:
      'Nekklachten zijn zelden alleen een nekprobleem. Schouders, bovenrug, ademhaling en stress doen vaak mee.',
    sections: [
      {
        title: 'Waarom nekspanning blijft hangen',
        text:
          'Veel mensen trekken schouders onbewust op, zitten lang in dezelfde houding of herstellen slecht na drukke weken.',
      },
      {
        title: 'Gericht losmaken',
        text:
          'Ik behandel nek, schouders en bovenrug met druk die stevig genoeg is om verschil te maken, maar afgestemd blijft op jouw lichaam.',
      },
      {
        title: 'Voorkomen dat het terugkomt',
        text:
          'Met simpele mobiliteit, krachttraining en betere gewoontes kun je nekklachten vaak beter onder controle houden.',
      },
    ],
    benefits: ['Minder nekspanning', 'Soepelere schouders', 'Meer ontspanning', 'Ondersteuning bij hoofdpijn door spanning', 'Praktische oefeningen', 'Massage aan huis'],
    faqs: massageFaqs,
    relatedLinks: [
      ['Deep Tissue Massage', '/deep-tissue-massage'],
      ['Massage bij rugklachten', '/massage-bij-rugklachten'],
      ['Personal training voor ondernemers', '/personal-training-voor-drukke-ondernemers'],
    ],
  }),
  makePage({
    path: '/massage-voor-sporters',
    pillar: 'Massage & Herstel',
    title: 'Massage voor sporters',
    h1: 'Massage voor sporters',
    seoTitle: 'Massage voor Sporters Den Bosch | Jitan Sports',
    description:
      'Massage voor sporters bij Jitan Sports. Sportmassage en Deep Tissue Massage voor herstel, mobiliteit en belastbaarheid.',
    hero: 'Herstel sneller, train slimmer en signaleer overbelasting voordat het je progressie remt.',
    image: massageImage,
    serviceType: 'Sportmassage',
    summary: [
      'Massage voor sporters bij Jitan Sports ondersteunt herstel, mobiliteit en blessurepreventie.',
      'Sportmassage en Deep Tissue Massage worden afgestemd op je training, klachten en wedstrijd- of trainingsbelasting.',
    ],
    intro:
      'Als je serieus traint, moet herstel serieus meegenomen worden. Massage helpt je lichaam signalen eerder verstaan.',
    sections: [
      {
        title: 'Voor welke sporters',
        text:
          'Krachtsporters, hardlopers, voetballers, recreatieve sporters en mensen die hun lichaam wekelijks flink belasten.',
      },
      {
        title: 'Voor of na training',
        text:
          'Afhankelijk van je doel kiezen we voor onderhoud, herstel na belasting of gerichte behandeling van een vast gebied.',
      },
      {
        title: 'Combineren met personal training',
        text:
          'Omdat ik ook trainer ben, kan ik spanning die ik voel vertalen naar betere oefeningen, techniek en opbouw.',
      },
    ],
    benefits: ['Beter herstel', 'Minder overbelasting', 'Meer mobiliteit', 'Gericht sportadvies', 'Onderhoud tussen trainingen', 'Aanpak per spiergroep'],
    faqs: massageFaqs,
    relatedLinks: [
      ['Sportmassage', '/sportmassage'],
      ['Herstel na training', '/herstel-na-training'],
      ['Hoe vaak trainen per week', '/hoe-vaak-trainen-per-week'],
    ],
  }),
  makePage({
    path: '/herstel-na-training',
    pillar: 'Massage & Herstel',
    title: 'Herstel na training',
    h1: 'Herstel na training',
    seoTitle: 'Herstel na Training | Jitan Sports Den Bosch',
    description:
      'Herstel na training verbeteren met massage, voeding, slaap en slimme trainingsopbouw bij Jitan Sports.',
    hero: 'Je wordt niet sterker tijdens de training, maar in het herstel erna.',
    image: massageImage,
    serviceType: 'Herstelbegeleiding',
    summary: [
      'Herstel na training vraagt om slaap, voeding, rust, mobiliteit en soms massage.',
      'Jitan Sports combineert personal training, sportmassage, Deep Tissue Massage en voedingsbegeleiding voor duurzame progressie.',
    ],
    intro:
      'Hard werken is mooi, maar zonder herstel blijft je lichaam in de rem staan.',
    sections: [
      {
        title: 'Signalen van te weinig herstel',
        text:
          'Blijvende spierpijn, minder energie, slechter slapen, terugkerende pijntjes en dalende motivatie kunnen signalen zijn.',
      },
      {
        title: 'De rol van voeding',
        text:
          'Eiwitten, koolhydraten, vocht en regelmaat helpen je spieren herstellen en je energie terugbrengen.',
      },
      {
        title: 'Massage als hersteltool',
        text:
          'Sportmassage en Deep Tissue Massage kunnen spanning verminderen en je lichaam helpen sneller tot rust komen.',
      },
    ],
    benefits: ['Minder spierpijn', 'Betere slaapfocus', 'Meer trainingskwaliteit', 'Voedingsadvies', 'Massage op maat', 'Minder blessurerisico'],
    faqs: massageFaqs,
    relatedLinks: [
      ['Voeding en herstel', '/voeding-en-herstel'],
      ['Sportmassage', '/sportmassage'],
      ['Waarom herstel belangrijk is', '/blog/waarom-herstel-net-zo-belangrijk-is-als-trainen'],
    ],
  }),
  makePage({
    path: '/gezond-afvallen',
    pillar: 'Voeding & Leefstijl',
    title: 'Gezond afvallen',
    h1: 'Gezond afvallen zonder crashdieet',
    seoTitle: 'Gezond Afvallen Den Bosch | Jitan Sports',
    description:
      'Gezond afvallen met voedingsbegeleiding, personal training en lichaamsanalyse bij Jitan Sports in Den Bosch.',
    hero: 'Afvallen op een manier die je lichaam sterker maakt en je leven niet onnodig ingewikkeld maakt.',
    image: voedingImage,
    serviceType: 'Voedingsbegeleiding',
    summary: [
      'Gezond afvallen bij Jitan Sports betekent vet verliezen met behoud van energie, spiermassa en leefplezier.',
      'De aanpak combineert voedingsbegeleiding, personal training, lichaamsanalyse en coaching.',
    ],
    intro:
      'Een crashdieet is makkelijk te starten en moeilijk vol te houden. Gezond afvallen vraagt om duidelijkheid en ritme.',
    sections: [
      {
        title: 'Wat gezond afvallen betekent',
        text:
          'Je eet genoeg om te functioneren, voldoende eiwitten om spieren te behouden en kiest voor een energietekort dat haalbaar blijft.',
      },
      {
        title: 'Meten zonder obsessie',
        text:
          'We gebruiken metingen om te leren, niet om je gek te maken. Gewicht, vetpercentage, spiermassa en energie vertellen samen het verhaal.',
      },
      {
        title: 'Training ondersteunt je lichaam',
        text:
          'Krachttraining helpt je lichaam vorm houden en maakt afvallen vaak makkelijker vol te houden.',
      },
    ],
    benefits: ['Geen crashdieet', 'Meer structuur', 'Minder jojo-effect', 'Krachttraining', 'Lichaamsanalyse', 'Persoonlijke coaching'],
    faqs: voedingFaqs,
    relatedLinks: [
      ['Afvallen met personal training', '/afvallen-met-personal-training'],
      ['Get Fit Programma', '/get-fit'],
      ['Voedingsbegeleiding Den Bosch', '/voedingsbegeleiding-den-bosch'],
    ],
  }),
  makePage({
    path: '/eiwitrijke-voeding',
    pillar: 'Voeding & Leefstijl',
    title: 'Eiwitrijke voeding',
    h1: 'Eiwitrijke voeding voor kracht en herstel',
    seoTitle: 'Eiwitrijke Voeding | Jitan Sports',
    description:
      'Eiwitrijke voeding voor afvallen, spieropbouw en herstel. Praktische begeleiding van Jitan Sports.',
    hero: 'Eiwitten zijn geen hype, maar een bouwsteen voor herstel, verzadiging en spierbehoud.',
    image: voedingImage,
    serviceType: 'Voedingsbegeleiding',
    summary: [
      'Eiwitrijke voeding helpt bij spierherstel, verzadiging, spieropbouw en gezond afvallen.',
      'Jitan Sports vertaalt eiwitadvies naar gewone maaltijden die passen bij jouw dag.',
    ],
    intro:
      'Veel mensen eten minder eiwit dan ze denken. Zeker als je traint of wilt afvallen maakt dat verschil.',
    sections: [
      {
        title: 'Waarom eiwit belangrijk is',
        text:
          'Eiwitten ondersteunen spierherstel, helpen je langer verzadigd voelen en beschermen spiermassa tijdens afvallen.',
      },
      {
        title: 'Hoeveel heb je nodig?',
        text:
          'Dat hangt af van gewicht, doel en training. Ik maak dit praktisch zodat je weet wat je per maaltijd ongeveer nodig hebt.',
      },
      {
        title: 'Geen ingewikkeld voedingsschema',
        text:
          'We werken met herkenbare producten en maaltijden. Het moet passen in je koelkast, werkdag en gezin.',
      },
    ],
    benefits: ['Betere verzadiging', 'Spierbehoud', 'Herstel na training', 'Minder snackdrang', 'Praktische maaltijden', 'Duidelijke porties'],
    faqs: voedingFaqs,
    relatedLinks: [
      ['Voeding voor spieropbouw', '/voeding-voor-spieropbouw'],
      ['Voeding en herstel', '/voeding-en-herstel'],
      ['Gezond afvallen', '/gezond-afvallen'],
    ],
  }),
  makePage({
    path: '/voeding-voor-spieropbouw',
    pillar: 'Voeding & Leefstijl',
    title: 'Voeding voor spieropbouw',
    h1: 'Voeding voor spieropbouw',
    seoTitle: 'Voeding voor Spieropbouw | Jitan Sports',
    description:
      'Voeding voor spieropbouw: eiwitten, energie, herstel en krachttraining met begeleiding van Jitan Sports.',
    hero: 'Sterker worden vraagt niet alleen om trainen, maar ook om eten dat je groei ondersteunt.',
    image: voedingImage,
    serviceType: 'Voedingsbegeleiding',
    summary: [
      'Voeding voor spieropbouw draait om voldoende energie, eiwitten, herstel en progressieve krachttraining.',
      'Jitan Sports helpt klanten in Den Bosch een haalbaar voedingsritme bouwen voor meer kracht en spiermassa.',
    ],
    intro:
      'Als je sterker wilt worden, moet je lichaam materiaal hebben om op te bouwen.',
    sections: [
      {
        title: 'Energie en eiwitten',
        text:
          'Spieropbouw vraagt meestal om voldoende calorieen en eiwitten. Niet extreem, wel consequent.',
      },
      {
        title: 'Timing zonder stress',
        text:
          'Je hoeft niet de hele dag met bakjes te lopen. Wel helpt het om rond training en herstel slimme keuzes te maken.',
      },
      {
        title: 'Training en voeding samen',
        text:
          'Voeding werkt pas echt als je training voldoende prikkel geeft. Daarom combineert Jitan Sports begeleiding op beide kanten.',
      },
    ],
    benefits: ['Meer trainingsenergie', 'Spierherstel', 'Betere progressie', 'Eiwitadvies', 'Meetbare groei', 'Minder giswerk'],
    faqs: voedingFaqs,
    relatedLinks: [
      ['Spiermassa opbouwen', '/spiermassa-opbouwen'],
      ['Krachttraining beginners', '/krachttraining-beginners'],
      ['Eiwitrijke voeding', '/eiwitrijke-voeding'],
    ],
  }),
  makePage({
    path: '/voeding-en-herstel',
    pillar: 'Voeding & Leefstijl',
    title: 'Voeding en herstel',
    h1: 'Voeding en herstel na training',
    seoTitle: 'Voeding en Herstel | Jitan Sports',
    description:
      'Voeding en herstel na training verbeteren met eiwitten, koolhydraten, vocht, slaap en herstelbegeleiding van Jitan Sports.',
    hero: 'Goed herstellen begint niet pas op de massagetafel, maar ook op je bord.',
    image: voedingImage,
    serviceType: 'Voedingsbegeleiding',
    summary: [
      'Voeding en herstel zijn onmisbaar voor fitter worden, spieropbouw en blessurepreventie.',
      'Jitan Sports combineert voedingsbegeleiding, personal training en massage zodat je lichaam beter herstelt.',
    ],
    intro:
      'Je kunt nog zo goed trainen: als je herstel achterblijft, blijft je resultaat achter.',
    sections: [
      {
        title: 'Wat je lichaam nodig heeft',
        text:
          'Eiwitten repareren, koolhydraten vullen energie aan, vocht ondersteunt alles en slaap maakt het proces af.',
      },
      {
        title: 'Herstel bij drukke weken',
        text:
          'Juist bij stress of volle agenda’s is voeding vaak het eerste dat rommelig wordt. Daar valt veel winst te halen.',
      },
      {
        title: 'Massage en voeding combineren',
        text:
          'Massage helpt spanning verminderen. Voeding helpt het lichaam opbouwen. Samen ondersteunen ze herstel sterker.',
      },
    ],
    benefits: ['Sneller herstel', 'Meer energie', 'Minder dip na training', 'Betere slaapfocus', 'Spierherstel', 'Praktische maaltijdkeuzes'],
    faqs: voedingFaqs,
    relatedLinks: [
      ['Herstel na training', '/herstel-na-training'],
      ['Sportmassage', '/sportmassage'],
      ['Voeding voor spieropbouw', '/voeding-voor-spieropbouw'],
    ],
  }),
  makePage({
    path: '/voeding-voor-drukke-professionals',
    pillar: 'Voeding & Leefstijl',
    title: 'Voeding voor drukke professionals',
    h1: 'Voeding voor drukke professionals',
    seoTitle: 'Voeding voor Drukke Professionals | Jitan Sports',
    description:
      'Voedingsbegeleiding voor drukke professionals en ondernemers. Praktische keuzes voor energie, afvallen en herstel.',
    hero: 'Gezond eten zonder dat je agenda perfect hoeft te zijn.',
    image: voedingImage,
    serviceType: 'Voedingsbegeleiding',
    summary: [
      'Voeding voor drukke professionals bij Jitan Sports draait om simpele keuzes, vaste ankers en betere energie.',
      'De aanpak helpt bij afvallen, herstel en een gezonde leefstijl ondanks een volle agenda.',
    ],
    intro:
      'Als je werk druk is, moet voeding niet nog een project worden. Je hebt een systeem nodig.',
    sections: [
      {
        title: 'Waarom drukte eten verstoort',
        text:
          'Vergaderingen, reistijd, late avonden en stress maken het makkelijk om te weinig, te laat of te impulsief te eten.',
      },
      {
        title: 'Vaste ankers in je dag',
        text:
          'We bouwen een paar maaltijden en keuzes die altijd kunnen. Zo hoef je minder na te denken op drukke momenten.',
      },
      {
        title: 'Meer energie, minder dip',
        text:
          'Met betere eiwitten, porties en timing voorkom je dat je energie halverwege de dag instort.',
      },
    ],
    benefits: ['Haalbare maaltijden', 'Minder snackdrang', 'Meer focus', 'Betere planning', 'Gezonde keuzes onderweg', 'Ondersteuning bij afvallen'],
    faqs: voedingFaqs,
    relatedLinks: [
      ['Personal training voor ondernemers', '/personal-training-voor-drukke-ondernemers'],
      ['Eiwitrijke voeding', '/eiwitrijke-voeding'],
      ['Contact', '/contact'],
    ],
  }),
];

export const topicPageMap = Object.fromEntries(topicPages.map((page) => [page.path, page]));
