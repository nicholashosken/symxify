import { IdentIdTypeDesc } from "./identIdTypeDesc";

export interface IdentIdTypeDescList {
    hasReachedMaximumListSize: boolean | null;
    identIdTypeDesc: IdentIdTypeDesc[];
}