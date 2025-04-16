import { Disclosure } from "./disclosure";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface DisclosureSelectFieldsResponse {
    disclosure: Disclosure;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
