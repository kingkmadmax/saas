import { parseAsInteger, parseAsString, createLoader } from "nuqs/server";
import { DEFAULT_PAGE } from "@/constants";
import { create } from "domain";


export const filtersSerchParams={
    
 
    search: parseAsString
      .withDefault("")
      .withOptions({ clearOnDefault: true }),

    page: parseAsInteger
      .withDefault(DEFAULT_PAGE)
      .withOptions({ clearOnDefault: true }),
  
};
export const loadSearchParams=createLoader(filtersSerchParams);
