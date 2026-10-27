import { useEffect } from "react";
import { About } from "../components/sections/About";
import { Collections } from "../components/sections/Collections";
import { NaturalStone } from "../components/sections/NaturalStone";
import { OriginSplit } from "../components/sections/OriginSplit";
import { MaterialFinder } from "../components/sections/MaterialFinder";
import { TileGrid } from "../components/sections/TileGrid";
import { Mandir } from "../components/sections/Mandir";
import { Projects } from "../components/sections/Projects";
import { Philosophy } from "../components/sections/Philosophy";
import { media } from "../data/media";

const pages = {
  "/about": {
    title: "Materials with a point of view.", eyebrow: "About STUDIO88", image: media.aboutCraft,
    intro: "A considered space begins with the surfaces you touch every day. Discover the ideas behind our gallery of natural stone, tiles and carved marble mandirs.",
    sections: [About, Philosophy], heading: "A conversation before a selection.",
    cards: [
      ["Start with the space", "Bring your plans, a mood board or a simple idea. Consider the light, the scale of the room and how the surface will be used before settling on a material."],
      ["Look beyond the sample", "Natural stone varies from slab to slab. Explore movement, background colour and finish together so that your choice feels coherent across the entire room."],
      ["Resolve the details", "Discuss edges, transitions, joints and maintenance early. These quieter decisions are what give a finished interior its sense of balance."]
    ], faqs: [["Who is the gallery for?", "Homeowners, architects and interior designers can use the gallery to explore surfaces and discuss their project requirements."], ["What should I bring?", "Room measurements, drawings, reference images and a note of your preferred colours are useful starting points."]]
  },
  "/products": {
    title: "Explore the material palette.", eyebrow: "Our products", image: media.aboutSlabs,
    intro: "From expressive natural stone to practical tiled surfaces and sculptural mandirs, explore each category in its own dedicated space.",
    sections: [Collections], heading: "Choose for the way you live.",
    cards: [["Natural stone", "Explore marble, granite, quartzite and limestone. Consider the individual slab, the intended application and the finish together.", "/natural-stone"], ["Tiles", "Build a consistent palette across floors, walls and outdoor areas. Compare format, texture and grout before specifying.", "/tiles"], ["Mandirs", "Plan a quiet place for daily ritual, with proportions and details considered around your home.", "/mandir"]],
    faqs: [["How do I compare materials?", "Start with the application, then narrow your choice by maintenance, colour, texture and budget. Our Material Finder offers a starting point; confirm suitability for your project before ordering."]]
  },
  "/natural-stone": {
    title: "Nature, expressed in stone.", eyebrow: "Natural stone", image: media.aboutSlabs,
    intro: "Every slab holds its own pattern and character. Explore the relationship between mineral movement, surface finish and the architecture around it.",
    sections: [NaturalStone, OriginSplit], heading: "Find the right expression.",
    cards: [["Marble & limestone", "Soft movement and tonal variation suit calm interiors. Ask about porosity, sealing and sensitivity to acidic spills when considering kitchens or busy family spaces."], ["Granite & quartzite", "Explore crystalline grain, expressive veining and a broad colour palette. Verify the properties of the specific stone and finish for the intended use."], ["Finishes & slab layouts", "Polished surfaces reflect light; honed finishes feel quieter. Review full slab photographs, veining direction and proposed joints before fabrication."]],
    faqs: [["Will the delivered stone match a small sample?", "Natural variation is part of stone. Review the actual available slabs and agree on the selection before ordering."], ["How should I care for natural stone?", "Use a cleaner recommended for your stone, wipe spills promptly and discuss sealing with your installer. Avoid acidic or abrasive products unless approved for the surface."]]
  },
  "/tiles": {
    title: "Surfaces for everyday living.", eyebrow: "Tiles & porcelain", image: "/2f6c336c-37df-4729-b39f-749a91ea1d93.jpg",
    intro: "Create continuity from room to room with thoughtful formats, subtle textures and a palette that works with the rest of your home.",
    sections: [TileGrid], heading: "A few details make all the difference.",
    cards: [["Format & proportion", "Large formats create fewer visual breaks, while smaller tiles introduce rhythm. Compare sizes against your room dimensions and the proposed laying pattern."], ["Finish & application", "Compare matt, textured and polished surfaces in the room's lighting. For wet or outdoor areas, request the product's slip resistance and suitability information."], ["Grout & installation", "Grout colour changes the final appearance. Agree on joint width, substrate preparation and movement joints with your installer before work begins."]],
    faqs: [["Can the same tile be used on walls and floors?", "Only where the product is rated for the intended application. Confirm the technical specifications for each selected tile."], ["Should I order extra tiles?", "Allow for cuts, layout and future repairs. Ask your installer to calculate the allowance from the final drawings and confirm the batch before ordering."]]
  },
  "/mandir": {
    title: "A place for quiet ritual.", eyebrow: "Marble mandirs", image: media.mandir,
    intro: "Consider a mandir as part of the architecture of your home: a place defined by scale, light, craftsmanship and personal meaning.",
    sections: [Mandir], heading: "Plan every meaningful detail.",
    cards: [["Wall & floor arrangements", "Measure the available width, height and depth, including doors and circulation. Consider whether a compact wall arrangement or a floor-standing mandir best suits your space."], ["Carving & proportions", "Bring references for arches, pillars, jali patterns and decorative details. Balance the ornament with the size of the room and the objects it will hold."], ["Lighting & daily use", "Plan storage, cleaning access and electrical points early. Discuss ventilation and safe clearances for lamps or incense with the appropriate installer."]],
    faqs: [["Can I discuss a custom design?", "Share your measurements, preferred references and required features through the project enquiry page so the scope can be reviewed."], ["What affects the final specification?", "Dimensions, stone selection, carving complexity, access and installation conditions all need to be considered before a design is confirmed."]]
  },
  "/collections": {
    title: "A palette, thoughtfully composed.", eyebrow: "Collections", image: media.philosophy,
    intro: "Explore materials as a family of textures and tones. Build a palette that connects statement surfaces with the quieter details around them.",
    sections: [Collections, OriginSplit], heading: "Three ways to build your palette.",
    cards: [["Warm & grounded", "Begin with sand, cream and soft brown. Pair subtle stone movement with textured surfaces and warm timber for a relaxed, layered interior."], ["Light & architectural", "Use pale surfaces and restrained veining to emphasise natural light. Compare whites side by side so their undertones work together."], ["Bold & expressive", "Give a strongly veined slab or deep colour room to breathe. Keep surrounding surfaces quieter and plan the layout around the focal material."]],
    faqs: [["Can I mix materials from different categories?", "Yes. Compare samples together and check transitions, thicknesses and the care requirements of each surface before finalising your palette."]]
  },
  "/projects": {
    title: "From material to atmosphere.", eyebrow: "Project inspiration", image: media.hero,
    intro: "Explore the existing project gallery for ideas on scale, contrast and material placement, then shape a direction around the needs of your own space.",
    sections: [Projects], heading: "Translate inspiration into a brief.",
    cards: [["Residential spaces", "Think about daily routines as well as appearance. Consider wear, cleaning and continuity between kitchens, living areas and bathrooms."], ["Architectural details", "Stair treads, window reveals, wall cladding and thresholds deserve the same attention as larger surfaces. Plan edges and junctions alongside the room layout."], ["Your project brief", "Gather plans, reference images and approximate quantities. Note the project stage and target timeline so material discussions begin with the right context."]],
    faqs: [["How can I explore a similar look?", "Save the reference that interests you and describe what you like about it: colour, texture, veining or scale. Material availability and the final selection need to be confirmed separately."]]
  },
  "/material-finder": {
    title: "Begin with the right material.", eyebrow: "Material finder", image: media.aboutSlabs,
    intro: "Compare material families, browse the existing variety guide and build a shortlist around your application, visual preferences and maintenance expectations.",
    sections: [MaterialFinder], heading: "Before you make your selection.",
    cards: [["Define the application", "Is the surface for a floor, wall, worktop or outdoor space? Note exposure to water, heat, traffic and direct sunlight."], ["Compare in context", "View samples beside cabinetry, paint and flooring. Revisit them under both daylight and the artificial lighting planned for the room."], ["Confirm the specification", "Treat the variety guide as a starting point. Verify stock, slab dimensions, finish, thickness and installation requirements before placing an order."]],
    faqs: [["Are all displayed varieties available now?", "The guide shows material options. Current availability, sizes, prices and lead times must be confirmed for your project."], ["Can I request samples?", "Use the enquiry page to prepare your material shortlist and sample requirements for a conversation with the showroom."]]
  },
  "/contact": {
    title: "Let’s talk about your space.", eyebrow: "Contact & showroom", image: media.showroom,
    intro: "Bring your ideas, drawings and material questions. Prepare a clear project brief to make your showroom conversation more useful.",
    sections: [], heading: "Make the most of your visit.",
    cards: [["Bring your plans", "Floor plans, approximate dimensions and photographs help explain the scale of the work and the surfaces you need."], ["Share your palette", "Bring paint, timber or fabric references alongside inspiration images so materials can be considered in context."], ["Note your priorities", "List preferred materials, intended applications, budget range and timeline. Confirm appointment details directly with the showroom before travelling."]],
    faqs: [["Is an appointment confirmed on this page?", "No. The brief below is a preparation tool. Download it to keep your requirements together, then share it when contacting the showroom."], ["Where can I find the address and contact details?", "Verified showroom address and contact details will be added here when available."]]
  }
};

