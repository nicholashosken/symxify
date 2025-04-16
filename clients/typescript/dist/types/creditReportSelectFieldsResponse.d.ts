import { CreditReport } from "./creditReport";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CreditReportSelectFieldsResponse {
    creditReport: CreditReport;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
