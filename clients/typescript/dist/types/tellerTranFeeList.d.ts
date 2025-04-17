import { TellerTranFee } from "./tellerTranFee";
export interface TellerTranFeeList {
    hasReachedMaximumListSize: boolean | null;
    tellerTranFee: TellerTranFee[];
}
