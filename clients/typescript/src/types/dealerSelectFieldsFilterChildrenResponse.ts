import { Dealer } from "./dealer";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface DealerSelectFieldsFilterChildrenResponse {
    dealer: Dealer;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}