function ProjectBrief() {
  function download(event) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const brief = ["STUDIO88 — Project brief", ...Array.from(values, ([key, value]) => `${key}: ${value}`)].join("\n\n");
    const url = URL.createObjectURL(new Blob([brief], { type: "text/plain;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "studio88-project-brief.txt";
    anchor.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return <section className="bg-ivory-deep px-6 py-24 md:px-10"><div className="mx-auto max-w-3xl"><p className="text-xs uppercase tracking-widest text-stone-muted">Prepare your enquiry</p><h2 className="mt-4 font-display text-5xl">Your project, in a few words.</h2><p className="mt-5 text-sm leading-relaxed text-stone-muted">Download a brief to share with the showroom. This form saves a file on your device; it does not send an enquiry or book an appointment.</p><form onSubmit={download} className="mt-10 grid gap-6 sm:grid-cols-2"><label className="text-sm">Name<input required name="Name" autoComplete="name" className="mt-2 block w-full border border-charcoal/20 bg-ivory p-3" /></label><label className="text-sm">Email<input type="email" required name="Email" autoComplete="email" className="mt-2 block w-full border border-charcoal/20 bg-ivory p-3" /></label><label className="text-sm">Interested in<select name="Material" className="mt-2 block w-full border border-charcoal/20 bg-ivory p-3"><option>Natural stone</option><option>Tiles</option><option>Mandir</option><option>Multiple materials</option></select></label><label className="text-sm">Project stage<select name="Stage" className="mt-2 block w-full border border-charcoal/20 bg-ivory p-3"><option>Exploring ideas</option><option>Design in progress</option><option>Ready to select materials</option><option>Renovation underway</option></select></label><label className="text-sm sm:col-span-2">Tell us about your space<textarea required name="Project details" rows={5} className="mt-2 block w-full border border-charcoal/20 bg-ivory p-3" placeholder="Application, approximate dimensions, preferred materials and timeline" /></label><button className="border border-charcoal bg-charcoal px-6 py-4 text-xs uppercase tracking-widest text-ivory sm:col-span-2">Download project brief</button></form></div></section>;
}

function ContentPage() {
  const path = window.location.pathname.replace(/\/$/, "");
  const page = pages[path];
  useEffect(() => {
    document.title = `${page?.eyebrow || "Page not found"} | STUDIO88 by MPI`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", page?.intro || "Explore STUDIO88.");
  }, [page]);
  if (!page) return <section className="px-6 pb-32 pt-48 text-center"><h1 className="font-display text-6xl">Page not found.</h1><a href="/" className="mt-8 inline-block underline">Return home</a></section>;
  return <>
    <section className="relative isolate overflow-hidden bg-charcoal px-6 pb-20 pt-44 text-ivory md:px-10 md:pb-28 md:pt-52"><img src={page.image} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" /><div className="absolute inset-0 -z-10 bg-black/65" /><div className="mx-auto max-w-[1360px]"><a href="/" className="text-xs uppercase tracking-widest text-ivory/70">Home</a><span className="mx-3 text-ivory/50">/</span><span className="text-xs uppercase tracking-widest">{page.eyebrow}</span><p className="mt-14 text-xs uppercase tracking-[0.22em] text-brass-light">STUDIO88 by MPI · {page.eyebrow}</p><h1 className="mt-6 max-w-4xl font-display text-[clamp(3rem,7vw,6.5rem)] font-light leading-none">{page.title}</h1><p className="mt-8 max-w-2xl text-base leading-relaxed text-ivory/80">{page.intro}</p></div></section>
    {page.sections.map((Section, index) => <Section key={index} />)}
    <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32"><p className="text-xs uppercase tracking-widest text-stone-muted">A considered approach</p><h2 className="mt-5 max-w-3xl font-display text-5xl font-light md:text-6xl">{page.heading}</h2><div className="mt-14 grid gap-10 md:grid-cols-3">{page.cards.map(([title, text, href], i) => <article key={title} className="border-t border-charcoal/20 pt-6"><p className="text-xs tracking-widest text-stone-muted">0{i + 1}</p><h3 className="mt-6 font-display text-3xl">{title}</h3><p className="mt-4 text-sm leading-7 text-stone-muted">{text}</p>{href && <a href={href} className="mt-6 inline-block border-b border-brass pb-2 text-xs uppercase tracking-widest">Explore {title} →</a>}</article>)}</div></section>
    {path === "/contact" && <ProjectBrief />}
    <section className="border-t border-charcoal/10 px-6 py-20 md:px-10"><div className="mx-auto max-w-4xl"><h2 className="font-display text-4xl">Useful to know.</h2><div className="mt-8">{page.faqs.map(([question, answer]) => <details key={question} className="border-b border-charcoal/15 py-5"><summary className="cursor-pointer text-base">{question}</summary><p className="mt-4 max-w-2xl text-sm leading-7 text-stone-muted">{answer}</p></details>)}</div></div></section>
    <section className="bg-charcoal px-6 py-20 text-ivory md:px-10"><div className="mx-auto flex max-w-[1360px] flex-col justify-between gap-8 md:flex-row md:items-center"><div><p className="text-xs uppercase tracking-widest text-brass-light">Continue exploring</p><h2 className="mt-4 font-display text-4xl">{path === "/contact" ? "Find your starting point." : "Bring your material ideas together."}</h2></div><a href={path === "/contact" ? "/products" : "/contact"} className="self-start border-b border-brass py-3 text-xs uppercase tracking-widest">{path === "/contact" ? "Explore products" : "Plan your showroom conversation"} →</a></div></section>
  </>;
}
export { ContentPage };
