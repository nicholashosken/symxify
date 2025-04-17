import { IrsName } from "./irsName";
export interface IrsNameList {
    hasReachedMaximumListSize: boolean | null;
    irsName: IrsName[];
}
