import { PayCalc } from "./payCalc";
import { VersionType } from "./versionType";
export interface PayCalcPagedListSelectFieldsResponse {
    payCalc: PayCalc[];
    token: string;
    version1: VersionType;
    messageId: string;
}
