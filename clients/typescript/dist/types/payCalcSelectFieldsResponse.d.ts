import { PayCalc } from "./payCalc";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface PayCalcSelectFieldsResponse {
    payCalc: PayCalc;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
