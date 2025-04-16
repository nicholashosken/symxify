import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { CreditReportBaseResponse } from "./creditReportBaseResponse";
export interface CreditReportResponse extends CreditReportBaseResponse {
    credRepLocatorValue: number;
    credRepLocatorValueSpecified: boolean;
    credRepLocator: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
