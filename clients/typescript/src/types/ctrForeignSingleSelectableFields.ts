import { CtrForeignFields } from "./ctrForeignFields";
import { VersionType } from "./versionType";

export interface CtrForeignSingleSelectableFields {
    includeAllCtrForeignFields: boolean | null;
    ctrForeignFields: CtrForeignFields;
    version1: VersionType;
}