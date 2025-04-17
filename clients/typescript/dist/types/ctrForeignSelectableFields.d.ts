import { CtrForeignFields } from "./ctrForeignFields";
import { VersionType } from "./versionType";
export interface CtrForeignSelectableFields {
    includeAllCtrForeignFields: boolean | null;
    ctrForeignFields: CtrForeignFields;
    version1: VersionType;
}
