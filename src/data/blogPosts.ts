import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    id: 'zero-day-hunting',
    title: 'Zero-Day Hunting: The Art of Finding What Others Miss',
    excerpt: 'My approach to discovering unknown vulnerabilities and why methodology matters more than tools.',
    date: '2025-02-15',
    category: 'Vulnerability Research'
  },
  {
    id: 'red-team-approach',
    title: 'Red Team Operations: Why Most Companies Get It Wrong',
    excerpt: 'The common pitfalls in red team exercises and how to run them effectively.',
    date: '2025-01-10',
    category: 'Red Teaming'
  },
  {
    id: 'supply-chain',
    title: 'Supply Chain Attacks: The Weakest Link',
    excerpt: 'Analyzing recent supply chain compromises and what we should learn from them.',
    date: '2024-12-05',
    category: 'Attack Vectors'
  },
  {
    id: 'infrastructure-security',
    title: 'Infrastructure Security: Beyond the Perimeter',
    excerpt: 'Why traditional security models fail in the age of cloud and microservices.',
    date: '2024-11-20',
    category: 'Infrastructure'
  }
];