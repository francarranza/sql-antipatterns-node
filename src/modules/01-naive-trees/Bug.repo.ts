import { TableNames } from "../../core/constants";
import { db } from "../../infra/db";
import { Bug, TreesBaseRepo } from "./types";

export class BugRepo {

  private db;

  constructor() {
    this.db = db;
  }

  async insert({ name }: Bug): Promise<Bug> {

    try {
      const rows: Bug[] = await db`
        INSERT INTO bugs (name) VALUES (${name}) RETURNING *;`;

      return rows[0];

    } catch (err) {
      console.error(err);
      throw err;
    }

  }
}
