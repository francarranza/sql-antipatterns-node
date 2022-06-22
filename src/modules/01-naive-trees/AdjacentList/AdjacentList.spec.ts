import { faker } from "@faker-js/faker";
import { db } from "../../../infra/db";
import nuke from "../../../infra/db/scripts/nuke";
import { AdjCommentRepo } from "./AdjacentList.repo";
import { BugRepo } from "../Bug.repo";
import { Comment } from "../types";
import { TableNames } from "../../../core/constants";

async function main() {

  await nuke('truncate');

  const bugRepo = new BugRepo();
  const adjCommentRepo = new AdjCommentRepo();

  const bug = await bugRepo.insert({ name: 'Error Server is crashing'});

  let comment: Comment;
  let fran = await adjCommentRepo.insert({ 
    parent_id: null, 
    bug_id: bug.bug_id, 
    author: 'Fran',
    comment: faker.random.words(),
  });

  let ollie = await adjCommentRepo.insert({ 
    parent_id: fran.comment_id, 
    bug_id: bug.bug_id, 
    author: 'Ollie',
    comment: faker.random.words(),
  });

  let fran2 = await adjCommentRepo.insert({ 
    parent_id: ollie.comment_id, 
    bug_id: bug.bug_id, 
    author: 'Fran',
    comment: faker.random.words(),
  });

  let kukla = await adjCommentRepo.insert({ 
    parent_id: fran.comment_id, 
    bug_id: bug.bug_id, 
    author: 'Kukla',
    comment: faker.random.words(),
  });

  let ollie2 = await adjCommentRepo.insert({ 
    parent_id: kukla.comment_id, 
    bug_id: bug.bug_id, 
    author: 'Ollie',
    comment: faker.random.words(),
  });

  let fran3 = await adjCommentRepo.insert({ 
    parent_id: kukla.comment_id, 
    bug_id: bug.bug_id, 
    author: 'Fran',
    comment: faker.random.words(),
  });

  let kukla2 = await adjCommentRepo.insert({ 
    parent_id: fran3.comment_id, 
    bug_id: bug.bug_id, 
    author: 'Kukla',
    comment: faker.random.words(),
  });


  const parent = await adjCommentRepo.getParent(kukla2.comment_id);
  const children = await adjCommentRepo.getChildren(fran.comment_id);

  console.log('parent')
  console.log(parent)

  console.log('children')
  console.log(children)

  await db.end();
}

main();
