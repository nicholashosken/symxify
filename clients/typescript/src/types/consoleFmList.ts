import { ConsoleFm } from "./consoleFm";

export interface ConsoleFmList {
    hasReachedMaximumListSize: boolean | null;
    consoleFm: ConsoleFm[];
}