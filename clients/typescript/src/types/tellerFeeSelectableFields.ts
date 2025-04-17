import { TellerFeeFields } from "./tellerFeeFields";
import { VersionType } from "./versionType";

export interface TellerFeeSelectableFields {
    includeAllTellerFeeFields: boolean | null;
    tellerFeeFields: TellerFeeFields;
    version1: VersionType;
}