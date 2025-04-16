import { Name } from "./name";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface NameSearchPagedSelectFieldsResponse {
    name: Name[];
    nameSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
