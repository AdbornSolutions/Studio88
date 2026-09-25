import type { Origin, Stone } from '../types/catalog';

export const stones: Stone[] = [
{
  id: 'granite',
  name: 'Granite',
  origin: 'South India',
  description: 'Dense, durable and quietly speckled — the natural choice for kitchens, thresholds and busy floors.',
  finishes: ['Polished', 'Leathered', 'Flamed'],
  image: "/bf69fd92-79bd-43d2-a297-87597418f1aa.jpg",
  alt: 'Leathered black granite kitchen island under pendant light'
},
{
  id: 'marble',
  name: 'Marble',
  origin: 'Rajasthan & Italy',
  description: 'Soft veining and a luminous depth that shifts with the light through the day.',
  finishes: ['Polished', 'Honed'],
  image: "/a7e54e52-fde7-48e2-97d4-7964481a21d1.jpg",
  alt: 'Bathroom clad floor to ceiling in white veined marble'
},
{
  id: 'hand-stone',
  name: 'Hand Stone',
  origin: 'Hand-dressed',
  description: 'Split and dressed by hand, each piece carrying the marks of the craftsman who shaped it.',
  finishes: ['Natural cleft', 'Hand-chiselled', 'Tumbled'],
  image: "/45537ef8-748d-4881-8574-8011146de625.jpg",
  alt: 'Courtyard wall built from hand-dressed natural stone'
},
{
  id: 'limestone',
  name: 'Limestone',
  origin: 'Kota & Portugal',
  description: 'Calm, even tones with a velvety surface — made for walls, floors and serene interiors.',
  finishes: ['Honed', 'Brushed', 'Sandblasted'],
  image: "/b6233c56-cf93-4aae-9adb-54ad2b632090.jpg",
  alt: 'Hallway finished in honed beige limestone'
},
{
  id: 'quartzite',
  name: 'Quartzite',
  origin: 'Brazil & India',
  description: 'The look of marble with the resilience of granite; crystalline and cool to the touch.',
  finishes: ['Polished', 'Leathered'],
  image: "/fc492fa2-1fa1-44de-8347-44a57facd6a5.jpg",
  alt: 'Dining room with a quartzite table and veined stone floor'
}];


export const origins: Origin[] = [
{
  id: 'indian',
  eyebrow: 'Indian Collection',
  title: 'From the quarries of India',
  description:
  'Makrana marble, Kota limestone and South Indian granites — sourced directly and finished by craftsmen who have worked stone for generations.',
  href: '#finder',
  cta: 'Explore Indian Collection',
  image: "/b853dd03-3eec-4784-9ad2-3ca502ebaeaf.jpg",
  alt: 'Indian courtyard with white marble floor and carved sandstone screen'
},
{
  id: 'imported',
  eyebrow: 'Imported Collection',
  title: 'Selected across the world',
  description:
  'Italian statuario, Spanish emperador and Brazilian quartzites — each block chosen in person, at the quarry.',
  href: '#finder',
  cta: 'Explore Imported Collection',
  image: "/919b56f8-5f0c-4374-86a0-fa87bf120c58.jpg",
  alt: 'Living room with a dark Emperador marble fireplace wall'
}];