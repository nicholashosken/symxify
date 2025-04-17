import { CorpTransferFields } from "./corpTransferFields";
import { VersionType } from "./versionType";

export interface CorpTransferSelectableFields {
    includeAllCorpTransferFields: boolean | null;
    corpTransferFields: CorpTransferFields;
    version1: VersionType;
}