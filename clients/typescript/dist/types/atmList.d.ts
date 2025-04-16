import { Atm } from "./atm";
export interface AtmList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    atm: Atm[];
    atmSpecified: boolean;
}
