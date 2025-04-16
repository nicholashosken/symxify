import { UserNumberCredentials_2 } from "./userNumberCredentials_2";
import { DeviceInformation } from "./deviceInformation";

export interface BatchJobsBaseRequest {
    credentials: UserNumberCredentials_2;
    deviceInformation: DeviceInformation;
    messageId: string;
}