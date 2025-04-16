import { WestUnCommCode } from "./westUnCommCode";

export interface WestUnCommCodeList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    westUnCommCode: WestUnCommCode[];
    westUnCommCodeSpecified: boolean;
}