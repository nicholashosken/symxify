import { InsType } from "./insType";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface InsTypePagedListSelectFieldsResponse {
    insType: InsType[];
    insTypeSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
