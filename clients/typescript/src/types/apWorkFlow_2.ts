import { ApWorkFlowEvent_2 } from "./apWorkFlowEvent_2";
import { VersionType } from "./versionType";

export interface ApWorkFlow_2 {
    apInvoiceType: number | null;
    event: ApWorkFlowEvent_2[];
    version1: VersionType;
}