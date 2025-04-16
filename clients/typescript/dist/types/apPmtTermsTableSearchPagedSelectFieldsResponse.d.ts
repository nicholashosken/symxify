import { ApPmtTermsTable } from "./apPmtTermsTable";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ApPmtTermsTableSearchPagedSelectFieldsResponse {
    apPmtTermsTable: ApPmtTermsTable[];
    apPmtTermsTableSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
