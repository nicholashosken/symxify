import { Household } from "./household";
import { VersionType } from "./versionType";

export interface HouseholdSelectFieldsResponse {
    household: Household;
    version1: VersionType;
    messageId: string;
}