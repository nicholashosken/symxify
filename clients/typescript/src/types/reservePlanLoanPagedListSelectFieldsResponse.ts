import { ReservePlanLoan } from "./reservePlanLoan";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ReservePlanLoanPagedListSelectFieldsResponse {
    reservePlanLoan: ReservePlanLoan[];
    reservePlanLoanSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}