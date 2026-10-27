import { Reveal } from "../motion/Reveal";
import { brand } from "../../data/brand";

const categories = [
  { name: "Marble", href: "/natural-stone", description: "Explore marble options for interior and architectural applications." },
  { name: "Tiles", href: "/tiles", description: "Discover tile options for different spaces and design preferences." },
  { name: "Stone", href: "/natural-stone", description: "Explore the stone products available through Studio 88." },
  { name: "Mandir / Home Temple", href: "/mandir", description: "Discover the Mandir-related offerings at Studio 88 for your home." }
];

const highlights = [
  ["Explore the range", "A range of marble, tiles, stone and Mandir-related offerings."],
  ["Discover your options", "Product discovery across key material and design categories, with options to explore materials, finishes and applications for different spaces."],
  ["Connect with the team", "Product-related questions and showroom enquiries help you take the next step in your selection."]
];

function ClientBriefContent({ page }) {
  let eyebrow = "Discover Studio 88";
  let title;
  let description;
  let cards = [];
  let showCategories = false;
  let catalogueNote = false;

  switch (page) {
    case "home":
      title = "Explore. Discover. Connect.";
      description = brand.profile;
      cards = highlights;
      break;
    case "/about":
      eyebrow = "Our purpose";
      title = "Helping your design ideas take shape.";
      description = brand.about;
      cards = [["Our vision", brand.vision], ["Our mission", brand.mission]];
      break;
    case "/products":
    case "/collections":
      eyebrow = "Explore by category";
      title = "More ways to discover your materials.";
      description = "Studio 88 brings together marble, tiles, stone and Mandir-related offerings. Explore the categories that suit your design preferences and project requirements.";
      showCategories = true;
      catalogueNote = true;
      break;
    case "/natural-stone":
      eyebrow = "Marble & stone";
      title = "Discover options for your space.";
      description = "Explore marble options for interior and architectural applications, alongside the stone products available through Studio 88.";
      cards = [["Marble", "Product-level details, available varieties, finishes, sizes and specifications will be added from the Studio 88 catalogue."], ["Stone", "Specific stone types, finishes, formats and use cases will be added once the product range is provided."]];
      catalogueNote = true;
      break;
    case "/tiles":
      eyebrow = "Explore tiles";
      title = "Options for different spaces.";
      description = categories[1].description;
      cards = [["Product information", "Available types, finishes, dimensions, brands and applications will be described using the product information supplied by Studio 88."], ["Your design preferences", "Bring together the colours, references and project requirements you would like to discuss when exploring tile options."]];
      catalogueNote = true;
      break;
    case "/mandir":
      eyebrow = "Mandir / Home Temple";
      title = "Explore a dedicated category for your home.";
      description = "Discover the Mandir-related offerings identified in the Studio 88 business range.";
      cards = [["Materials & designs", "Further product information will reflect the actual materials and designs available through Studio 88."], ["Your requirements", "Prepare your questions about the products that interest you. Customisation information will be added only where confirmed for the relevant product."]];
      catalogueNote = true;
      break;
    case "/material-finder":
      eyebrow = "Your product shortlist";
      title = "Know what to ask about.";
      description = "As you explore materials, note the product or collection name and the information you need for your project.";
      cards = [["Material & appearance", "Ask about material, finish and colour for the product you are considering."], ["Size & format", "Note your dimensions and ask about available sizes, thickness or format."], ["Application & collection", "Check the recommended application and the brand or collection name, where applicable."]];
      catalogueNote = true;
      break;
    case "/contact":
      eyebrow = "Product & showroom enquiries";
      title = "A clearer brief. A useful conversation.";
      description = "Explore available collections and prepare your product-related questions or showroom visit requirements for the Studio 88 team.";
      cards = [["Enquire about a product", "Include the product or category name, the information you need and any relevant design references."], ["Share your project needs", "Mention your intended application and approximate dimensions so your enquiry has useful context."], ["Plan a showroom visit", "Official phone, WhatsApp, email, address and map details are pending confirmation. These will be added when supplied."]];
      break;
    default:
      return null;
  }

  return <section className="border-y border-charcoal/10 bg-ivory-deep py-20 text-charcoal md:py-28">
    <div className="mx-auto max-w-[1440px] px-6 md:px-10">
      <Reveal><p className="text-[11px] font-medium uppercase tracking-eyebrow text-brass-deep">{eyebrow}</p>
        <h2 className="mt-5 max-w-3xl font-display text-[clamp(2.5rem,4.5vw,4.5rem)] font-light leading-[1.05]">{title}</h2>
        <p className="mt-7 max-w-3xl text-[15px] leading-7 text-stone-muted">{description}</p>
      </Reveal>
      {cards.length > 0 && <div className={`mt-12 grid gap-10 ${cards.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
        {cards.map(([heading, text], i) => <Reveal key={heading} delay={i * 0.08}><article className="border-t border-charcoal/15 pt-6"><h3 className="font-display text-3xl">{heading}</h3><p className="mt-4 text-sm leading-7 text-stone-muted">{text}</p></article></Reveal>)}
      </div>}
      {showCategories && <div className="mt-12 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">{categories.map(category => <a key={category.name} href={category.href} className="group border-t border-charcoal/15 pt-6"><h3 className="font-display text-3xl transition-colors group-hover:text-brass-deep">{category.name}</h3><p className="mt-4 text-sm leading-7 text-stone-muted">{category.description}</p><span className="mt-5 inline-block text-xs uppercase tracking-widest">Explore &rarr;</span></a>)}</div>}
      {catalogueNote && <p className="mt-10 max-w-3xl text-xs leading-6 text-stone-muted">Further product photographs and catalogue specifications will be added as supplied by Studio 88. Confirm product details and availability with the team before selection.</p>}
      <a href={page === "home" ? "/products" : page === "/contact" ? "#enquiry" : "/contact"} className="mt-10 inline-block border-b border-brass pb-3 text-xs font-medium uppercase tracking-widest">{page === "home" ? "Explore Collections" : page === "/contact" ? "Prepare Your Enquiry" : "Contact Studio 88"} &rarr;</a>
    </div>
  </section>;
}

export { ClientBriefContent };
