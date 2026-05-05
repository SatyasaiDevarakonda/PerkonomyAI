// Centralised mock data for the entire prototype. Pure frontend — no backend.
// All values mirror the figures in Team_1_Report_REVISED.docx so the demo
// stays internally consistent.

export type Card = {
  id: string;
  bank: string;
  name: string;
  last4: string;
  network: "Visa" | "Mastercard" | "AmEx" | "RuPay" | "Diners";
  color: string;
  textColor?: string;
  pointsBalance: number;
  pointsValueINR: number;
  topCategories: { category: string; rate: string }[];
  hiddenBenefits: string[];
  annualFee: number;
};

export const cards: Card[] = [
  {
    id: "hdfc-regalia",
    bank: "HDFC Bank",
    name: "Regalia Gold",
    last4: "4421",
    network: "Visa",
    color: "linear-gradient(135deg,#0A1F32 0%,#1F4E79 60%,#2E75B6 100%)",
    pointsBalance: 18420,
    pointsValueINR: 9210,
    topCategories: [
      { category: "Travel & Hotels", rate: "10x" },
      { category: "Dining", rate: "5x" },
      { category: "Groceries", rate: "2x" },
    ],
    hiddenBenefits: [
      "12 domestic lounge visits / year (4 used)",
      "6 international Priority Pass visits (0 used)",
      "Movie BOGO on BookMyShow (₹500 cap)",
    ],
    annualFee: 2500,
  },
  {
    id: "axis-magnus",
    bank: "Axis Bank",
    name: "Magnus",
    last4: "0182",
    network: "Mastercard",
    color: "linear-gradient(135deg,#162538 0%,#2F4258 70%,#475A70 100%)",
    pointsBalance: 9460,
    pointsValueINR: 4730,
    topCategories: [
      { category: "Travel partners", rate: "25 pts/₹100" },
      { category: "All other spend", rate: "12 pts/₹100" },
    ],
    hiddenBenefits: [
      "Buy 1 Get 1 movie ticket (Tata CLiQ)",
      "Free golf rounds at premium courses (2/year)",
    ],
    annualFee: 12500,
  },
  {
    id: "amazon-icici",
    bank: "ICICI Bank",
    name: "Amazon Pay",
    last4: "9930",
    network: "Visa",
    color: "linear-gradient(135deg,#7E3F0B 0%,#C56607 70%,#F39820 100%)",
    pointsBalance: 2150,
    pointsValueINR: 2150,
    topCategories: [
      { category: "Amazon (Prime)", rate: "5%" },
      { category: "Amazon (non-Prime)", rate: "3%" },
      { category: "Bill payments via Amazon Pay", rate: "2%" },
    ],
    hiddenBenefits: ["No annual fee", "Welcome ₹500 Amazon Pay balance"],
    annualFee: 0,
  },
  {
    id: "sbi-elite",
    bank: "SBI Card",
    name: "ELITE",
    last4: "6612",
    network: "AmEx",
    color: "linear-gradient(135deg,#0E1A2A 0%,#162538 60%,#1F3146 100%)",
    pointsBalance: 6720,
    pointsValueINR: 1680,
    topCategories: [
      { category: "Dining, Departmental, Grocery", rate: "5x" },
      { category: "All other spend", rate: "2x" },
    ],
    hiddenBenefits: [
      "₹6,000 BookMyShow vouchers / year (₹1,500 unused)",
      "Club Vistara Silver tier",
      "Priority Pass for primary card holder",
    ],
    annualFee: 4999,
  },
];

export type Coupon = {
  id: string;
  merchant: string;
  title: string;
  code?: string;
  discount: string;
  expiresInDays: number;
  category: "Food" | "Travel" | "Grocery" | "Fashion" | "Bills";
  bestCardId?: string;
  estSaving: number;
};

