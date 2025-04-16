import { Household } from "./household";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface HouseholdPagedListSelectFieldsResponse {
    household: Household[];
    householdSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}