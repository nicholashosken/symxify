import { TellerFeeFields } from "./tellerFeeFields";
import { VersionType } from "./versionType";

export interface TellerFeeSingleSelectableFields {
    includeAllTellerFeeFields: boolean | null;
    tellerFeeFields: TellerFeeFields;
    version1: VersionType;
}