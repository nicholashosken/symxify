import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface Warnings {
    displayWarninginAcctMgrValue: boolean;
    displayWarninginAcctMgrValueSpecified: boolean;
    displayWarninginAcctMgr: boolean | null;
    displayWarninginTlrTrnValue: boolean;
    displayWarninginTlrTrnValueSpecified: boolean;
    displayWarninginTlrTrn: boolean | null;
    warnDescription: string;
    warnFmPrivValue: number;
    warnFmPrivValueSpecified: boolean;
    warnFmPriv: number | null;
    warnIqPrivValue: number;
    warnIqPrivValueSpecified: boolean;
    warnIqPriv: number | null;
    warnTrPrivValue: number;
    warnTrPrivValueSpecified: boolean;
    warnTrPriv: number | null;
    warningNumberValue: number;
    warningNumberValueSpecified: boolean;
    warningNumber: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}