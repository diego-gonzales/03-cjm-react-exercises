import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const TOKEN =
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJkaWVnb2VnajE0QGdtYWlsLmNvbSIsImFwaV90b2tlbiI6ImRmVmZuMGk4NzQyWkFzWmZxdkNEZnFwWHJDUnBIOWFTOHMyRURIN18wN1NkMktLR0pISFZ4SVZ2aWFrNHNpTU1YeUEifSwiZXhwIjoxNjU4NTI1MzI1fQ.Bq9kLNl3RpZlwcYQwi43iUiCiDUXE9ohlfO2infuCpE";
        const headers = new Headers({
          Authorization: `Bearer ${TOKEN}`
        });

        const resp = await fetch(url, { headers });

        if (!resp.ok) {
          let err = new Error("Occurs an error in the fetch request!");
          err.status = resp.status || "00";
          err.statusText = resp.statusText || "Occurs an error";

          throw err;
        }

        const json = await resp.json();

        if (!signal.aborted) {
          setData(json);
          setError(null);
        }
      } catch (error) {
        if (!signal.aborted) {
          setData(null);
          setError(error);
        }
      } finally {
        if (!signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => abortController.abort();
  }, [url]);

  return { data, error, isLoading };
};
