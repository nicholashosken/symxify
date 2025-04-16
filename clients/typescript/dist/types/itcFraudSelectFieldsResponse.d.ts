import { ItcFraud } from "./itcFraud";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ItcFraudSelectFieldsResponse {
    itcFraud: ItcFraud;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
