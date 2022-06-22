import { TableNames } from "../../../core/constants";
import { db } from "../../../infra/db";
import logger from "../../../infra/logger";
import { Comment, TreesBaseRepo } from "../types";

export class AdjCommentRepo implements TreesBaseRepo {

  private db;

  constructor() {
    this.db = db;
  }

  async insert({ parent_id, bug_id, author, comment }: Comment): Promise<Comment> {
    try {
      const rows: Comment[] = await db`
        INSERT INTO ${db(TableNames.commentsAdj)}
          (parent_id, bug_id, author, comment) VALUES
          (${parent_id}, ${bug_id}, ${author}, ${comment})
          RETURNING *;
        `;
      return rows[0]
    } catch (err) {
      logger.error(err);
      throw err;
    }
  }

  async getParent(comment_id: number) {
    try {

      const [comment,] = await db`
        SELECT *
        FROM ${db(TableNames.commentsAdj)}
        WHERE comment_id = ${comment_id};
      `;

      const rows: Comment[] = await db`
        SELECT * 
        FROM ${db(TableNames.commentsAdj)}
        WHERE comment_id = ${comment.parent_id};
      `;
      return rows[0];

    } catch (err) {
      logger.error(err);
      throw err;
    }
  }

  async getChildren(comment_id: number) {
    try {

      const rows: Comment[] = await db`
        SELECT *
        FROM ${db(TableNames.commentsAdj)}
        WHERE parent_id = ${comment_id};
      `;

      return rows;

    } catch (err) {
      logger.error(err);
      throw err;
    }
  }
}
