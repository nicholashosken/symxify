import { EftName } from "./eftName";
export interface EftNameList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    eftName: EftName[];
    eftNameSpecified: boolean;
}
