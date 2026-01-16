import { ReactNode } from 'react';

interface MemeButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export default function MemeButton({ children, onClick, variant = 'primary' }: MemeButtonProps) {
  const base = "px-6 py-3 rounded-full font-bold transition-transform hover:scale-105 active:scale-95 uppercase tracking-wider";
  const styles = {
    primary: "bg-[#E11D48] text-white border-2 border-white shadow-[4px_4px_0px_0px_white]",
    secondary: "bg-transparent text-white border-2 border-gray-500 hover:border-white"
  };

  return <button className={`${base} ${styles[variant]}`} onClick={onClick}>{children}</button>;
}