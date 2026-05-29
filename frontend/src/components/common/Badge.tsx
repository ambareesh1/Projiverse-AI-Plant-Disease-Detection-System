import type { ReactNode } from 'react';
const v={success:'bg-green-50 text-green-700 border-green-100',warning:'bg-amber-50 text-amber-700 border-amber-100',danger:'bg-red-50 text-red-700 border-red-100',info:'bg-sky-50 text-sky-700 border-sky-100'};
export function Badge({children,variant='success'}:{children:ReactNode;variant?:keyof typeof v}){return <span className={`inline-flex rounded-full border px-3 py-1 text-sm font-medium ${v[variant]}`}>{children}</span>}
