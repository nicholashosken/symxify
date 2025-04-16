import { CurrencyCtrl } from "./currencyCtrl";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CurrencyCtrlSelectFieldsResponse {
    currencyCtrl: CurrencyCtrl;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}