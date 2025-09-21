// School Council page data for Gaelscoil na bhFál
export interface SchoolCouncilPage {
  title: {
    irish: string;
    english: string;
  };
  slug: string;
  description: {
    irish: string;
    english: string;
  };
  sections: {
    heading: {
      irish: string;
      english: string;
    };
    content: {
      irish: string[];
      english: string[];
    };
  }[];
  color: string;
}

export const schoolCouncilData: SchoolCouncilPage[] = [
  {
    title: {
      irish: "Cé muid",
      english: "Who we are"
    },
    slug: "who-we-are",
    description: {
      irish: "Is ionadaithe na ndaltaí ó gach rang muid atá tofa ag ár gcomharsana scoile chun ár nguthanna a ardú agus athruithe dearfacha a dhéanamh.",
      english: "We are student representatives from every class elected by our school peers to raise our voices and make positive changes."
    },
    sections: [
      {
        heading: {
          irish: "Ár Ról",
          english: "Our Role"
        },
        content: {
          irish: [
            "Déanaimid cinntí tábhachtacha faoin scoil in éineacht leis na múinteoirí agus an priomhoide",
            "Éistimid le tuairimí na ndaltaí agus cuirimid a gcuid smaointe chun cinn",
            "Eagraímid imeachtaí speisialta agus tionscnaimh don scoil ar fad",
            "Oibrímid mar dhroichead idir na daltaí agus foireann na scoile"
          ],
          english: [
            "We make important decisions about the school together with teachers and the principal",
            "We listen to students' opinions and put forward their ideas",
            "We organize special events and initiatives for the whole school",
            "We work as a bridge between students and school staff"
          ]
        }
      },
      {
        heading: {
          irish: "Conas a Thogtar Muid",
          english: "How We Are Elected"
        },
        content: {
          irish: [
            "Bíonn toghchán dhemocratach againn gach bliain i mí Mheán Fómhair",
            "Féadann dalta ar bith ó Rang 3 suas seasamh mar iarrthóir",
            "Tugann gach iarrthóir óráid do na daltaí ina rang féin",
            "Vótálann na daltaí go rúnda don duine is fearr leo",
            "Roghnaítear ionadaí amháin ó gach rang"
          ],
          english: [
            "We have a democratic election every year in September",
            "Any student from Year 3 upwards can stand as a candidate",
            "Each candidate gives a speech to the students in their own class",
            "Students vote secretly for their preferred candidate",
            "One representative is chosen from each class"
          ]
        }
      },
      {
        heading: {
          irish: "Ár mBaill Reatha",
          english: "Our Current Members"
        },
        content: {
          irish: [
            "Cathaoirleach: Aoife Ní Mhurchú (Rang 6)",
            "Leas-Chathaoirleach: Cian Ó Briain (Rang 6)", 
            "Rúnaí: Síle Ní Dhomhnaill (Rang 5)",
            "Cisteoir: Tadhg Mac Gearailt (Rang 5)",
            "Ionadaithe: Ball amháin ó gach rang ó Rang 3 go Rang 7"
          ],
          english: [
            "Chairperson: Aoife Ní Mhurchú (Year 6)",
            "Vice-Chairperson: Cian Ó Briain (Year 6)",
            "Secretary: Síle Ní Dhomhnaill (Year 5)",
            "Treasurer: Tadhg Mac Gearailt (Year 5)",
            "Representatives: One member from each class from Year 3 to Year 7"
          ]
        }
      }
    ],
    color: "bg-blue-50 border-blue-200"
  },
  {
    title: {
      irish: "Obair",
      english: "Work"
    },
    slug: "work",
    description: {
      irish: "Déanaimid obair chrua chun ár scoil a fheabhsú trí chruinnithe rialta, tionscnaimh speisialta agus comhoibriú leis an fhoireann.",
      english: "We work hard to improve our school through regular meetings, special initiatives and collaboration with staff."
    },
    sections: [
      {
        heading: {
          irish: "Ár gCruinnithe",
          english: "Our Meetings"
        },
        content: {
          irish: [
            "Buailimid le chéile uair sa mhí ar an chéad Chéadaoin",
            "Tosaíonn na cruinnithe ag 12:30 agus críochnaíonn siad ag 1:00pm",
            "Bímid ag plé ceisteanna tábhachtacha a ardaítear ag na daltaí",
            "Déanaimid cinntí trí vótáil dhemocratach",
            "Scríobhann ár rúnaí tuairisc ar gach cruinniú"
          ],
          english: [
            "We meet once a month on the first Wednesday",
            "Meetings start at 12:30 and finish at 1:00pm",
            "We discuss important issues raised by students",
            "We make decisions through democratic voting",
            "Our secretary writes a report on each meeting"
          ]
        }
      },
      {
        heading: {
          irish: "Tionscnaimh Reatha",
          english: "Current Initiatives"
        },
        content: {
          irish: [
            "Tionscnamh Timpeallachta - ag déanamh ár scoil níos glaise",
            "Bailiúchán airgid do threalamh súgartha nua don chlós",
            "Eagrú imeachtaí cultúrtha chun ár dteanga agus ár gcultúr a cheiliúradh",
            "Feabhsú na mbéilí scoile trí chomhairle leis na daltaí",
            "Cur chun cinn na sláinte agus na folláine ar fud na scoile"
          ],
          english: [
            "Environmental Initiative - making our school greener",
            "Fundraising for new playground equipment for the yard",
            "Organizing cultural events to celebrate our language and culture",
            "Improving school meals through consultation with students", 
            "Promoting health and wellbeing throughout the school"
          ]
        }
      },
      {
        heading: {
          irish: "Comhoibriú le Foireann na Scoile",
          english: "Collaboration with School Staff"
        },
        content: {
          irish: [
            "Buailimid leis an phriomhoide gach míle chun ár bpleananna a phlé",
            "Oibrímid le múinteoirí chun imeachtaí scoile a eagrú",
            "Tugaimid aiseolas don fhoireann faoi smaointe na ndaltaí",
            "Glacaimid páirt i bpleanáil pholasaí na scoile",
            "Cuidímid le cinntí maidir le trealamh agus acmhainní nua"
          ],
          english: [
            "We meet with the principal every month to discuss our plans",
            "We work with teachers to organize school events",
            "We give feedback to staff about students' ideas",
            "We participate in school policy planning",
            "We help with decisions about new equipment and resources"
          ]
        }
      }
    ],
    color: "bg-green-50 border-green-200"
  },
  {
    title: {
      irish: "Spriocanna Gearrthéarmacha",
      english: "Short-term Goals"
    },
    slug: "short-term-goals",
    description: {
      irish: "Seo iad na spriocanna atá againn don téarma reatha agus don bhliain scoile seo.",
      english: "These are our goals for the current term and this school year."
    },
    sections: [
      {
        heading: {
          irish: "Téarma 1 (Meán Fómhair - Nollaig)",
          english: "Term 1 (September - December)"
        },
        content: {
          irish: [
            "Lá Timpeallachta a eagrú le gníomhaíochtaí athchúrsála",
            "Bosca moltaí nua a chur ar fáil i ngach seomra ranga",
            "Suirbhé a dhéanamh ar bhéilí scoile agus moltaí a chur ar aghaidh",
            "Comórtas ealaíne 'Mo Scoil Ideálach' a reáchtáil",
            "Cruinniú poiblí a reáchtáil le tuismitheoirí agus an pobal"
          ],
          english: [
            "Organize an Environmental Day with recycling activities",
            "Install new suggestion boxes in every classroom",
            "Conduct a survey on school meals and make recommendations",
            "Run a 'My Ideal School' art competition",
            "Hold a public meeting with parents and the community"
          ]
        }
      },
      {
        heading: {
          irish: "Téarma 2 (Eanáir - Cáisc)",
          english: "Term 2 (January - Easter)"
        },
        content: {
          irish: [
            "Lá Spóirt Gaelach a eagrú do na ranganna uile",
            "Siopa scoile beag a bhunú le hearraí Gaeilge",
            "Tús a chur le pleanáil don ghairdin scoile nua",
            "Seachtain na Gaeilge speisialta a reáchtáil",
            "Comhdháil óige áitiúil a eagrú le scoileanna eile"
          ],
          english: [
            "Organize a Gaelic Sports Day for all classes",
            "Establish a small school shop with Irish language items",
            "Begin planning for the new school garden",
            "Hold a special Irish Language Week",
            "Organize a local youth conference with other schools"
          ]
        }
      },
      {
        heading: {
          irish: "Téarma 3 (Aibreán - Meitheamh)",
          english: "Term 3 (April - June)"
        },
        content: {
          irish: [
            "An gairdín scoile a chur agus a phlandáil",
            "Lá Oscailte speisialta a eagrú don phobal",
            "Tionscnamh 'Cairde Pinn' a thabhairt isteach do na ranganna óga",
            "Fógraí spóirt Gaeilge a chur suas ar fud na scoile",
            "Pleananna don bhliain seo chugainn a ullmhú"
          ],
          english: [
            "Create and plant the school garden",
            "Organize a special Open Day for the community",
            "Introduce a 'Buddy System' initiative for younger classes",
            "Put up Irish sports notices throughout the school",
            "Prepare plans for next year"
          ]
        }
      }
    ],
    color: "bg-yellow-50 border-yellow-200"
  },
  {
    title: {
      irish: "Spriocanna Fadtéarmacha",
      english: "Long-term Goals"
    },
    slug: "long-term-goals",
    description: {
      irish: "Seo iad na spriocanna móra atá againn don todhchaí agus an fhís atá againn don scoil.",
      english: "These are our big goals for the future and our vision for the school."
    },
    sections: [
      {
        heading: {
          irish: "Ár bhFís don Scoil",
          english: "Our Vision for the School"
        },
        content: {
          irish: [
            "Scoil atá ag ceiliúradh ár dteanga agus ár gcultúr Gaelach go láidir",
            "Timpeallacht ina bhfuil gach dalta sásta, sábháilte agus rathúil",
            "Pobal scoile atá páirteach go gníomhach i gcinn­iú",
            "Scoil a bhfuil clú uirthi mar cheannaire sa réigiún",
            "Áit ina bhfoghlaímíonn daltaí trí mheán na Gaeilge le háthás agus muinín"
          ],
          english: [
            "A school that strongly celebrates our Irish language and culture",
            "An environment where every student is happy, safe and successful",
            "A school community that actively participates in decision-making",
            "A school with a reputation as a leader in the region",
            "A place where students learn through Irish with joy and confidence"
          ]
        }
      },
      {
        heading: {
          irish: "Tionscadail Mhóra (2-3 Bliana)",
          english: "Major Projects (2-3 Years)"
        },
        content: {
          irish: [
            "Halla spóirt nua a thógáil le háiseanna iomlánacha",
            "Leabharlann dhigiteach Ghaeilge a bhunú",
            "Ionad ealaíon agus ceoil nua a chruthú",
            "Gairdín feithicíní agus timpeallachta a fhorbairt",
            "Múnla comhpháirtíochta le scoileanna eile sa cheantar a bhunú"
          ],
          english: [
            "Build a new sports hall with complete facilities",
            "Establish a digital Irish language library", 
            "Create a new arts and music centre",
            "Develop a wildlife and environmental garden",
            "Establish a partnership model with other schools in the area"
          ]
        }
      },
      {
        heading: {
          irish: "Tionchar ar an Phobal",
          english: "Impact on the Community"
        },
        content: {
          irish: [
            "Ár scoil a dhéanamh mar ionad don phobal Gaelach áitiúil",
            "Ranganna Gaeilge do thuismitheoirí agus don phobal a chur ar fáil",
            "Imeachtaí cultúrtha rialta a eagrú don cheantar ar fad",
            "Bheith mar shamhail do scoileanna Gaeilge eile",
            "Nasc láidir a chruthú le grúpaí Gaeilge agus pobail dhúchais"
          ],
          english: [
            "Make our school a centre for the local Irish-speaking community",
            "Provide Irish classes for parents and the community",
            "Organize regular cultural events for the whole area",
            "Be a model for other Irish schools",
            "Create strong links with Irish groups and native communities"
          ]
        }
      }
    ],
    color: "bg-purple-50 border-purple-200"
  }
];

// Helper function to get council page data by slug
export function getCouncilPageBySlug(slug: string): SchoolCouncilPage | undefined {
  return schoolCouncilData.find(page => page.slug === slug);
}

// Helper function to get all council page slugs for static generation
export function getAllCouncilPageSlugs(): string[] {
  return schoolCouncilData.map(page => page.slug);
}