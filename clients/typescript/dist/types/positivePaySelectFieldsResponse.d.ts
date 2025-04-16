import { PositivePay } from "./positivePay";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface PositivePaySelectFieldsResponse {
    positivePay: PositivePay;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