export const coupons: Coupon[] = [
  { id: "c1", merchant: "Swiggy", title: "40% off (max ₹120) on first order of the week", code: "WEEKEND40", discount: "40% off", expiresInDays: 2, category: "Food", bestCardId: "amazon-icici", estSaving: 120 },
  { id: "c2", merchant: "BigBasket", title: "10% instant discount on min ₹2,500 cart", discount: "10% off", expiresInDays: 5, category: "Grocery", bestCardId: "hdfc-regalia", estSaving: 250 },
  { id: "c3", merchant: "MakeMyTrip", title: "₹2,000 off on domestic hotels above ₹6,000", code: "STAY2K", discount: "₹2,000 off", expiresInDays: 9, category: "Travel", bestCardId: "axis-magnus", estSaving: 2000 },
  { id: "c4", merchant: "Myntra", title: "End of Reason Sale — extra 10% on HDFC", discount: "Extra 10%", expiresInDays: 3, category: "Fashion", bestCardId: "hdfc-regalia", estSaving: 850 },
  { id: "c5", merchant: "Zomato", title: "Buy 1 Get 1 on Pro Plus restaurants", discount: "BOGO", expiresInDays: 14, category: "Food", bestCardId: "axis-magnus", estSaving: 480 },
  { id: "c6", merchant: "BBPS / Bills", title: "1.5% cashback on broadband bill via PhonePe", discount: "1.5% back", expiresInDays: 21, category: "Bills", bestCardId: "amazon-icici", estSaving: 70 },
  { id: "c7", merchant: "Cleartrip", title: "₹1,500 off international flights via Axis cards", code: "AXISFLY", discount: "₹1,500 off", expiresInDays: 12, category: "Travel", bestCardId: "axis-magnus", estSaving: 1500 },
  { id: "c8", merchant: "Nykaa", title: "Beauty fest — 20% off, no min. spend", discount: "20% off", expiresInDays: 6, category: "Fashion", bestCardId: "amazon-icici", estSaving: 320 },
];

export type ExpiryAlert = {
  id: string;
  cardId: string;
  type: "Points" | "Lounge" | "Voucher" | "Annual fee";
  title: string;
  expiresInDays: number;
  valueINR: number;
  cta: string;
};

export const expiryAlerts: ExpiryAlert[] = [
  { id: "e1", cardId: "sbi-elite", type: "Voucher", title: "₹1,500 unused BookMyShow vouchers", expiresInDays: 7, valueINR: 1500, cta: "Redeem now" },
  { id: "e2", cardId: "hdfc-regalia", type: "Lounge", title: "8 domestic lounge visits left", expiresInDays: 32, valueINR: 4800, cta: "Plan a visit" },
  { id: "e3", cardId: "axis-magnus", type: "Points", title: "9,460 EDGE points expire", expiresInDays: 47, valueINR: 4730, cta: "Convert to Vistara" },
  { id: "e4", cardId: "hdfc-regalia", type: "Annual fee", title: "Annual fee — waivable on ₹4L spend", expiresInDays: 60, valueINR: 2500, cta: "See spend pacing" },
];

export type FamilyMember = {
  id: string;
  name: string;
  role: string;
  avatarColor: string;
  monthlySaving: number;
  topCard: string;
};

export const familyMembers: FamilyMember[] = [
  { id: "fm1", name: "Aanya",  role: "You",     avatarColor: "#1F4E79", monthlySaving: 2840, topCard: "HDFC Regalia Gold" },
  { id: "fm2", name: "Rohan",  role: "Spouse",  avatarColor: "#E8810B", monthlySaving: 2260, topCard: "Axis Magnus" },
  { id: "fm3", name: "Maya",   role: "Daughter",avatarColor: "#10B981", monthlySaving:  640, topCard: "Amazon Pay ICICI" },
  { id: "fm4", name: "Suresh", role: "Father",  avatarColor: "#6C7E94", monthlySaving:  980, topCard: "SBI ELITE" },
];

export const monthlySavings = [
  { month: "Jun", saving: 1820 },
  { month: "Jul", saving: 2110 },
  { month: "Aug", saving: 1990 },
  { month: "Sep", saving: 2480 },
  { month: "Oct", saving: 3210 },
  { month: "Nov", saving: 4060 },
];

export const categoryBreakdown = [
  { name: "Coupons & offers",  value: 6200, color: "#1F4E79" },
  { name: "Card optimisation", value: 4800, color: "#2E75B6" },
  { name: "Trip planner",      value: 2140, color: "#F39820" },
  { name: "Bill optimiser",    value: 1120, color: "#10B981" },
];

export type Notification = {
  id: string;
  app: "Card Batao" | "Coupon Hub" | "Expiry Rakshak" | "AI Trip" | "Khazana";
  title: string;
  body: string;
  saving: number;
  ago: string;
};

