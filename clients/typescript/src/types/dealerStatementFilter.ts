import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface DealerStatementFilter {
    query: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}