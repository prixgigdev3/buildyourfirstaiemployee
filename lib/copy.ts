export const CHECKOUT_URL = "https://www.skool.com/aifoundersvault";

export const cta = {
  label: "Get Your First AI Employee Working",
  subtext:
    "$37/mo or $297/yr  ·  7-day draft-or-refund  ·  You don't need to learn the tech.",
} as const;

export const hero = {
  brand: "The AI Founder's Vault",
  eyebrow: "This week · one leftover job",
  headline: "Get Your First AI Employee Working",
  subhead:
    "Get your time back on the job you still do yourself. You don't need to learn the tech.",
  door: "You're still the bottleneck. The work only goes out when you do it. You pick that leftover work. This week the first employee drafts it. You hit send. If that doesn't happen, you get your money back.",
  videoTitle: "Get Your First AI Employee Working",
  posterLine: "Watch how the first employee takes the leftover job.",
  microLine:
    "It drafts. You hit send.  ·  Ready-made employees  ·  Plug in this week  ·  7-day money back",
} as const;

export const offer = {
  kicker: "This week. One leftover job. One ready-made employee. A draft you can send.",
  body: "You do not need to tour the vault. You do not need to learn the tech. You do not need to hire anyone. You pick the work that is still stuck on you, plug in one ready-made employee, and hit send on a real draft.",
  guarantee:
    "If a draft of that job is not sitting there in 7 days, ready for you to send, and you did the steps, cancel and you get your money back. That only works if you actually do the week.",
  rule: "One rule: one job this week. If you pick five, you finish none of them.",
  disclaimer:
    "Results disclaimer: I am not sitting behind your computer. I cannot set these up for you. I am not you. I will not tell you this will print a number into your account. Your numbers will be your numbers.",
} as const;

export const instructor = {
  label: "I'm Johnny Nel.",
  p1: "I am a founder who runs the company on agents, not a human org chart. That is why I can tell you you can stay founder. It is not why you join. You do not buy my roster on day one. You buy one leftover loop. Next seat after the first send.",
  p2: "The long way is on YouTube. There is a video on that channel with more than 134,000 views. That video teaches the box. It does not prove a leftover job left your business. This page is the employee already built. You don't need to learn the tech to use it.",
} as const;

export const weekGlance = {
  time: {
    label: "Time this week",
    body: "Step 0 to Step 5 can be done in one sitting if you already know the leftover job. The 7 days are there so the second send can happen, and so the guarantee is real.",
  },
  walkOut: {
    label: "What you walk out with",
    body: "One named leftover job. One ready-made employee plugged in. Two files inside it: how you talk, what it must never send. One real draft sent. Then the same job sent a second time.",
  },
  who: {
    label: "Who it is for",
    body: "Founders and solopreneurs who already have a business and still do the work themselves.",
  },
} as const;

export const whoFor = {
  forYouIf: {
    label: "This is for you if:",
    items: [
      "You already have a live business.",
      "ChatGPT already started the work. You still shipped it.",
      "You are the bottleneck. You do not know what to hire first, so you hire nobody.",
      "You will put one employee on one leftover loop this week.",
      "You will keep the send button.",
      "You will not become the engineer.",
    ],
  },
  notForYouIf: {
    label: "This is not for you if:",
    items: [
      "You sell AI.",
      "You want to become the engineer. The channel is that course. This page is the employee already built.",
      "You want to land client number one from this room.",
      "You want a 17-seat chart before one draft has left.",
    ],
  },
} as const;

export type DayModule = {
  id: string;
  label: string;
  title: string;
  time?: string;
  paragraphs: readonly string[];
  mappings?: readonly { when: string; then: string }[];
  files?: readonly string[];
  paragraphsAfter?: string;
  toolNote?: string;
  post?: string;
  doneWhen: string;
  doNot?: string;
};

