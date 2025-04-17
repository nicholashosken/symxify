import { EpisysDbExtract } from "./episysDbExtract";
export interface EpisysDbExtractList {
    hasReachedMaximumListSize: boolean | null;
    episysDbExtract: EpisysDbExtract[];
}
