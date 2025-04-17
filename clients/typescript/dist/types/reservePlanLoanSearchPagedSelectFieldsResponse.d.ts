import { ReservePlanLoan } from "./reservePlanLoan";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ReservePlanLoanSearchPagedSelectFieldsResponse {
    reservePlanLoan: ReservePlanLoan[];
    reservePlanLoanSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
