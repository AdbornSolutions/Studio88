import type { FooterColumn, MegaCategory, NavItem } from '../types/catalog';

export const navItems: NavItem[] = [
{ label: 'Home', href: '#home' },
{ label: 'About', href: '#about' },
{ label: 'Products', href: '#natural-stone', mega: true },
{ label: 'Collections', href: '#collections' },
{ label: 'Projects', href: '#projects' },
{ label: 'Contact', href: '#contact' }];


export const megaCategories: MegaCategory[] = [
{
  id: 'natural-stone',
  title: 'Natural Stone',
  href: '#natural-stone',
  image: "/3cf954cb-4c5f-4af0-b184-20a1b71afe17.jpg",
  alt: 'Book-matched grey marble feature wall',
  items: [
  { label: 'Marble', href: '#finder' },
  { label: 'Granite', href: '#finder' },
  { label: 'Quartzite', href: '#finder' },
  { label: 'Limestone', href: '#finder' },
  { label: 'Hand Stone', href: '#finder' }]

},
{
  id: 'tiles',
  title: 'Tiles',
  href: '#tiles',
  image: "/2f6c336c-37df-4729-b39f-749a91ea1d93.jpg",
  alt: 'Large-format porcelain and terrazzo tiles in a bathroom corner',
  items: [
  { label: 'Porcelain Slabs', href: '#tiles' },
  { label: 'Terrazzo', href: '#tiles' },
  { label: 'Handmade Clay', href: '#tiles' },
  { label: 'Outdoor Pavers', href: '#tiles' }]

},
{
  id: 'mandir',
  title: 'Mandir',
  href: '#mandir',
  image: "/0508f330-90e1-486a-a57f-d2a5c8ea3a5d.jpg",
  alt: 'Hand-carved white marble mandir in a calm living space',
  items: [
  { label: 'Wall Mandirs', href: '#mandir' },
  { label: 'Floor Mandirs', href: '#mandir' },
  { label: 'Bespoke Commissions', href: '#mandir' }]

}];


export const footerColumns: FooterColumn[] = [
{
  title: 'Explore',
  links: [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Collections', href: '#collections' },
  { label: 'Projects', href: '#projects' }]

},
{
  title: 'Products',
  links: [
  { label: 'Natural Stone', href: '#natural-stone' },
  { label: 'Tiles', href: '#tiles' },
  { label: 'Mandir', href: '#mandir' },
  { label: 'Material Finder', href: '#finder' }]

},
{
  title: 'Visit',
  links: [
  { label: 'Book a Showroom Visit', href: '#contact' },
  { label: 'Request Samples', href: '#finder' },
  { label: 'Contact', href: '#contact' }]

}];