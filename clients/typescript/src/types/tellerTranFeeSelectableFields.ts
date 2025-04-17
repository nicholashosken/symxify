import { TellerTranFeeFields } from "./tellerTranFeeFields";
import { VersionType } from "./versionType";

export interface TellerTranFeeSelectableFields {
    includeAllTellerTranFeeFields: boolean | null;
    tellerTranFeeFields: TellerTranFeeFields;
    version1: VersionType;
}