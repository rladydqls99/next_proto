type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface RequestConfig {
  headers?: Record<string, string>;
  timeout?: number;
  retries?: number;
  retryDelay?: number;
}

interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  statusText: string;
  headers: Headers;
}

class HttpClient {
  private baseUrl: string;
  private defaultConfig: RequestConfig;

  constructor(
    baseUrl: string,
    defaultConfig: RequestConfig = { timeout: 5000, retries: 3, retryDelay: 1000 }
  ) {
    const { headers, ...rest } = defaultConfig;
    this.baseUrl = baseUrl;
    this.defaultConfig = {
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      ...rest,
    };
  }

  private async request<T>(
    method: HttpMethod,
    url: string,
    data?: unknown,
    config?: RequestConfig
  ) {
    const fullUrl = `${this.baseUrl}${url}`;
    const mergedConfig = { ...this.defaultConfig, ...config };

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), mergedConfig.timeout);

    const requestOptions: RequestInit = {
      method,
      headers: mergedConfig.headers,
      signal: controller.signal,
    };

    if (data && ["POST", "PUT", "PATCH"].includes(method)) {
      requestOptions.body = JSON.stringify(data);
    }

    let lastError: Error | null = null;

    for (let attempt = 0; attempt <= (mergedConfig.retries || 0); attempt++) {
      try {
        const response = await fetch(fullUrl, requestOptions);

        if (timeoutId) {
          clearTimeout(timeoutId);
        }

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await this.parseResponse<T>(response);

        return {
          data: responseData,
          status: response.status,
          statusText: response.statusText,
          headers: response.headers,
        };
      } catch (error) {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }

        lastError = error as Error;

        if (attempt < (mergedConfig.retries || 0)) {
          await new Promise(resolve => setTimeout(resolve, mergedConfig.retryDelay));
          continue;
        }
      }
    }

    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    throw lastError!;
  }

  private async parseResponse<T>(response: Response): Promise<T> {
    const contentType = response.headers.get("content-type");

    if (contentType?.includes("application/json")) {
      return await response.json();
    } else if (contentType?.includes("text/")) {
      return (await response.text()) as unknown as T;
    } else {
      return (await response.blob()) as unknown as T;
    }
  }

  async get<T = unknown>(url: string, config?: RequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>("GET", url, undefined, config);
  }

  async post<T = unknown>(
    url: string,
    data?: unknown,
    config?: RequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>("POST", url, data, config);
  }

  async put<T = unknown>(
    url: string,
    data?: unknown,
    config?: RequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>("PUT", url, data, config);
  }

  async patch<T = unknown>(
    url: string,
    data?: unknown,
    config?: RequestConfig
  ): Promise<ApiResponse<T>> {
    return this.request<T>("PATCH", url, data, config);
  }

  async delete<T = unknown>(url: string, config?: RequestConfig): Promise<ApiResponse<T>> {
    return this.request<T>("DELETE", url, undefined, config);
  }
}

export const apiClient = new HttpClient("http://localhost:3000");
