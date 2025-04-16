import { LoanSchedule } from "./loanSchedule";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanScheduleSearchPagedSelectFieldsResponse {
    loanSchedule: LoanSchedule[];
    loanScheduleSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
