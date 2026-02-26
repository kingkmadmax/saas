import { DEFAULT_PAGE } from "@/constants";
import { parseAsInteger,parseAsArrayOf, parseAsString, useQueryStates, parseAsStringEnum } from "nuqs";
import { MeetingStatus } from "../types";

export const useMeetingFilters = () => {
  return useQueryStates({
    search: parseAsString
      .withDefault("")
      .withOptions({ clearOnDefault: true }),

    page: parseAsInteger
      .withDefault(DEFAULT_PAGE)
      .withOptions({ clearOnDefault: true }),
    status: parseAsStringEnum(Object.values(MeetingStatus)),
    agentId: parseAsString
      .withOptions({ clearOnDefault: true }),
  });
};