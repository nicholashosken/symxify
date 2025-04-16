import { LoanFieldName } from "./loanFieldName";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface LoanFieldNameSelectFieldsResponse {
    loanFieldName: LoanFieldName;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
