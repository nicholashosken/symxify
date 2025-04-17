import { IrsDistributionSourceId } from "./irsDistributionSourceId";
import { VersionType } from "./versionType";
export interface IrsDistribution {
    amount: number | null;
    destinationAccount: string;
    destinationId: string;
    distributionCode: number | null;
    distributionDay1: number | null;
    distributionDay2: number | null;
    distributionFreq: number | null;
    distributionMethod: number | null;
    effectiveDate: string | null;
    expirationDate: string | null;
    fedWholdAmount: number | null;
    fedWholdCode: number | null;
    fedWholdPercent: number | null;
    lastDistributnAmt: number | null;
    lastDistributnDate: string | null;
    locator: number | null;
    nextDistributnDate: string | null;
    recordChangeDate: string | null;
    regE: number | null;
    sourceId: IrsDistributionSourceId[];
    stateWholdAmount: number | null;
    stateWholdCode: number | null;
    stateWholdPercent: number | null;
    type: number | null;
    version1: VersionType;
}
