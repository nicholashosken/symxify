import { CashLetter } from "./cashLetter";
import { VersionType } from "./versionType";
export interface CashLetterSelectFieldsResponse {
    cashLetter: CashLetter;
    version1: VersionType;
    messageId: string;
}
