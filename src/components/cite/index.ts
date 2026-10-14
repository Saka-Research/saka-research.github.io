// Reference lists for project pages. Citation keys must be unique across lists.
import { REFS as wander } from './wander';

export type Ref = { cite: string; ref: string; url: string };
export const REF_SETS = { wander } as const;
export type RefSet = keyof typeof REF_SETS;
export const ALL_REFS: Record<string, Ref> = { ...wander };
