import { ExternalLoanName } from "./externalLoanName";
import { VersionType } from "./versionType";
export interface ExternalLoanNameSelectFieldsResponse {
    externalLoanName: ExternalLoanName;
    version1: VersionType;
    messageId: string;
}
