import { NameFieldName } from "./nameFieldName";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface NameFieldNameSelectFieldsResponse {
    nameFieldName: NameFieldName;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}