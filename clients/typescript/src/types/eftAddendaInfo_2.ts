import { EftAddendaInfoInfo_2 } from "./eftAddendaInfoInfo_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface EftAddendaInfo_2 {
    info: EftAddendaInfoInfo_2[];
    infoSpecified: boolean;
    locatorValue: number;
    locatorValueSpecified: boolean;
    locator: number | null;
    recordChangeDateValue: string | null;
    recordChangeDateValueSpecified: boolean;
    recordChangeDate: string | null;
    typeValue: number;
    typeValueSpecified: boolean;
    type: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}