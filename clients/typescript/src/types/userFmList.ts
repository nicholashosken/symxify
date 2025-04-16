import { UserFm } from "./userFm";

export interface UserFmList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    userFm: UserFm[];
    userFmSpecified: boolean;
}