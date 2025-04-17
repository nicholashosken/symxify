// src/symxify-client.ts

import type { APIResponseError } from "./types/APIResponseError";
import type { OperationMap } from "./generated/operation-map";
import { OperationServiceMap } from "./generated/operation-map-runtime";

export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: APIResponseError;
}

interface SymxifyClientInitOptions {
  symxifyUrl: string;
  serviceKey?: string;
  serviceId?: string;
  symxifyType: "Self-hosted" | "Cloud-hosted"
}

let clientInstance: SymxifyClient | null = null;

type OperationName = keyof OperationMap;

export class SymxifyClient {
  private symxifyUrl: string;
  private connectionKey: string;
  private connectionId: string;
  private hostingType: "Self-hosted" | "Cloud-hosted"

  constructor({ symxifyUrl: baseUrl, serviceKey: connectionKey = "", serviceId: connectionId = "", symxifyType: hostingType = 'Cloud-hosted' }: SymxifyClientInitOptions) {
    this.symxifyUrl = baseUrl;
    this.connectionKey = connectionKey;
    this.connectionId = connectionId;
    this.hostingType = hostingType
  }

  private async fetch<T>(url: string, options: RequestInit, service: string): Promise<APIResponse<T>> {
    try {
      if (!this.connectionKey && this.hostingType == "Cloud-hosted") {
        throw new Error("Symxify service key was not found. You must create a connection and use its provided service key if you're using Symxify cloud.");
      }

      const response = await fetch(`${this.symxifyUrl}${`${this.connectionId ?? '/' + this.connectionId}`}/${service}/${url}/`, {
        ...options,
        headers: {
          ...options.headers,
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        return {
          success: false,
          error: result.error ?? {
            title: "API Error",
            messages: ["An unexpected error occurred"],
          },
        };
      }

      return {
        success: true,
        data: result.data as T,
      };
    } catch (ex) {
      return {
        success: false,
        error: {
          title: "Fetch Failed",
          messages: [(ex as Error).message],
          hint: "The remote connection to the server has failed. Please check your internet connection and try again.",
        },
      };
    }
  }

  public request(options: RequestInit) {
    const handler: ProxyHandler<any> = {
      get: (_, method: string) => {
        const service = OperationServiceMap[method as keyof typeof OperationServiceMap];
        return async (payload: any): Promise<APIResponse<any>> => {
          return this.fetch(method, {
            method: "POST",
            body: JSON.stringify(payload),
            ...options
          }, service);
        };
      },
    };

    return new Proxy({}, handler) as {
      [K in OperationName]: (
        payload: OperationMap[K]["request"],
      ) => Promise<APIResponse<OperationMap[K]["response"]>>;
    };
  }
}

let config: SymxifyClientInitOptions;

export function createSymxifyClient(initOptions: SymxifyClientInitOptions) {
  config = initOptions;

  return function withContext(): SymxifyClient {
    const client = new SymxifyClient({ ...config });
    initClientInstance(client);
    return client;
  };
}

export function useSymxifyClient(): SymxifyClient {
  if (!clientInstance) {
    throw new Error(
      "Symxify client has not been initialized. Make sure to call createSymxifyClient() in your root module."
    );
  }
  return clientInstance;
}

function initClientInstance(client: SymxifyClient) {
  clientInstance = client;
}
