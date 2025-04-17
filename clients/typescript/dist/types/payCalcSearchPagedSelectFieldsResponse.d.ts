import { PayCalc } from "./payCalc";
import { VersionType } from "./versionType";
export interface PayCalcSearchPagedSelectFieldsResponse {
    payCalc: PayCalc[];
    token: string;
    version1: VersionType;
    messageId: string;
}
