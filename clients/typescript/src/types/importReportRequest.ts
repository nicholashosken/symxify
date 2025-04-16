import { Bureau } from "./bureau";
import { MemberInfo } from "./memberInfo";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { CreditReportBaseRequest } from "./creditReportBaseRequest";

export interface ImportReportRequest extends CreditReportBaseRequest {
    bureauValue: Bureau;
    bureauValueSpecified: boolean;
    bureau: Bureau | null;
    accountNumber: string;
    fileName: string;
    primaryMember: MemberInfo;
    jointMember: MemberInfo;
    ecoaInquiryType: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}