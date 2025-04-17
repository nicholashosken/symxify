import { EftName } from "./eftName";

export interface EftNameList {
    hasReachedMaximumListSize: boolean | null;
    eftName: EftName[];
}