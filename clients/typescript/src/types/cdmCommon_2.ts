import { CdmCommonCdmDuressAutoMixDescr_2 } from "./cdmCommonCdmDuressAutoMixDescr_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CdmCommon_2 {
    cashMachineReleaseValue: number;
    cashMachineReleaseValueSpecified: boolean;
    cashMachineRelease: number | null;
    cdmDuressAutoMixDescr: CdmCommonCdmDuressAutoMixDescr_2[];
    cdmDuressAutoMixDescrSpecified: boolean;
    externalHostName: string;
    externalHostNameExt: string;
    externalKeystorePassword: string;
    externalUserName: string;
    externalUserPassword: string;
    lowCassetteAutoDispCashValue: boolean;
    lowCassetteAutoDispCashValueSpecified: boolean;
    lowCassetteAutoDispCash: boolean | null;
    maximumCdmAmountValue: number;
    maximumCdmAmountValueSpecified: boolean;
    maximumCdmAmount: number | null;
    tcrDuressDispAmtValue: number;
    tcrDuressDispAmtValueSpecified: boolean;
    tcrDuressDispAmt: number | null;
    twinSafeGlobalUserId: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}