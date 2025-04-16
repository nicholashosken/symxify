import { ApWorkFlowEvent_2 } from "./apWorkFlowEvent_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ApWorkFlow_2 {
    apInvoiceTypeValue: number;
    apInvoiceTypeValueSpecified: boolean;
    apInvoiceType: number | null;
    event: ApWorkFlowEvent_2[];
    eventSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}