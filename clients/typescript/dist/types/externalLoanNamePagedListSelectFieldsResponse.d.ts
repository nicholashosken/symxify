import { ExternalLoanName } from "./externalLoanName";
import { VersionType } from "./versionType";
export interface ExternalLoanNamePagedListSelectFieldsResponse {
    externalLoanName: ExternalLoanName[];
    token: string;
    version1: VersionType;
    messageId: string;
}
