import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanEscrowFilter {
    query: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}