import { EscrowTypeFields } from "./escrowTypeFields";
import { VersionType } from "./versionType";

export interface EscrowTypeSingleSelectableFields {
    includeAllEscrowTypeFields: boolean | null;
    escrowTypeFields: EscrowTypeFields;
    version1: VersionType;
}