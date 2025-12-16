import { Bug, Mouse, ThermometerSun, ShieldAlert } from "lucide-react";
import type { PestData, BundlePlan, LocationItem } from "./types";

export const PHONE_MAIN = "920-214-9917";
export const PHONE_QUOTE = "920-536-5714";

export interface ExtendedLocationItem extends LocationItem {
  state?: string;
  phone?: string;
  reviewsText?: string;
  comingSoon?: boolean;
}

export const EXTENDED_LOCATIONS: ExtendedLocationItem[] = [
  { city: "De Pere", state: "WI", zip: "54115", street: "Ryan Rd", phone: "(920) 214-0161", reviewsText: "Read Our Reviews" },
  { city: "Kaukauna", state: "WI", zip: "54130", street: "W Henry St", phone: "(920) 214-0161", reviewsText: "Read Our Reviews" },
  { city: "Neenah", state: "WI", zip: "54956", street: "Brantwood Dr.", phone: "(920) 214-0161", reviewsText: "New Location Reviews Coming Soon" },
  { city: "Nekoosa", state: "WI", zip: "54457", street: "Buehler Ave.", phone: "(920) 214-0161", reviewsText: "Read Our Reviews" },
  { city: "Oshkosh", state: "WI", zip: "54904", street: "Breezewood Ln", phone: "(920) 214-0161", reviewsText: "Read Our Reviews" },
  { city: "Ripon", state: "WI", zip: "54971", street: "Fenton Street", phone: "(920) 214-0161", reviewsText: "Read Our Reviews" },
  { city: "Stevens Point", state: "WI", zip: "54481", street: "Channel Dr", phone: "(920) 214-0161", reviewsText: "Read Our Reviews" },
  { city: "Wittenberg", state: "WI", zip: "54499", street: "Meadowlark Rd", phone: "(920) 214-0161", reviewsText: "Read Our Reviews" },
  { city: "Weston", state: "WI", zip: "54401", street: "Riverfront Pl", phone: "(920) 214-0161", reviewsText: "Read Our Reviews" },
  { city: "Green Bay", state: "WI", zip: "54304", street: "12th Ave", phone: "(920) 214-0161", reviewsText: "Read Our Reviews" },
  { city: "Hartford", state: "WI", zip: "", street: "Coming Soon!", phone: "", comingSoon: true },
];

export const LOCATIONS: LocationItem[] = EXTENDED_LOCATIONS.map(l => ({
    street: l.street,
    city: l.state ? `${l.city}, ${l.state}` : l.city,
    zip: l.zip
}));

export const COMMON_PESTS = [
  "Ants", "Bed Bugs", "Bees / Wasps / Hornets", "Cockroaches", 
  "Fleas", "Flies", "Mice", "Mosquitoes & Ticks", "Rats", "Spiders"
];

export const PEST_LIST = [
  "Ants", "Bed Bugs", "Bees/Wasps/Hornets", "Beetles", "Boxelder Bugs", 
  "Centipedes", "Cockroaches", "Earwigs", "Fleas", "Flies", "Lady Bugs", "Mice", 
  "Moles", "Mosquitoes / Ticks", "Moths", "Pill Bugs", "Rats", 
  "Shrews", "Spiders", "Springtails", "Stink Bugs", "Voles"
];

export const PREVENTION_LIST = [
  { name: "Pest Exclusion", id: "pest-exclusion" },
  { name: "GutterLock", id: "gutter-lock" },
  { name: "RidgeGuard", id: "ridge-guard" },
  { name: "Insulation & Sanitation", id: "insulation-sanitation" },
  { name: "Odor Control", id: "odor-control" }
];

const INSECT_PLAN_DESC = "Initial consultation along with a professional inspection, which will help determine the corrective action and plan for service. The service goal is to eliminate the existing activity and provide you with options to help reduce future activity on your property. 1st Choice Pest Control highly recommends preventive interior treatments to stop future infestations. For best results preventive services should be done every 60 days. Includes up to 21 common insects.";

const RODENT_PLAN_DESC = "Initial consultation along with a professional inspection. The service goal is to prevent future access, eliminate the existing infestation and control the issue from both inside and outside your property. 1st Choice Pest Control highly recommends preventive exterior treatments to stop future infestations.";