export const liveNotifications: Notification[] = [
  { id: "n1", app: "Card Batao",  title: "Use HDFC Regalia at BigBasket", body: "10% bank offer + 5x rewards stacks. Save ₹245 vs your default card.", saving: 245, ago: "Just now" },
  { id: "n2", app: "Khazana",     title: "Unused 10% off on BigBasket",    body: "Your SBI ELITE has a one-time activated benefit you have not used. Tap to add to wallet.", saving: 180, ago: "12m ago" },
  { id: "n3", app: "Coupon Hub",  title: "Swiggy: 40% off, ends in 2 days", body: "Stacks with HDFC PayZapp — extra ₹50. Estimated save: ₹120.", saving: 120, ago: "1h ago" },
  { id: "n4", app: "AI Trip",     title: "Goa weekend itinerary ready",    body: "₹3,140 net savings vs lowest-fare routing. Card-level allocation done.", saving: 3140, ago: "Yesterday" },
];

// Trip planner sample itinerary (shown after the user submits the form)
export const tripPlan = {
  destination: "Goa",
  nights: 3,
  party: 2,
  totalBudget: 25000,
  cardSavings: 3140,
  pointsRedeemed: 25000,
  totalAfterOptimisation: 21860,
  items: [
    { day: 1, title: "Flight — IndiGo BLR → GOI",   amount: 5400, card: "Axis Magnus",       reason: "25 pts/₹100 on travel partners",      saving: 540 },
    { day: 1, title: "Airport cab — Uber Premier",  amount:  720, card: "HDFC Regalia Gold", reason: "5x rewards on dining/cabs combo",     saving:  72 },
    { day: 1, title: "Hotel — Taj Vivanta (3 nts)", amount: 9600, card: "Axis Magnus",       reason: "Hotel partner — 25 pts/₹100",         saving: 960 },
    { day: 2, title: "Scuba — DiveGoa",             amount: 3200, card: "HDFC Regalia Gold", reason: "Lifestyle merchants 10x boost",       saving: 320 },
    { day: 2, title: "Dinner — Thalassa",           amount: 2400, card: "HDFC Regalia Gold", reason: "Dining 5x base + bank offer 10%",     saving: 240 },
    { day: 3, title: "Brunch — Black Sheep Bistro", amount: 1800, card: "SBI ELITE",         reason: "Dining category bonus 5x",            saving: 144 },
    { day: 3, title: "Shopping — Saturday Night Mkt", amount: 1880, card: "Amazon Pay ICICI", reason: "Bill via Amazon Pay — 2% back",      saving:  64 },
  ],
};

// Pricing plans
export type Plan = {
  id: "free" | "individual" | "family";
  name: string;
  price: number;
  cadence: string;
  headline: string;
  cta: string;
  popular?: boolean;
  accent: "ink" | "brand" | "saffron";
  features: string[];
};

export const plans: Plan[] = [
  {
    id: "free",
    name: "Free",
    price: 0,
    cadence: "/year",
    headline: "Track your wallet, never lose another voucher.",
    cta: "Start free",
    accent: "ink",
    features: [
      "Up to 3 cards (manual entry)",
      "Basic category recommendations",
      "7-day expiry alerts",
      "Top 20 coupons",
      "Basic spending analytics",
    ],
  },
  {
    id: "individual",
    name: "Individual Premium",
    price: 499,
    cadence: "/year",
    headline: "Everything you need to never overpay again.",
    cta: "Start 7-day trial",
    popular: true,
    accent: "brand",
    features: [
      "Unlimited cards",
      "Full AI Trip Planner with card allocation",
      "Priority expiry alerts (30/15/7 days)",
      "Full coupon dashboard (40+ sources)",
      "Vernacular voice in 7 languages",
      "Hidden-benefits dashboard",
      "ROI-based card recommendations",
      "4-hour customer support SLA",
    ],
  },
  {
    id: "family",
    name: "Family Premium",
    price: 799,
    cadence: "/year",
    headline: "One household. Five members. One savings story.",
    cta: "Try Family",
    accent: "saffron",
    features: [
      "Everything in Individual Premium",
      "Up to 5 family members",
      "Shared savings dashboard",
      "Auto-split for group travel",
      "Collective rewards pool",
      "Role-based household access",
    ],
  },
];

