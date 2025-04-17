import { WdFeeFields } from "./wdFeeFields";
import { VersionType } from "./versionType";
export interface WdFeeSingleSelectableFields {
    includeAllWdFeeFields: boolean | null;
    wdFeeFields: WdFeeFields;
    version1: VersionType;
}
