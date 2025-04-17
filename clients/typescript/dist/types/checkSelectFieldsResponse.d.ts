import { Check } from "./check";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CheckSelectFieldsResponse {
    check: Check;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
