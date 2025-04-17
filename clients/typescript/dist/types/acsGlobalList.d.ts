import { AcsGlobal } from "./acsGlobal";
export interface AcsGlobalList {
    hasReachedMaximumListSize: boolean | null;
    acsGlobal: AcsGlobal[];
}
