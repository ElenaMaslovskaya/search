import { useEffect, useState } from "react";

export const useApi = (handler) => {
   const [data, setData] = useState();
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState();

   useEffect(() => {
      setLoading(true);
      handler().then((result) => {
         setData(result);
      })
      .catch(() => {
         setError(true);
      })
      .finally(() => {
         setLoading(false);
      });
   }, [handler]);

   return { data, loading, error };
};