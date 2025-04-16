import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ActivityFm {
    branchValue: number;
    branchValueSpecified: boolean;
    branch: number | null;
    consoleValue: number;
    consoleValueSpecified: boolean;
    console: number | null;
    dateValue: string;
    dateValueSpecified: boolean;
    date: string | null;
    helpCodeValue: number;
    helpCodeValueSpecified: boolean;
    helpCode: number | null;
    sessionValue: number;
    sessionValueSpecified: boolean;
    session: number | null;
    timeValue: number;
    timeValueSpecified: boolean;
    time: number | null;
    userInput: string;
    userNumberValue: number;
    userNumberValueSpecified: boolean;
    userNumber: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
