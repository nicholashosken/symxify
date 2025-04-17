import { VersionType } from "./versionType";
export interface AcsServiceFields {
    acquireItems: boolean | null;
    acquireOption: boolean | null;
    acsServiceType: boolean | null;
    action: number[];
    actionCreateRecord: number[];
    actionCreateText: number[];
    actionCreateType: number[];
    compDataType: number[];
    compareNum: number[];
    comparisonMethod: number[];
    consolidateMax: boolean | null;
    criteria12: number[];
    criteriaOperator: number[];
    description: boolean | null;
    excludeMatch: boolean | null;
    factsLetterfile: boolean | null;
    menuOption: number[];
    newLoanType: boolean | null;
    points: boolean | null;
    script: number[];
    version1: VersionType;
}
