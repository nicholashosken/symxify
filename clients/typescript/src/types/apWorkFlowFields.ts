import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ApWorkFlowFields {
    apInvoiceTypeValue: boolean;
    apInvoiceTypeValueSpecified: boolean;
    apInvoiceType: boolean | null;
    event: number[];
    eventSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}