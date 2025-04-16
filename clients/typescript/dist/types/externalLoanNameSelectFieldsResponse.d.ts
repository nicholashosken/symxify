import { ExternalLoanName } from "./externalLoanName";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ExternalLoanNameSelectFieldsResponse {
    externalLoanName: ExternalLoanName;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
