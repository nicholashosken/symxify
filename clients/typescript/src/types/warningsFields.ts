import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WarningsFields {
    displayWarninginAcctMgrValue: boolean;
    displayWarninginAcctMgrValueSpecified: boolean;
    displayWarninginAcctMgr: boolean | null;
    displayWarninginTlrTrnValue: boolean;
    displayWarninginTlrTrnValueSpecified: boolean;
    displayWarninginTlrTrn: boolean | null;
    warnDescriptionValue: boolean;
    warnDescriptionValueSpecified: boolean;
    warnDescription: boolean | null;
    warnFmPrivValue: boolean;
    warnFmPrivValueSpecified: boolean;
    warnFmPriv: boolean | null;
    warnIqPrivValue: boolean;
    warnIqPrivValueSpecified: boolean;
    warnIqPriv: boolean | null;
    warnTrPrivValue: boolean;
    warnTrPrivValueSpecified: boolean;
    warnTrPriv: boolean | null;
    warningNumberValue: boolean;
    warningNumberValueSpecified: boolean;
    warningNumber: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}