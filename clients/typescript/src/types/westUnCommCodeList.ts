import { WestUnCommCode } from "./westUnCommCode";

export interface WestUnCommCodeList {
    hasReachedMaximumListSize: boolean | null;
    westUnCommCode: WestUnCommCode[];
}