export const dayModules: readonly DayModule[] = [
  {
    id: "day-0-watch",
    label: "Day 0",
    title: "Watch this first",
    time: "3 minutes",
    paragraphs: [
      "This is the welcome. It is not a tour.",
      "What you hear: you joined to get one leftover job off your plate. Not to become the engineer. Not to collect files.",
    ],
    doneWhen:
      "you watched it and you know the only goal this week is one real send.",
    doNot: "Do not scroll the classroom after this. Go name the job.",
  },
  {
    id: "day-0-name",
    label: "Day 0",
    title: "Name the leftover job",
    time: "20 minutes",
    paragraphs: [
      "Do not map the whole company. Only look at YOUR work this week.",
      "Write down everything you still have to finish yourself in the next 7 days. Put each item in one box: I am great at this and should keep it. I am fine at this and it is still stuck on me. I do not want to do this. I am bad at this.",
      "Circle one thing from I do not want this or I am bad at this. If those boxes are empty, circle the thing from I am fine at this that still only goes out when you do it.",
      "Post this sentence in Start Here:",
    ],
    post: "The leftover job this week is: ________. It only goes out if I do it.",
    doneWhen: "that sentence is written and posted. One job. Named.",
    doNot:
      "If you cannot name one job in 20 minutes, post that. Do not start building an org chart. Come to the next hot seat with your list.",
  },
  {
    id: "day-1-pick",
    label: "Day 1",
    title: "Pick the employee that matches that job",
    paragraphs: [
      "Do not browse everything in the vault. Match the job you just named to one ready-made employee.",
    ],
    mappings: [
      {
        when: "Follow-ups, replies, open loops, things still sitting in the inbox",
        then: "Inbox / follow-up employee. It drafts the thing you still owe. You hit send.",
      },
      {
        when: "A script, a post, research, or the thing you still write every week",
        then: "Content employee. It drafts the piece. You keep the send button.",
      },
      {
        when: "A daily block you still assemble. Record. Upload. Schedule.",
        then: "Daily production employee. It takes the repeat loop off you. You still approve what goes out.",
      },
      {
        when: "A quote, a proposal, or a reply that has been sitting",
        then: "Quote / reply employee. It drafts from how you already talk. You send it.",
      },
      {
        when: "Your calendar, the next step after a meeting, what moved and what did not",
        then: "Calendar / open-loop employee. It shows you what still needs you. You decide.",
      },
    ],
    paragraphsAfter:
      "If none fit, pick the closest one. Do not invent a new agent this week. Post: My job is X. I am using Y.",
    doneWhen: "you have one employee name next to the job from Day 0.",
  },
  {
    id: "day-1-2-plug",
    label: "Day 1–2",
    title: "Plug it in",
    paragraphs: [
      "Open the tool. Plug in the ready-made employee for the job you picked. Then paste two things before you give it work.",
    ],
    files: [
      "How you talk. A few real examples of how you already write or speak when this job goes well.",
      "What it must never send. Prices you do not quote. Promises you do not make. People it must not contact. Anything that would embarrass you if it went out.",
    ],
    paragraphsAfter:
      "Follow the click-for-click on that employee's card. If you get stuck, post in Start Here or bring it to the hot seat. Do not start another employee instead.",
    toolNote:
      "You will spend about $30 a month on the tool it runs on. That sits next to the $37, not inside it.",
    doneWhen: "the employee is plugged in and those two files are in it.",
  },
  {
    id: "day-3-work",
    label: "Day 3",
    title: "Give it real leftover work",
    paragraphs: [
      "Not a demo. Not write me a sample. Give it the actual thing from Day 0. The email you owe. The script you have been avoiding. The block that has to go out. The quote still sitting.",
      "If you feed it fake work, you will get a fake employee.",
    ],
    doneWhen: "one real piece of leftover work is in front of the employee.",
  },
  {
    id: "day-3-5-send",
    label: "Day 3–5",
    title: "Read it. Fix it. Hit send. Then send it again.",
    paragraphs: [
      "A draft should now be sitting there. Read it like you are about to put your name on it. Because you are.",
      "If it is close, fix the bits that are not you. Send it.",
      "If it is off, tell it what was wrong in one sentence. Get a second draft. Then send it.",
      "If it is dangerous, that is why you keep the send button. Do not let it go out. Tighten what it must never send and run it again.",
      "You are not looking for perfect. You are looking for sent.",
      "Then do the same job one more time. Same employee. Fresh leftover work of the same type. One send is a trick. Two sends is a job.",
    ],
    doneWhen:
      "a real draft went out from you, and a second real draft went out on the same leftover job. You do not have to share the client name. Post: I sent the follow-up. I sent the script.",
  },
  {
    id: "day-7-check",
    label: "Day 7",
    title: "Check the week",
    paragraphs: [
      "Ask only this: did a real draft of the leftover job I named leave my hands this week?",
      "If yes, you are in. Next week you can run these same steps on the next leftover job. Do not open the rest of the vault until this is true.",
      "If no, and you did the steps, cancel inside 7 days and you get your money back. Message Johnny. No lecture.",
      "If no, and you skipped steps, do not cancel yet. Book the hot seat. Bring the job from Day 0. We get the draft sitting.",
    ],
    doneWhen:
      "you can answer yes, or you have cancelled, or you are on the next hot seat with your named job.",
  },
] as const;

