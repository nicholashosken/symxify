import { ReservePlanLoan } from "./reservePlanLoan";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ReservePlanLoanSelectFieldsResponse {
    reservePlanLoan: ReservePlanLoan;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}