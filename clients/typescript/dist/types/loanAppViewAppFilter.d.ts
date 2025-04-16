import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppViewAppFilter {
    query: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
