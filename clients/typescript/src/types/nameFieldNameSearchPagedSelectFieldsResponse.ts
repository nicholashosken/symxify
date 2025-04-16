import { NameFieldName } from "./nameFieldName";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface NameFieldNameSearchPagedSelectFieldsResponse {
    nameFieldName: NameFieldName[];
    nameFieldNameSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}