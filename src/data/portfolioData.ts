import {
  SkillItem,
  ProjectItem,
  TimelineStage,
  ExperienceRole,
  CompetitionItem,
  HobbyItem,
  SocialLink,
  EntertainmentCategory
} from '../types.ts';

export const PERSONAL_INFO = {
  name: 'Dhruba Acharjee',
  brandName: 'Dhruba.exe',
  title: 'Engineer in Progress',
  alternativeTagline: 'Student → Creator → Entrepreneur',
  age: 22,
  studentId: '24010608',
  department: 'Electrical and Electronic Engineering',
  departmentShort: 'EEE',
  university: 'Jamalpur Science & Technology University',
  universityShort: 'JSTU',
  academicStatus: '2nd Year, 2nd Semester',
  presentAddress: 'Jamalpur Sadar, Jamalpur, Bangladesh',
  permanentAddress: 'Chandpur Sadar, Chandpur, Bangladesh',
  nationality: 'Bangladeshi',
  futureDream: 'Become a successful businessman and build innovative technology-based ventures.',
  coreQuote: '“My goal isn’t only to become an engineer. I want to combine technology, creativity and business to build something meaningful.”',
  missionStatement: '“Engineering is the foundation. Entrepreneurship is the destination.”',
  bio: `I am an Electrical and Electronic Engineering student driven by relentless curiosity at the intersection of robotics, embedded systems, artificial intelligence, coding, and creative digital arts. I believe in hands-on learning through building real prototypes and simulations. As a class representative and club organizer, I combine disciplined technical problem-solving with collaborative leadership to bring ideas into reality.`,
  roles: [
    'Electrical & Electronic Engineering Student',
    'Robotics Enthusiast & Hardware Builder',
    'Tech Explorer & AI Tinkerer',
    'Future Tech Entrepreneur'
  ],
  systemSpecs: {
    status: 'BUILDING THE FUTURE',
    coreVersion: 'v2.4.0 (2nd Year)',
    locationNode: 'Jamalpur [24.9188° N, 89.9464° E]',
    originNode: 'Chandpur [23.2321° N, 90.6631° E]',
    uptime: '22 Years / Active Execution',
    currentFocus: 'Circuits, Robotics & AI Systems'
  }
};

export const TIMELINE_STAGES: TimelineStage[] = [
  {
    stageNumber: '01',
    title: 'Student',
    subtitle: 'Electrical & Electronic Engineering Foundation',
    description: 'Enrolled at Jamalpur Science & Technology University (JSTU), diving deep into circuit theory, semiconductor physics, signal systems, and applied mathematics.',
    status: 'Completed',
    achievements: [
      'Admitted to EEE department, Student ID 24010608',
      'Elected Class Representative (CR) of EEE-05 batch',
      'Solidified fundamentals of digital electronics & physics'
    ],
    accentColor: '#00f0ff'
  },
  {
    stageNumber: '02',
    title: 'Builder',
    subtitle: 'Hardware, Robotics & Circuit Simulations',
    description: 'Began crafting physical microcontroller projects, sensor networks, and CAD/Tinkercad simulations to translate textbook theory into responsive electro-mechanical prototypes.',
    status: 'Completed',
    achievements: [
      'Engineered Fire Fighting Robot prototype with responsive extinguishing mechanism',
      'Constructed ECG bio-signal acquisition & heart-rate measurement module',
      'Simulated multi-room Home Automation architecture in Tinkercad',
      'Developed Human Following Robot with ultrasonic and infrared tracking'
    ],
    accentColor: '#3b82f6'
  },
  {
    stageNumber: '03',
    title: 'Creator',
    subtitle: 'Coding, Media & Technical Communication',
    description: 'Expanded beyond physical hardware into software engineering, Python, algorithms, video editing, and publication-grade LaTeX documentation.',
    status: 'Current',
    achievements: [
      'Mastered technical documentation and scientific paper preparation in LaTeX',
      'Produced creative multimedia assets and dynamic video edits for initiatives',
      'Strengthened algorithmic programming and problem-solving skills'
    ],
    accentColor: '#a855f7'
  },
  {
    stageNumber: '04',
    title: 'Leader',
    subtitle: 'Academic Leadership & Robotics Club Organizing',
    description: 'Serving as the Class Representative of EEE-05 and Assistant Organizing Secretary at JSTU Robotics Club, coordinating university cohorts and tech competitions.',
    status: 'Current',
    achievements: [
      'Continuous service as CR of EEE-05 from 1st year to 2nd year present',
      'Assistant Organizing Secretary at JSTU Robotics Club',
      'Spearheaded volunteer operations for JSTU Robotics Club 2026 recruitment drive',
      'Founded Clever Sapiens to foster cross-disciplinary student projects'
    ],
    accentColor: '#ec4899'
  },
  {
    stageNumber: '05',
    title: 'Entrepreneur',
    subtitle: 'Building Scalable Technology Ventures',
    description: 'The long-term apex: combining deep electrical engineering, AI intelligence, and strategic business acumen to launch technology-driven ventures and impactful products.',
    status: 'Future',
    achievements: [
      'Convert Clever Sapiens into an innovation incubator for scalable hardware-software products',
      'Design commercial IoT, biomedical, or autonomous robotics devices',
      'Bridge Bangladesh engineering talent with global technology marketplaces'
    ],
    accentColor: '#10b981'
  }
];

