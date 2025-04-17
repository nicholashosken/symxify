import { VersionType } from "./versionType";

export interface CdmCommonFields {
    cashMachineRelease: boolean | null;
    cdmDuressAutoMixDescr: number[];
    externalHostName: boolean | null;
    externalHostNameExt: boolean | null;
    externalKeystorePassword: boolean | null;
    externalUserName: boolean | null;
    externalUserPassword: boolean | null;
    lowCassetteAutoDispCash: boolean | null;
    maximumCdmAmount: boolean | null;
    tcrDuressDispAmt: boolean | null;
    twinSafeGlobalUserId: boolean | null;
    version1: VersionType;
}