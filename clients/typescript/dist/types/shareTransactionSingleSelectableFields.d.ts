import { ShareTransactionFields } from "./shareTransactionFields";
import { VersionType } from "./versionType";
export interface ShareTransactionSingleSelectableFields {
    includeAllShareTransactionFields: boolean | null;
    shareTransactionFields: ShareTransactionFields;
    version1: VersionType;
}