export const SKILLS_DATA: SkillItem[] = [
  // Engineering
  { id: 'eng-1', name: 'Electrical & Electronic Engineering', category: 'Engineering', level: 'Building', description: 'Core principles of circuit design, AC/DC analysis, electromagnetics & electronic components.' },
  { id: 'eng-2', name: 'Electronics', category: 'Engineering', level: 'Building', description: 'Analog & digital circuitry, op-amps, power supplies, transistor biasing and breadboarding.' },
  { id: 'eng-3', name: 'Arduino', category: 'Engineering', level: 'Building', description: 'Microcontroller firmware development, PWM control, I2C/SPI interfaces, sensor integration.' },
  { id: 'eng-4', name: 'Robotics', category: 'Engineering', level: 'Practicing', description: 'Differential drive rovers, sensor-actuator loops, motor drivers, automated path execution.' },
  { id: 'eng-5', name: 'Circuit Design', category: 'Engineering', level: 'Practicing', description: 'Schematic drafting, component rating calculation, power distribution, signal routing.' },
  { id: 'eng-6', name: 'Tinkercad', category: 'Engineering', level: 'Building', description: 'Rapid circuit prototyping, virtual breadboarding, simulation debugging, 3D spatial modeling.' },

  // Technology
  { id: 'tech-1', name: 'Machine Learning', category: 'Technology', level: 'Learning', description: 'Exploring predictive models, supervised learning fundamentals, data preprocessing.' },
  { id: 'tech-2', name: 'Coding', category: 'Technology', level: 'Practicing', description: 'C/C++ for embedded microcontrollers, Python for automation and scripting, modern web foundations.' },
  { id: 'tech-3', name: 'Artificial Intelligence', category: 'Technology', level: 'Learning', description: 'Investigating neural network architectures, computer vision for robotics, and autonomous agent behavior.' },
  { id: 'tech-4', name: 'Problem Solving', category: 'Technology', level: 'Practicing', description: 'Algorithmic logic, systematic troubleshooting of hardware faults and software edge cases.' },

  // Creative
  { id: 'cre-1', name: 'Video Editing', category: 'Creative', level: 'Practicing', description: 'Dynamic pacing, audio syncing, color correction, storytelling for technical showcases & presentations.' },
  { id: 'cre-2', name: 'LaTeX', category: 'Creative', level: 'Building', description: 'Scientific report authoring, mathematical typesetting, research documentation, IEEE formatting.' },
  { id: 'cre-3', name: 'Presentation Design', category: 'Creative', level: 'Building', description: 'Clean data visualizations, technical deck architecture, executive pitch slide formulation.' },

  // Management
  { id: 'mgmt-1', name: 'Leadership', category: 'Management', level: 'Building', description: 'Directing class cohorts as CR, delegating team responsibilities, conflict resolution.' },
  { id: 'mgmt-2', name: 'Team Coordination', category: 'Management', level: 'Building', description: 'Cross-functional project management, team sprint scheduling, morale management.' },
  { id: 'mgmt-3', name: 'Communication', category: 'Management', level: 'Building', description: 'Liaising between university faculty and student body, public speaking, technical briefs.' },
  { id: 'mgmt-4', name: 'Event Organization', category: 'Management', level: 'Practicing', description: 'Planning club orientations, workshop logistics, recruitment drives, and project exhibitions.' },
  { id: 'mgmt-5', name: 'Management', category: 'Management', level: 'Practicing', description: 'Resource planning, timeline accountability, strategic goal setting for academic & group initiatives.' }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'fire-fighting-robot',
    projectNumber: '01',
    title: 'Fire Fighting Robot',
    tagline: 'Autonomous Flame Detection & Rapid Extinguishing Rover',
    description: 'An autonomous robotics platform engineered to detect active fire outbreaks using optical flame sensors and rapidly extinguish the hazard using an onboard high-torque pump and directional nozzle.',
    detailedOverview: `The Fire Fighting Robot is a practical exploration into safety and emergency automation. Designed as an agile robotic rover chassis, it integrates optical flame sensors arranged in a directional array to locate heat and fire sources in real-time. Upon detecting an anomalous flame signature, the microcontroller executes navigation logic to maneuver toward the target while maintaining a safe operating perimeter, triggering the DC water pump and directional nozzle to extinguish the flame.`,
    technologies: ['Arduino', 'Flame Sensors', 'L298N Motor Driver', 'DC Water Pump', 'Relay Module', 'Embedded C++'],
    status: 'Completed',
    category: 'Robotics',
    date: '2025',
    highlights: [
      'Multi-angle infrared flame detection array for directional localization',
      'Dual H-Bridge motor driver ensuring high-torque pivot turns on rough surfaces',
      'Integrated fail-safe relay isolating high-current pump circuitry from microcontroller',
      'Autonomous search and extinguish state-machine algorithm'
    ],
    schematicDetails: 'Arduino Uno MCU core connected to 3x IR flame detector pins, 2x dual-channel PWM motor driver ports, and 1x optocoupled relay channel driving a 12V submersible pump.'
  },
  {
    id: 'ecg-machine',
    projectNumber: '02',
    title: 'ECG Machine',
    tagline: 'Bio-Potential Heart Signal Acquisition & Heart-Rate Monitoring',
    description: 'An electro-medical instrumentation system that detects microvolt cardiac electrical potentials using surface electrodes, applies instrumentation amplification and analog filtering to extract clean real-time ECG waveforms.',
    detailedOverview: `Constructed to understand biomedical signal processing, this project focuses on acquiring the subtle P-Q-R-S-T cardiac voltage waveform. Bio-signals are susceptible to 50Hz AC mains noise and motion artifacts, requiring a high Common-Mode Rejection Ratio (CMRR) instrumentation amplifier, followed by precision bandpass active filtering. The processed output feeds an analog-to-digital converter to measure heart rate (BPM) and monitor cardiac electrical activity.`,
    technologies: ['Bio-Sensors', 'Instrumentation Amplifiers', 'Analog Filtering', 'Op-Amps', 'ADC', 'Signal Processing'],
    status: 'Completed',
    category: 'Biomedical / EEE',
    date: '2025',
    highlights: [
      'High-gain instrumentation amplifier configuration designed to capture microvolt P-Q-R-S-T pulses',
      'Multi-stage active bandpass and 50Hz notch filter topology suppressing environmental interference',
      'Live heart-rate derivation algorithm and waveform output telemetry',
      'Patient electrical safety considerations with isolated supply grounds'
    ],
    schematicDetails: '3-lead biomedical electrode input connected to precision instrumentation amplifier (AD620 / operational amplifier array) with active 2nd-order Sallen-Key low-pass filter (0.05Hz - 100Hz).'
  },
  {
    id: 'home-automation',
    projectNumber: '03',
    title: 'Home Automation',
    tagline: 'Comprehensive Smart Living Simulation & Sensor-Driven Control',
    description: 'A complete multi-zone home automation simulation created and tested in Tinkercad, featuring automatic ambient light detection, climate regulation, safety alert systems, and simulated appliance switching.',
    detailedOverview: `Developed within Tinkercad as an exhaustive simulation environment, this project demonstrates intelligent architectural control without hardware component risks. It models multi-room automation including LDR-based dusk-to-dawn lighting, temperature-actuated cooling fans, ultrasonic security motion triggers, and simulated LCD status readouts. The complete electrical wiring schematic and embedded logic were verified iteratively before physical translation.`,
    technologies: ['Tinkercad', 'Virtual Prototyping', 'LDR Sensors', 'PIR Motion Sensor', 'LCD 16x2', 'Microcontroller Simulation'],
    status: 'Simulation',
    category: 'Simulation',
    date: '2025',
    highlights: [
      '100% verified schematic in Tinkercad with zero virtual component stress violations',
      'Automated light-dependent resistor (LDR) circuit triggering energy-saving illumination',
      'Simulated temperature feedback loop driving motor-based HVAC ventilation',
      'Virtual LCD display providing real-time room status telemetry'
    ],
    schematicDetails: 'Tinkercad simulated Arduino Uno R3 with 16x2 I2C LCD, analog thermistor input, LDR voltage divider, ultrasonic distance sensor, and dual servo/relay outputs.'
  },
  {
    id: 'human-following-robot',
    projectNumber: '04',
    title: 'Human Following Robot',
    tagline: 'Intelligent Autonomous Tracking & Obstacle Avoidance Rover',
    description: 'A responsive robotics rover engineered to continuously identify, follow, and maintain a fixed distance from a designated person or obstacle using ultrasonic ranging and infrared lateral triangulation.',
    detailedOverview: `The Human Following Robot implements closed-loop proportional distance tracking. Using an ultrasonic distance sensor paired with left and right infrared sensory arrays, the robot measures the target’s displacement vector. If the target moves forward, the robot accelerates to follow; if the target turns, the lateral sensors command differential wheel speeds; if the target steps too close, the rover reverses to maintain safety distance.`,
    technologies: ['Ultrasonic Sensors', 'Infrared Arrays', 'Arduino', 'Chassis Kinematics', 'PWM Motor Control'],
    status: 'Completed',
    category: 'Robotics',
    date: '2025',
    highlights: [
      'Dynamic distance thresholding maintaining stable 20-30cm target following buffer',
      'Infrared lateral triangulation enabling agile cornering and trajectory alignment',
      'Collision prevention fail-safe automatically stopping wheels on sudden obstruction',
      'Modular sensor mounting bracket allowing vertical angle calibration'
    ],
    schematicDetails: 'HC-SR04 ultrasonic transducer on central axis, 2x IR proximity sensors for bearing detection, driven by Arduino PWM outputs to L298N dual H-Bridge driving high-rpm geared motors.'
  }
];

