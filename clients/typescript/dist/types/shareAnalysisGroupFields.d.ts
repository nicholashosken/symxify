import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ShareAnalysisGroupFields {
    accountNumberValue: boolean;
    accountNumberValueSpecified: boolean;
    accountNumber: boolean | null;
    comment1Value: boolean;
    comment1ValueSpecified: boolean;
    comment1: boolean | null;
    idValue: boolean;
    idValueSpecified: boolean;
    id: boolean | null;
    locatorValue: boolean;
    locatorValueSpecified: boolean;
    locator: boolean | null;
    recordChangeDateValue: boolean;
    recordChangeDateValueSpecified: boolean;
    recordChangeDate: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
