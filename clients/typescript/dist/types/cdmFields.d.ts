import { VersionType } from "./versionType";
export interface CdmFields {
    cassDenom6DuressAuto1Notes: number[];
    cassDenom6DuressAuto2Notes: number[];
    cassDenom6DuressAuto3Notes: number[];
    cassetteDenomAutomixNotes: number[];
    cassetteDenomination: number[];
    cdm: boolean | null;
    cdmDuressDispAmt: boolean | null;
    cdmDuressSilentAlarm: boolean | null;
    consoleFileName: boolean | null;
    consoleFileNameExt: boolean | null;
    leftCoinDispenser: boolean | null;
    machineType: boolean | null;
    recycler: boolean | null;
    remoteDevice: boolean | null;
    rightCoinDispenser: boolean | null;
    userIds: boolean | null;
    version1: VersionType;
}
