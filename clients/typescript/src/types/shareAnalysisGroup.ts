import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ShareAnalysisGroup {
    accountNumber: string;
    comment1: string;
    id: string;
    locatorValue: number;
    locatorValueSpecified: boolean;
    locator: number | null;
    recordChangeDateValue: string;
    recordChangeDateValueSpecified: boolean;
    recordChangeDate: string | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}