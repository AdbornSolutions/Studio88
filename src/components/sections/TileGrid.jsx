import { useState } from "react";
import { ArrowUpRight, Images } from "lucide-react";
import catalog from "../../data/tileCatalog.json";

const collections = [
  { id: "living-floor", name: "Living Floor Tiles", description: "Browse vitrified floor tiles by size and compare each surface with its room application where available." },
  { id: "handmade", name: "Handmade Tiles", description: "Explore artisan-made shapes, jaalis, roof tiles and motifs from the 2026 catalogue.", pdf: "/tile-catalog/handmade-tiles-2026.pdf" },
  { id: "athangudi", name: "Athangudi Tiles", description: "Explore traditional Athangudi patterns and see how they look in finished spaces.", pdf: "/tile-catalog/athangudi-tiles-2026.pdf" }
];

const pageSize = 12;
const sizes = [...new Set(catalog.floor.map((tile) => tile.size))];
const linkStyle = "inline-flex items-center gap-1.5 border-b border-brass pb-1 text-sm font-medium hover:text-stone-muted";

function FloorCard({ tile, showRooms }) {
  const room = showRooms && tile.roomImage;
  const image = room || tile.image;
  return (
    <article className="flex flex-col border border-charcoal/15 bg-ivory">
      {image ? (
        <a href={image} target="_blank" rel="noreferrer" aria-label={`Open ${tile.name} ${room ? "room photo" : "tile photo"} in a new tab`} className="group block aspect-[4/3] overflow-hidden bg-ivory-deep">
          <img src={image} alt={`${tile.name} ${room ? "installed in a room" : "tile surface"}`} loading="lazy" decoding="async" className={`h-full w-full transition-transform duration-500 group-hover:scale-[1.03] ${room ? "object-cover" : "object-contain"}`} />
        </a>
      ) : (
        <div className="grid aspect-[4/3] place-content-center gap-2 bg-ivory-deep px-4 text-center text-sm text-stone-muted">
          <Images aria-hidden="true" className="mx-auto h-6 w-6" strokeWidth={1.25} />
          Tile photo unavailable
        </div>
      )}
      <div className="flex flex-1 flex-col items-start p-5">
        <p className="text-[11px] font-medium uppercase tracking-widest text-stone-muted">{tile.brand}</p>
        <h4 className="mt-2 font-display text-2xl leading-tight">{tile.name}</h4>
        <p className="mt-3 text-sm text-stone-muted">{tile.size} · {tile.finish}</p>
        {tile.type && <p className="mt-1 text-sm text-stone-muted">{tile.type}</p>}
        {showRooms && tile.image && !tile.roomImage && <p className="mt-1 text-sm text-stone-muted">Room photo unavailable</p>}
        {tile.panorama && (
          <div className="mt-auto pt-4">
            <a href={tile.panorama} target="_blank" rel="noreferrer" aria-label={`View ${tile.name} in 360° (opens in a new tab)`} className={linkStyle}>
              360° view <ArrowUpRight aria-hidden="true" size={14} />
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

function LivingFloor() {
  const [size, setSize] = useState("");
  const [showRooms, setShowRooms] = useState(false);
  const [visible, setVisible] = useState(pageSize);
  const tiles = size ? catalog.floor.filter((tile) => tile.size === size) : catalog.floor;

  return (
    <>
      <div className="mt-8 flex flex-wrap items-end gap-x-8 gap-y-4 border-y border-charcoal/15 py-4">
        <label className="flex flex-col gap-2 text-sm font-medium">
          Tile size
          <select value={size} onChange={(event) => { setSize(event.target.value); setVisible(pageSize); }} className="min-w-48 border border-charcoal/30 bg-ivory px-3 py-2 font-normal">
            <option value="">All sizes</option>
            {sizes.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label className="flex min-h-10 cursor-pointer items-center gap-2 text-sm">
          <input type="checkbox" checked={showRooms} onChange={(event) => setShowRooms(event.target.checked)} className="h-4 w-4 accent-charcoal" />
          Show room photos
        </label>
      </div>
      <p role="status" className="my-5 text-sm text-stone-muted">Showing {Math.min(visible, tiles.length)} of {tiles.length} tiles</p>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {tiles.slice(0, visible).map((tile) => <FloorCard key={tile.id} tile={tile} showRooms={showRooms} />)}
      </div>
      {visible < tiles.length && (
        <button type="button" onClick={() => setVisible((count) => count + pageSize)} className="mx-auto mt-8 block border border-charcoal px-6 py-3 text-sm transition-colors hover:bg-charcoal hover:text-ivory">
          Show more tiles
        </button>
      )}
    </>
  );
}

function PrintedCollection({ collection }) {
  const isHandmade = collection.id === "handmade";
  return (
    <>
      <a href={collection.pdf} target="_blank" rel="noreferrer" className={`mt-5 ${linkStyle}`}>
        Open {collection.name} 2026 catalogue (PDF) <ArrowUpRight aria-hidden="true" size={15} />
      </a>
      <div className={`mt-8 grid gap-5 sm:grid-cols-2 ${isHandmade ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
        {catalog[collection.id].map((item) => (
          <a key={item.name} href={`${collection.pdf}#page=${item.page}`} target="_blank" rel="noreferrer" aria-label={`View ${item.name} on page ${item.page} of the PDF (opens in a new tab)`} className="group flex flex-col border border-charcoal/15 bg-ivory transition-colors hover:border-brass">
            <div className={`overflow-hidden ${isHandmade ? "aspect-[4/5] bg-[#f5eee2]" : "aspect-[5/3] bg-white"}`}>
              <img src={item.image} alt="" loading="lazy" decoding="async" className="h-full w-full object-contain" />
            </div>
            <div className="flex flex-1 items-center justify-between gap-3 border-t border-charcoal/10 p-4">
              <h4 className="font-display text-xl leading-tight">{item.name}</h4>
              <ArrowUpRight aria-hidden="true" size={17} className="shrink-0 text-stone-muted group-hover:text-charcoal" />
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

function TileGrid() {
  const requested = new URLSearchParams(window.location.search).get("collection");
  const [active, setActive] = useState(() => collections.find(({ id }) => id === requested) ?? collections[0]);

  return (
    <section id="tile-collections" aria-labelledby="tile-collection-title" className="scroll-mt-28 bg-ivory py-16 text-charcoal md:py-24">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <h2 id="tile-collection-title" className="font-display text-4xl font-light md:text-6xl">Explore tile collections</h2>
        <div role="group" aria-label="Tile collections" className="mt-7 flex flex-wrap gap-2 border-b border-charcoal/15 pb-4">
          {collections.map((collection) => (
            <button key={collection.id} type="button" aria-pressed={collection.id === active.id} onClick={() => setActive(collection)} className={`border px-4 py-3 text-sm font-medium transition-colors ${collection.id === active.id ? "border-charcoal bg-charcoal text-ivory" : "border-charcoal/20 hover:border-charcoal"}`}>
              {collection.name}
            </button>
          ))}
        </div>
        <div className="mt-8">
          <h3 className="font-display text-3xl md:text-4xl">{active.name}</h3>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-stone-muted">{active.description}</p>
          {active.id === "living-floor" ? <LivingFloor /> : <PrintedCollection collection={active} />}
        </div>
      </div>
    </section>
  );
}

export { TileGrid };