export const camps = {
  camp1: {
    label: "Camp 1 — The tab.",
    body: "ChatGPT has no job. It has a chat. You give it a prompt. It gives you text. Then you become the office again. Tone. Facts. Whether it should go out. The last click is still you, because there is no seat and no send gate.",
  },
  camp2: {
    label: "Camp 2 — The vault.",
    body: "Too many seats. No first job. You collect. Sunday the inbox wins. Thirty days later you cancel and tell yourself you did not have time. You had time to copy and send. You did not have one job small enough to finish.",
  },
  camp3: {
    label: "Camp 3 — The hire you cannot name.",
    body: "Hiring looks like the adult answer until you write the listing. Now you have a person to find, train, and manage, and you still do not know which loop to hand them. Founders in this spot have paid $800 a month for that and still handled every client message themselves. I am not saying that is your story. I am saying that is the hole.",
  },
  missing: {
    label: "The missing object:",
    body: "One leftover job. A ready-made employee. A draft you can see. A button you keep. No tech course required.",
  },
} as const;

export const howHelps = {
  lead: "An AI employee does not have to replace you unless you want it to. Most founders in this room already work alongside AI all day. This is that, with a job.",
  wait: "It can take the leftover loop you name, put a draft on it, and wait for you to hit send. Nothing leaves without you unless you later choose that.",
  pillarsLabel: "Three pillars this week:",
  pillars: [
    "Name the leftover job that still only goes out if you do it.",
    "Plug in one ready-made employee. How you talk. What it must never send.",
    "Hit send. Then send the same job a second time.",
  ],
  physicsLabel: "Same physics. Different leftover jobs:",
  physics: [
    "Person A runs a content business. Scripts. Structure. Research. The work still only goes out if they write it.",
    "Person B runs a radio station. Record the block. Upload it. Hit schedule. Every day.",
    "The follow-up still sitting. The quote they asked for. The reply opened four times. Admin still on their plate. Open loops that only get ranked at night.",
  ],
  close: "You pick yours. I do not pick your industry.",
} as const;

export const proof = {
  honest:
    "I will not put a shop on this page that has not sent a leftover job and pretend they did. When a founder in this room hits send on the loop they named, that line goes here. Until then the honest proof is the week above, or your money back.",
  howIUseLabel:
    "How I use mine — so you can see the leftover jobs, not so you buy the grid on day one:",
  howIUse: [
    "Pulse ranks what needs me. Drafts sit. Nothing sends until I hit send.",
    "Vesper chases projects until the work lands.",
    "Donna answers inbound in my voice.",
    "Scribe and Nova draft the short and the long content that used to only ship if I wrote it.",
    "Radar watches the feed so I do not.",
    "Ledger shows where money leaks.",
  ],
  box: "The box can fail. We show that. Nothing leaves without you.",
  possibility:
    "Possibility, not a forecast: some owners using AI have reported getting roughly four hours a week back. Some founders describe going from doing the loop to reviewing a draft. I am not you. I cannot promise your hours or your bank.",
} as const;

