import type { Product } from "../../commerce/types.ts";
import { STALE } from "../../utils/fetch.ts";
import type { AppContext } from "../mod.ts";
import { toProduct } from "../utils/transform.ts";

export interface Props {
  /** @description total number of items to display */
  count: number;

  /** @description query to use on search */
  term?: string;

  /** @description search for term anywhere */
  wildcard?: boolean;

  /** @description search sort parameter */
  sort?: "newest" | "oldest" | "lowest_price" | "highest_price";

  /** @description search for products that have certain tag */
  tags?: string[];
}

/**
 * @title VNDA Integration
 * @description Product List loader
 */
const productListLoader = async (
  props: Props,
  req: Request,
  ctx: AppContext,
): Promise<Product[] | null> => {
  const url = new URL(req.url);
  const { api } = ctx;

  const search = await api["GET /api/v2/products/search"]({
    term: props?.term,
    wildcard: props?.wildcard,
    sort: props?.sort,
    per_page: props?.count,
    "tags[]": props?.tags,
  }, STALE).then((res) => res.json());

  return search.results?.map((product) =>
    toProduct(product, null, {
      url,
      priceCurrency: "BRL",
    })
  ) ?? null;
};

export default productListLoader;
