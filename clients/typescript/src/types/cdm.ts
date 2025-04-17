import { CdmCassDenom6DuressAuto1Notes } from "./cdmCassDenom6DuressAuto1Notes";
import { CdmCassDenom6DuressAuto2Notes } from "./cdmCassDenom6DuressAuto2Notes";
import { CdmCassDenom6DuressAuto3Notes } from "./cdmCassDenom6DuressAuto3Notes";
import { CdmCassetteDenomAutomixNotes } from "./cdmCassetteDenomAutomixNotes";
import { CdmCassetteDenomination } from "./cdmCassetteDenomination";
import { BitMap } from "./bitMap";
import { VersionType } from "./versionType";

export interface Cdm {
    cassDenom6DuressAuto1Notes: CdmCassDenom6DuressAuto1Notes[];
    cassDenom6DuressAuto2Notes: CdmCassDenom6DuressAuto2Notes[];
    cassDenom6DuressAuto3Notes: CdmCassDenom6DuressAuto3Notes[];
    cassetteDenomAutomixNotes: CdmCassetteDenomAutomixNotes[];
    cassetteDenomination: CdmCassetteDenomination[];
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