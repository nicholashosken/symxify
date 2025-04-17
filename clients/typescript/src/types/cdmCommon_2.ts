import { CdmCommonCdmDuressAutoMixDescr_2 } from "./cdmCommonCdmDuressAutoMixDescr_2";
import { VersionType } from "./versionType";

export interface CdmCommon_2 {
    cashMachineRelease: number | null;
    cdmDuressAutoMixDescr: CdmCommonCdmDuressAutoMixDescr_2[];
    externalHostName: string;
    externalHostNameExt: string;
    externalKeystorePassword: string;
    externalUserName: string;
    externalUserPassword: string;
    lowCassetteAutoDispCash: boolean | null;
    maximumCdmAmount: number | null;
    tcrDuressDispAmt: number | null;
    twinSafeGlobalUserId: string;
    version1: VersionType;
}