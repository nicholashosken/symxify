import { ShareCheckOrderFields } from "./shareCheckOrderFields";
import { VersionType } from "./versionType";
export interface ShareCheckOrderSingleSelectableFields {
    includeAllShareCheckOrderFields: boolean | null;
    shareCheckOrderFields: ShareCheckOrderFields;
    version1: VersionType;
}
