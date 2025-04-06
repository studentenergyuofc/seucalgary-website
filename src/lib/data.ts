import {
  FaToolbox,
  FaFilePowerpoint,
  FaCarBattery,
  FaWrench,
  FaSolarPanel,
} from "react-icons/fa";

export const articles = [
  {
    title: "Alternative energy sources you probably haven’t heard of",
    description:
      "People everywhere are looking for new energy ideas to help them make energy-smart decisions for the future. Here at EDF Energy, we believe in renewable energy and changing the attitudes and practices about how people generate and use energy...",
    image: "/blog1.jpg",
    link: "https://www.edfenergy.com/energywise/alternative-energy-sources-you-probably-havent-heard",
    date: "31/10",
    blurhash: "LHLWU{01~B$*%MyDIVIV1NRiMyxa",
  },
  {
    title:
      "Engineers develop an efficient process to make fuel from carbon dioxide",
    description:
      "The search is on worldwide to find ways to extract carbon dioxide from the air or from power plant exhaust and then make it into something useful...",
    image: "/blog2.jpg",
    link: "https://www.sciencedaily.com/releases/2023/10/231030141345.htm",
    date: "30/10",
    blurhash: "LUJ8eURit9ay~qkDWAaxRoj?WTof",
  },
  {
    title:
      "Two million European households could abandon the electrical grid by 2050",
    description:
      "Researchers report that 53% of European freestanding homes could have supplied all their own energy needs in 2020 using only local rooftop solar radiation...",
    image: "/blog3.jpg",
    link: "https://www.sciencedaily.com/releases/2023/11/231102135037.htm",
    date: "02/11",
    blurhash: "LsLXxtRPIUV@.TV@V@aeDioLfka|",
  },
];

export const projects = [
  {
    title: "Siksika Housing",
    description:
      "The project aims to install Solar PV systems on the roof of a home in the Siksika Reserve, reducing utility costs and enhancing energy security. By harnessing renewable solar energy, the initiative seeks to promote sustainability and self-sufficiency within the community. The project will significantly benefit the residents by reducing the frequency or fully eliminating emergency periods without power, ensuring a more stable and reliable energy supply.",
    team: [
      {
        name: "Walid Shmoury",
        role: "Team Lead",
        major: "MEng in Mechanical Engineering",
        description:
          "Meet Walid Shmoury, your dedicated Team Lead for this project. With a Master’s in Mechanical Engineering, I bring a wealth of experience in renewable energy, specializing in designing feasible solar systems. My leadership ensures our project stays on track for success.",
        image: {
          src: "/img-walid.jpg",
          altimagesizes: "/img-walid-sm-150.jpg 150w, img-walid.jpg 300w",
          blurhash: "LIPGHWi^?]tm9Fo#yDnhV^e:NIoe",
        },
      },
      {
        name: "Mickey Macdonald",
        major: "BSc in Sustainable Systems Engineering",
        description:
          "Engaged in his first year of Engineering, pursuing a Bachelor of Sustainable Systems Engineering. After a decade out of post secondary, Mickey returned to school, leaving a career in distilling craft spirits,  to attempt to help solve the ever present dangers of climate change in a meaningful way. Their role is to support and facilitate connection to the local community, while developing the technical skills through osmosis from his peers.",
        image: {
          src: "/img-mickey.jpg",
          altimagesizes: "/img-mickey-sm-150.jpg 150w, img-mickey.jpg 300w",
          blurhash: "LmIX?YE1.9%2~qWY%MofNbxaV@WB",
        },
      },
      {
        name: "Kareem Youssef",
        major: "BSc in Electrical Engineering",
        description:
          "Kareem is taking the role of  Fundraising and Outreach Lead for the project. Kareem is an Electrical & Digital Engineering student and the co-founder and president of the Student Energy University of Calgary Chapter since 2021.",
        image: {
          src: "/img-kareem2.jpg",
          altimagesizes: "/img-kareem2-sm-150.jpg 150w, img-kareem2.jpg 300w",
          blurhash: "LhIr$+%1~pof.TWAIUWBJFbIRks+",
        },
      },
      {
        name: "Abdujalel Wadouh",
        major: "BSc in Mechanical Engineering",
        description:
          "Abduljalel Wadouh is taking the role of Project Deliverable Lead for the Solar Project. He is also a Mechanical & Manufacturing Engineering student at the University of Calgary in which he co-founded the Student Energy Chapter there in 2021 and has subsequently been serving as an executive since.",
        image: {
          src: "/aj_img2.jpg",
          altimagesizes: "/aj_img2-sm-150.jpg 150w, aj_img2.jpg 300w",
          blurhash: "LjH.jBs;^+jG_4aJaJnhR:oHRjoc",
        },
      },
    ],
    project_outlook_link: "/program_outlook.png",
    images: [
      "/project1.png",
      "project2.png",
      "project3.png",
      "project4.png",
      "project5.png",
      "project6.png",
    ],
    budget_breakdown: [
      {
        name: "Permit",
        amount: "$350",
        icon: FaFilePowerpoint,
      },
      {
        name: "Inverter",
        amount: "$8,000",
        icon: FaCarBattery,
      },
      {
        name: "Tools",
        amount: "$650",
        icon: FaWrench,
      },
      {
        name: "Solar Panels",
        amount: "$4,500",
        icon: FaSolarPanel,
      },
      {
        name: "Labour",
        amount: "$3,500",
        icon: FaToolbox,
      },
    ],
    total_budget_statement: "$17,000 + 10% contingency = $18,700",
  },
];

