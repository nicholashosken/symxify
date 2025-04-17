import { RemittanceFields } from "./remittanceFields";
import { VersionType } from "./versionType";

export interface RemittanceSingleSelectableFields {
    includeAllRemittanceFields: boolean | null;
    remittanceFields: RemittanceFields;
    version1: VersionType;
}