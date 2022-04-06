/* eslint-disable */
import qs from "qs"

const api = async <T>(
  url: string,
  query?: { [key: string]: any } | undefined | null,
  method: "GET" | "PATCH" | "POST" | "PUT" | "DELETE" = "GET",
  data: Record<string, unknown> = {},
  headers: { [key: string]: string } | undefined | null = {}
): Promise<T> => {
  let resp = null
  url += query ? `?${qs.stringify(query)}` : ""
  try {
    resp = await fetch(url, {
      headers: {
        ...headers,
      },
      method: method,
      body:
        method === "POST" || method === "PUT" || method === "PATCH" || method === "DELETE"
          ? JSON.stringify(data)
          : null,
    })
    if (resp.status === 200) {
      return await resp.json()
    } else if (resp.status > 200 && resp.status < 300) {
      // eslint-disable-next-line no-undef
      return Promise.resolve("success" as any)
    } else if (resp.status === 401) {
      return {} as T
    } else {
      throw "Error"
    }
  } catch (err) {
    console.error(err)
    return Promise.reject(err)
  }
}

export default api