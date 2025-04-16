import { ShareCheckOrder } from "./shareCheckOrder";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ShareCheckOrderSelectFieldsResponse {
    shareCheckOrder: ShareCheckOrder;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
