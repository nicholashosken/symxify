import { Tpt } from "./tpt";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface TptPagedListSelectFieldsResponse {
    tpt: Tpt[];
    tptSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
