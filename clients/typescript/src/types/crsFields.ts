import { VersionType } from "./versionType";

export interface CrsFields {
    bureauInfo: number[];
    chexSystemsVersion: number[];
    defaultBureau: boolean | null;
    dpBureauInfo: number[];
    dpPassword: number[];
    dpPasswordExpiration: number[];
    dpSubscriberCode: number[];
    hawkIndicator: boolean | null;
    includeIdvReport: boolean | null;
    includeNewAccountChexReport: boolean | null;
    includeOfacReport: boolean | null;
    includeQualiFileReport: boolean | null;
    internetPassword: boolean | null;
    internetPasswordExpiration: boolean | null;
    internetUserId: boolean | null;
    ipAddress: boolean | null;
    lookType: boolean | null;
    operatorCode: boolean | null;
    optionalFeatureCode: number[];
    password: number[];
    passwordExpiration: number[];
    responseFormat: number[];
    riskModel: number[];
    scoreModel: number[];
    serviceBureauIndicator: boolean | null;
    strategyType: boolean | null;
    subscriberCode: number[];
    testEnvironment: number[];
    useCrsParameters: boolean | null;
    useType: boolean | null;
    userId: boolean | null;
    xpnSelectCheckCode: boolean | null;
    version1: VersionType;
}