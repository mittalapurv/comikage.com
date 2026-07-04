import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number; weight?: string };

function Icon({ size = 20, children, ...props }: IconProps & { children: React.ReactNode }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{children}</svg>;
}

export const ArrowRight = (p: IconProps) => <Icon {...p}><path d="M5 12h14M13 6l6 6-6 6" /></Icon>;
export const ArrowDown = (p: IconProps) => <Icon {...p}><path d="M12 5v14M6 13l6 6 6-6" /></Icon>;
export const Check = (p: IconProps) => <Icon {...p}><path d="m5 12 4 4L19 6" /></Icon>;
export const List = (p: IconProps) => <Icon {...p}><path d="M4 7h16M4 12h16M4 17h16" /></Icon>;
export const X = (p: IconProps) => <Icon {...p}><path d="M6 6l12 12M18 6 6 18" /></Icon>;
export const CaretDown = (p: IconProps) => <Icon {...p}><path d="m6 9 6 6 6-6" /></Icon>;
export const Browser = (p: IconProps) => <Icon {...p}><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M7 6.5h.01" /></Icon>;
export const GearSix = (p: IconProps) => <Icon {...p}><circle cx="12" cy="12" r="3" /><path d="M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1a7 7 0 0 0-1.7-1L14.5 3h-5l-.4 3.1a7 7 0 0 0-1.7 1l-2.4-1-2 3.4L5.1 11a7 7 0 0 0 0 2L3 14.5 5 18l2.4-1a7 7 0 0 0 1.7 1l.4 3h5l.4-3a7 7 0 0 0 1.7-1l2.4 1 2-3.5L18.9 13a7 7 0 0 0 .1-1Z" /></Icon>;
export const Robot = (p: IconProps) => <Icon {...p}><rect x="4" y="7" width="16" height="12" rx="3" /><path d="M12 3v4M8 12h.01M16 12h.01M8 16h8" /></Icon>;
