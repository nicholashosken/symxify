import { OnlineOutlet } from "./onlineOutlet";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface OnlineOutletPagedListSelectFieldsResponse {
    onlineOutlet: OnlineOutlet[];
    onlineOutletSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
