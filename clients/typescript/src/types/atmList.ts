import { Atm } from "./atm";

export interface AtmList {
    hasReachedMaximumListSize: boolean | null;
    atm: Atm[];
}