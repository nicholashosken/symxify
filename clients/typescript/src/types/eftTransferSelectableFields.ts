import { EftTransferFields } from "./eftTransferFields";
import { VersionType } from "./versionType";

export interface EftTransferSelectableFields {
    includeAllEftTransferFields: boolean | null;
    eftTransferFields: EftTransferFields;
    version1: VersionType;
}