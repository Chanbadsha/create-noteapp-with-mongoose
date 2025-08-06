import { Types } from "mongoose";

export interface INotes {
    title: string,
    content: string,
    category: string,
    isPinned?: boolean,
    user: Types.ObjectId
}