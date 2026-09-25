import type { Material } from '../types/catalog';

export const materials: Material[] = [
{
  id: 'marble',
  name: 'Marble',
  summary: 'Luminous, softly veined and endlessly varied. Best for feature walls, bathrooms and formal floors.',
  image: "/80c802d8-2a6a-4960-b6ff-b5d083b2dae9.jpg",
  alt: 'Close-up of white Statuario marble with grey veining',
  varieties: [
  { name: 'Makrana White', origin: 'Rajasthan, India', finish: 'Polished', thickness: '18 mm' },
  { name: 'Statuario', origin: 'Carrara, Italy', finish: 'Polished', thickness: '20 mm' },
  { name: 'Botticino Classico', origin: 'Brescia, Italy', finish: 'Honed', thickness: '20 mm' },
  { name: 'Emperador Dark', origin: 'Murcia, Spain', finish: 'Polished', thickness: '18 mm' }]

},
{
  id: 'granite',
  name: 'Granite',
  summary: 'Hard-wearing and heat resistant, with a fine crystalline grain. Made for kitchens and thresholds.',
  image: "/a0d05142-5643-4855-b475-8af8b0e61bf0.jpg",
  alt: 'Close-up of polished dark speckled granite',
  varieties: [
  { name: 'Absolute Black', origin: 'Karnataka, India', finish: 'Leathered', thickness: '20 mm' },
  { name: 'Kashmir White', origin: 'Tamil Nadu, India', finish: 'Polished', thickness: '20 mm' },
  { name: 'Tan Brown', origin: 'Telangana, India', finish: 'Flamed', thickness: '30 mm' },
  { name: 'Steel Grey', origin: 'Andhra Pradesh, India', finish: 'Polished', thickness: '20 mm' }]

},
{
  id: 'quartzite',
  name: 'Quartzite',
  summary: 'Marble-like movement with exceptional hardness. Ideal for worktops, tables and statement floors.',
  image: "/ee4d6e95-4eb0-4692-a5fc-a8def80101bc.jpg",
  alt: 'Close-up of creamy quartzite with golden veins',
  varieties: [
  { name: 'Taj Mahal', origin: 'Minas Gerais, Brazil', finish: 'Leathered', thickness: '20 mm' },
  { name: 'Sea Pearl', origin: 'Espírito Santo, Brazil', finish: 'Polished', thickness: '20 mm' },
  { name: 'Mont Blanc', origin: 'Brazil', finish: 'Honed', thickness: '20 mm' },
  { name: 'Silver Shine', origin: 'Rajasthan, India', finish: 'Natural', thickness: '18 mm' }]

},
{
  id: 'limestone',
  name: 'Limestone',
  summary: 'Quiet, matte and warm underfoot. A calm backdrop for walls, floors and façades.',
  image: "/58385099-25c7-4593-9f8e-d005a1b13ad0.jpg",
  alt: 'Close-up of honed beige limestone',
  varieties: [
  { name: 'Kota Blue', origin: 'Rajasthan, India', finish: 'Honed', thickness: '25 mm' },
  { name: 'Jaisalmer Yellow', origin: 'Rajasthan, India', finish: 'Brushed', thickness: '20 mm' },
  { name: 'Moca Crème', origin: 'Leiria, Portugal', finish: 'Honed', thickness: '20 mm' },
  { name: 'Jura Beige', origin: 'Bavaria, Germany', finish: 'Honed', thickness: '20 mm' }]

},
{
  id: 'hand-stone',
  name: 'Hand Stone',
  summary: 'Split, chiselled and tumbled by hand. For courtyards, garden walls and textured feature surfaces.',
  image: "/46391515-5ba0-44f3-a88d-bb50317e4d2a.jpg",
  alt: 'Hand-split sandstone and ledgestone pieces',
  varieties: [
  { name: 'Sandstone Cobble', origin: 'Rajasthan, India', finish: 'Hand-split', thickness: '50 mm' },
  { name: 'Basalt Setts', origin: 'Deccan, India', finish: 'Hand-chiselled', thickness: '60 mm' },
  { name: 'Slate Ledgestone', origin: 'Himachal Pradesh, India', finish: 'Natural cleft', thickness: '30 mm' },
  { name: 'Kota Rough', origin: 'Rajasthan, India', finish: 'Tumbled', thickness: '40 mm' }]

}];