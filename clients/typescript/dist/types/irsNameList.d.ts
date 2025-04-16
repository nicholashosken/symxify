import { IrsName } from "./irsName";
export interface IrsNameList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    irsName: IrsName[];
    irsNameSpecified: boolean;
}
