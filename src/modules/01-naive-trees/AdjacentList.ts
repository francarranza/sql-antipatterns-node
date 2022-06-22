import { TableNames } from "../../core/constants";
import { db } from "../../infra/db";
import { Comment, TreesBaseRepo } from "./types";

export class AdjCommentRepo implements TreesBaseRepo {

  private db;

  constructor() {
    this.db = db;
  }

  async insert({ parent_id, bug_id, author, comment }: Comment): Promise<any> {

    try {
      const inserted = await db`
        INSERT INTO ${TableNames.commentsAdj}
          (parent_id, bug_id, author, comment) VALUES
          (${parent_id}, ${bug_id}, ${author}, ${comment});
        `;
      console.log(inserted);
    } catch (err) {
      console.error(err);
      throw err;
    }

  }
}