export const executives = [
  {
    name: "Kareem Youssef",
    position: "President",
    path: "/img-kareem2.jpg",
    altimages: "/img-kareem2-sm-150.jpg 150w, img-kareem2.jpg 300w",
    altimagesizes: "(max-width: 440px) 130px, 300px",
    major: "Electrical Engineering",
    text: "I am interested in a just energy transition, working towards a low emission future has to fall in hand with ensuring a fair, inclusive and equitable transition.",
    hobby: "Public speaking, gaming and gym.",
    blurhash: "LlH{csxa?uRn.mtRaeofN#R*M|ad",
  },
  {
    name: "Abduljalel Wadouh",
    position: "Sponsorship Director",
    path: "/aj_img2.jpg",
    altimages: "/aj_img2-sm-150.jpg 150w, aj_img2.jpg 300w",
    altimagesizes: "(max-width: 440px) 130px, 300px",
    major: "Mechanical Engineering",
    text: "My interest stems from the pure dichotomy regarding energy usage and production philosophies. Taking a look into uniting both will be a great challenge that I am ready to partake in.",
    hobby: "Public speaking, gym and being an all-around legend.",
    blurhash: "LjH.jBs;^+jG_4aJaJnhR:oHRjoc",
  },
  {
    name: "Gabriela Perez Nasibullina",
    position: "VP Communications",
    path: "/img-gabriela.jpg",
    altimages: "/img-gabriela-sm-150.jpg 150w, img-gabriela.jpg 300w",
    altimagesizes: "(max-width: 440px) 130px, 300px",
    major: "Energy Engineering",
    text: "I’m drawn to areas like renewable energy systems, smart grids, and energy storage solutions, where optimization and sustainability are key.",
    hobby:
      "Gaming, working out, exploring around. But I also need a regular dose of snuggles with my cat.",
    blurhash: "LGHnZ;~oTb=|;Jt2%Kr=_2s:={E2",
  },
  {
    name: "Mariia Podgaietska",
    path: "/img-mariia.jpg",
    altimages: "/img-mariia-sm-150.jpg 150w, img-mariia.jpg 300w",
    altimagesizes: "(max-width: 440px) 130px, 300px",
    position: "VP Software Development",
    major: "Software Engineering",
    text: "I am interested in how technology can be leveraged within the energy sector to drive the transition towards renewable sources and pave a way for a sustainable energy future.",
    hobby: "Baking, gym and traveling.",
    blurhash: "LjLgtuxutmRP~qoft6RjE1jYVsoz",
  },
  {
    name: "Murad Tashkandi",
    path: "/img-murad.jpg",
    altimages: "/img-murad-sm-150.jpg 150w, img-murad.jpg 300w",
    altimagesizes: "(max-width: 440px) 130px, 300px",
    position: "VP Public Relations",
    major: "Electrical Engineering",
    text: "Renewable Energy Technologies! I am interested in the idea of developing and implementing sustainable energy resources.",
    hobby: "Sketching and drawing.",
    blurhash: "LOHL0Y_M%y_3=^%M.7NGE2RiV[s;",
  },
  {
    name: "Hashim Al-Kindi",
    path: "/img-hashim.jpg",
    altimages: "/img-hashim-sm-150.jpg 150w, img-hashim.jpg 300w",
    altimagesizes: "(max-width: 440px) 130px, 300px",
    position: "VP Sponsorship & Finance",
    major: "Mechanical Engineering",
    text: "I look forward to seeing new innovations in the energy production space that would help us reuse current infrastructure and propel us to a more sustainable future.",
    hobby: "Football, gym, motorsport.",
    blurhash: "LBEVgKxy-@xvV$V=oMWAXQsNISav",
  },
  {
    name: "Cameron Winfield",
    path: "/img-cameron.jpg",
    altimages: "/img-cameron-sm-150.jpg 150w, img-cameron.jpg 300w",
    altimagesizes: "(max-width: 440px) 130px, 300px",
    position: "Junior VP Public Relations",
    major: "Environmental Science & Geology",
    text: "I am interested in contributing to sustainable practices and addressing global energy challenges to protect our future generations.",
    hobby: "Reading, hiking and gym.",
    blurhash: "L5Aw0UI;0L^Q^,buOY-V*0s:v#I:",
  },
  {
    name: "Almuataz Alghafri",
    path: "/img-almuataz.jpg",
    altimages: "/img-almuataz-sm-150.jpg 150w, img-almuataz.jpg 300w",
    altimagesizes: "(max-width: 440px) 130px, 300px",
    position: "VP Events",
    major: "Chemical Engineering",
    text: "My interest in energy sector is driven by how it sits at the crossroads of technological innovation, environmental stewardship, and social equity.",
    hobby: "Camping and horse riding.",
    blurhash: "LMAnp7-o%%s,OeE1DiR+b_xBxsxZ",
  },
] as const;

