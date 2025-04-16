import { DocumentNumberCheck } from "./documentNumberCheck";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface DocumentNumber {
    certificateValue: number;
    certificateValueSpecified: boolean;
    certificate: number | null;
    check: DocumentNumberCheck[];
    checkSpecified: boolean;
    receiptValue: number;
    receiptValueSpecified: boolean;
    receipt: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
