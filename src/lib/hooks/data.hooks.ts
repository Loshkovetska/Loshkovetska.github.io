import { useMemo } from "react";

import { useAppSelector } from "@/lib/hooks/store.hooks";

type UseDataParamsType = {
  queryKey: string;
  apiName: any;
};

export const useData = ({ queryKey, apiName }: UseDataParamsType) => {
  const state = useAppSelector((state: any) => state[apiName].queries);

  const data = useMemo(
    () =>
      (
        Object.values(state).find(
          (s: any) => s?.endpointName === queryKey
        ) as any
      )?.data,
    [state, queryKey]
  );

  return {
    data,
  };
};
