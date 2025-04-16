import { CheckOrderDefault } from "./checkOrderDefault";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CheckOrderDefaultSearchPagedSelectFieldsResponse {
    checkOrderDefault: CheckOrderDefault[];
    checkOrderDefaultSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
