import { ApWorkFlowEvent } from "./apWorkFlowEvent";
import { VersionType } from "./versionType";

export interface ApWorkFlow {
    apInvoiceType: number | null;
    event: ApWorkFlowEvent[];
    version1: VersionType;
}