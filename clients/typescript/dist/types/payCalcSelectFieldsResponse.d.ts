import { PayCalc } from "./payCalc";
import { VersionType } from "./versionType";
export interface PayCalcSelectFieldsResponse {
    payCalc: PayCalc;
    version1: VersionType;
    messageId: string;
}
