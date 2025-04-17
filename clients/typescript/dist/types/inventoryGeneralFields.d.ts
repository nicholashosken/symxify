import { VersionType } from "./versionType";
export interface InventoryGeneralFields {
    moInventoryTypes: boolean | null;
    msInventoryTypes: boolean | null;
    rnInventoryTypes: boolean | null;
    sbAcqMoInventoryTypes: boolean | null;
    sbAcqMsInventoryTypes: boolean | null;
    sbAcqTcInventoryTypes: boolean | null;
    tcInventoryTypes: boolean | null;
    version1: VersionType;
}