export const EXPERIENCE_ROLES: ExperienceRole[] = [
  {
    id: 'cr-eee-05',
    role: 'Class Representative (CR) — EEE-05 Batch',
    organization: 'Jamalpur Science & Technology University (JSTU)',
    period: 'Beginning of 1st Year – Present',
    type: 'Leadership',
    badge: 'Current Leadership',
    description: 'Serving as the official liaison between the university administration, department faculty, and the 5th batch of Electrical & Electronic Engineering students.',
    highlights: [
      'Coordinating class schedules, lab allocations, examinations, and departmental announcements',
      'Representing student feedback, academic queries, and institutional requirements directly to course advisors',
      'Organized academic peer study circles and resource repositories for batch mates'
    ]
  },
  {
    id: 'organizing-secretary-robotics',
    role: 'Assistant Organizing Secretary',
    organization: 'JSTU Robotics Club',
    period: '2025 – Present',
    type: 'Club',
    badge: 'Executive Role',
    description: 'Key executive assisting the executive committee in structuring robotics workshops, technical hackathons, and hardware project development within the university.',
    highlights: [
      'Overseeing event planning, venue coordination, and technical equipment logistics',
      'Mentoring junior members on introductory electronics, sensor fundamentals, and Arduino',
      'Assisting club administration in external university competition participation'
    ]
  },
  {
    id: 'clever-sapiens-founder',
    role: 'Founder',
    organization: 'Clever Sapiens',
    period: '2024 – Present',
    type: 'Initiative',
    badge: 'Personal Group & Initiative',
    description: 'Founded Clever Sapiens as a personal initiative and project identity dedicated to uniting technology, creative media, engineering exploration, and future entrepreneurial projects.',
    highlights: [
      'Incubating collaborative concepts spanning software automation, hardware, and multimedia content',
      'Serving as the creative launchpad for multidisciplinary tech experiments and future business ideas',
      'Curating a library of open-source resources, video projects, and engineering notes'
    ]
  },
  {
    id: 'green-voice-volunteer',
    role: 'Volunteer',
    organization: 'Green Voice',
    period: 'Active Member',
    type: 'Volunteering',
    badge: 'Community & Environment',
    description: 'Participating in environmental preservation drives, tree plantations, climate awareness campaigns, and community social responsibility programs.',
    highlights: [
      'Advocating for sustainable campus practices and eco-conscious engineering solutions',
      'Participated in regional environmental rallies and university green campaigns'
    ]
  },
  {
    id: 'home-tutor',
    role: 'Home Tutor — Academic Mentor',
    organization: 'Private Tutoring',
    period: 'Current',
    type: 'Academic',
    badge: 'Education & Mentorship',
    description: 'Providing dedicated academic guidance to a Class 10 student in Mathematics, Physics, and foundational sciences.',
    highlights: [
      'Formulating individualized pedagogical roadmaps for secondary board exam preparation',
      'Cultivating conceptual clarity in classical mechanics, algebra, and basic electricity',
      'Refining personal communication, patience, and knowledge-transfer capabilities'
    ]
  },
  {
    id: 'robotics-club-recruitment',
    role: 'Robotics Club Volunteer',
    organization: 'JSTU Robotics Club Recruitment 2026',
    period: '2026',
    type: 'Volunteering',
    badge: 'Campus Activation',
    description: 'Active on-ground volunteer for the official 2026 recruitment campaign, onboarding prospective tech talent into the club.',
    highlights: [
      'Facilitated registration booths, information sessions, and hardware demonstration counters',
      'Interviewed and guided incoming freshmen passionate about robotics and embedded engineering'
    ]
  }
];

