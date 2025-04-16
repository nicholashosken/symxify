import { DebtRatio } from "./debtRatio";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface DebtRatioSearchPagedSelectFieldsResponse {
    debtRatio: DebtRatio[];
    debtRatioSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
