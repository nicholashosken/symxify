import { IrsContrLastYear_2 } from "./irsContrLastYear_2";
import { IrsContrThisYear_2 } from "./irsContrThisYear_2";
import { IrsDistrLastYear_2 } from "./irsDistrLastYear_2";
import { IrsDistrThisYear_2 } from "./irsDistrThisYear_2";
import { VersionType } from "./versionType";

export interface Irs_2 {
    actualMaxContribution: number | null;
    contrLastYear: IrsContrLastYear_2[];
    contrThisYear: IrsContrThisYear_2[];
    contributionYear: number | null;
    distrLastYear: IrsDistrLastYear_2[];
    distrThisYear: IrsDistrThisYear_2[];
    iraRmd: number | null;
    irsCode: number | null;
    irsHolderBirthDate: string | null;
    irsHolderSpouseBirthDate: string | null;
    irsPlan: number | null;
    lastDistribType: number | null;
    locator: number | null;
    maxContribution: number | null;
    msaHolderCode: number | null;
    openDate: string | null;
    recordChangeDate: string | null;
    rmdTableOption: number | null;
    ssn: string;
    version1: VersionType;
}