export const COMPETITIONS_DATA: CompetitionItem[] = [
  {
    id: 'comp-1',
    title: 'RoboFusion UFTB',
    event: 'RoboFusion Inter-University Tech Fest',
    type: 'Project Showcasing',
    year: '2025',
    description: 'Presented practical robotics engineering prototypes and demonstrated autonomous hardware capabilities before engineering adjudicators.',
    status: 'Demonstrated',
    badge: 'Hardware Showcase'
  },
  {
    id: 'comp-2',
    title: 'Competitive Coding Competition',
    event: 'University / Regional Coding Contest',
    type: 'Algorithmic Problem Solving',
    year: '2025',
    description: 'Competed in algorithmic challenge rounds testing data structures, time complexity optimization, and dynamic problem-solving under strict time constraints.',
    status: 'Participated',
    badge: 'Algorithmic Arena'
  }
];

export const HOBBIES_DATA: HobbyItem[] = [
  {
    id: 'chess',
    name: 'Chess',
    icon: '♟',
    category: 'Strategy & Foresight',
    description: 'Mastering board geometry, tactical calculation, tempo control, and patient positional play — directly sharpening strategic engineering decision-making.',
    tactics: ['Positional Calculation', 'Foresight & Sacrifices', 'Endgame Precision', 'Psychological Resilience']
  },
  {
    id: 'badminton',
    name: 'Badminton',
    icon: '🏸',
    category: 'Physical Reflexes & Agility',
    description: 'High-intensity court mobility, rapid wrist snap smashes, and instantaneous reflex coordination to maintain physical fitness and mental sharpness.',
    tactics: ['Explosive Footwork', 'Smash & Deception Drops', 'Spatial Court Awareness', 'Rapid Recovery']
  },
  {
    id: 'twenty-nine',
    name: '29 Card Game',
    icon: '🃏',
    category: 'Probability & Teamwork',
    description: 'The classic South Asian trick-taking card game requiring card memory, calculated bidding, trump suit timing, and symbiotic partner synergy.',
    tactics: ['Probability Tracking', 'Calculated Bidding', 'Partner Synergy', 'Trump Timing Mastery']
  }
];

