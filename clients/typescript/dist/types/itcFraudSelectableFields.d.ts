import { ItcFraudFields } from "./itcFraudFields";
import { VersionType } from "./versionType";
export interface ItcFraudSelectableFields {
    includeAllItcFraudFields: boolean | null;
    itcFraudFields: ItcFraudFields;
    version1: VersionType;
}
