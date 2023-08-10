import { useEffect, useState } from "react";
import apiClint from "../services/api-clint";
import { CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
}

interface FetchgenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClint
      .get<FetchgenresResponse>("/genres", { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return {
    genres,
    error,
    loading,
  };
};

export default useGenres;
