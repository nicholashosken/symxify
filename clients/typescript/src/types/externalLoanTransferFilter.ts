import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ExternalLoanTransferFilter {
    query: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}