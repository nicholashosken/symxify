import { CdmCassDenom6DuressAuto1Notes_2 } from "./cdmCassDenom6DuressAuto1Notes_2";
import { CdmCassDenom6DuressAuto2Notes_2 } from "./cdmCassDenom6DuressAuto2Notes_2";
import { CdmCassDenom6DuressAuto3Notes_2 } from "./cdmCassDenom6DuressAuto3Notes_2";
import { CdmCassetteDenomAutomixNotes_2 } from "./cdmCassetteDenomAutomixNotes_2";
import { CdmCassetteDenomination_2 } from "./cdmCassetteDenomination_2";
import { BitMap } from "./bitMap";
import { VersionType } from "./versionType";
export interface Cdm_2 {
    cassDenom6DuressAuto1Notes: CdmCassDenom6DuressAuto1Notes_2[];
    cassDenom6DuressAuto2Notes: CdmCassDenom6DuressAuto2Notes_2[];
    cassDenom6DuressAuto3Notes: CdmCassDenom6DuressAuto3Notes_2[];
    cassetteDenomAutomixNotes: CdmCassetteDenomAutomixNotes_2[];
    cassetteDenomination: CdmCassetteDenomination_2[];
    cdmProperty: number | null;
    cdmDuressDispAmt: number | null;
    cdmDuressSilentAlarm: boolean | null;
    consoleFileName: string;
    consoleFileNameExt: string;
    leftCoinDispenser: boolean | null;
    machineType: number | null;
    recycler: boolean | null;
    remoteDevice: boolean | null;
    rightCoinDispenser: boolean | null;
    userIds: BitMap;
    version1: VersionType;
}
