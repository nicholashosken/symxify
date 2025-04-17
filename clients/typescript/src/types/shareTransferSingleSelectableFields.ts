import { ShareTransferFields } from "./shareTransferFields";
import { VersionType } from "./versionType";

export interface ShareTransferSingleSelectableFields {
    includeAllShareTransferFields: boolean | null;
    shareTransferFields: ShareTransferFields;
    version1: VersionType;
}