export const ENTERTAINMENT_DATA: EntertainmentCategory[] = [
  {
    category: 'Favourite Anime',
    icon: 'Sparkles',
    items: [
      { id: 'a-1', title: 'Black Clover', genre: 'Shonen / Magic', note: 'Never giving up despite having zero magic resonance.', favoriteAspect: 'Asta’s relentless perseverance and anti-magic determination.', vibeTag: 'Grimoire Resonance' },
      { id: 'a-2', title: 'Attack on Titan', genre: 'Dark Fantasy / Mystery', note: 'Unmatched narrative architecture, moral complexity, and foreshadowing.', favoriteAspect: 'Erwin Smith’s leadership and the tactical scout strategies.', vibeTag: 'Freedom Vector' },
      { id: 'a-3', title: 'Naruto', genre: 'Action / Adventure', note: 'The quintessential blueprint for hard work beating innate privilege.', favoriteAspect: 'The shinobi philosophy, strategic jutsu battles, and Jiraiya’s legacy.', vibeTag: 'Will of Fire' },
      { id: 'a-4', title: 'Bleach', genre: 'Supernatural / Action', note: 'Peak aesthetic character designs, Bankai releases, and soul lore.', favoriteAspect: 'The sheer swagger of Bleach typography, soundtracks, and swordplay.', vibeTag: 'Bankai Release' },
      { id: 'a-5', title: 'The Eminence in Shadow', genre: 'Action / Isekai / Comedy', note: 'The art of operating from the deepest shadows with flawless theatrics.', favoriteAspect: 'Cid’s nuclear monologue and calculated phantom mastermind energy.', vibeTag: 'Shadow Garden' }
    ]
  },
  {
    category: 'Favourite Web Series',
    icon: 'Film',
    items: [
      { id: 'ws-1', title: 'Game of Thrones', genre: 'Epic Fantasy / Politics', note: 'Masterclass in political intrigue, house alliances, and grand conflict.', favoriteAspect: 'Tyrion Lannister’s intellect and the tactical Battle of the Bastards.', vibeTag: 'Iron Throne' },
      { id: 'ws-2', title: 'House of the Dragon', genre: 'Fantasy / Drama', note: 'The tragic civil war and aerial draconic supremacy of House Targaryen.', favoriteAspect: 'Daemon Targaryen’s rogue loyalty and high-stakes throne room tension.', vibeTag: 'Dragonfire' },
      { id: 'ws-3', title: '11 11', genre: 'Mystery / Sci-Fi', note: 'Mind-bending temporal twists and chronological puzzle solving.', favoriteAspect: 'The intricate causality threads and unexpected plot unravelling.', vibeTag: 'Temporal Rift' }
    ]
  },
  {
    category: 'Favourite Movies',
    icon: 'Clapperboard',
    items: [
      { id: 'm-1', title: 'Iron Man', genre: 'Sci-Fi / Engineering', note: 'The foundational inspiration for every hardware engineer and roboticist.', favoriteAspect: 'Tony Stark building the Mark I in a cave with raw engineering scrap.', vibeTag: 'Arc Reactor' },
      { id: 'm-2', title: 'Avengers', genre: 'Superhero / Ensemble', note: 'The monumental synergy of diverse heroes coordinating under pressure.', favoriteAspect: 'The iconic 360-degree rotating battle assembly shot.', vibeTag: 'Battle Array' },
      { id: 'm-3', title: 'Avengers: Endgame', genre: 'Sci-Fi / Epic Finale', note: 'A decade of cinematic storytelling culminating in unforgettable triumph.', favoriteAspect: '“Portals” sequence and the quantum mechanics time heist.', vibeTag: 'Quantum Heist' },
      { id: 'm-4', title: 'Harry Potter', genre: 'Fantasy / Adventure', note: 'Timeless world-building, magical mysteries, and lifelong camaraderie.', favoriteAspect: 'The mystery of the Deathly Hallows and the Battle of Hogwarts.', vibeTag: 'Elder Magic' },
      { id: 'm-5', title: 'Narnia', genre: 'Fantasy / Wonder', note: 'Stepping through the wardrobe into an ethereal kingdom of valor.', favoriteAspect: 'Aslan’s timeless wisdom and the grand winter thaw.', vibeTag: 'Lion Crown' },
      { id: 'm-6', title: 'I Am Legend', genre: 'Post-Apocalyptic / Sci-Fi', note: 'Solitary scientific resilience and relentless quest for an antiviral cure.', favoriteAspect: 'Dr. Robert Neville’s laboratory discipline in an empty New York.', vibeTag: 'Lone Pioneer' }
    ]
  },
  {
    category: 'Favourite Cartoons',
    icon: 'Smile',
    items: [
      { id: 'c-1', title: 'Doraemon', genre: 'Sci-Fi / Childhood Nostalgia', note: 'Every futuristic 22nd-century gadget sparked an early love for invention.', favoriteAspect: 'The Anywhere Door, Bamboo Copter, and 4D pocket innovations.', vibeTag: '4D Innovation' },
      { id: 'c-2', title: 'Tom & Jerry', genre: 'Slapstick Comedy', note: 'Pure orchestral comedic timing, physics acrobatics, and timeless fun.', favoriteAspect: 'The classical symphonic choreography and ingenious cat-and-mouse traps.', vibeTag: 'Orchestral Chaos' },
      { id: 'c-3', title: 'Mr. Bean', genre: 'Universal Physical Comedy', note: 'Unconventional out-of-the-box lateral problem-solving in everyday life.', favoriteAspect: 'Painting a room with firecrackers and driving a car from the rooftop.', vibeTag: 'Lateral Logic' }
    ]
  }
];

