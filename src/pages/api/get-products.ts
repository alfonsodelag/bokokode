import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { api } from "@/config";
import { bodyItems } from "@/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    let url = `${api}/products`;

    if (req.query.page) {
      url += `?page=${req.query.page}`;
    }

    let categories = req.query.categories;
    if (typeof categories === "string") {
      categories = [categories];
    }

    const sortQuery = req.query.sort as string;
    const [key, type] = sortQuery.split(",").map((pair) => pair.split(":")[1]);
    const validSortKeys = ["price", "name"];
    const validSortTypes = ["ASC", "DESC"];

    let body = {
      categories: categories,
    } as bodyItems;

    // If key and type are valid, add sort to the body
    if (validSortKeys.includes(key) && validSortTypes.includes(type)) {
      body.sort = {
        key,
        type,
      };
    }

    const response = await axios.post(url, body);

    const catalog = response.data;
    const allItems = catalog.data.data;
    const items = allItems.filter((item: any) => !item.featured);
    const featured = allItems.filter((item: any) => item.featured);

    res
      .status(200)
      .json({ items: allItems, catalog: catalog, featured: featured });
  } catch (error) {
    res.status(500).json({ error: error });
  }
}
