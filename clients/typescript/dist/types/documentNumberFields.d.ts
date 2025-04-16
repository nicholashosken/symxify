import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface DocumentNumberFields {
    certificateValue: boolean;
    certificateValueSpecified: boolean;
    certificate: boolean | null;
    check: number[];
    checkSpecified: boolean;
    receiptValue: boolean;
    receiptValueSpecified: boolean;
    receipt: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
