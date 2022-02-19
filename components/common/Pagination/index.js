import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Pagination } from "antd";

const DEFAULT_CURRENT = 1;

export default function MkPagination({ meta }) {
  const router = useRouter();

  const [currentMeta, setCurrentMeta] = useState(meta);

  const { query } = router;

  const handlePageChange = (page) => {
    router.push({
      query: { ...query, page }
    });
  };

  useEffect(() => {
    if (meta) {
      setCurrentMeta(meta);
    }
  }, [meta]);

  return (
    <Pagination
      defaultCurrent={DEFAULT_CURRENT}
      total={currentMeta.total}
      current={currentMeta.current_page}
      pageSize={currentMeta.per_page || 1}
      onChange={handlePageChange}
      hideOnSinglePage
    />
  );
}
