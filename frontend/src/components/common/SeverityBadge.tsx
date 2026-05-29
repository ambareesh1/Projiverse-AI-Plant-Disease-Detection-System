import { Badge } from './Badge'; import type { Severity } from '../../types';
export function SeverityBadge({severity}:{severity:Severity}){const map={Low:'success',Medium:'warning',High:'warning',Critical:'danger'} as const; return <Badge variant={map[severity]}>{severity}</Badge>}
