import { LoanCheckOrder } from "./loanCheckOrder";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface LoanCheckOrderSelectFieldsResponse {
    loanCheckOrder: LoanCheckOrder;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}