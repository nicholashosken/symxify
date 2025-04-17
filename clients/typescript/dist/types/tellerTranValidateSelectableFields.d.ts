import { TellerTranValidateFields } from "./tellerTranValidateFields";
import { VersionType } from "./versionType";
export interface TellerTranValidateSelectableFields {
    includeAllTellerTranValidateFields: boolean | null;
    tellerTranValidateFields: TellerTranValidateFields;
    version1: VersionType;
}
