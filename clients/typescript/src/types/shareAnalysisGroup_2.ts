import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ShareAnalysisGroup_2 {
    accountNumber: string;
    comment1: string;
    id: string;
    locatorValue: number;
    locatorValueSpecified: boolean;
    locator: number | null;
    recordChangeDateValue: string | null;
    recordChangeDateValueSpecified: boolean;
    recordChangeDate: string | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}