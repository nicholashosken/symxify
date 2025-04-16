import { Name } from "./name";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface NameSelectFieldsResponse {
    name: Name;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}