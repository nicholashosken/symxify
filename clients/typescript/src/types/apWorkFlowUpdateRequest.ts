import { ApWorkFlowFields_2 } from "./apWorkFlowFields_2";

export interface ApWorkFlowUpdateRequest {
    apWorkFlowApInvoiceTypeValue: number;
    apWorkFlowApInvoiceTypeValueSpecified: boolean;
    apWorkFlowApInvoiceType: number | null;
    apWorkFlowFields: ApWorkFlowFields_2;
}