const MOSQUITO_PLAN_DESC = "Initial consultation along with a professional inspection, which will help determine the corrective action and plan for service. The service goal is to eliminate the existing activity and provide you with options to help reduce future activity on your property. 1st Choice Pest Control highly recommends preventive chemical treatments along with our new In2Care stations to stop future infestations. For best results preventive services should be done every 30 days in between the months of March and November.";

export const BUNDLES: BundlePlan[] = [
  {
    title: "Insects + Rodents",
    savings: "$135",
    services: [
        { name: "Insects", icon: Bug },
        { name: "Rodents", icon: Mouse }
    ],
    details: [
      { service: "Insect Plan: Ongoing Insect Control", frequency: "Every 60 Days", description: INSECT_PLAN_DESC },
      { service: "Rodents Plan: Ongoing Rodent Service", frequency: "Ongoing", description: RODENT_PLAN_DESC }
    ]
  },
  {
    title: "Insects + Mosquitoes & Ticks",
    savings: "$95",
    services: [
        { name: "Insects", icon: Bug },
        { name: "Mosquitoes & Ticks", icon: ThermometerSun }
    ],
    details: [
      { service: "Insect Plan: Ongoing Insect Control", frequency: "Every 60 Days", description: INSECT_PLAN_DESC },
      { service: "Mosquito Control Plan: Ongoing Mosquito Service", frequency: "Mar - Nov", description: MOSQUITO_PLAN_DESC }
    ]
  },
  {
    title: "Rodents + Mosquitoes & Ticks",
    savings: "$135",
    services: [
        { name: "Rodents", icon: Mouse },
        { name: "Mosquitoes & Ticks", icon: ThermometerSun }
    ],
    details: [
      { service: "Rodents Plan: Ongoing Rodent Service", frequency: "Ongoing", description: RODENT_PLAN_DESC },
      { service: "Mosquito Control Plan: Ongoing Mosquito Service", frequency: "Mar - Nov", description: MOSQUITO_PLAN_DESC }
    ]
  },
  {
    title: "Total Protection",
    savings: "$225",
    services: [
        { name: "Insects", icon: Bug },
        { name: "Rodents", icon: Mouse },
        { name: "Mosquitoes & Ticks", icon: ShieldAlert }
    ],
    details: [
      { service: "Insect Plan: Ongoing Insect Control", frequency: "Every 60 Days", description: INSECT_PLAN_DESC },
      { service: "Rodents Plan: Ongoing Rodent Service", frequency: "Ongoing", description: RODENT_PLAN_DESC },
      { service: "Mosquito Control Plan: Ongoing Mosquito Service", frequency: "Mar - Nov", description: MOSQUITO_PLAN_DESC }
    ]
  }
];

