import { ExternalLoanName } from "./externalLoanName";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface ExternalLoanNamePagedListSelectFieldsResponse {
    externalLoanName: ExternalLoanName[];
    externalLoanNameSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}