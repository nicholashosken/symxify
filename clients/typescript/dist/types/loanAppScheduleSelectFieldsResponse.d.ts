import { LoanAppSchedule } from "./loanAppSchedule";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanAppScheduleSelectFieldsResponse {
    loanAppSchedule: LoanAppSchedule;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
