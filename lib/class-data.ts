// Real class data from Gaelscoil na bhFál stakeholder PDF
export interface ClassData {
  className: string;
  english: string;
  slug: string;
  ageRange: string;
  color: string;
  teacher?: string;
  teachers?: string[];
  assistants?: string[];
  importantInfo: {
    irish: string[];
    english: string[];
  };
  terms: {
    term: string;
    topic: {
      irish: string;
      english: string;
    };
  }[];
  websites: {
    name: string;
    url: string;
    description?: string;
  }[];
}

export const classesData: ClassData[] = [
  {
    className: "Naí-Aonad",
    english: "Nursery Unit",
    slug: "nursery",
    ageRange: "3-4 years",
    color: "bg-red-50 border-red-200",
    teacher: "Margaret",
    assistants: ["Brónagh", "Caolán", "Laoise"],
    importantInfo: {
      irish: [
        "Labhair le do pháiste i nGaeilge.",
        "Tabhair deis do do pháiste éisteacht le rannta agus amhráin i nGaeilge sa ghluaisteán nó sa teach.",
        "Léigh scéal le do pháiste gach oíche. Tá sé saor in áisce leabhair a fháil ón leabharlann agus bíonn neart imeachtaí ag tarlú ansin fosta.",
        "Bí ag súgradh le do pháiste - bíonn cluichí cosúil le biongó agus snap iontach maith agus sultmhar.",
        "Tabhair deiseanna do do pháiste súgradh le taos - cuidíonn seo leis na matáin a neartú agus baineann na páistí an-sult as.",
        "Tá tinreamh agus poncúlacht iontach tábhachtach. Bíonn cuid mhór foghlama ag tarlú céad rud ar maidin agus bíonn cúpla bomaite de dhíth ar na páistí socrú isteach ar dtús.",
        "Bróga le Velcro amháin.",
        "**Bí cinnte go bhfuil ainm do pháiste ar gach rud - cótaí, geansaithe agus buidéal uisce.**"
      ],
      english: [
        "Talk to your child in Irish.",
        "Give your child the opportunity to listen to rhymes and songs in Irish in the car or in the house.",
        "Read a story with your child every night. It is free to get books from the library and there are plenty of events happening there as well.",
        "Play with your child - games like bingo and snap are really good and enjoyable.",
        "Give your child opportunities to play with dough - this helps to strengthen the muscles, and the children really enjoy it.",
        "Attendance and punctuality are very important. A lot of learning happens first thing in the morning and the children need a few minutes to settle in first.",
        "Children should only wear trainers with Velcro fastenings in the Nursery.",
        "**Make sure your child's name is clearly visible on all items – coats, jumpers and water bottle.**"
      ]
    },
    terms: [
      {
        term: "1:1",
        topic: {
          irish: "Ainmhithe Mór agus Beag",
          english: "All Creatures Great and Small"
        }
      },
      {
        term: "1:2",
        topic: {
          irish: "Bia Blasta",
          english: "Fabulous Food"
        }
      },
      {
        term: "2:1",
        topic: {
          irish: "Iontais an Gheimhridh",
          english: "Winter Wonderland"
        }
      },
      {
        term: "2:2",
        topic: {
          irish: "Nach Iontach Mé",
          english: "Marvelous Me"
        }
      },
      {
        term: "3:1",
        topic: {
          irish: "Níl aon tintéan mar do thintéan féin",
          english: "Home Sweet Home"
        }
      },
      {
        term: "3:2",
        topic: {
          irish: "Timpeall na Tíre",
          english: "Planes, Trains and Automobiles"
        }
      }
    ],
    websites: [
      { name: "Libraries NI", url: "https://www.librariesni.org.uk/" },
      { name: "Altram", url: "https://www.altram.org/" },
      { name: "Getting Ready to Learn", url: "https://www.gettingreadytolearn.co.uk/" },
      { name: "BBC Good Food - Playdough Recipe", url: "https://www.bbcgoodfood.com/howto/guide/playdough-recipe" },
      { name: "Topmarks - Shape Monsters", url: "https://www.topmarks.co.uk/early-years/shape-monsters" },
      { name: "Topmarks - Teddy Numbers", url: "https://www.topmarks.co.uk/learning-to-count/teddy-numbers" },
      { name: "BBC iPlayer - Na Dodai", url: "https://www.bbc.co.uk/iplayer/episodes/b006t6w5/na-dodai" },
      { name: "BBC iPlayer - Tellyscealta", url: "https://www.bbc.co.uk/iplayer/episodes/b00tr700/telly-scealta" },
      { name: "Cúla4 - Super Simple Amhráin", url: "https://cula4.com/en/shows/super-simple-amhrain/1" },
      { name: "Cúla4 - Blocdháthanna", url: "https://cula4.com/en/shows/blocdhathanna/1" },
      { name: "Cúla4 - Blocuimhreacha", url: "https://cula4.com/en/shows/blocuimhreacha/1" },
      { name: "CCEA - Canaimis", url: "https://ccea.org.uk/learning-resources/canaimis" }
    ]
  },
  {
    className: "Rang 1",
    english: "Year 1",
    slug: "year-1",
    ageRange: "4-5 years",
    color: "bg-orange-50 border-orange-200",
    teacher: "Shauna",
    assistants: ["Stacey", "Deirdre", "Clíodhna"],
    importantInfo: {
      irish: [
        "Úsáideann muid Seesaw le coinneáil i dteagmháil le tuismitheoirí. Gheobhaidh tú eolas ginéaralta agus griangráfanna go rialta agus más maith leat teachtaireacht a fhágáil leis an mhúinteoir, déan é ar Seesaw.",
        "Bíonn bróga le velcro riachtanach i Rang 1. Caithfidh do pháiste bheith ábalta bróga s'acu féin a chur orthu go néamhspleách.",
        "Siúlann an páiste isteach chuig an seomra ranga leo féin - caithfidh tuismitheoirí fanacht ag na dorais. Níl an múinteoir ar fáil ar maidin.",
        "Caitheann muid cúpla seachtain ag cur aithne ar do pháiste, ag dul siar ar rialacha ranga/scoile ag tús Mí Meán an Fhómhair.",
        "Bíonn píosa tortha agus buidéal beag spórtiúil d'uisce de dhíth ar do pháiste gach lá don sos.",
        "Má glacann do pháiste lón, tá mála lón beag de dhíth.",
        "Cuir ainmneacha ar achan rud. Má chailleann do pháiste geansaí/cóta srl, bíonn siad fágtha in áit na gcótaí.",
        "Tosaíonn obair bhaile i mí Dheireadh Fómhair - ceannaigh na málaí scoile ón oifig roimhe seo.",
        "Tosaíonn an léitheoireacht i Mí Eanáir - tá sé tábhachtach go n-éisteann tú le do pháiste ag léamh gach oíche. Tabhair aire do na leabhair léitheoireachta seo agus sínigh é gach lá.",
        "Tá tinreamh agus poncúlacht iontach tábhachtach. Cuidíonn sé le dul chun cinn do pháiste le bheith in am agus ar scoil gach lá."
      ],
      english: [
        "We use Seesaw to keep in touch with parents. You will get general information and pictures regularly and if you want to leave a message with the teacher, do it via Seesaw.",
        "Shoes with velcro are compulsory in Rang 1. Your child must be able to put on their own shoes independently.",
        "Your child walks into the classroom on their own. Parents must stay at the door. The teacher is not available in the mornings.",
        "We spend a few weeks getting to know your child and revisiting class/school rules at the start of September.",
        "Your child needs a piece of fruit and a small sporty bottle of water every day for break.",
        "If your child takes a lunch, a small lunch bag is needed.",
        "Label everything with your child's name. If your child loses a jumper/coat etc., they will be placed in the cloakroom.",
        "Homework starts in October - buy a school bag from the office before this.",
        "Reading starts in January. It is essential that you listen to your child reading every night. Take care of reading books and sign them each night.",
        "Attendance and punctuality are important. It helps with your child's progression to be on time and in school every day."
      ]
    },
    terms: [
      {
        term: "1:1",
        topic: {
          irish: "Ainmhithe móra agus beaga",
          english: "Creatures Great and Small"
        }
      },
      {
        term: "1:2",
        topic: {
          irish: "Bia Blasta",
          english: "Fabulous Food"
        }
      },
      {
        term: "2:1",
        topic: {
          irish: "Iontas an Gheimhridh",
          english: "Winter Wonderland"
        }
      },
      {
        term: "2:2",
        topic: {
          irish: "Nach iontach mé!",
          english: "Marvellous Me!"
        }
      },
      {
        term: "3:1",
        topic: {
          irish: "Níl aon tintéan mar do thintéan féin",
          english: "Home Sweet Home"
        }
      },
      {
        term: "3:2",
        topic: {
          irish: "Timpeall na Tíre",
          english: "Planes, Trains and Automobiles"
        }
      }
    ],
    websites: [
      { name: "Altram", url: "https://www.altram.org/" },
      { name: "Getting Ready to Learn", url: "https://www.gettingreadytolearn.co.uk/" },
      { name: "BBC Good Food - Playdough Recipe", url: "https://www.bbcgoodfood.com/howto/guide/playdough-recipe" },
      { name: "Topmarks - Shape Monsters", url: "https://www.topmarks.co.uk/early-years/shape-monsters" },
      { name: "Topmarks - Teddy Numbers", url: "https://www.topmarks.co.uk/learning-to-count/teddy-numbers" },
      { name: "BBC iPlayer - Na Dodai", url: "https://www.bbc.co.uk/iplayer/episodes/b006t6w5/na-dodai" },
      { name: "BBC iPlayer - Tellyscealta", url: "https://www.bbc.co.uk/iplayer/episodes/b00tr700/telly-scealta" },
      { name: "Cúla4 - Super Simple Amhráin", url: "https://cula4.com/en/shows/super-simple-amhrain/1" },
      { name: "Cúla4 - Blocdháthanna", url: "https://cula4.com/en/shows/blocdhathanna/1" },
      { name: "Cúla4 - Blocuimhreacha", url: "https://cula4.com/en/shows/blocuimhreacha/1" },
      { name: "CCEA - Canaimis", url: "https://ccea.org.uk/learning-resources/canaimis" }
    ]
  },
  {
    className: "Rang 2",
    english: "Year 2",
    slug: "year-2",
    ageRange: "5-6 years",
    color: "bg-yellow-50 border-yellow-200",
    teachers: ["Aoife", "Faoileann"],
    assistants: ["Lucy", "Maria", "Kellyann"],
    importantInfo: {
      irish: [
        "Water Bottles/items labelled/"
      ],
      english: [
        "Water Bottles/items labelled/"
      ]
    },
    terms: [
      {
        term: "1:1",
        topic: {
          irish: "Ainmhithe mór agus beag",
          english: "All Creatures Great and Small"
        }
      },
      {
        term: "1:2",
        topic: {
          irish: "Bia Blasta",
          english: "Fabulous Food"
        }
      },
      {
        term: "2:1",
        topic: {
          irish: "Iontais an Gheimhridh",
          english: "Winter Wonderland"
        }
      },
      {
        term: "2:2",
        topic: {
          irish: "Nach Iontach Mé",
          english: "Marvellous Me"
        }
      },
      {
        term: "3:1",
        topic: {
          irish: "Níl aon tintéan mar do thintéan féin",
          english: "Home Sweet Home"
        }
      },
      {
        term: "3:2",
        topic: {
          irish: "Timpeall na Tíre",
          english: "Planes, Trains and Automobiles"
        }
      }
    ],
    websites: []
  },
  {
    className: "Rang 3",
    english: "Year 3",
    slug: "year-3",
    ageRange: "6-7 years",
    color: "bg-green-50 border-green-200",
    teacher: "Róisín",
    assistants: ["Cáitlín"],
    importantInfo: {
      irish: [
        "línte baiste de dhíth roimh an Chéad Fhaoistin"
      ],
      english: [
        "Lines of Baptism needed before First Confession."
      ]
    },
    terms: [
      {
        term: "1:1",
        topic: {
          irish: "Na céadfaí",
          english: "The senses"
        }
      },
      {
        term: "1:2",
        topic: {
          irish: "Bia",
          english: "Food"
        }
      },
      {
        term: "2:1",
        topic: {
          irish: "Mo Scoil",
          english: "My school"
        }
      },
      {
        term: "2:2",
        topic: {
          irish: "Bláthanna agus mionbheithigh",
          english: "Bugs and blooms"
        }
      },
      {
        term: "3:1",
        topic: {
          irish: "Tithe",
          english: "Houses"
        }
      },
      {
        term: "3:2",
        topic: {
          irish: "Faoin fharraige",
          english: "Under the sea"
        }
      }
    ],
    websites: [
      { name: "Léigh Anois", url: "https://www.leighanois.com/~baile" }
    ]
  },
  {
    className: "Rang 4",
    english: "Year 4",
    slug: "year-4",
    ageRange: "7-8 years",
    color: "bg-blue-50 border-blue-200",
    teacher: "Catherine",
    assistants: [],
    importantInfo: {
      irish: [
        "Úsáid an méid Gaeilge agus is féidir leat le do pháiste. Tabhair iad chuig imeachtaí Gaeilge áitiúla sa phobal chun deiseanna a thabhairt dóibh Gaeilge a úsáid taobh amuigh den scoil. Smaoinigh ar an chlub óige Gaeilge, Laochra Loch Lao, imeachtaí sa Chultúrlann srl.",
        "Torthaí amháin don sos, buidéal beag spúisteach uisce, lón sláintiúil a dhéanann ceapairí, iógart nádúrtha, píosa torthaí agus sú torthaí/uisce - ceadaítear brioscóit bheag ar an Aoine.",
        "Cás peann amháin beag éadaigh a oireann go compordach faoin tábla. 2/3 pinn luaidhe, leamhán agus dornán craiona (gan marcóirí nó pinn luaidhe datha.) Caithfidh málaí scoile a cheannach laistigh den chéad seachtain de Mheán Fómhair agus tá fillteán clúdach A4 de dhíth freisin don obair bhaile.",
        "Léigh le do pháiste agus leis gach lá. Déan é mar chuid dá ngnáthamh, b'fhearr roimh chodladh. Déan raon leathan leabhar ar fáil dóibh agus cuir cuairteanna ar an leabharlann ar fáil. Cabhróidh aon nochtadh do leabhair le foghlaim do pháiste.",
        "Bain sult as an taobh amuigh, coinnigh sláintiúil agus gníomhach iad.",
        "Déan cinnte go bhfaighidh tú deiseanna matamaitice le foghlaim sa saol laethúil cosúil le hinsint an ama, bácáil srl.",
        "Díríonn obair bhaile ar fhoghlama a neartú agus lean ar aghaidh chun scileanna staidéir a bhunú. Tugtar aird ar leith ar litrithe, táblaí (x2, x5, x10, x3, x4) agus ag tosú ag léamh go neamhspleách.",
        "Cuirfear an dáta don Chéad Chomaoineach in iúl do thuismitheoirí a luaithe a bheidh sé ar fáil don scoil. Cuimhnigh do pháiste a thabhairt chuig aifreann go rialta roimh an tsacraimint."
      ],
      english: [
        "Use as much Irish with your child at home as possible. Take them to local Irish events in the community to give them opportunities to use Irish outside of school. Consider the Irish language youth club, Laochra Loch Lao, events in The Cultúrlann etc.",
        "Fruit only for break, a small squirty water bottle, a heathy lunch preferably comprised of: sandwiches, a plain yoghurt, a piece of fruit and a fruit juice/water - a small biscuit is allowed on Friday.",
        "One small, cloth pencil case that fits snuggly under the table. 2/3pencils, a rubber and a handful of crayons (no markers or coloured pencils.) School bags are to be purchased within the first week of September and an A4 envelope folder for homework is also required.",
        "Read to and with your child daily. Make it part of their routine, preferably before bed. Make a wide range of books available to them and provide visits to the library. Any exposure to books will help with your child's learning.",
        "Enjoy the outdoors, keep them healthy and active.",
        "Make sure you find maths opportunities for learning in everyday life such as telling the time, baking etc.",
        "Homework focuses on reinforcing learning and continuing to establish study skills. Particular attention is paid to spellings, tables (x2, x5, x10, x3, x4) and beginning to read independently.",
        "The date for the First Communion will be communicated with parents as soon as it is available to the school. Remember to take your child to mass regularly in the run up to the sacrament."
      ]
    },
    terms: [
      {
        term: "1:1",
        topic: {
          irish: "Mo Chorp",
          english: "My Body"
        }
      },
      {
        term: "1:2",
        topic: {
          irish: "Féiltí thart ar an Domhan",
          english: "Festivals Around the World"
        }
      },
      {
        term: "2:1",
        topic: {
          irish: "Mo Cheantar Scoile",
          english: "My School Area"
        }
      },
      {
        term: "2:2",
        topic: {
          irish: "Éire",
          english: "Ireland"
        }
      },
      {
        term: "3:1",
        topic: {
          irish: "Aimsir",
          english: "The Weather"
        }
      },
      {
        term: "3:2",
        topic: {
          irish: "Taisteal",
          english: "Travel"
        }
      }
    ],
    websites: [
      { name: "CCEA - Snas ar Scéal", url: "https://ccea.org.uk/snas-ar-sceal/cluichi-ec1/" },
      { name: "CCEA - Feasta Focal", url: "https://ccea.org.uk/learning-resources/feasta-focal/leagan-tuaiscirt" },
      { name: "CCEA - Clar Luathléitheoireachta", url: "https://ccea.org.uk/learning-resources/clar-luathleitheoireachta-cleite/cluichi-bhanda-3" },
      { name: "Seideansi", url: "https://seideansi.ie/" },
      { name: "CCEA - Cú Chulainn", url: "https://ccea.org.uk/learning-resources/cu-chulainn-beatha-agus-eachtrai" },
      { name: "CCEA - An Clog Cainteach", url: "https://ccea.org.uk/interactive/an-clog-cainteach/clock3-north/web/clock3n.html" },
      { name: "CCEA - Canaimis", url: "https://ccea.org.uk/learning-resources/canaimis" },
      { name: "Cúla4 Shows", url: "https://cula4.com/en/shows" },
      { name: "Léigh Anois", url: "https://www.leighanois.com/~baile" },
      { name: "BBC - Alphablocks", url: "https://www.bbc.co.uk/iplayer/episodes/b01cz0p1/alphablocks" }
    ]
  },
  {
    className: "Rang 5",
    english: "Year 5",
    slug: "year-5",
    ageRange: "8-9 years",
    color: "bg-indigo-50 border-indigo-200",
    teacher: "Róisín Lenaghan",
    assistants: ["Orla Gillen"],
    importantInfo: {
      irish: [
        "Labhair Gaeilge le do pháiste agus spreag iad a gcuid Gaeilge a úsáid gach áit a dtéann sibh. Léirigh suim san fhoghlaim s'acu agus spreag iad a bheith ag léamh gach lá.",
        "Bíodh leabhair léitheoireachta (Gaeilge agus AR san áireamh) istigh gach lá."
      ],
      english: [
        "Talk to your child in Irish and encourage them to use their Irish wherever you go. Show interest in their learning and encourage them to read every day.",
        "Bring in reading books (Irish and AR English) every day."
      ]
    },
    terms: [
      {
        term: "1:1",
        topic: {
          irish: "Éire agus an Eoraip",
          english: "Ireland and Europe"
        }
      },
      {
        term: "1:2",
        topic: {
          irish: "An Ghrianchóras",
          english: "The Solar System"
        }
      },
      {
        term: "2:1",
        topic: {
          irish: "Spásthaisteal",
          english: "Spacetravel"
        }
      },
      {
        term: "2:2",
        topic: {
          irish: "An Saol fadó in Éirinn",
          english: "Life in Old Ireland"
        }
      },
      {
        term: "3:1",
        topic: {
          irish: "An tSean-Éigipt",
          english: "Ancient Egypt"
        }
      },
      {
        term: "3:2",
        topic: {
          irish: "Cluain an Bhogaidh",
          english: "The Bog Meadows"
        }
      }
    ],
    websites: [
      { name: "Léigh Anois", url: "https://www.leighanois.com/~baile" },
      { name: "C2K Schools", url: "https://www.c2kschools.net" },
      { name: "Rewarding Learning - Foclóir Mata", url: "https://www.rewardinglearning.org.uk/focloirmata/" },
      { name: "Key Stage 2 Maths - Topmarks Search", url: "https://www.topmarks.co.uk/" },
      { name: "Baile na Mata", url: "https://bailenamata.com/" },
      { name: "Foclóir.ie", url: "https://www.focloir.ie" },
      { name: "Teanglann.ie", url: "https://www.teanglann.ie" },
      { name: "Abair.ie", url: "https://www.abair.ie" }
    ]
  },
  {
    className: "Rang 6",
    english: "Year 6",
    slug: "year-6",
    ageRange: "9-10 years",
    color: "bg-purple-50 border-purple-200",
    teacher: "Cormac",
    assistants: ["Aoife"],
    importantInfo: {
      irish: [
        "Labhair Gaeilge le do pháiste",
        "Spreag do pháiste chun na leabhair léitheoireachta Gaeilge s'acu a léamh sa bhaile.",
        "Spreag do pháiste le dul chuig an leabharlann le leabhair léitheoireachta Accelerated Reader a fháil ionas go mbeidh sé/sí léamh ag an leibhéal cuí.",
        "Gabh siar ar na táblaí iolraithe arís agus arís eile, le do thoil."
      ],
      english: [
        "Talk to your child in Irish",
        "Encourage your child to read their Irish reading book at home.",
        "Encourage your child to go to the library for accelerated Reading Books so as s/he can read at the appropriate level.",
        "Please repeatedly go over times tables."
      ]
    },
    terms: [
      {
        term: "1:1",
        topic: {
          irish: "Éire agus an Eoraip",
          english: "Ireland and Europe"
        }
      },
      {
        term: "1:2",
        topic: {
          irish: "An Pol Thuaidh",
          english: "The North Pole"
        }
      },
      {
        term: "2:1",
        topic: {
          irish: "Eitilt",
          english: "Flight"
        }
      },
      {
        term: "2:2",
        topic: {
          irish: "Eitilt",
          english: "Flight"
        }
      },
      {
        term: "3:1",
        topic: {
          irish: "Titanic",
          english: "Titanic"
        }
      },
      {
        term: "3:2",
        topic: {
          irish: "An tOcras Mór",
          english: "The Great Hunger"
        }
      }
    ],
    websites: [
      { name: "C2K Schools", url: "https://www.c2kschools.net" },
      { name: "Rewarding Learning - Foclóir Mata", url: "https://www.rewardinglearning.org.uk/focloirmata/" },
      { name: "Key Stage 2 Maths - Topmarks Search", url: "https://www.topmarks.co.uk/" },
      { name: "Baile na Mata", url: "https://bailenamata.com/" },
      { name: "Foclóir.ie", url: "https://www.focloir.ie" },
      { name: "Teanglann.ie", url: "https://www.teanglann.ie" },
      { name: "Abair.ie", url: "https://www.abair.ie" }
    ]
  },
  {
    className: "Rang 7",
    english: "Year 7",
    slug: "year-7",
    ageRange: "10-11 years",
    color: "bg-pink-50 border-pink-200",
    teacher: "Seán",
    assistants: ["Róisín"],
    importantInfo: {
      irish: [
        "Spreag do pháiste lena leabhair léitheoireachta Gaeilge a léamh sa bhaile.",
        "Spreag do pháiste le dul chuig an leabharlann le leabhair léitheoireachta Accelerated Reader a fháil ionas go mbeidh sé/sí léamh ag an leibhéal cuí.",
        "Gabh siar ar na táblaí iolraithe arís agus arís eile, le do thoil.",
        "Ba chóir go raibh páistí ag úsaid Seomra Nuachta agus News Desk taobh amuigh de scoil. Cuidíonn seo leo logáil isteach chuig Google Classroom.",
        "Bíonn muid ag dúil go mbíonn páistí R7 ag labhairt i nGaeilge i gcónaí."
      ],
      english: [
        "Encourage your child to read their Irish reading book at home.",
        "Encourage your child to go to the library for accelerated Reading Books so as s/he can read at the appropriate level.",
        "Please repeatedly go over times tables.",
        "Children should be accessing Seomra Nuachta and News Desk regularly and independently at home. This also gives them access to Google Classroom.",
        "R7 will use Google Classroom throughout the year, this is excellent preparation for secondary school.",
        "Spoken Irish is always expected!"
      ]
    },
    terms: [
      {
        term: "1:1",
        topic: {
          irish: "Tír Eolaíocht- Éire agus An Domhan",
          english: "Geography- Ireland and the World"
        }
      },
      {
        term: "1:2",
        topic: {
          irish: "An Fhorais Bháistí",
          english: "Rainforest"
        }
      },
      {
        term: "2:1",
        topic: {
          irish: "Cogadh Domhanda Dó",
          english: "Second World War"
        }
      },
      {
        term: "2:2",
        topic: {
          irish: "Cogadh Domhanda Dó",
          english: "Second World War"
        }
      },
      {
        term: "3:1",
        topic: {
          irish: "Éirí Amach na Cásca 1916",
          english: "Easter Rising 1916"
        }
      },
      {
        term: "3:2",
        topic: {
          irish: "Ag Aistriú Scoile- Ag Fágáil Slán",
          english: "Transition and Saying Goodbye"
        }
      }
    ],
    websites: [
      { name: "C2K Schools", url: "https://www.c2kschools.net" },
      { name: "Rewarding Learning - Foclóir Mata", url: "https://www.rewardinglearning.org.uk/focloirmata/" },
      { name: "Key Stage 2 Maths - Topmarks Search", url: "https://www.topmarks.co.uk/" },
      { name: "Baile na Mata", url: "https://bailenamata.com/" },
      { name: "Foclóir.ie", url: "https://www.focloir.ie" },
      { name: "Teanglann.ie", url: "https://www.teanglann.ie" },
      { name: "Abair.ie", url: "https://www.abair.ie" },
      { name: "Anne Frank", url: "https://www.annefrank.org" },
      { name: "BBC Bitesize Learning", url: "https://www.bbc.co.uk/bitesize" }
    ]
  }
];

// Helper function to get class data by slug
export function getClassBySlug(slug: string): ClassData | undefined {
  return classesData.find(cls => cls.slug === slug);
}

// Helper function to get all class slugs for static generation
export function getAllClassSlugs(): string[] {
  return classesData.map(cls => cls.slug);
}