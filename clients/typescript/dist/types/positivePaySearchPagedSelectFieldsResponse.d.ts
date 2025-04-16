import { PositivePay } from "./positivePay";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface PositivePaySearchPagedSelectFieldsResponse {
    positivePay: PositivePay[];
    positivePaySpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
