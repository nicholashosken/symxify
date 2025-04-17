import { WdFeeFields } from "./wdFeeFields";
import { VersionType } from "./versionType";
export interface WdFeeSelectableFields {
    includeAllWdFeeFields: boolean | null;
    wdFeeFields: WdFeeFields;
    version1: VersionType;
}
