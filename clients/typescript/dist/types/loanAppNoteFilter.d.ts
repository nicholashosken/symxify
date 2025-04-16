import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppNoteFilter {
    query: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
