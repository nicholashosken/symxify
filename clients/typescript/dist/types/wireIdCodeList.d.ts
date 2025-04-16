import { WireIdCode } from "./wireIdCode";
export interface WireIdCodeList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    wireIdCode: WireIdCode[];
    wireIdCodeSpecified: boolean;
}
