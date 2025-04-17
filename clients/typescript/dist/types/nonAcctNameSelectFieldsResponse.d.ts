import { NonAcctName } from "./nonAcctName";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface NonAcctNameSelectFieldsResponse {
    nonAcctName: NonAcctName;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
