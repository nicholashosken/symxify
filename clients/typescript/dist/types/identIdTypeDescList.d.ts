import { IdentIdTypeDesc } from "./identIdTypeDesc";
export interface IdentIdTypeDescList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    identIdTypeDesc: IdentIdTypeDesc[];
    identIdTypeDescSpecified: boolean;
}
