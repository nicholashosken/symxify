import { IrsContriLimit } from "./irsContriLimit";
export interface IrsContriLimitList {
    hasReachedMaximumListSize: boolean | null;
    irsContriLimit: IrsContriLimit[];
}
