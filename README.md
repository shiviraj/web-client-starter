# Web-client-starter

A library to fetch api in typescript with richer types


### How to use

- If you want to enable the log encryption, you have to set two env variable as `LOGGING_ENCRYPTION_KEY="your log encryption key"` and `LOGGING_ENCRYPTION_ENABLED="true"` .
- By default log encryption is disabled. 

## Example

```typescript
import WebClient from "web-client-starter"

WebClient.get<Record<string, any>>({baseUrl: "baseUrl", path: "/path"})

```