export const upcomingEvents = [] as const;

export const pastEvents = [
  {
    title: "Bridging Perspectives: The Road to Net-Zero",
    description:
      '"Bridging Prespectives: The Road to Net-Zero" was an insightful event hosted by CISSA and Student Energy at the Alta Hotel, which focused on sustainability, renewable energy, net-zero pathways, and emphasizing the role of youth and indigenous perspectives in achieving sustainability. The event included engaging discussions, a speaker panel of industry experts and networking sessions.',
    date: "February 17th, 2024",
    path: "/bridgingperspectives.jpg",
    blurhash: "L3Ct%-E705tS_5wM%yDtLcES}$xo",
    animation: "fade-right",
  },
  {
    title: "Professor Research Night",
    description:
      "Professor Research Night showcased innovative sustainable energy projects by leading professors at the University of Calgary, offering students insights into research opportunities and expanding their understanding of renewable energy fields.",
    date: "January 22nd, 2024",
    path: "/research.jpg",
    blurhash: "LGG8r#V{R*oH_KRoofRiETt8Rkoe",
    animation: "fade-left",
  },
  {
    title: "Industry Networking Event",
    description:
      "Hosted in collaboration with Fuse Collective and ESS, Industry Networking Night connected 100+ students with 30+ industry experts from 15 leading companies. The event featured presentations on energy transition and decarbonization followed by a networking session for students to engage with industry professionals.",
    date: "November 24th, 2023",
    path: "/networking.jpg",
    blurhash: "LHGbn%7I9Z%g~o9^9G.8m.VZxbNI",
    animation: "fade-right",
  },
  {
    title: "Speaker Session",
    description:
      "Fall '23 Tech Stewardship Collaboration, in partnership with Fuse Collective, ESS and Energy Futures Lab, offered a micro-credential on energy transition, speaker sessions, and culminated in a networking event and case competition. The highlight was the Student Energy-led session, attracting the largest attendence with 40 students.",
    date: "September 15th 2023",
    path: "/speaker-session.jpg",
    blurhash: "LGBpUyT#xvV@WXs:Rkt6MIrBxBNe",
    animation: "fade-left",
  },
] as const;

