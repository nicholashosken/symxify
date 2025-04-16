import { ShareCheckOrder } from "./shareCheckOrder";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ShareCheckOrderPagedListSelectFieldsResponse {
    shareCheckOrder: ShareCheckOrder[];
    shareCheckOrderSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
