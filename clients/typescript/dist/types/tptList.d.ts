import { Tpt } from "./tpt";
export interface TptList {
    hasReachedMaximumListSize: boolean | null;
    tpt: Tpt[];
}