export const achievementsEvents = [
  {
    title: "Alberta Electricity Future Coalition",
    description:
      "The Alberta Electricity Future Coalition, hosted by Energy Futures Lab, featured two key workshops in June and October 2023. The event centered around discussions on the future of Alberta's electrical grid and its transition to net-zero electricity, with contributions from various industry and government attendees, including insights on nuclear energy options of Alberta.",
    date: "September 15th 2022",
    path: "/electricity.jpg",
    blurhash: "LOI4qj%1D%~U~W%2oJNH9cofkCIW",
    animation: "fade-right",
    link: "https://energyfutureslab.com/innovation-challenges/albertas-electricity-future/",
  },
  {
    title: "Minister Roundtable",
    description:
      "The roundtable discussion on Canada's Sustainable Jobs Plan and Clean Economy involved a diverse group of Calgary youth, leading to important community connections and leadership interactions.",
    date: "September 15th 2023",
    path: "/roundtable.jpg",
    blurhash: "LGI;nxNG9ZM|00IV%gNH~A?HIU-p",
    animation: "fade-left",
    link: "https://www.canada.ca/en/services/jobs/training/initiatives/sustainable-jobs/plan.html#s2",
  },
  {
    title: "Ottawa EWB Advocacy Day",
    description:
      'The "Day on the Hill" event hosted by EWB is an annual initiative where participants engage with MPs at Parliament Hill in Ottawa to discuss significant energy issues. This year, our chapter was notably invited to attend, marking a significant step in broadening participation and representing diverse viewpoints.',
    date: "September 15th 2023",
    path: "/advocacy.jpg",
    blurhash: "LWHLMF#k-ot2_N%1NekCk9xaj]WC",
    animation: "fade-right",
  },
  {
    title: "Alberta Energy Summit",
    description:
      "The Alberta Energy Summit featured speaker panels and crowd discussions, focusing on the challenges and developments in the energy sector. It emphasized the impact of smaller factors in achieving a sustainable future, particularly the need for a skilled workforce and understanding their requirements and aspirations.",
    date: "September 15th 2022",
    path: "/albertasummit.jpg",
    blurhash: "LEFh#CM}EKR*00%Kn#E1~TI@eo%1",
    animation: "fade-left",
  },
] as const;

export const collaborators = [
  {
    title: "NanosTech",
    path: "/colab1.png",
  },
  {
    title: "Kanin Energy",
    path: "/colab2.png",
  },
  {
    title: "ATCO",
    path: "/colab3.png",
  },
  {
    title: "Energy Toolbase",
    path: "/colab4.png",
  },
  {
    title: "TC Energy",
    path: "/colab5.png",
  },
  {
    title: "Canadian Natural(CNRL)",
    path: "/colab6.png",
  },
  {
    title: "accenture",
    path: "/colab7.png",
  },
  {
    title: "Schulich",
    path: "/colab8.png",
  },
  {
    title: "Alberta Energy Regulator",
    path: "/colab9.png",
  },
  {
    title: "Haskayne",
    path: "/colab10.png",
  },
  {
    title: "University of Calgary",
    path: "/colab11.png",
  },
  {
    title: "Carbon Upcycling",
    path: "/colab12.png",
  },
  {
    title: "Energy Futures Lab",
    path: "/colab13.png",
  },
  {
    title: "Propel",
    path: "/colab14.png",
  },
  {
    title: "Solas Energy",
    path: "/colab15.png",
  },
  {
    title: "EWB",
    path: "/colab16.png",
  },
  {
    title: "Alt Hotels",
    path: "/colab17.png",
  },
  {
    title: "Innovate Calgary",
    path: "/colab18.png",
  },
  {
    title: "Siksika",
    path: "/colab19.png",
  },
  {
    title: "Exergy",
    path: "/colab20.png",
  },
  {
    title: "Brightspot Climate",
    path: "/colab21.png",
  },
] as const;
