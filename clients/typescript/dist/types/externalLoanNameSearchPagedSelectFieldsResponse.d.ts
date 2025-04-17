import { ExternalLoanName } from "./externalLoanName";
import { VersionType } from "./versionType";
export interface ExternalLoanNameSearchPagedSelectFieldsResponse {
    externalLoanName: ExternalLoanName[];
    token: string;
    version1: VersionType;
    messageId: string;
}
