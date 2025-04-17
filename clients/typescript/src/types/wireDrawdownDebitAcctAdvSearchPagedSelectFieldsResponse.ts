import { WireDrawdownDebitAcctAdv } from "./wireDrawdownDebitAcctAdv";
import { VersionType } from "./versionType";

export interface WireDrawdownDebitAcctAdvSearchPagedSelectFieldsResponse {
    wireDrawdownDebitAcctAdv: WireDrawdownDebitAcctAdv[];
    token: string;
    version1: VersionType;
    messageId: string;
}