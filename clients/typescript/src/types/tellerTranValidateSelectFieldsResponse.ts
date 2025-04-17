import { TellerTranValidate } from "./tellerTranValidate";
import { VersionType } from "./versionType";

export interface TellerTranValidateSelectFieldsResponse {
    tellerTranValidate: TellerTranValidate;
    version1: VersionType;
    messageId: string;
}