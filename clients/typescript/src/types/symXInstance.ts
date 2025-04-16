import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface SymXInstance {
    crudLoggingThresholdValue: number;
    crudLoggingThresholdValueSpecified: boolean;
    crudLoggingThreshold: number | null;
    description: string;
    instanceIdValue: number;
    instanceIdValueSpecified: boolean;
    instanceId: number | null;
    internalListSizeValue: number;
    internalListSizeValueSpecified: boolean;
    internalListSize: number | null;
    internalProviderKeyStore: string;
    name: string;
    otherLoggingThresholdValue: number;
    otherLoggingThresholdValueSpecified: boolean;
    otherLoggingThreshold: number | null;
    powerOnLoggingThresholdValue: number;
    powerOnLoggingThresholdValueSpecified: boolean;
    powerOnLoggingThreshold: number | null;
    tokenValidityValue: number;
    tokenValidityValueSpecified: boolean;
    tokenValidity: number | null;
    transactionsLoggingThresholdValue: number;
    transactionsLoggingThresholdValueSpecified: boolean;
    transactionsLoggingThreshold: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}