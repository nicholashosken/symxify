import { EpisysDbExtract } from "./episysDbExtract";
export interface EpisysDbExtractList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    episysDbExtract: EpisysDbExtract[];
    episysDbExtractSpecified: boolean;
}
