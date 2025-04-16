import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface StmtMailName {
    statementMailCodeValue: number;
    statementMailCodeValueSpecified: boolean;
    statementMailCode: number | null;
    statementMailCodeName: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}