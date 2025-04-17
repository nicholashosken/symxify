import { ShareTransferFields } from "./shareTransferFields";
import { VersionType } from "./versionType";
export interface ShareTransferSelectableFields {
    includeAllShareTransferFields: boolean | null;
    shareTransferFields: ShareTransferFields;
    version1: VersionType;
}
