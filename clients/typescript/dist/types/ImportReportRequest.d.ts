import { Bureau } from "./bureau";
import { MemberInfo } from "./memberInfo";
import { VersionType } from "./versionType";
import { CreditReportBaseRequest } from "./creditReportBaseRequest";
export interface ImportReportRequest extends CreditReportBaseRequest {
    bureau: Bureau | null;
    accountNumber: string;
    fileName: string;
    primaryMember: MemberInfo;
    jointMember: MemberInfo;
    ecoaInquiryType: string;
    version1: VersionType;
}
