import { Tpt } from "./tpt";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface TptSelectFieldsResponse {
    tpt: Tpt;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