export const employees = {
  opener:
    "Seventeen ready-made AI employees. The suite it would take a massive human team to run. Already built. You plug them in. You run. This is how I use mine. You get the same suite inside the community.",
  groups: [
    {
      name: "Ops",
      seats: [
        {
          name: "Clark",
          line: "keeps the agent company running. Cadence. Connectors. Fixes. You do not babysit infrastructure.",
        },
        {
          name: "Vesper",
          line: "projects and executive ops. Plans. Milestones. Briefs. Chase until the work lands.",
        },
        {
          name: "Pulse",
          line: "daily open-loops brain. Ranked what needs you. Noise killed. Drafts ready. No auto-send.",
        },
        {
          name: "Anchor",
          line: "studio and desktop reliability. Internal tech support so the link stays up.",
        },
        {
          name: "Ledger",
          line: "finance. P and L. Spend versus growth. Where money leaks. What to fund next.",
        },
        {
          name: "Lisa",
          line: "decision council. Stuck call. Five lenses. Sharp read. No standing meeting.",
        },
      ],
    },
    {
      name: "Growth and brand",
      seats: [
        {
          name: "Swen",
          line: "head of growth. Scoreboard. KPIs. Front end to back end. Numbers, not vibes.",
        },
        {
          name: "Radar",
          line: "X scout. Signal only. No copy. No publish. You do not live in the feed.",
        },
        {
          name: "Scribe",
          line: "short posts in your voice. Consistent presence without you in the composer.",
        },
        {
          name: "Herald",
          line: "community stays live off the same engine.",
        },
        {
          name: "Nova",
          line: "long-form and YouTube when you need depth without pulling Scribe off the daily lane.",
        },
        {
          name: "Donna",
          line: "inbound brand. Support mail. Collabs. Press. Member questions. Answered as you.",
        },
      ],
    },
    {
      name: "Pipeline and last mile",
      seats: [
        {
          name: "Nexus",
          line: "warm network conversations already in motion.",
        },
        {
          name: "Keel",
          line: "pipeline and behavior email. Nurture without treating people like cold leads.",
        },
        {
          name: "Vox",
          line: "closes the loop email cannot.",
        },
        {
          name: "Steve",
          line: "executive performance seat so roles do not overlap.",
        },
        {
          name: "Forge",
          line: "inbound enrichment stays ready.",
        },
      ],
    },
  ],
  pinch:
    "You do not switch all seventeen on day one. You pick the leftover job that still only goes out if you do it. One first. The rest of the suite is already in the room when that send is done.",
  after:
    "After that send, you get help building your own agents for whatever leftover work is still sitting, whichever way you need it. Ready-made first. Then your own seats. Help in the room. Not a second career as the engineer.",
} as const;

export const room = {
  items: [
    "Access to Johnny inside the community. Not a face that disappears after checkout.",
    "Live hot seats twice a month if you get stuck. Everyone. You plug it in. I sit with you if it jams. I do not install your company.",
    "A community of founders and solopreneurs on the same leftover work. Same first send. Same I already tried the tab.",
    "Step by step so you can plug one in without becoming the engineer. You don't need to learn the tech.",
    "Classroom. Drops. How you talk. What it must never send.",
    "More bonuses and resources this page will not tour. If I listed every file, you would start collecting again.",
  ],
} as const;

