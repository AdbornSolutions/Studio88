import type { Collection, Principle } from '../types/catalog';

export const collections: Collection[] = [
{
  id: 'tiles',
  title: 'Tiles',
  description: 'Porcelain slabs, terrazzo and handmade clay — surfaces made for everyday living.',
  href: '#tiles',
  image: "/2f6c336c-37df-4729-b39f-749a91ea1d93.jpg",
  alt: 'Warm porcelain tiles and terrazzo floor meeting a plaster wall'
},
{
  id: 'mandir',
  title: 'Mandir',
  description: 'Hand-carved marble shrines, designed to the proportions of your home.',
  href: '#mandir',
  image: "/0508f330-90e1-486a-a57f-d2a5c8ea3a5d.jpg",
  alt: 'White marble mandir with a brass diya in a modern living room'
},
{
  id: 'natural-stone',
  title: 'Natural Stone',
  description: 'Marble, granite, quartzite and limestone, chosen block by block.',
  href: '#natural-stone',
  image: "/3cf954cb-4c5f-4af0-b184-20a1b71afe17.jpg",
  alt: 'Book-matched grey and white marble feature wall'
}];


export const principles: Principle[] = [
{ title: 'Selected at the source', detail: 'We walk the quarries and choose each block in person.' },
{ title: 'Finished by hand', detail: 'Edges, inlays and carving shaped by craftsmen, not catalogues.' },
{ title: 'Seen in daylight', detail: 'Our gallery is lit to show stone as it will live in your home.' }];