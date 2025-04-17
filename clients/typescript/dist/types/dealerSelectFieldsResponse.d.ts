import { Dealer } from "./dealer";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface DealerSelectFieldsResponse {
    dealer: Dealer;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