export const PEST_DETAILS: Record<string, PestData> = {
  // Prevention Services
  "pest-exclusion": {
    id: "pest-exclusion",
    name: "Pest Exclusion Services",
    description: "Stop pests before they enter. Our exclusion services seal up your home to prevent infestation.",
    introContent: [
      "The best way to handle a pest problem is to prevent it from happening in the first place. Pest exclusion involves identifying and sealing entry points that allow rodents and insects into your home.",
      "We use high-quality, durable materials like copper mesh, industrial sealants, and custom flashing to block access points around foundations, rooflines, and utilities.",
      "By physically barring entry, we reduce the need for chemical treatments inside your living space."
    ],
    appearance: "Varies based on home construction.",
    behavior: ["Pests seek the path of least resistance. We block those paths."],
    treatmentSteps: [
      { title: "Inspection", description: "Comprehensive audit of the home's exterior to find gaps, cracks, and holes." },
      { title: "Sealing", description: "Filling small gaps with sealant and copper mesh." },
      { title: "Structural Repair Advice", description: "Recommendations for larger repairs like rotting wood or broken vents." },
      { title: "Monitoring", description: "Ensuring seals remain intact over time." }
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
  },
  "gutter-lock": {
    id: "gutter-lock",
    name: "GutterLock System",
    description: "Protect your home from water damage and pests with the GutterLock system.",
    introContent: [
      "Clogged gutters are a breeding ground for mosquitoes and a hydration source for pests like ants and rodents.",
      "GutterLock is a premium gutter protection system that fits over your existing gutters, keeping leaves and debris out while allowing water to flow freely.",
      "This prevents the stagnant water that attracts pests and protects your home's foundation from water damage."
    ],
    appearance: "Sleek, low-profile cover that blends with your roofline.",
    behavior: ["Prevents debris accumulation.", "Deters birds and rodents from nesting in gutters."],
    treatmentSteps: [
        { title: "Cleaning", description: "Thorough cleaning of existing gutters." },
        { title: "Installation", description: "Professional installation of GutterLock panels." },
        { title: "Inspection", description: "Ensuring proper water flow and fit." }
    ],
    image: "https://images.unsplash.com/photo-1621256133171-8551699990b7?auto=format&fit=crop&w=1200&q=80"
  },
  "ridge-guard": {
    id: "ridge-guard",
    name: "RidgeGuard Installation",
    description: "Prevent bats, mice, and squirrels from entering through your roof ridge vent.",
    introContent: [
      "Ridge vents are essential for attic ventilation but are a common entry point for bats and mice.",
      "RidgeGuard® is a specialized product designed to seal the gaps under your ridge cap shingles without blocking airflow.",
      "It is the most effective long-term solution for keeping wildlife out of your attic."
    ],
    appearance: "Installed under ridge cap shingles, invisible from the ground.",
    behavior: ["Blocks entry for bats, mice, and squirrels."],
    treatmentSteps: [
        { title: "Roof Inspection", description: "Checking the entire ridge line for activity." },
        { title: "Installation", description: "Installing RidgeGuard along the entire length of the vent." },
        { title: "End Cap Sealing", description: "Securing the ends to prevent side entry." }
    ],
    image: "https://images.unsplash.com/photo-1628135899882-629ba879ba22?auto=format&fit=crop&w=1200&q=80"
  },
  "insulation-sanitation": {
    id: "insulation-sanitation",
    name: "Insulation & Sanitation",
    description: "Restore your attic and crawlspace after a pest infestation.",
    introContent: [
      "Rodents and pests often damage insulation and leave behind droppings that create health hazards and odors.",
      "Our sanitation service removes contaminated insulation, sanitizes the area, and installs new, pest-resistant insulation (TAP insulation where available).",
      "This improves energy efficiency while removing the pheromones that attract new pests."
    ],
    appearance: "Clean, fresh insulation layers.",
    behavior: ["Improves home energy efficiency.", "Removes bio-hazards."],
    treatmentSteps: [
        { title: "Removal", description: "Bagging and removing soiled insulation." },
        { title: "Sanitization", description: "Disinfecting the substrate to kill bacteria and viruses." },
        { title: "Re-Insulation", description: "Blowing in new, high-efficiency insulation." }
    ],
    image: "https://images.unsplash.com/photo-1516886635086-2b3c421c0947?auto=format&fit=crop&w=1200&q=80"
  },
  "odor-control": {
    id: "odor-control",
    name: "Odor Control Services",
    description: "Eliminate unpleasant odors caused by pests, moisture, or decay.",
    introContent: [
      "Dead rodents, animal waste, or damp basements can cause persistent, unpleasant smells in your home.",
      "We use commercial-grade enzymatic cleaners and odor neutralizers to break down the source of the smell, not just cover it up.",
      "Perfect for post-infestation cleanup or musty basements."
    ],
    appearance: "Invisible treatment, noticeable results.",
    behavior: ["Neutralizes organic odors."],
    treatmentSteps: [
        { title: "Source Removal", description: "Locating and removing the cause (carcass, waste)." },
        { title: "Treatment", description: "Fogging or spraying odor-neutralizing agents." },
        { title: "Ventilation", description: "Improving airflow to dry out damp areas." }
    ],
    image: "https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?auto=format&fit=crop&w=1200&q=80"
  },

  // Existing Pests
  ants: {
    id: "ants",
    name: "Ant Control",
    scientificName: "Formicidae",
    description: "Ants are social insects that live in colonies. While some are merely a nuisance, others like Carpenter Ants can cause structural damage to your home.",
    introContent: [
      "Ants are both indoor and outdoor pests. While they are ecologically important in the wild, they become a major nuisance when they invade our homes and businesses.",
      "Successful ant treatment requires a combination of good sanitation and professional-grade applications. Killing the few ants you see foraging on your counter is rarely enough; you must target the colony.",
      "At 1st Choice Pest Control, we identify the specific species invading your property to select the most effective baiting and barrier methods."
    ],
    appearance: "Ants typically range from 1/16 to 1/2 inch long. They have three distinct body segments (head, thorax, abdomen), bent antennae, and a constricted waist.",
    behavior: [
      "Colonies can range from a few dozen to millions of individuals.",
      "They enter homes looking for food, water, and shelter.",
      "Pheromone trails are used to communicate food sources to the colony.",
      "Most active during warmer months but can nest indoors year-round."
    ],
    treatmentSteps: [
      { title: "Initial Consultation & Inspection", description: "Our technician inspects your home to identify the ant species, locate nests, and find entry points." },
      { title: "Identification of Ant Species", description: "Correct identification is crucial. We treat Carpenter Ants differently than Odorous House Ants." },
      { title: "Customized Treatment Plan", description: "We use a combination of baiting stations and barrier treatments to eliminate the colony, not just the foragers." },
      { title: "Environmental Modifications", description: "We recommend changes to reduce food sources, moisture, and vegetation touching the home." },
      { title: "Follow-Up Services", description: "Scheduled follow-ups ensure the infestation is fully eradicated." }
    ],
    types: [
      { name: "Carpenter Ants", description: "These large ants (up to 5/8 inch) excavate wood to build nests, potentially causing structural damage similar to termites." },
      { name: "Odorous House Ants", description: "Small, dark brown/black ants that release a rotten coconut smell when crushed. They are driven by sweets and moisture." },
      { name: "Pavement Ants", description: "Commonly found in cracks in sidewalks and driveways, they often invade homes through foundation cracks in search of greasy foods." },
      { name: "Pharaoh Ants", description: "Tiny, yellow/light brown ants often found in hospitals and nursing homes. They are notoriously difficult to control with sprays as it causes colonies to split." }
    ],
    preventionTips: [
      "Keep trees and shrubs trimmed away from the house to prevent 'bridges' for ants.",
      "Maintain a barrier of crushed stone or gravel between soil and your home's foundation.",
      "Seal cracks in the foundation and around windows/doors with high-quality caulk.",
      "Clean up food spills immediately and store food in airtight containers.",
      "Manage moisture by fixing leaky pipes and ensuring gutters drain away from the foundation."
    ],
    image: "https://images.unsplash.com/photo-1598501227092-2cb3a6df9c53?auto=format&fit=crop&w=1200&q=80"
  },
  "boxelder-bugs": {
    id: "boxelder-bugs",
    name: "Boxelder Bug Control",
    scientificName: "Boisea trivittata",
    description: "Boxelder bugs are a common nuisance pest in Wisconsin, known for congregating on warm, sunny surfaces in spring and fall.",
    introContent: [
      "Boxelder bugs are primarily a nuisance pest. They do not sting or transmit disease, but their sheer numbers and tendency to overwinter inside homes make them a significant problem for Wisconsin homeowners.",
      "In the fall, as temperatures drop, adult bugs seek shelter in the walls of homes. On sunny winter days, they may emerge into your living spaces.",
      "Our treatment focuses on exterior prevention before they get inside, creating a barrier that keeps your home pest-free through the cold months."
    ],
    appearance: "Adults are about 1/2 inch long, black with reddish-orange markings on their back. Nymphs are bright red.",
    behavior: [
      "They overwinter in wall voids and attics of homes.",
      "In spring, they emerge to feed on Boxelder and Maple trees.",
      "They do not sting or transmit disease, but their droppings can stain fabrics.",
      "They congregate in large numbers on the south/west sides of buildings."
    ],
    treatmentSteps: [
      { title: "Inspection", description: "We assess the exterior of your home and identify congregation areas." },
      { title: "Exterior Treatment", description: "Application of residual products to sun-facing walls and entry points." },
      { title: "Exclusion Advice", description: "Recommendations for sealing cracks, windows, and doors to prevent entry." },
      { title: "Seasonal Timing", description: "Treatments are most effective in late summer/early fall before they enter for winter." }
    ],
    preventionTips: [
      "Seal cracks and crevices in your foundation and around utility pipes.",
      "Repair or replace damaged window screens.",
      "Install door sweeps on all exterior doors.",
      "Consider removing female Boxelder trees if they are close to the home (last resort)."
    ],
    image: "https://images.unsplash.com/photo-1453230806017-02384e5352f6?auto=format&fit=crop&w=1200&q=80"
  },
  "bed-bugs": {
    id: "bed-bugs",
    name: "Bed Bug Control",
    scientificName: "Cimex lectularius",
    description: "Bed bugs are parasitic insects that feed on human blood, typically at night. They are excellent hitchhikers and can infest any home regardless of cleanliness.",
    introContent: [
      "Bed bugs are one of the most stressful pests a homeowner can encounter. They hide in cracks, crevices, mattress seams, and furniture, emerging at night to feed.",
      "They reproduce rapidly, and a small introduction can quickly become a full-blown infestation.",
      "1st Choice Pest Control offers discreet and effective bed bug solutions. We understand the urgency and provide thorough treatments to let you sleep tight again."
    ],
    appearance: "Adults are reddish-brown, flat, and oval-shaped (like an apple seed). Nymphs are smaller and translucent.",
    behavior: [
      "Feed exclusively on blood, usually while the host is sleeping.",
      "Hide in mattress piping, box springs, bed frames, and behind headboards.",
      "Can survive for months without feeding.",
      "Transported via luggage, clothing, and used furniture."
    ],
    treatmentSteps: [
      { title: "Detailed Inspection", description: "We meticulously inspect beds, furniture, and surrounding areas to determine the extent of infestation." },
      { title: "Preparation Guidance", description: "We guide you on how to prepare your home (laundering clothes, decluttering) for maximum treatment success." },
      { title: "Treatment Application", description: "We use a combination of chemical treatments and dusts to target bed bugs at all life stages." },
      { title: "Monitoring", description: "Follow-up inspections and monitoring devices ensure the infestation is completely eliminated." }
    ],
    preventionTips: [
      "Inspect luggage and clothes immediately after traveling.",
      "Avoid bringing second-hand furniture or mattresses into your home without thorough inspection.",
      "Use protective mattress encasements to reduce hiding spots.",
      "Reduce clutter in bedrooms to minimize hiding areas."
    ],
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80"
  },
  "bees-wasps-hornets": {
    id: "bees-wasps-hornets",
    name: "Bee, Wasp & Hornet Control",
    scientificName: "Hymenoptera",
    description: "Stinging insects can pose serious health risks. We safely remove nests to protect your family while respecting beneficial pollinators.",
    introContent: [
      "While bees are vital for our ecosystem, wasps and hornets can be aggressive and dangerous, especially for those with allergies.",
      "Nests can be found in eaves, attics, ground holes, or trees. attempting DIY removal is dangerous and often results in stings.",
      "Our technicians have the protective gear and specialized equipment to safely remove nests and prevent recurrence."
    ],
    appearance: "Varies by species. Wasps are generally smooth and shiny; bees are fuzzy. Hornets are larger and more aggressive.",
    behavior: [
      "Yellowjackets and hornets can be aggressive if the nest is threatened.",
      "Paper wasps build umbrella-shaped nests under eaves.",
      "Carpenter bees bore holes into wood to lay eggs.",
      "Most active in late summer when colonies are largest."
    ],
    treatmentSteps: [
      { title: "Identification", description: "Determining if it's a honey bee (which we relocate if possible) or a pest wasp/hornet." },
      { title: "Nest Treatment", description: "Direct treatment of the nest to neutralize the colony." },
      { title: "Nest Removal", description: "Physical removal of the nest structure once activity has ceased." },
      { title: "Preventative Dusting", description: "Treating potential nesting sites to discourage future building." }
    ],
    types: [
        { name: "Yellowjackets", description: "Highly aggressive, often nest in the ground or wall voids. Drawn to sugary foods and trash." },
        { name: "Paper Wasps", description: "Build open, umbrella-shaped nests under eaves. Generally less aggressive unless the nest is disturbed." },
        { name: "Bald-faced Hornets", description: "Build large, football-shaped paper nests in trees or on buildings. They are very protective and aggressive." },
        { name: "Carpenter Bees", description: "Solitary bees that bore perfectly round holes in untreated wood. They don't eat wood but nest in it." }
    ],
    preventionTips: [
        "Seal openings in your home's exterior to prevent nesting in wall voids.",
        "Keep trash cans covered and clean to avoid attracting Yellowjackets.",
        "Paint or stain exposed wood to deter Carpenter Bees.",
        "Knock down small starter nests early in the spring before they grow large."
    ],
    image: "https://images.unsplash.com/photo-1599343361541-11c5f356bf35?auto=format&fit=crop&w=1200&q=80"
  },
  "mosquitoes-ticks": {
    id: "mosquitoes-ticks",
    name: "Mosquito & Tick Control",
    scientificName: "Culicidae & Ixodida",
    description: "Reclaim your yard with our barrier treatments. We target breeding grounds and resting areas to reduce populations of these disease-carrying pests.",
    introContent: [
      "Mosquitoes and ticks aren't just annoying; they are vectors for serious diseases like West Nile Virus and Lyme Disease.",
      "Our seasonal protection plans are designed to let you enjoy your outdoor spaces again. We treat the foliage where mosquitoes rest and create a barrier around your property.",
      "We also utilize In2Care stations for an eco-friendly boost to mosquito control."
    ],
    appearance: "Mosquitoes are small, flying insects with long legs. Ticks are small arachnids, ranging from poppy seed to raisin size.",
    behavior: [
      "Mosquitoes breed in stagnant water and are most active at dawn and dusk.",
      "Ticks live in tall grass and wooded areas, waiting to latch onto passing hosts.",
      "Both require a blood meal to reproduce.",
      "Populations peak in humid, warm summer months."
    ],
    treatmentSteps: [
      { title: "Property Inspection", description: "identifying breeding sites like standing water and tick hotspots in tall grass." },
      { title: "Larvicide Application", description: "Treating standing water to stop mosquito larvae from developing." },
      { title: "Barrier Mist", description: "Applying a residual mist to shrubs, trees, and perimeter vegetation where adults rest." },
      { title: "In2Care Stations", description: "Optional deployment of stations that use mosquitoes to spread larvicide to other breeding sites." }
    ],
    preventionTips: [
      "Eliminate standing water in pots, birdbaths, and gutters.",
      "Keep grass cut short and remove leaf litter to reduce tick habitats.",
      "Create a barrier of wood chips or gravel between lawns and wooded areas.",
      "Wear repellent and long sleeves when in high-risk areas."
    ],
    image: "https://images.unsplash.com/photo-1629853381628-912df08269e8?auto=format&fit=crop&w=1200&q=80"
  },
  "cockroaches": {
    id: "cockroaches",
    name: "Cockroach Control",
    scientificName: "Blattodea",
    description: "Cockroaches are resilient pests that spread bacteria and trigger allergies. They require aggressive treatment to eliminate.",
    introContent: [
      "Cockroaches are a sign of serious sanitation issues, but they can also invade clean homes via deliveries or plumbing.",
      "German cockroaches, the most common indoor species, reproduce extremely fast. Seeing one usually means there are hundreds more hiding.",
      "We use a multi-faceted approach including baits, IGRs (Insect Growth Regulators), and exclusion to wipe them out."
    ],
    appearance: "Flat, oval-shaped bodies with long antennae. German roaches have two dark stripes on their pronotum.",
    behavior: [
      "Nocturnal and elusive; they scatter when lights are turned on.",
      "Prefer warm, humid areas like kitchens and bathrooms.",
      "Eat almost anything, including glue, paper, and food scraps.",
      "Deposit egg cases (oothecae) which contain many nymphs."
    ],
    treatmentSteps: [
      { title: "Flush & Vac", description: "Using flushing agents to drive roaches out of hiding and vacuuming adults to immediately reduce population." },
      { title: "Gel Baiting", description: "Placing palatable bait in cracks and crevices. Roaches eat it and share poison with the colony." },
      { title: "Growth Regulators", description: "Applying IGRs to prevent nymphs from becoming reproducing adults." },
      { title: "Monitoring", description: "Using glue boards to track activity and verify elimination." }
    ],
    types: [
        { name: "German Cockroach", description: "Small, light brown, found in kitchens/baths. The most difficult to control due to rapid breeding." },
        { name: "American Cockroach", description: "Large, reddish-brown. Often found in basements, sewers, and drains." },
        { name: "Oriental Cockroach", description: "Dark brown/black, shiny. Prefers cool, damp areas like crawl spaces." }
    ],
    preventionTips: [
      "Maintain strict sanitation: clean up crumbs and grease immediately.",
      "Fix leaky pipes and faucets to remove water sources.",
      "Seal cracks around pipes and baseboards.",
      "Inspect boxes and grocery bags before bringing them inside."
    ],
    image: "https://images.unsplash.com/photo-1623946029312-d98f73a3df54?auto=format&fit=crop&w=1200&q=80"
  },
  "mice": {
    id: "mice",
    name: "Mouse Control",
    scientificName: "Mus musculus",
    description: "Mice can squeeze through holes the size of a dime. They contaminate food and damage property by chewing on wires and insulation.",
    introContent: [
        "Mice are commensal rodents, meaning they live partially on what humans produce. As temperatures drop, they seek the warmth of your home.",
        "They are prolific breeders. A single pair can result in dozens of mice in a year if unchecked.",
        "Our rodent program focuses on exclusion—keeping them out—and population control for those already inside."
    ],
    appearance: "Small, gray/brown rodents with large ears and long tails. 2.5-3.5 inches long excluding tail.",
    behavior: [
        "Nocturnal foragers.",
        "Can squeeze through gaps as small as 1/4 inch.",
        "Constant gnawing to keep teeth sharp.",
        "Nesting in soft materials like insulation and paper."
    ],
    treatmentSteps: [
        { title: "Detailed Inspection", description: "Identifying entry points (gaps, vents, pipes) and signs of activity (droppings, rub marks)." },
        { title: "Exclusion Work", description: "Sealing small holes with copper mesh and foam. Recommending repairs for larger structural issues." },
        { title: "Trapping & Baiting", description: "Strategic placement of snap traps indoors and tamper-resistant bait stations outdoors." },
        { title: "Sanitation Advice", description: "Guidance on storing food and managing waste to make your home less attractive." }
    ],
    preventionTips: [
        "Seal all holes larger than a dime around the exterior.",
        "Store food (including pet food) in hard plastic or metal containers.",
        "Keep firewood stored at least 20 feet away from the home.",
        "Reduce clutter in basements and attics."
    ],
    image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&w=1200&q=80"
  },
  "rodents": {
     id: "rodents",
     name: "Rodent Control",
     scientificName: "Rodentia",
     description: "Mice and rats pose serious health and property risks. We provide comprehensive exclusion and elimination services.",
     introContent: [
         "Rodents are more than just a nuisance; they are a threat to your property and health. They chew through electrical wires, increasing fire risk, and carry pathogens like Hantavirus and Salmonella.",
         "Whether it's the common House Mouse or the Norway Rat, 1st Choice Pest Control has the expertise to evict them.",
         "Our approach is 'IPM' based: Integrated Pest Management. We don't just put down poison; we solve the root cause of how they are getting in."
     ],
     appearance: "Includes Mice (small, large ears), Norway Rats (large, blunt nose), and Voles (meadow mice).",
     behavior: [
         "Seek warmth and food sources inside structures.",
         "Create runways along walls and foundations.",
         "Reproduce rapidly throughout the year indoors."
     ],
     treatmentSteps: [
        { title: "Inspection", description: "Locating entry points, rub marks, burrows, and droppings." },
        { title: "Exclusion", description: "Sealing entry points is the most critical step. If they can't get in, they can't infest." },
        { title: "Population Reduction", description: "Using traps and bait stations to remove existing populations safely." },
        { title: "Monitoring", description: "Ongoing exterior protection to intercept new rodents before they enter." }
     ],
     types: [
         { name: "House Mouse", description: "The most common invader. Small, agile, and curious." },
         { name: "Norway Rat", description: "Larger, aggressive, burrowing rodents. Often found in basements or lower levels." },
         { name: "Voles", description: "Field mice that damage lawns and tree roots. Rarely enter homes but destroy landscaping." }
     ],
     preventionTips: [
         "Install door sweeps on all exterior doors.",
         "Repair damaged foundation vents and screens.",
         "Keep vegetation trimmed back from the building.",
         "Eliminate outdoor food sources like bird feeders if infestation is active."
     ],
     image: "https://images.unsplash.com/photo-1541336032412-2048a678540d?auto=format&fit=crop&w=1200&q=80"
  },
  "spiders": {
    id: "spiders",
    name: "Spider Control",
    scientificName: "Araneae",
    description: "While most spiders are harmless, they can be unsightly and their webs annoying. We help keep your home spider-free.",
    introContent: [
      "Spiders often enter homes seeking prey (other insects) or shelter. A large spider population often indicates an underlying insect issue.",
      "While Wisconsin doesn't have many deadly spiders, bites can still be painful, and the presence of cobwebs is a nuisance.",
      "Our barrier treatments keep spiders outside where they belong."
    ],
    appearance: "Eight legs, two body segments. Sizes and colors vary wildly by species.",
    behavior: [
      "Predatory: they hunt other insects.",
      "Web builders create messy cobwebs in corners; Hunters prowl floors.",
      "Seek moisture in basements or warmth in attics."
    ],
    treatmentSteps: [
      { title: "De-webbing", description: "Sweeping down webs from eaves, windows, and corners to deter rebuilding." },
      { title: "Exterior Barrier", description: "Spraying foundation and eaves to prevent entry." },
      { title: "Interior Crack & Crevice", description: "Treating baseboards and corners where spiders hide." },
      { title: "Food Source Reduction", description: "General pest control reduces the insects that spiders feed on." }
    ],
    types: [
        { name: "Common House Spider", description: "Responsible for most cobwebs in corners and basements." },
        { name: "Wolf Spider", description: "Large, hairy hunters that don't build webs. They run fast and can be startling." },
        { name: "Cellar Spider (Daddy Longlegs)", description: "Found in damp basements, known for their messy, wispy webs." }
    ],
    preventionTips: [
        "Reduce clutter in basements and garages.",
        "Seal cracks in the foundation.",
        "Change exterior lights to yellow bulbs (attracts fewer insects, thus fewer spiders).",
        "Vacuum regularly to remove webs and egg sacs."
    ],
    image: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=1200&q=80"
  },
  "fleas": {
    id: "fleas",
    name: "Flea Control",
    description: "Fleas are persistent pests that affect pets and humans. Our treatment breaks their life cycle.",
    treatmentSteps: [{title: "Treatment", description: "Growth regulators and residual products."}],
    appearance: "Small, jumping insects.",
    behavior: ["Feed on blood of mammals."],
    image: "https://images.unsplash.com/photo-1628148858226-c21528659d64?auto=format&fit=crop&w=1200&q=80"
  },
  "flies": {
    id: "flies",
    name: "Fly Control",
    description: "Flies can spread disease and are a nuisance. We identify the source and treat accordingly.",
    treatmentSteps: [{title: "Inspection", description: "Finding breeding sources."}],
    appearance: "Two wings, compound eyes.",
    behavior: ["Breed in decaying organic matter."],
    image: "https://images.unsplash.com/photo-1518390930265-288d4464c8d9?auto=format&fit=crop&w=1200&q=80"
  },
  "centipedes": {
    id: "centipedes",
    name: "Centipede Control",
    description: "Fast-moving and often scary, centipedes indicate moisture issues in the home.",
    treatmentSteps: [{title: "Moisture Control", description: "Reducing humidity levels."}],
    appearance: "Many legs, elongated body.",
    behavior: ["Predatory, seek damp areas."],
    image: "https://images.unsplash.com/photo-1596796414436-1e64627d2427?auto=format&fit=crop&w=1200&q=80"
  },
  "earwigs": {
    id: "earwigs",
    name: "Earwig Control",
    description: "Earwigs often invade damp basements. We create an exterior barrier to keep them out.",
    treatmentSteps: [{title: "Perimeter Spray", description: "Treating foundation and soil."}],
    appearance: "Pincers on abdomen.",
    behavior: ["Nocturnal, attracted to moisture."],
    image: "https://images.unsplash.com/photo-1629853381628-912df08269e8?auto=format&fit=crop&w=1200&q=80"
  },
  // Generic fallback
  generic: {
    id: "generic",
    name: "Pest Control Services",
    description: "We provide comprehensive control services for this pest using industry-leading, safe, and effective methods.",
    introContent: [
        "At 1st Choice Pest Control, we understand that every pest problem is unique. Our certified technicians are trained to handle a wide variety of invaders common to Central Wisconsin.",
        "We utilize an Integrated Pest Management (IPM) approach, focusing on inspection, identification, and treatment strategies that are safe for your family and pets.",
        "Don't let pests take over your sanctuary. Contact us today for a custom solution."
    ],
    appearance: "Identification is the first step in our process. Our technicians are trained to identify all common Wisconsin pests.",
    behavior: [
      "Invasive behavior often triggered by weather changes.",
      "Seeking food, water, and shelter inside your property.",
      "Can cause sanitation issues or property damage."
    ],
    treatmentSteps: [
      { title: "Detailed Inspection", description: "We locate the source of the infestation." },
      { title: "Targeted Treatment", description: "Using eco-friendly and effective products tailored to this specific pest." },
      { title: "Prevention Strategy", description: "We seal entry points and create a barrier to prevent return." },
      { title: "Ongoing Monitoring", description: "We ensure the problem is solved for good." }
    ],
    preventionTips: [
        "Maintain good sanitation practices.",
        "Seal entry points around the exterior of your home.",
        "Reduce moisture and clutter.",
        "Call a professional at the first sign of infestation."
    ],
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
  }
};
