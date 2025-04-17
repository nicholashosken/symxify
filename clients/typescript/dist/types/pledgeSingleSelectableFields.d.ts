import { PledgeFields } from "./pledgeFields";
import { VersionType } from "./versionType";
export interface PledgeSingleSelectableFields {
    includeAllPledgeFields: boolean | null;
    pledgeFields: PledgeFields;
    version1: VersionType;
}
