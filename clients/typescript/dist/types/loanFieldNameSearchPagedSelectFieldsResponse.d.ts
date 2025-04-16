import { LoanFieldName } from "./loanFieldName";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanFieldNameSearchPagedSelectFieldsResponse {
    loanFieldName: LoanFieldName[];
    loanFieldNameSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
