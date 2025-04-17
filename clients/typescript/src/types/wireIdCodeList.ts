import { WireIdCode } from "./wireIdCode";

export interface WireIdCodeList {
    hasReachedMaximumListSize: boolean | null;
    wireIdCode: WireIdCode[];
}