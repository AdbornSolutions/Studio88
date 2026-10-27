import { useEffect } from "react";

const policies = {
  "/privacy": {
    title: "Privacy Policy",
    introduction: "How information is handled when you browse the Studio 88 website and prepare a project brief.",
    sections: [
      ["About this notice", "This notice describes the current website features. Official business contact details and hosting data practices are awaiting confirmation and will be added when available."],
      ["Project brief information", "The project brief form asks for your name, email address, material interest, project stage and project details. These entries are used in your browser to create a text file when you select Download project brief. This form does not send your entries to Studio 88 or store them in a website database."],
      ["Your downloaded file", "The downloaded brief may contain personal information. You control where you save it and who you share it with. Delete the file from your device when you no longer need it. Downloading a brief does not send an enquiry, create an account or confirm an appointment."],
      ["Browsing and external services", "Your browser requests website files from the hosting service. Hosting providers may process technical information such as IP addresses and request records; provider-specific details and retention periods are pending confirmation. This website also loads fonts from Google Fonts, which receives network information when your browser requests them."],
      ["Cookies and browser storage", "The current application does not include advertising trackers or analytics scripts and does not set application cookies or save enquiry entries in local or session storage. External services and the final hosting configuration may have separate practices. Those details should be reflected here if the setup changes."],
      ["External links", "Links to social platforms, external websites and Adbornsolutions.com take you to services with their own privacy practices. Review the destination's privacy notice before sharing information there."],
      ["Questions and updates", "The official Studio 88 privacy contact has not yet been supplied. Confirmed contact details will be published on the Contact page. Please avoid including sensitive personal information in project descriptions. This notice will be updated when enquiry delivery, contact channels or other website features change."]
    ]
  },
  "/terms": {
    title: "Terms & Conditions",
    introduction: "Information about browsing this website, exploring products and preparing an enquiry with Studio 88.",
    sections: [
      ["Website purpose", "This website introduces Studio 88 and its marble, tiles, stone and Mandir-related offerings. It supports product discovery and enquiry preparation. There is no online checkout or payment facility on this website."],
      ["Product information and availability", "Website descriptions and images are a starting point for discussion. Confirm actual product availability, material, finish, dimensions, thickness, application and other specifications directly with Studio 88 before making a selection or placing an order. Additional catalogue information will be added as supplied."],
      ["Images, colours and samples", "Colours and textures can appear different depending on lighting, photography and screen settings. Natural materials may vary between pieces. Review the actual product or an appropriate sample and confirm the selected specifications before purchase."],
      ["Enquiries and showroom visits", "Downloading a project brief saves a file to your device; it does not submit an enquiry, reserve stock or book a showroom visit. Confirm appointment details and the showroom address through verified Studio 88 contact channels when these are available."],
      ["Quotes, orders and services", "Prices, payment terms, delivery arrangements, returns, warranties, installation and any customisation must be confirmed separately for the relevant product or order. Nothing on this website confirms a service, warranty or customisation option unless expressly verified by Studio 88. These website terms do not replace agreed order terms or applicable consumer rights."],
      ["Responsible use", "Use the website for lawful browsing and genuine product enquiries. Do not attempt to disrupt the service, gain unauthorised access or submit content that infringes another person's rights. Do not assume that website images, logos or written material may be reused commercially without the relevant rights holder's permission."],
      ["External websites", "External links are provided for navigation and information. The destination website's terms apply when you visit it. The footer credit links to Adbornsolutions.com, the website development credit."],
      ["Questions and changes", "Official Studio 88 contact details are pending confirmation and will be added to the Contact page. These terms may be updated to reflect changes to the website. The date shown below identifies the latest revision."]
    ]
  }
};

function LegalPage() {
  const path = window.location.pathname.replace(/\/$/, "");
  const policy = policies[path];
  useEffect(() => {
    document.title = `${policy.title} | STUDIO88`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", policy.introduction);
  }, [policy]);

  return <>
    <section className="bg-charcoal px-6 pb-16 pt-40 text-ivory md:px-10 md:pb-20 md:pt-48">
      <div className="mx-auto max-w-4xl">
        <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-widest text-ivory/70"><a href="/" className="hover:text-ivory">Home</a><span aria-hidden="true" className="mx-3">/</span><span aria-current="page">{policy.title}</span></nav>
        <h1 className="mt-10 font-display text-5xl font-light md:text-7xl">{policy.title}</h1>
        <p className="mt-6 max-w-2xl text-sm leading-7 text-ivory/75">{policy.introduction}</p>
        <p className="mt-6 text-xs uppercase tracking-widest text-brass-light">Last updated: 27 October 2026</p>
      </div>
    </section>
    <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-16 md:px-10 lg:grid-cols-[220px_1fr] lg:gap-20 lg:py-24">
      <nav aria-label="Policy navigation" className="flex flex-wrap gap-5 text-sm lg:flex-col lg:items-start">
        <a href="/privacy" aria-current={path === "/privacy" ? "page" : undefined} className={path === "/privacy" ? "border-b border-brass pb-2" : "py-2 text-stone-muted hover:text-charcoal"}>Privacy Policy</a>
        <a href="/terms" aria-current={path === "/terms" ? "page" : undefined} className={path === "/terms" ? "border-b border-brass pb-2" : "py-2 text-stone-muted hover:text-charcoal"}>Terms & Conditions</a>
        <a href="/contact" className="py-2 text-stone-muted hover:text-charcoal">Contact Studio 88</a>
      </nav>
      <article className="max-w-3xl space-y-10">{policy.sections.map(([title, text], i) => <section key={title}>
        <h2 className="font-display text-3xl">{i + 1}. {title}</h2>
        <p className="mt-4 text-sm leading-7 text-stone-muted">{text}</p>
        {path === "/privacy" && title === "Browsing and external services" && <a href="https://developers.google.com/fonts/faq/privacy" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block border-b border-brass text-sm">Google Fonts privacy information</a>}
      </section>)}</article>
    </div>
  </>;
}

export { LegalPage };
