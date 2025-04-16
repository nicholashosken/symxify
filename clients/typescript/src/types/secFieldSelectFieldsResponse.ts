import { SecField } from "./secField";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface SecFieldSelectFieldsResponse {
    secField: SecField;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}