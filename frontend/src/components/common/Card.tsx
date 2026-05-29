import type { ReactNode } from 'react';
export function Card({children,className='',premium=false}:{children:ReactNode;className?:string;premium?:boolean}){return <div className={`${premium?'bg-white/90 backdrop-blur border-green-100 rounded-3xl hover:shadow-lg':'bg-white border-slate-200 rounded-2xl hover:shadow-md'} border shadow-sm transition-all duration-300 ${className}`}>{children}</div>}
