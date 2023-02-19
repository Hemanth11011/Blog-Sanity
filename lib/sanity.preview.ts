"use client";

export {definePreview} from "next-sanity/preview";
import { definePreview } from "next-sanity/preview";
import {projectId,dataset} from "./sanity.client";

function onPublicAccessOnly(){
    throw new Error(`Unable to load preview as you are not logged in to Sanity.`)
}

if(!projectId || !dataset){
    throw new Error(`Missing projectId or dataset. Check your sanity.json file or .env file.`)
}

export const usePreview = definePreview({
    projectId,
    dataset,
    onPublicAccessOnly,
})