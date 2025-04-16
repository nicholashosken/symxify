import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface InventoryGeneralFields {
    moInventoryTypesValue: boolean;
    moInventoryTypesValueSpecified: boolean;
    moInventoryTypes: boolean | null;
    msInventoryTypesValue: boolean;
    msInventoryTypesValueSpecified: boolean;
    msInventoryTypes: boolean | null;
    rnInventoryTypesValue: boolean;
    rnInventoryTypesValueSpecified: boolean;
    rnInventoryTypes: boolean | null;
    sbAcqMoInventoryTypesValue: boolean;
    sbAcqMoInventoryTypesValueSpecified: boolean;
    sbAcqMoInventoryTypes: boolean | null;
    sbAcqMsInventoryTypesValue: boolean;
    sbAcqMsInventoryTypesValueSpecified: boolean;
    sbAcqMsInventoryTypes: boolean | null;
    sbAcqTcInventoryTypesValue: boolean;
    sbAcqTcInventoryTypesValueSpecified: boolean;
    sbAcqTcInventoryTypes: boolean | null;
    tcInventoryTypesValue: boolean;
    tcInventoryTypesValueSpecified: boolean;
    tcInventoryTypes: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}