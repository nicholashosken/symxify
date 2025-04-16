import { Name } from "./name";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface NamePagedListSelectFieldsResponse {
    name: Name[];
    nameSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
