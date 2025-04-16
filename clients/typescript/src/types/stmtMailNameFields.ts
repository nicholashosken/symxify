import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface StmtMailNameFields {
    statementMailCodeValue: boolean;
    statementMailCodeValueSpecified: boolean;
    statementMailCode: boolean | null;
    statementMailCodeNameValue: boolean;
    statementMailCodeNameValueSpecified: boolean;
    statementMailCodeName: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}