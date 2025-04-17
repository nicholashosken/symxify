import { PledgeFields } from "./pledgeFields";
import { VersionType } from "./versionType";

export interface PledgeSelectableFields {
    includeAllPledgeFields: boolean | null;
    pledgeFields: PledgeFields;
    version1: VersionType;
}