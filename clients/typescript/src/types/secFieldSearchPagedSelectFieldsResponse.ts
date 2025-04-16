import { SecField } from "./secField";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface SecFieldSearchPagedSelectFieldsResponse {
    secField: SecField[];
    secFieldSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}