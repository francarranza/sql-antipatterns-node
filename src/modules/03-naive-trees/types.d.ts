export interface TreesBaseRepo {
  insert(comment: Comment): Promise<any>;
  getParent(comment_id: number): Promise<Comment>;
  getChildren(comment_id: number): Promise<Comment[]>;
  // getAncestors(comment_id: number, depth: number): Promise<Comment[]>;
  // getDescendants(): Promise<Comment[]>;
  // update(): Promise<Comment>;
  // delete(comment_id: number): void;
}

export type Comment = {
  comment_id?: number | null;
  parent_id: number | null;
  bug_id: number;
  author: string;
  comment: string;
}

export type Bug = {
  bug_id?: number | null;
  name: string;
}
