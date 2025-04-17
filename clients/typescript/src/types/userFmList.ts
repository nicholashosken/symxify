import { UserFm } from "./userFm";

export interface UserFmList {
    hasReachedMaximumListSize: boolean | null;
    userFm: UserFm[];
}