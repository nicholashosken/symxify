import { ShareHoldFields } from "./shareHoldFields";
import { VersionType } from "./versionType";

export interface ShareHoldSingleSelectableFields {
    includeAllShareHoldFields: boolean | null;
    shareHoldFields: ShareHoldFields;
    version1: VersionType;
}