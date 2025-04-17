import { NonAcctName } from "./nonAcctName";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface NonAcctNameSelectFieldsFilterChildrenResponse {
    nonAcctName: NonAcctName;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}