export const productFeatures = [
  { id: "card-batao",    icon: "Wallet",          title: "Smart Card Optimiser — Card Batao", body: "Live card recommendation at the moment of purchase, factoring reward rates, bank offers, category multipliers and remaining caps." },
  { id: "coupon-hub",    icon: "Tag",             title: "Coupon & Voucher Intelligence Hub", body: "40+ live sources — bank portals, payment apps, e-commerce, food delivery — ranked, verified four times daily, one-tap activated." },
  { id: "trip-planner",  icon: "Plane",           title: "AI Trip Planner with Card Allocation", body: "Enter destination + budget; AI returns a complete itinerary with each expense routed to the highest-yielding card you own." },
  { id: "parivar",       icon: "Users",           title: "Parivar Plan — Family Mode", body: "Up to five household members. Shared dashboard, role-based access, festival pre-optimisation, family savings pool." },
  { id: "expiry",        icon: "BellRing",        title: "Expiry Rakshak", body: "Proactive 30 / 15 / 7-day alerts on points, lounge quotas, vouchers and annual-fee waivers — with one-tap redemption links." },
  { id: "khazana",       icon: "Sparkles",        title: "Khazana — Hidden Benefits", body: "60% of cardholders don't know one benefit they pay for. Khazana surfaces every unactivated benefit on every card you add." },
  { id: "rec-engine",    icon: "BarChart3",       title: "Card Recommendation Engine", body: "Analyses 60 days of spending, models theoretical maximum vs actual, and recommends new cards with transparent net-gain projections." },
  { id: "bills",         icon: "Receipt",         title: "Bill Payment Optimiser", body: "Routes recurring bills through the highest-yielding payment method and aligns due dates with your statement cycle for maximum interest-free credit." },
  { id: "voice",         icon: "Mic",             title: "Vernacular Voice Assistant", body: "Hindi, Tamil, Telugu, Marathi, Bengali, Gujarati and Kannada — fine-tuned for Indian financial terminology." },
];

export const stats = [
  { label: "Avg pilot savings",   value: "₹2,340", sub: "per user / month" },
  { label: "Pilot NPS",           value: "8.5",    sub: "/ 10" },
  { label: "Continued access",    value: "90%",    sub: "of pilot users" },
  { label: "Indian cards mapped", value: "500+",   sub: "across 22 issuers" },
];

export const surveyFindings = [
  { label: "Lose track of points", value: 87 },
  { label: "Willing to pay ₹499/yr", value: 73 },
  { label: "Unaware of total balance", value: 68 },
  { label: "Redeem sub-optimally", value: 49 },
];

export const testimonials = [
  { name: "Priya M.", city: "Bengaluru", quote: "I thought my SBI ELITE was useless. Khazana found ₹1,500 in vouchers I had paid for and forgotten. Renewed for the family plan the same day.", saving: 4820 },
  { name: "Aniket S.", city: "Pune", quote: "The Goa trip planner alone saved me ₹3,100. It told me to put hotels on Magnus and dining on Regalia — I was doing the opposite for years.", saving: 3140 },
  { name: "Saraswati V.", city: "Coimbatore", quote: "My father uses it in Tamil. He never opened a finance app before. Now he asks before every Rs.10,000+ purchase.", saving: 1980 },
];

export const faqs = [
  { q: "Do you store my bank password?", a: "Never. Bank-data access flows through RBI-licensed Account Aggregators with explicit user consent. We do not request, store, or transmit banking credentials." },
  { q: "How quickly will I see savings?", a: "Pilot users averaged ₹2,340 / month. Most users see their first concrete saving within 7 days. We offer a full refund if you do not save at least the subscription price (₹499) in a year." },
  { q: "Which Indian cards are supported?", a: "500+ cards across 22 issuers — including HDFC, ICICI, Axis, SBI, AmEx, RBL, Yes, Kotak, IndusInd, IDFC FIRST, AU SFB, and most co-branded products." },
  { q: "Is Family Premium worth it for two adults?", a: "Yes. The Parivar Plan auto-routes each spend to whichever family member's card maximises return — typically a 30–60% lift over individual usage." },
  { q: "Can I use it in Hindi or Tamil?", a: "Day 1 — seven languages: Hindi, Tamil, Telugu, Marathi, Bengali, Gujarati, Kannada. The voice assistant is fine-tuned for Indian financial terminology." },
  { q: "What's the refund policy?", a: "Full refund within 7 days of subscribing for first-time users. Pro-rata refund on annual plans cancelled between 30 days and 6 months." },
];
