type P = React.SVGProps<SVGSVGElement>;
const base = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true } as const;

export const Facebook = (p: P) => (
  <svg {...base} {...p}><path d="M14 8V6.2c0-.8.2-1.2 1.4-1.2H17V2h-2.6C11.3 2 10.3 3.6 10.3 6.2V8H8v3h2.3v11H14V11h2.6L17 8h-3Z" /></svg>
);
export const Instagram = (p: P) => (
  <svg {...base} {...p}><path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2A3.2 3.2 0 1 1 12 8.8a3.2 3.2 0 0 1 0 6.4ZM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4ZM21.9 7.9c-.1-1.6-.4-3-1.6-4.2S17.7 2.2 16.1 2.1C14.5 2 9.5 2 7.9 2.1c-1.6.1-3 .4-4.2 1.6S2.2 6.3 2.1 7.9C2 9.5 2 14.5 2.1 16.1c.1 1.6.4 3 1.6 4.2s2.6 1.5 4.2 1.6c1.6.1 6.6.1 8.2 0 1.6-.1 3-.4 4.2-1.6s1.5-2.6 1.6-4.2c.1-1.6.1-6.6 0-8.2Zm-2.1 10a3.3 3.3 0 0 1-1.9 1.9c-1.3.5-4.4.4-5.9.4s-4.6.1-5.9-.4a3.3 3.3 0 0 1-1.9-1.9c-.5-1.3-.4-4.4-.4-5.9s-.1-4.6.4-5.9a3.3 3.3 0 0 1 1.9-1.9C7.4 3.7 10.5 3.8 12 3.8s4.6-.1 5.9.4a3.3 3.3 0 0 1 1.9 1.9c.5 1.3.4 4.4.4 5.9s.1 4.6-.4 5.9Z" /></svg>
);
export const Linkedin = (p: P) => (
  <svg {...base} {...p}><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.8v1.5h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6v5.5h-4v-4.9c0-1.2 0-2.7-1.6-2.7s-1.9 1.3-1.9 2.6v5H9.5v-11Z" /></svg>
);
export const Whatsapp = (p: P) => (
  <svg {...base} {...p}><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1l-.9 1.2c-.2.2-.3.2-.6.1a8.2 8.2 0 0 1-4.1-3.6c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5 1.9.8 2.6.9 3.6.7.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.7-.4ZM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Z" /></svg>
);
export const Mail = (p: P) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth={1.8} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
);
export const Pin = (p: P) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth={1.8} {...p}><path d="M12 21s-7-6.2-7-11.5a7 7 0 1 1 14 0C19 14.8 12 21 12 21Z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
);
export const Check = (p: P) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth={2.2} {...p}><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
);
export const Arrow = (p: P) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth={2} className="rtl:-scale-x-100" {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const Plus = (p: P) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth={2} {...p}><path d="M12 5v14M5 12h14" /></svg>
);
export const Globe = (p: P) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth={1.8} {...p}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z" /></svg>
);
export const Menu = (p: P) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth={2} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const Close = (p: P) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth={2} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
