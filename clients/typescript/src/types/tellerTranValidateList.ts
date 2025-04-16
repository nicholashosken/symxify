import { TellerTranValidate } from "./tellerTranValidate";

export interface TellerTranValidateList {
    hasReachedMaximumListSizeValue: boolean;
    hasReachedMaximumListSizeValueSpecified: boolean;
    hasReachedMaximumListSize: boolean | null;
    tellerTranValidate: TellerTranValidate[];
    tellerTranValidateSpecified: boolean;
}