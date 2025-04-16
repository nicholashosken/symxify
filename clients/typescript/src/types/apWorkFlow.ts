import { ApWorkFlowEvent } from "./apWorkFlowEvent";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ApWorkFlow {
    apInvoiceTypeValue: number;
    apInvoiceTypeValueSpecified: boolean;
    apInvoiceType: number | null;
    event: ApWorkFlowEvent[];
    eventSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}