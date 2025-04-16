import { IrsContriLimit } from "./irsContriLimit";
export interface IrsContriLimitList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    irsContriLimit: IrsContriLimit[];
    irsContriLimitSpecified: boolean;
}
