import { ItcFraud } from "./itcFraud";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ItcFraudPagedListSelectFieldsResponse {
    itcFraud: ItcFraud[];
    itcFraudSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
