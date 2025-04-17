import { TellerTranValidate } from "./tellerTranValidate";

export interface TellerTranValidateList {
    hasReachedMaximumListSize: boolean | null;
    tellerTranValidate: TellerTranValidate[];
}