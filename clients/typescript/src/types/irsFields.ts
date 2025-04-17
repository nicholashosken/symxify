import { VersionType } from "./versionType";

export interface IrsFields {
    actualMaxContribution: boolean | null;
    contrLastYear: number[];
    contrThisYear: number[];
    contributionYear: boolean | null;
    distrLastYear: number[];
    distrThisYear: number[];
    iraRmd: boolean | null;
    irsCode: boolean | null;
    irsHolderBirthDate: boolean | null;
    irsHolderSpouseBirthDate: boolean | null;
    irsPlan: boolean | null;
    lastDistribType: boolean | null;
    locator: boolean | null;
    maxContribution: boolean | null;
    msaHolderCode: boolean | null;
    openDate: boolean | null;
    recordChangeDate: boolean | null;
    rmdTableOption: boolean | null;
    ssn: boolean | null;
    version1: VersionType;
}