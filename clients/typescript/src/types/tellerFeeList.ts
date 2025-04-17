import { TellerFee } from "./tellerFee";

export interface TellerFeeList {
    hasReachedMaximumListSize: boolean | null;
    tellerFee: TellerFee[];
}