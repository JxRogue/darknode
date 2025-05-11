import { Tool } from '../types';

export const tools: Tool[] = [
  {
    id: 'base64',
    name: 'Base64 Encoder/Decoder',
    description: 'Encode and decode text using Base64 encoding scheme',
    icon: 'Code',
    path: '/tools/base64'
  },
  {
    id: 'hash-generator',
    name: 'Hash Generator',
    description: 'Generate common cryptographic hashes (MD5, SHA-1, SHA-256)',
    icon: 'Key',
    path: '/tools/hash-generator'
  },
  {
    id: 'port-scanner',
    name: 'Port Scanner Simulator',
    description: 'Simulate port scanning on common services',
    icon: 'Scan',
    path: '/tools/port-scanner'
  },
  {
    id: 'hex-viewer',
    name: 'Hex Viewer',
    description: 'View and analyze binary data in hexadecimal format',
    icon: 'Binary',
    path: '/tools/hex-viewer'
  },
  {
    id: 'xss-tester',
    name: 'XSS Payload Generator',
    description: 'Generate and test XSS payloads with visualization',
    icon: 'Code2',
    path: '/tools/xss-tester'
  },
  {
    id: 'jwt-decoder',
    name: 'JWT Decoder',
    description: 'Decode and inspect JWT tokens',
    icon: 'BadgeCheck',
    path: '/tools/jwt-decoder'
  },
];