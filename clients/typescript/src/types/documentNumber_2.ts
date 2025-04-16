import { DocumentNumberCheck_2 } from "./documentNumberCheck_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface DocumentNumber_2 {
    certificateValue: number;
    certificateValueSpecified: boolean;
    certificate: number | null;
    check: DocumentNumberCheck_2[];
    checkSpecified: boolean;
    receiptValue: number;
    receiptValueSpecified: boolean;
    receipt: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}