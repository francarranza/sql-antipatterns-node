import { db } from "../../infra/db";
import { AdjCommentRepo } from "./AdjacentList";
import { BugRepo } from "./BugRepo";

async function main() {

  const bugRepo = new BugRepo();
  const bug = await bugRepo.insert({ name: 'Error Server is crashing'});

  const adjCommentRepo = new AdjCommentRepo();
  adjCommentRepo.insert({ parent_id: null, bug_id: bug.bug_id, author: ''})

  await db.end();
}

main();
