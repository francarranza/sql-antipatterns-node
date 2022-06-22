export interface TreesBaseRepo {
  insert(comment: Comment): Promise<any>;
  // getParents(): Promise<Comment[]>;
  // getChildren(): Promise<Comment[]>;
  // getAncestors(): Promise<Comment[]>;
  // getDescendants(): Promise<Comment[]>;
  // update(): Promise<Comment>;
  // delete(): void;
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
