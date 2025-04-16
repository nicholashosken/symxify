import { Household } from "./household";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface HouseholdSelectFieldsResponse {
    household: Household;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}