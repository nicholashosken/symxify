import { CdmCommonCdmDuressAutoMixDescr } from "./cdmCommonCdmDuressAutoMixDescr";
import { VersionType } from "./versionType";

export interface CdmCommon {
    cashMachineRelease: number | null;
    cdmDuressAutoMixDescr: CdmCommonCdmDuressAutoMixDescr[];
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