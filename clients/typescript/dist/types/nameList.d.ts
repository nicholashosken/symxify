import { Name } from "./name";
export interface NameList {
    hasReachedMaximumListSize: boolean | null;
    name: Name[];
}