export const ENTREPRENEURSHIP_DATA = {
  quote: '“Engineering is the foundation. Entrepreneurship is the destination.”',
  coreEquation: [
    { term: 'Technology', desc: 'Deep hardware & software capability', color: '#00f0ff' },
    { term: 'Engineering', desc: 'Rigorous physics, circuits & mechanics', color: '#3b82f6' },
    { term: 'Creativity', desc: 'Aesthetic media, storytelling & design', color: '#a855f7' },
    { term: 'Leadership', desc: 'Cohort alignment, motivation & trust', color: '#ec4899' },
    { term: 'Business', desc: 'Product-market fit, capital & scale', color: '#10b981' }
  ],
  roadmapSteps: [
    { step: '01', title: 'Learn', subtitle: 'Academic & Technical Grounding', description: 'Acquire rigorous theoretical and practical mastery of electrical systems, microcontrollers, algorithms, and AI fundamentals at JSTU.' },
    { step: '02', title: 'Build', subtitle: 'Prototyping & Product Thinking', description: 'Develop working prototypes — from autonomous emergency robotics to bio-sensing apparatus — moving from theoretical schematics to tested hardware.' },
    { step: '03', title: 'Lead', subtitle: 'Team Alignment & Execution', description: 'Hone organizational capability as Class Representative, Robotics Club organizer, and founder of collaborative teams.' },
    { step: '04', title: 'Create', subtitle: 'Original IP & Solutions', description: 'Transform student prototypes into polished, proprietary solutions tailored to solve tangible industrial, agricultural, or healthcare problems.' },
    { step: '05', title: 'Scale', subtitle: 'Sustainable Tech Ventures', description: 'Establish enduring technology enterprises, creating high-value engineering employment and exporting Bangladeshi innovation globally.' }
  ]
};

