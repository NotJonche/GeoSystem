export type ServiceImage = {
  src: string;
  alt: string;
} | null;

export type ServiceContent = {
  heading: string;
  introduction: string[];
  firstImage: ServiceImage;
  middleHeading: string;
  middleParagraphs: string[];
  secondImage: ServiceImage;
  finalHeading: string;
  finalParagraphs: string[];
};

export const serviceContent: Record<string, ServiceContent> = {
  // 01 — MATJE GJEODEZIKE
  "matje-gjeodezike": {
    heading: "Çfarë janë matjet gjeodezike?",

    introduction: [
      "Matjet gjeodezike janë matje teknike që përdoren për përcaktimin e pozicionit dhe karakteristikave gjeometrike të pikave në terren. Nëpërmjet tyre përcaktohen koordinatat, distancat, lartësitë dhe elemente të tjera të nevojshme për përshkrimin e një sipërfaqeje apo objekti.",

      "Këto matje shërbejnë si bazë për punë kadastrale, rilevime topografike, planifikim hapësinor dhe përgatitje të dokumentacionit teknik. Lloji dhe shtrirja e matjeve përcaktohen në varësi të qëllimit të punës dhe karakteristikave të terrenit.",
    ],

    firstImage: null,

    middleHeading: "Si realizohen matjet?",

    middleParagraphs: [
      "Procesi fillon me identifikimin e zonës që duhet matur dhe përcaktimin e pikave relevante në terren. Sipas kërkesave të punës, matjet mund të kryhen me instrumente gjeodezike, si stacionet totale dhe pajisjet GNSS, duke përdorur metodën e përshtatshme për kushtet dhe saktësinë e kërkuar.",

      "Gjatë punës regjistrohen të dhënat për pozicionin e pikave, distancat, diferencat e lartësive dhe elementet e tjera që kërkohen. Më pas, të dhënat kontrollohen dhe përpunohen për të krijuar një paraqitje të qartë të gjendjes së matur.",

      "Në varësi të qëllimit të matjes, rezultatet mund të përdoren për përgatitjen e planeve, skicave, tabelave të koordinatave ose dokumentacionit tjetër gjeodezik. Përmbajtja e dokumentacionit varet nga kërkesat teknike dhe procedura për të cilën nevojiten matjet.",
    ],

    secondImage: null,

    finalHeading: "Pse janë të rëndësishme?",

    finalParagraphs: [
      "Matjet gjeodezike sigurojnë informacion hapësinor që ndihmon në kuptimin e pozicionit, përmasave dhe konfigurimit të një prone ose terreni. Ato krijojnë një bazë teknike për planifikim dhe për procedura që kërkojnë të dhëna të matjes.",

      "Të dhënat e sakta dhe të dokumentuara ndihmojnë në identifikimin e dallimeve ndërmjet gjendjes së matur dhe dokumentacionit ekzistues. Kur kërkohet, ato mund të shërbejnë edhe si pikënisje për punë të tjera gjeodezike.",
    ],
  },

  // 02 — RILEVIME TOPOGRAFIKE
  "rilevime-topografike": {
    heading: "Çfarë janë rilevimet topografike?",

    introduction: [
      "Rilevimi topografik është procesi i matjes dhe paraqitjes së gjendjes ekzistuese të një terreni. Nëpërmjet tij përcaktohen pozicionet dhe lartësitë e pikave karakteristike, duke mundësuar një paraqitje të detajuar të formës dhe konfigurimit të sipërfaqes së tokës.",

      "Gjatë rilevimit regjistrohen elementet natyrore dhe të ndërtuara që kanë rëndësi për qëllimin e punës, si ndryshimet e relievit, rrugët, ndërtesat, muret, kanalet dhe elemente të tjera të dukshme në terren. Këto të dhëna shërbejnë për krijimin e një pasqyre teknike të gjendjes faktike të zonës së matur.",
    ],

    firstImage: null,

    middleHeading: "Si realizohet rilevimi topografik?",

    middleParagraphs: [
      "Procesi fillon me përcaktimin e zonës që do të rilevohet dhe identifikimin e elementeve që duhet të përfshihen në matje. Në terren maten pika të mjaftueshme për të përshkruar ndryshimet e lartësisë, pjerrësitë dhe karakteristikat e tjera të sipërfaqes. Në varësi të kushteve të terrenit dhe kërkesave teknike, mund të përdoren stacione totale, pajisje GNSS ose metoda të tjera të përshtatshme.",

      "Pas përfundimit të matjeve, të dhënat kontrollohen dhe përpunohen në programe të specializuara. Nga këto të dhëna mund të përgatiten plane topografike, modele dixhitale të terrenit dhe izohipse, të cilat janë vija që lidhin pika me lartësi të njëjtë.",

      "Plani topografik paraqet pozicionin e elementeve të rilevuara dhe informacionin e nevojshëm mbi relievin e terrenit. Përmbajtja, shkalla dhe hollësia e planit përcaktohen sipas qëllimit të projektit dhe kërkesave të dokumentacionit teknik.",
    ],

    secondImage: null,

    finalHeading: "Ku përdoren rilevimet topografike?",

    finalParagraphs: [
      "Rilevimet topografike përdoren si bazë për projektimin e ndërtesave, rrugëve, rrjeteve infrastrukturore dhe ndërhyrjeve të tjera në terren. Ato u mundësojnë projektuesve të kuptojnë gjendjen ekzistuese të zonës, ndryshimet e lartësive dhe kufizimet që lidhen me konfigurimin e terrenit.",

      "Informacioni topografik është veçanërisht i rëndësishëm gjatë planifikimit të niveleve, pjerrësive, sistemimit të hapësirave dhe punimeve të gërmimit ose mbushjes. Një paraqitje e saktë e terrenit ndihmon që zgjidhjet projektuese të mbështeten në të dhëna reale të matjes.",
    ],
  },

  // 03 — PIKETIME
  piketime: {
    heading: "Çfarë është piketimi?",

    introduction: [
      "Piketimi është procesi gjeodezik i bartjes së pikave dhe pozicioneve të përcaktuara në dokumentacionin e projektit në terren. Përmes tij, koordinatat dhe dimensionet e projektuara shndërrohen në pika fizike referimi që mund të përdoren gjatë realizimit të punimeve.",

      "Ky proces ka rëndësi të veçantë në ndërtim, ku pozicionimi i elementeve duhet të përputhet me projektin teknik. Piketimi mund të zbatohet për akset e ndërtesave, themelet, rrugët, objektet infrastrukturore dhe elemente të tjera që kërkojnë vendosje të përcaktuar në terren.",
    ],

    firstImage: null,

    middleHeading: "Si realizohet piketimi?",

    middleParagraphs: [
      "Puna fillon me shqyrtimin e dokumentacionit teknik dhe të koordinatave të pikave që duhet të vendosen në terren. Para piketimit kontrollohen të dhënat e projektit, sistemi i koordinatave dhe pikat e referimit që do të përdoren gjatë matjes.",

      "Duke përdorur instrumente gjeodezike, si stacioni total ose pajisjet GNSS kur kushtet e lejojnë, pozicionet e projektuara identifikohen në terren. Pikat mund të shënohen me kunja, shenja në sipërfaqe ose mënyra të tjera të përshtatshme për natyrën e punimeve.",

      "Sipas kërkesave të projektit, mund të kryhen kontrolle plotësuese të pozicioneve dhe distancave ndërmjet pikave. Kjo ndihmon që ekipi i zbatimit të përdorë referenca të qarta gjatë realizimit të elementeve të projektuara.",
    ],

    secondImage: null,

    finalHeading: "Pse është i rëndësishëm piketimi?",

    finalParagraphs: [
      "Piketimi ndihmon në vendosjen e saktë të elementeve të ndërtimit në raport me projektin. Ai është veçanërisht i rëndësishëm për përcaktimin e akseve, pozicionimit të themeleve dhe vendndodhjes së strukturave në terren.",

      "Një piketim i realizuar mbi të dhëna të kontrolluara zvogëlon mundësinë e gabimeve në pozicionim dhe ndihmon në organizimin e punimeve. Kontrolli i mëtejshëm gjatë ndërtimit mbetet i nevojshëm sipas kërkesave të projektit.",
    ],
  },

  // 04 — NDARJE PARCELASH
  "ndarje-parcelash": {
    heading: "Çfarë është ndarja e parcelave?",

    introduction: [
      "Ndarja e parcelave është procedura përmes së cilës një parcelë ekzistuese ndahet në dy ose më shumë parcela të veçanta. Për këtë proces nevojiten të dhëna të sakta për kufijtë, sipërfaqen dhe pozicionin e parcelës ekzistuese.",

      "Ndarja mund të kërkohet për organizimin e pronës, ndarjen ndërmjet bashkëpronarëve ose përgatitjen e parcelave për përdorime të ndryshme. Realizimi i saj varet nga kushtet ligjore, kadastrale dhe planifikuese që zbatohen për pronën përkatëse.",
    ],

    firstImage: null,

    middleHeading: "Si realizohet ndarja e parcelës?",

    middleParagraphs: [
      "Procesi fillon me shqyrtimin e dokumentacionit pronësor dhe të dhënave kadastrale të parcelës. Analizohen kufijtë ekzistues, sipërfaqja e regjistruar dhe kushtet që mund të ndikojnë në ndarjen e propozuar.",

      "Kur është e nevojshme, kryhen matje gjeodezike në terren për të kontrolluar pozicionin e kufijve dhe karakteristikat e parcelës. Në bazë të të dhënave të disponueshme dhe kërkesave të rastit, përgatitet propozimi grafik dhe teknik i ndarjes, ku paraqiten parcelat e reja dhe sipërfaqet përkatëse.",

      "Dokumentacioni gjeodezik përdoret në procedurën e shqyrtimit dhe regjistrimit të ndryshimit. Miratimi dhe regjistrimi i parcelave të reja kryhen nga institucionet kompetente, sipas procedurave dhe kushteve në fuqi.",
    ],

    secondImage: null,

    finalHeading: "Kur nevojitet ndarja e parcelës?",

    finalParagraphs: [
      "Ndarja e parcelës mund të jetë e nevojshme kur një pronë duhet të organizohet në njësi të veçanta, për shembull gjatë ndarjes së pronës ndërmjet pronarëve ose kur planifikohet shfrytëzim i ndryshëm i pjesëve të saj.",

      "Përpara fillimit të procedurës është e rëndësishme të kontrollohen dokumentet ekzistuese dhe kufizimet që mund të ndikojnë në ndarje. Matjet dhe dokumentacioni gjeodezik mbështesin procesin teknik, por nuk zëvendësojnë miratimet e kërkuara nga autoritetet përkatëse.",
    ],
  },

  // 05 — BASHKIM PARCELASH
  "bashkim-parcelash": {
    heading: "Çfarë është bashkimi i parcelave?",

    introduction: [
      "Bashkimi i parcelave është procedura përmes së cilës dy ose më shumë parcela ekzistuese bashkohen për të formuar një parcelë të vetme. Ky proces përdoret kur organizimi i pronës kërkon trajtimin e disa njësive kadastrale si një tërësi.",

      "Bashkimi mund të jetë i dobishëm për planifikimin e përdorimit të tokës, organizimin e një prone të përbashkët ose përgatitjen e dokumentacionit për zhvillime të ardhshme. Mundësia e bashkimit varet nga gjendja juridike dhe kadastrale e parcelave dhe nga kushtet e zbatueshme.",
    ],

    firstImage: null,

    middleHeading: "Si realizohet bashkimi i parcelave?",

    middleParagraphs: [
      "Fillimisht shqyrtohen të dhënat kadastrale të parcelave që synohet të bashkohen. Identifikohen numrat e parcelave, pozicionet e tyre, kufijtë dhe sipërfaqet e regjistruara, si dhe dokumentet që kërkohen për procedurën.",

      "Sipas nevojës, kryhen matje në terren për të kontrolluar gjendjen ekzistuese. Më pas përgatitet dokumentacioni teknik që paraqet parcelat përpara bashkimit dhe konfigurimin e propozuar të parcelës së re.",

      "Dokumentacioni i përgatitur shërben si mbështetje për procedurën përkatëse administrative. Regjistrimi i ndryshimit dhe krijimi i njësisë së re kadastrale kryhen nga autoritetet kompetente.",
    ],

    secondImage: null,

    finalHeading: "Pse mund të nevojitet bashkimi?",

    finalParagraphs: [
      "Bashkimi i parcelave mund të thjeshtojë paraqitjen kadastrale të një prone që përbëhet nga disa parcela. Ai mund të jetë pjesë e përgatitjeve për planifikim, organizim të pronës ose realizim të një projekti që kërkon trajtimin e sipërfaqes si një tërësi.",

      "Përpara bashkimit duhet të verifikohet nëse parcelat plotësojnë kushtet e kërkuara për këtë procedurë. Matjet gjeodezike ndihmojnë në përgatitjen e dokumentacionit të qartë për kufijtë dhe sipërfaqen e propozuar.",
    ],
  },

  // 06 — PËRKUFIZIM KUFIJSH
  "perkufizim-kufijsh": {
    heading: "Çfarë është përkufizimi i kufijve?",

    introduction: [
      "Përkufizimi i kufijve është puna gjeodezike që lidhet me identifikimin e pozicionit të kufijve të një parcele në terren. Ky proces mbështetet në të dhënat kadastrale, dokumentacionin ekzistues dhe matjet që kërkohen për rastin konkret.",

      "Shërbimi mund të jetë i nevojshëm kur shenjat kufitare nuk janë të dukshme, kur pronari dëshiron të kuptojë shtrirjen e parcelës ose përpara vendosjes së rrethojave dhe realizimit të punimeve pranë kufijve të pronës.",
    ],

    firstImage: null,

    middleHeading: "Si përcaktohen kufijtë në terren?",

    middleParagraphs: [
      "Puna fillon me shqyrtimin e të dhënave zyrtare kadastrale dhe dokumentacionit që lidhet me parcelën. Këto të dhëna përdoren për identifikimin e pikave dhe vijave kufitare që duhet të kontrollohen në terren.",

      "Më pas kryhen matjet e nevojshme dhe krahasohen rezultatet me informacionin kadastral. Në varësi të dokumentacionit të disponueshëm dhe procedurës së zbatueshme, mund të identifikohen ose shënohen pikat kufitare në terren.",

      "Në rastet kur vërehen mospërputhje ose paqartësi, ato duhet të trajtohen sipas procedurave përkatëse. Një matje gjeodezike mund të dokumentojë gjendjen teknike, por nuk përbën vetvetiu zgjidhje të një mosmarrëveshjeje pronësore.",
    ],

    secondImage: null,

    finalHeading: "Kur është i nevojshëm ky shërbim?",

    finalParagraphs: [
      "Identifikimi i kufijve është veçanërisht i rëndësishëm përpara punimeve që mund të ndikojnë në vijën ndarëse ndërmjet pronave. Ai ndihmon pronarët të kuptojnë pozicionin e kufijve sipas dokumentacionit dhe të planifikojnë më mirë ndërhyrjet në terren.",

      "Kur ekzistojnë mosmarrëveshje mbi pronësinë ose kufirin, çështja mund të kërkojë procedura administrative ose juridike. Roli i matjeve gjeodezike është të sigurojnë informacionin teknik të nevojshëm për shqyrtimin e situatës.",
    ],
  },

  // 07 — LEGALIZIME
  legalizime: {
    heading: "Roli i matjeve gjeodezike në legalizim",

    introduction: [
      "Në procedurat e legalizimit të ndërtimeve mund të kërkohet dokumentacion teknik që paraqet gjendjen ekzistuese të objektit dhe pozicionimin e tij në parcelë. Matjet gjeodezike ndihmojnë në përcaktimin e vendndodhjes dhe karakteristikave hapësinore të ndërtesës.",

      "Në varësi të procedurës përkatëse, dokumentacioni mund të përfshijë pozicionin e objektit, përmasat e tij në plan, sipërfaqen e zënë dhe marrëdhënien hapësinore me parcelën. Kërkesat konkrete varen nga legjislacioni dhe institucionet përgjegjëse.",
    ],

    firstImage: null,

    middleHeading: "Si përgatitet dokumentacioni gjeodezik?",

    middleParagraphs: [
      "Procesi fillon me shqyrtimin e dokumenteve të disponueshme për parcelën dhe objektin. Sipas kërkesave, përcaktohen elementet që duhet të maten dhe informacioni që duhet të paraqitet në dokumentacionin teknik.",

      "Në terren mund të kryhen matje të konturit të objektit, pozicionit të tij dhe elementeve të tjera relevante. Të dhënat më pas përpunohen për të përgatitur paraqitje grafike dhe materiale teknike që pasqyrojnë gjendjen faktike.",

      "Dokumentacioni i përgatitur mund të përdoret si pjesë e dosjes së kërkuar në procedurën administrative. Përmbajtja dhe forma e materialeve duhet të përshtaten me kërkesat konkrete të autoritetit kompetent.",
    ],

    secondImage: null,

    finalHeading: "Çfarë duhet të dini për legalizimin?",

    finalParagraphs: [
      "Matja gjeodezike është një pjesë teknike e procesit dhe nuk e përcakton vetë nëse një objekt mund të legalizohet. Pranueshmëria e kërkesës dhe vendimi përfundimtar varen nga kushtet ligjore dhe shqyrtimi i institucioneve përgjegjëse.",

      "Përgatitja e dokumentacionit të saktë ndihmon në paraqitjen e qartë të pozicionit dhe gjendjes së objektit. Para fillimit të punës duhet të verifikohen dokumentet dhe kërkesat që vlejnë për rastin konkret.",
    ],
  },

  // 08 — PLANE KADASTRALE
  "plane-kadastrale": {
    heading: "Çfarë janë planet kadastrale?",

    introduction: [
      "Planet kadastrale janë paraqitje grafike të parcelave dhe të informacionit hapësinor që lidhet me to. Në këto plane mund të paraqiten kufijtë e parcelave, identifikuesit kadastralë dhe elemente të tjera që nevojiten për një qëllim të caktuar teknik.",

      "Dokumentacioni kadastral përdoret për të kuptuar organizimin dhe pozicionimin e parcelave brenda një zone. Ai ka rëndësi në procedurat që lidhen me pronën, përgatitjen e materialeve gjeodezike dhe shqyrtimin e ndryshimeve të propozuara.",
    ],

    firstImage: null,

    middleHeading: "Si përgatiten planet kadastrale?",

    middleParagraphs: [
      "Përgatitja fillon me shqyrtimin e të dhënave kadastrale dhe dokumenteve relevante për pronën ose zonën e interesit. Sipas qëllimit të punës, mund të nevojiten edhe matje ose kontrolle plotësuese në terren.",

      "Të dhënat përpunohen dhe paraqiten në një plan ku kufijtë, pozicionet dhe informacionet përkatëse shfaqen në mënyrë të organizuar. Përgatitja mund të kërkojë përdorimin e programeve për vizatim teknik dhe përpunim të të dhënave hapësinore.",

      "Përmbajtja dhe formati i planit varen nga arsyeja për të cilën kërkohet dokumenti. Materialet teknike të përgatitura për një procedurë duhet të plotësojnë kërkesat e zbatueshme për atë procedurë.",
    ],

    secondImage: null,

    finalHeading: "Për çfarë përdoren këto plane?",

    finalParagraphs: [
      "Planet kadastrale mund të përdoren gjatë shqyrtimit të kufijve, ndarjes ose bashkimit të parcelave dhe përgatitjes së dokumentacionit teknik që lidhet me pronën. Ato mundësojnë një paraqitje të qartë të marrëdhënieve hapësinore ndërmjet parcelave.",

      "Është e rëndësishme të dallohen planet teknike të përgatitura nga profesionistët prej dokumenteve zyrtare kadastrale që lëshohen nga institucionet kompetente. Lloji i dokumentit të kërkuar varet nga qëllimi dhe procedura përkatëse.",
    ],
  },

  // 09 — PROJEKTE INFRASTRUKTURORE
  "projekte-infrastrukturore": {
    heading: "Gjeodezia në projektet infrastrukturore",

    introduction: [
      "Projektet infrastrukturore kërkojnë informacion të saktë për terrenin, pozicionin dhe lartësitë e elementeve që do të projektohen ose ndërtohen. Punët gjeodezike sigurojnë të dhëna hapësinore për planifikimin, projektimin dhe kontrollin e realizimit të këtyre elementeve.",

      "Matjet mund të lidhen me projekte rrugore, rrjete të ujësjellësit dhe kanalizimit, trase të ndryshme teknike dhe ndërhyrje të tjera në terren. Lloji i shërbimit gjeodezik përcaktohet nga faza e projektit dhe kërkesat e ekipit projektues ose zbatues.",
    ],

    firstImage: null,

    middleHeading: "Çfarë përfshijnë punët gjeodezike?",

    middleParagraphs: [
      "Në fazën e përgatitjes mund të kryhen rilevime topografike për të dokumentuar gjendjen ekzistuese të terrenit. Matjet mund të përfshijnë profile gjatësore dhe tërthore, lartësi, pozicione të objekteve ekzistuese dhe elemente të tjera që ndikojnë në projektim.",

      "Gjatë zbatimit, piketimi përdoret për bartjen e koordinatave dhe elementeve të projektit në terren. Në varësi të punimeve, mund të përcaktohen akset, nivelet, pikat karakteristike dhe referencat e nevojshme për ekipin e ndërtimit.",

      "Matje kontrolluese mund të kryhen edhe gjatë ose pas realizimit të punimeve për të dokumentuar pozicionin e elementeve të ndërtuara. Këto të dhëna mund të përdoren për kontroll teknik dhe përgatitjen e dokumentacionit të gjendjes së realizuar.",
    ],

    secondImage: null,

    finalHeading: "Pse kanë rëndësi këto matje?",

    finalParagraphs: [
      "Të dhënat gjeodezike ndihmojnë projektuesit të mbështesin zgjidhjet teknike në karakteristikat reale të terrenit. Gjatë zbatimit, ato sigurojnë referenca për pozicionimin dhe kontrollin e elementeve sipas dokumentacionit të projektit.",

      "Në projektet infrastrukturore, kërkesat për saktësi dhe dokumentim ndryshojnë sipas llojit të objektit dhe fazës së punimeve. Për këtë arsye, metodat e matjes dhe kontrollet duhet të përcaktohen në përputhje me specifikimet teknike të projektit.",
    ],
  },

  // 10 — MATJE VOLUMESH
  "matje-volumesh": {
    heading: "Çfarë janë matjet e volumeve?",

    introduction: [
      "Matjet e volumeve përdoren për të përcaktuar sasinë e materialit ose hapësirës ndërmjet sipërfaqeve të caktuara. Në punët gjeodezike, ato zbatohen shpesh për përllogaritjen e vëllimeve të gërmimeve, mbushjeve dhe grumbujve të materialeve.",

      "Përllogaritja e vëllimit mbështetet në matjen e formës së terrenit ose të materialit dhe në përcaktimin e një sipërfaqeje krahasuese. Rezultatet shprehen zakonisht në metra kub dhe mund të përdoren për planifikim dhe evidencim të sasive.",
    ],

    firstImage: null,

    middleHeading: "Si realizohen matjet dhe përllogaritjet?",

    middleParagraphs: [
      "Procesi fillon me përcaktimin e zonës së matjes dhe të sipërfaqeve që do të krahasohen. Në terren mblidhen të dhëna për pozicionin dhe lartësinë e pikave që përshkruajnë formën e sipërfaqes së interesit.",

      "Nga këto të dhëna mund të krijohet një model dixhital i terrenit ose i grumbullit të materialit. Vëllimi përllogaritet duke krahasuar modelin me një sipërfaqe referuese ose me një model tjetër të krijuar nga matje të mëparshme.",

      "Në rastin e gërmimeve dhe mbushjeve, krahasimi ndërmjet gjendjes fillestare dhe gjendjes pas punimeve mundëson vlerësimin e sasive të materialit të hequr ose të shtuar. Saktësia e rezultateve ndikohet nga cilësia dhe dendësia e matjeve, si dhe nga metoda e përllogaritjes.",
    ],

    secondImage: null,

    finalHeading: "Ku përdoren matjet e volumeve?",

    finalParagraphs: [
      "Këto matje përdoren në punime tokësore, sistemim të terrenit, ndërtim rrugësh dhe projekte ku nevojitet evidencimi i sasive të gërmimit ose mbushjes. Ato mund të zbatohen edhe për përcaktimin e vëllimit gjeometrik të grumbujve të materialit.",

      "Rezultatet ndihmojnë në planifikimin dhe kontrollin e sasive të punimeve. Duhet pasur parasysh se vëllimi gjeometrik nuk është i njëjtë me masën ose peshën e materialit; për kalimin nga vëllimi në masë nevojiten të dhëna shtesë, si dendësia e materialit.",
    ],
  },

  // 11 — DOKUMENTACION AS-BUILT
  "dokumentacion-as-built": {
    heading: "Çfarë është dokumentacioni As-Built?",

    introduction: [
      "Dokumentacioni As-Built paraqet gjendjen faktike të elementeve të ndërtuara pas realizimit të punimeve. Ndryshe nga projekti fillestar, i cili tregon pozicionet dhe dimensionet e planifikuara, dokumentacioni As-Built mbështetet në matjen e gjendjes së realizuar në terren.",

      "Matjet As-Built mund të përdoren për objekte ndërtimore dhe elemente infrastrukturore, sipas kërkesave të projektit. Qëllimi është të dokumentohen pozicionet, lartësitë dhe karakteristikat gjeometrike të elementeve që janë realizuar.",
    ],

    firstImage: null,

    middleHeading: "Si përgatitet dokumentacioni As-Built?",

    middleParagraphs: [
      "Procesi fillon me identifikimin e elementeve që duhet të dokumentohen dhe shqyrtimin e kërkesave teknike. Sipas natyrës së objektit, përcaktohen pikat dhe dimensionet që duhet të maten për të pasqyruar gjendjen e realizuar.",

      "Në terren kryhen matje gjeodezike të elementeve të përfunduara ose të atyre që duhet të dokumentohen përpara se të mbulohen nga punime të tjera. Të dhënat mund të përfshijnë koordinata, lartësi, distanca dhe dimensione relevante për dokumentacionin.",

      "Pas përpunimit, rezultatet mund të paraqiten në plane, vizatime ose tabela të matjeve. Kur kërkohet nga projekti, gjendja e matur mund të krahasohet me dokumentacionin fillestar për të identifikuar dallimet në pozicionim ose dimensione.",
    ],

    secondImage: null,

    finalHeading: "Për çfarë shërben dokumentacioni As-Built?",

    finalParagraphs: [
      "Dokumentacioni As-Built mund të përdoret gjatë përgatitjes së dosjes teknike përfundimtare, mirëmbajtjes së infrastrukturës dhe planifikimit të ndërhyrjeve të ardhshme. Ai siguron informacion mbi vendndodhjen dhe karakteristikat e elementeve siç janë realizuar.",

      "Përmbajtja e dokumentacionit varet nga lloji i objektit, faza e matjes dhe specifikimet e projektit. Matjet gjeodezike dokumentojnë gjendjen hapësinore, ndërsa vlerësimi i përputhshmërisë së përgjithshme teknike mund të kërkojë kontrolle të tjera profesionale.",
    ],
  },

  // 12 — MONITORIM DHE DEFORMIME
  "monitorim-deformime": {
    heading: "Çfarë është monitorimi gjeodezik?",

    introduction: [
      "Monitorimi gjeodezik është procesi i kryerjes së matjeve të përsëritura për të përcaktuar nëse pikat e zgjedhura kanë ndryshuar pozicion ose lartësi gjatë një periudhe kohore. Krahasimi i rezultateve ndihmon në identifikimin e zhvendosjeve që mund të ndodhin në objekte ose në terren.",

      "Ky lloj monitorimi mund të zbatohet për struktura ndërtimore, mure mbajtëse, shpate dhe zona të tjera ku është e nevojshme të ndiqen ndryshimet gjeometrike. Programi i monitorimit duhet të përshtatet me karakteristikat e objektit dhe qëllimin e matjeve.",
    ],

    firstImage: null,

    middleHeading: "Si realizohet monitorimi i deformimeve?",

    middleParagraphs: [
      "Fillimisht përcaktohen pikat që do të monitorohen dhe pikat e referimit që përdoren për krahasimin e matjeve. Pikat e kontrollit duhet të identifikohen në mënyrë të qëndrueshme, ndërsa pozicionet e referimit duhet të vlerësohen për përshtatshmërinë e tyre.",

      "Matjet kryhen në intervale kohore të përcaktuara sipas programit të monitorimit. Në varësi të kërkesave, mund të përdoren metoda të matjeve horizontale, nivelimit ose teknika të tjera gjeodezike për të regjistruar ndryshimet e pozicionit dhe të lartësisë.",

      "Rezultatet e matjeve të ndryshme krahasohen duke marrë parasysh saktësinë dhe pasigurinë matëse. Nga analiza mund të identifikohen zhvendosje horizontale, ulje ose ngritje të pikave dhe tendenca të ndryshimit gjatë periudhës së monitoruar.",
    ],

    secondImage: null,

    finalHeading: "Pse është i rëndësishëm monitorimi?",

    finalParagraphs: [
      "Monitorimi siguron të dhëna për ndryshimet gjeometrike të vëzhguara me kalimin e kohës. Këto të dhëna mund të përdoren nga specialistët për të kuptuar sjelljen e një strukture ose të një zone të monitoruar.",

      "Matjet gjeodezike nuk përcaktojnë vetvetiu sigurinë strukturore ose shkakun e deformimeve. Interpretimi i rrezikut dhe vendimet për ndërhyrje kërkojnë, sipas rastit, analiza nga inxhinierë dhe specialistë të fushave përkatëse.",
    ],
  },

  // 13 — KONSULENCË GJEODEZIKE
  "konsulence-gjeodezike": {
    heading: "Çfarë përfshin konsulenca gjeodezike?",

    introduction: [
      "Konsulenca gjeodezike është këshillim teknik për çështje që lidhen me matjet, dokumentacionin kadastral dhe informacionin hapësinor të pronave ose terrenit. Ajo ndihmon në kuptimin e një situate teknike dhe në identifikimin e punëve gjeodezike që mund të nevojiten.",

      "Kjo formë këshillimi mund të jetë e dobishme kur një pronar ka paqartësi mbi dokumentacionin ekzistues, kur planifikohet një procedurë kadastrale ose kur nevojitet të përcaktohet lloji i matjes për një projekt të caktuar.",
    ],

    firstImage: null,

    middleHeading: "Si zhvillohet konsulenca?",

    middleParagraphs: [
      "Procesi fillon me sqarimin e çështjes për të cilën kërkohet këshillim. Sipas rastit, mund të shqyrtohen plane, skica, të dhëna kadastrale dhe dokumente të tjera që kanë lidhje me pronën ose punën e planifikuar.",

      "Në bazë të informacionit të disponueshëm mund të identifikohen matjet, kontrollet ose materialet teknike që nevojiten për trajtimin e çështjes. Në raste të caktuara, vetëm shqyrtimi i dokumenteve nuk mjafton dhe kërkohet edhe verifikim në terren.",

      "Konsulenca mund të ndihmojë në sqarimin e hapave teknikë dhe në përgatitjen e kërkesës për një shërbim gjeodezik. Kërkesat për dokumentacion dhe procedurat përkatëse duhet të verifikohen pranë institucioneve kompetente.",
    ],

    secondImage: null,

    finalHeading: "Kur mund të nevojitet këshillimi gjeodezik?",

    finalParagraphs: [
      "Këshillimi mund të kërkohet përpara ndarjes ose bashkimit të parcelave, identifikimit të kufijve, përgatitjes së një rilevimi ose fillimit të punimeve që kërkojnë të dhëna të matjes. Ai ndihmon në përcaktimin e informacionit që mungon dhe të punës teknike që mund të jetë e nevojshme.",

      "Konsulenca gjeodezike përqendrohet në aspektet teknike të matjeve dhe dokumentacionit. Ajo nuk zëvendëson këshillimin juridik, vendimet administrative ose vlerësimet profesionale që u takojnë specialistëve të fushave të tjera.",
    ],
  },
};
