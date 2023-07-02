import { PrismaClient } from "@prisma/client";
import safeJsonStringify from "safe-json-stringify";

declare global {
    // allow global `var` declarations
    // eslint-disable-next-line no-var
    var db: PrismaClient | undefined
}

export const db =
    global.db ||
    new PrismaClient({
        log: ['query'],
    })
db.$use(async (params: any, next: (arg0: any) => any) => {
    const result = await next(params)
    const stringifiedData = safeJsonStringify(result);
    const data = JSON.parse(stringifiedData);
    return data
})