export const CLEVER_SAPIENS_DATA = {
  title: 'Clever Sapiens',
  role: 'Founder — Personal Group',
  motto: 'Curiosity. Engineering. Vision.',
  about: `Clever Sapiens is my personal creative group and technology incubator. Born out of a passion for interdisciplinary experimentation, it serves as the sandbox where robotics prototypes, creative video production, LaTeX scientific works, and future tech startup ideas are conceived, documented, and forged.`,
  pillars: [
    { title: 'Hardware Lab', desc: 'Embedded systems, robotics, IoT gadgets, and sensor networks built from the circuit level up.' },
    { title: 'Digital Media', desc: 'Video production, motion graphics, LaTeX academic formatting, and storytelling for technical ideas.' },
    { title: 'Future Ventures', desc: 'Conceptualizing real-world commercial applications for autonomous devices and tech products.' }
  ],
  status: 'Incubating Projects & Open to Collaborations',
  contactCallout: 'Interested in partnering with Clever Sapiens on hardware, coding, or creative media initiatives?'
};

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Email', label: 'Direct Email', url: 'mailto:dhruboacharjee52@gmail.com', handle: 'dhruboacharjee52@gmail.com', iconName: 'Mail' },
  { platform: 'LinkedIn', label: 'LinkedIn Profile', url: 'https://linkedin.com/in/#placeholder', handle: 'dhruba-acharjee (Placeholder)', iconName: 'Linkedin' },
  { platform: 'GitHub', label: 'GitHub Repository', url: 'https://github.com/#placeholder', handle: '@dhruba-acharjee (Placeholder)', iconName: 'Github' },
  { platform: 'Facebook', label: 'Facebook', url: 'https://facebook.com/#placeholder', handle: 'Dhruba Acharjee (Placeholder)', iconName: 'Facebook' },
  { platform: 'YouTube', label: 'YouTube Channel', url: 'https://youtube.com/#placeholder', handle: '@CleverSapiens (Placeholder)', iconName: 'Youtube' },
  { platform: 'Instagram', label: 'Instagram', url: 'https://instagram.com/#placeholder', handle: '@dhruba.exe (Placeholder)', iconName: 'Instagram' }
];

export const EASTER_EGGS = {
  'sudo dhruba': 'Access granted. Welcome to Dhruba.exe — Root privileges unlocked.',
  'future': 'Building something bigger... Hardware + Software + Venture creation in active compilation.',
  'anime': 'Entertainment module engaged: Bankai, Grimoires, Titans & Shadow arts loaded.',
  'whoami': 'Dhruba Acharjee | EEE Student | Robotics Builder | JSTU ID: 24010608',
  'cleversapiens': 'Clever Sapiens node active: Incubating technology, media, and innovation.',
  'help': 'Available commands: about, projects, skills, journey, anime, clever, contact, matrix, sudo dhruba, future, clear, exit'
};
