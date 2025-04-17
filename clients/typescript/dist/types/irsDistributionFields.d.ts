import { VersionType } from "./versionType";
export interface IrsDistributionFields {
    amount: boolean | null;
    destinationAccount: boolean | null;
    destinationId: boolean | null;
    distributionCode: boolean | null;
    distributionDay1: boolean | null;
    distributionDay2: boolean | null;
    distributionFreq: boolean | null;
    distributionMethod: boolean | null;
    effectiveDate: boolean | null;
    expirationDate: boolean | null;
    fedWholdAmount: boolean | null;
    fedWholdCode: boolean | null;
    fedWholdPercent: boolean | null;
    lastDistributnAmt: boolean | null;
    lastDistributnDate: boolean | null;
    locator: boolean | null;
    nextDistributnDate: boolean | null;
    recordChangeDate: boolean | null;
    regE: boolean | null;
    sourceId: number[];
    stateWholdAmount: boolean | null;
    stateWholdCode: boolean | null;
    stateWholdPercent: boolean | null;
    type: boolean | null;
    version1: VersionType;
}
