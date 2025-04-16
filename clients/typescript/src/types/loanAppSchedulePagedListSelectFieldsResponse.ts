import { LoanAppSchedule } from "./loanAppSchedule";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanAppSchedulePagedListSelectFieldsResponse {
    loanAppSchedule: LoanAppSchedule[];
    loanAppScheduleSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}