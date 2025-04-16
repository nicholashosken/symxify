import { TellerTranFee } from "./tellerTranFee";
export interface TellerTranFeeList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    tellerTranFee: TellerTranFee[];
    tellerTranFeeSpecified: boolean;
}
