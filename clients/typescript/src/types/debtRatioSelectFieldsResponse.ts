import { DebtRatio } from "./debtRatio";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface DebtRatioSelectFieldsResponse {
    debtRatio: DebtRatio;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}