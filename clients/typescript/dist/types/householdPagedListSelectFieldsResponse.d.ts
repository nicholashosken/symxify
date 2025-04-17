import { Household } from "./household";
import { VersionType } from "./versionType";
export interface HouseholdPagedListSelectFieldsResponse {
    household: Household[];
    token: string;
    version1: VersionType;
    messageId: string;
}
