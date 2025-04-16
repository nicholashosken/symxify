import { BitMap } from "./bitMap";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface InventoryGeneral_2 {
    moInventoryTypes: BitMap;
    msInventoryTypes: BitMap;
    rnInventoryTypes: BitMap;
    sbAcqMoInventoryTypes: BitMap;
    sbAcqMsInventoryTypes: BitMap;
    sbAcqTcInventoryTypes: BitMap;
    tcInventoryTypes: BitMap;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}