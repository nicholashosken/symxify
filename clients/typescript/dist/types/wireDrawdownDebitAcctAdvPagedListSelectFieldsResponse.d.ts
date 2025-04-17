import { WireDrawdownDebitAcctAdv } from "./wireDrawdownDebitAcctAdv";
import { VersionType } from "./versionType";
export interface WireDrawdownDebitAcctAdvPagedListSelectFieldsResponse {
    wireDrawdownDebitAcctAdv: WireDrawdownDebitAcctAdv[];
    token: string;
    version1: VersionType;
    messageId: string;
}
