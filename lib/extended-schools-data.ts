// Extended Schools activity data for Gaelscoil na bhFál
export interface ExtendedSchoolActivity {
  name: {
    irish: string;
    english: string;
  };
  slug: string;
  description: {
    irish: string;
    english: string;
  };
  schedule: {
    irish: string;
    english: string;
  };
  ageGroups: {
    irish: string;
    english: string;
  };
  contact: {
    irish: string;
    english: string;
  };
  additionalInfo?: {
    irish: string[];
    english: string[];
  };
  color: string;
}

export const extendedSchoolsData: ExtendedSchoolActivity[] = [
  {
    name: {
      irish: "Cumann Bricfeasta",
      english: "Breakfast Club"
    },
    slug: "breakfast-club",
    description: {
      irish: "Cumann le béile maith a fháil roimh scoil. Cuirimid béile folláin ar fáil do na páistí roimh thús an lae scoile.",
      english: "A club to get a good meal before school. We provide healthy meals for children before the start of the school day."
    },
    schedule: {
      irish: "Gach maidin scoile ó 8:00 go 8:45",
      english: "Every school morning from 8:00 to 8:45"
    },
    ageGroups: {
      irish: "Naí-Aonad go Rang 7",
      english: "Nursery to Year 7"
    },
    contact: {
      irish: "Déan teagmháil leis an oifig le clárú",
      english: "Contact the office to register"
    },
    additionalInfo: {
      irish: [
        "Béile folláin agus cothaitheach",
        "Tá gá le clárú roimh ré",
        "Íocaíocht sheachtainiúil"
      ],
      english: [
        "Healthy and nutritious meals",
        "Pre-registration required",
        "Weekly payment"
      ]
    },
    color: "bg-orange-50 border-orange-200"
  },
  {
    name: {
      irish: "Peil",
      english: "Football"
    },
    slug: "football",
    description: {
      irish: "Cumann peile do pháistí na scoile. Foghlaimíonn na páistí scileanna peile agus spraoi a bheith acu le chéile.",
      english: "Football club for school children. Children learn football skills and have fun together."
    },
    schedule: {
      irish: "Gach Déardaoin tar éis scoile ó 3:30 go 4:30",
      english: "Every Thursday after school from 3:30 to 4:30"
    },
    ageGroups: {
      irish: "Rang 3 go Rang 7",
      english: "Year 3 to Year 7"
    },
    contact: {
      irish: "Labhair leis an oifig nó le múinteoir do pháiste",
      english: "Speak to the office or your child's teacher"
    },
    additionalInfo: {
      irish: [
        "Trealamh peile riachtanach",
        "Éadaí spóirt a chaitheamh",
        "Comórtais idir scoileanna"
      ],
      english: [
        "Football equipment required",
        "Sports clothes to be worn",
        "Inter-school competitions"
      ]
    },
    color: "bg-green-50 border-green-200"
  },
  {
    name: {
      irish: "Cumann Ealaíne",
      english: "Art Club"
    },
    slug: "art-club",
    description: {
      irish: "Cumann chun cruthaitheacht agus ealaín na bpáistí a fhorbairt. Úsáidimid ábhair éagsúla agus teicnící difriúla.",
      english: "A club to develop children's creativity and art. We use various materials and different techniques."
    },
    schedule: {
      irish: "Gach Máirt tar éis scoile ó 3:30 go 4:30",
      english: "Every Tuesday after school from 3:30 to 4:30"
    },
    ageGroups: {
      irish: "Naí-Aonad go Rang 7",
      english: "Nursery to Year 7"
    },
    contact: {
      irish: "Cuir d'ainm síos san oifig",
      english: "Put your name down in the office"
    },
    additionalInfo: {
      irish: [
        "Ábhair ealaíne ar fáil",
        "Taispeántas ag deireadh na téarma",
        "Éadaí seana a chaitheamh"
      ],
      english: [
        "Art materials provided",
        "Exhibition at end of term",
        "Wear old clothes"
      ]
    },
    color: "bg-purple-50 border-purple-200"
  },
  {
    name: {
      irish: "Cumann TFC",
      english: "ICT Club"
    },
    slug: "ict-club",
    description: {
      irish: "Cumann le scileanna ríomhaireachta agus teicneolaíochta a fhoghlaim. Bíonn na páistí ag úsáid bogearraí éagsúla agus ag foghlaim faoi chódú.",
      english: "A club to learn computer and technology skills. Children use various software and learn about coding."
    },
    schedule: {
      irish: "Gach Céadaoin tar éis scoile ó 3:30 go 4:30",
      english: "Every Wednesday after school from 3:30 to 4:30"
    },
    ageGroups: {
      irish: "Rang 4 go Rang 7",
      english: "Year 4 to Year 7"
    },
    contact: {
      irish: "Iarr ar mhúinteoir do pháiste",
      english: "Ask your child's teacher"
    },
    additionalInfo: {
      irish: [
        "Ríomhairí ar fáil sa scoil",
        "Tionscadail chruthaitheacha",
        "Cúrsa bunúsach códaithe"
      ],
      english: [
        "School computers available",
        "Creative projects",
        "Basic coding course"
      ]
    },
    color: "bg-blue-50 border-blue-200"
  },
  {
    name: {
      irish: "Cumann Mata",
      english: "Maths Club"
    },
    slug: "maths-club",
    description: {
      irish: "Cumann chun matamaitice a dhéanamh spraíúil agus suimiúil. Úsáidimid cluichí agus gníomhaíochtaí le mata a fhoghlaim.",
      english: "A club to make mathematics fun and interesting. We use games and activities to learn maths."
    },
    schedule: {
      irish: "Gach Luan tar éis scoile ó 3:30 go 4:30",
      english: "Every Monday after school from 3:30 to 4:30"
    },
    ageGroups: {
      irish: "Rang 2 go Rang 7",
      english: "Year 2 to Year 7"
    },
    contact: {
      irish: "Labhair le múinteoir mata",
      english: "Speak to the maths teacher"
    },
    additionalInfo: {
      irish: [
        "Cluichí mata agus tomhaiseanna",
        "Comórtais mata áitiúla",
        "Cabhrú le hobair bhaile"
      ],
      english: [
        "Maths games and puzzles",
        "Local maths competitions",
        "Help with homework"
      ]
    },
    color: "bg-yellow-50 border-yellow-200"
  },
  {
    name: {
      irish: "Ionad Uíbh Eachach",
      english: "Iveagh Centre"
    },
    slug: "iveagh-centre",
    description: {
      irish: "Comhpháirtíocht leis an Ionad Uíbh Eachach le gníomhaíochtaí pobail agus cultúrtha a sholáthar do na páistí.",
      english: "Partnership with the Iveagh Centre to provide community and cultural activities for children."
    },
    schedule: {
      irish: "Amanna éagsúla - seiceáil leis an ionad",
      english: "Various times - check with the centre"
    },
    ageGroups: {
      irish: "Naí-Aonad go Rang 7",
      english: "Nursery to Year 7"
    },
    contact: {
      irish: "Déan teagmháil leis an Ionad Uíbh Eachach nó leis an scoil",
      english: "Contact the Iveagh Centre or the school"
    },
    additionalInfo: {
      irish: [
        "Gníomhaíochtaí pobail",
        "Imeachtaí cultúrtha",
        "Comhoibriú le scoileanna eile"
      ],
      english: [
        "Community activities",
        "Cultural events",
        "Collaboration with other schools"
      ]
    },
    color: "bg-red-50 border-red-200"
  }
];

// Helper function to get activity data by slug
export function getActivityBySlug(slug: string): ExtendedSchoolActivity | undefined {
  return extendedSchoolsData.find(activity => activity.slug === slug);
}

// Helper function to get all activity slugs for static generation
export function getAllActivitySlugs(): string[] {
  return extendedSchoolsData.map(activity => activity.slug);
}