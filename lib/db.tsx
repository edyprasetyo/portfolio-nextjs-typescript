import { PrismaClient } from "@prisma/client";
import safeJsonStringify from "safe-json-stringify";

export var db = new PrismaClient();
db.$use(async (params: any, next: (arg0: any) => any) => {
    const result = await next(params)
    const stringifiedData = safeJsonStringify(result);
    const data = JSON.parse(stringifiedData);
    return data
})