export const pricing = {
  look: "Look at that stack against the price.",
  monthly: {
    name: "Builder",
    price: "$37",
    cadence: "/ month",
    body: "Seventeen ready-made AI employees. Help to build your own after the first send. Access to Johnny. Hot seats twice a month. Peers. Step by step. Classroom. Drops. First send this week.",
  },
  annual: {
    name: "Annual VIP Founder",
    price: "$297",
    cadence: "/ year",
    body: "Everything in monthly, plus a 15-minute Architecture call and early alpha. Do not join for the call. Join for the first send. The suite is already in both.",
  },
  tools:
    "Member-side tools sit around $30 / month. Named on the way in. One tool can run this employee and the next loop. You are not buying a new $30 seat every time you add work.",
  scarcity:
    "Right now is the best time to lock in the current price. The price may increase soon.",
} as const;

export const guarantee = {
  steps: "Join. Name the leftover work. Do the week.",
  promise:
    "If a draft is not sitting on that job in 7 days so you can hit send, and you did the steps, cancel. Money back. No lecture about modules you did not open.",
  whatItIs:
    "That is the 7-day money-back guarantee. It is not a promise you will make money. It is not a promise I did the setup. It is a promise about a draft on the job you named.",
  skipped:
    "If you skipped the steps and there is no draft, do not cancel yet. Book the hot seat. Bring the job from Day 0.",
} as const;

export const faqs = [
  {
    q: "Do I have to learn the tech?",
    a: "No. You plug it in. Step by step. You keep the send button. The channel teaches the box. This page is the employee.",
  },
  {
    q: "Can it send without me?",
    a: "No. That is the product this week. You approve. How you talk. What it must never send.",
  },
  {
    q: "What job does it do?",
    a: "The leftover work you name. I will not productize your industry on this page.",
  },
  {
    q: "Should I plug in a second employee this week?",
    a: "No. Same employee. Second send. Then the next seat.",
  },
  {
    q: "Can I wander the vault just to see?",
    a: "Not this week. That is how Sunday wins. Start Here is the path. The suite is in the room after the first send.",
  },
  {
    q: "Should I build a new agent from scratch this week?",
    a: "No. Match the job to a ready-made employee. After that send, you get help building your own.",
  },
  {
    q: "Is this a vault of 1,300 workflows?",
    a: "The library exists. It is not the door. First win is one named loop.",
  },
  {
    q: "Will this land me AI clients?",
    a: "No. If that is the goal, do not join.",
  },
  {
    q: "What if I already watched the long YouTube video?",
    a: "Good. That is the long way. This is the first job already built. You still plug it in.",
  },
  {
    q: "What extra tools do I pay for?",
    a: "About $30 a month on the tool the employee runs on. Named on the way in. Sits next to the $37, not inside it.",
  },
  {
    q: "What if I skip the steps and there is no draft?",
    a: "Do not cancel yet. Book the hot seat. Bring the job from Day 0. We get the draft sitting.",
  },
] as const;

export const finalCta = {
  clock: "Tonight's work is already sitting. That is the real clock.",
  stay: "You can stay the last click. The tab will keep starting the work. You will keep shipping it. The next piece of work will keep waiting.",
  or: "Or you name the leftover loop. Plug in one ready-made employee. Read the draft. Hit send. The other sixteen seats stay in the room until that send is done.",
  time: "Get your time back on the job you still do yourself. You don't need to learn the tech.",
  no: "Saying no is not free. Saying no is another week as the bottleneck.",
  price:
    "$37 a month or $297 a year. Seven days. Draft sitting, or the money comes back.",
  form: "The order form is the Skool About page. Same sentence as the top of this page.",
} as const;

export const footer = {
  skool:
    "The AI Founder's Vault is a Skool community. Checkout happens on skool.com/aifoundersvault.",
  results:
    "I am not sitting behind your computer. Ready-made employees are there to plug in. I do not install your company. Income is not promised. Results vary. Your numbers will be your numbers.",
  copyright: "© PRIXGIG PTY LTD / Modern Influence Society LLC. Terms and privacy as on Skool.",
} as const;
