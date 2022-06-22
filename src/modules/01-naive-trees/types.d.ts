export interface TreesBaseRepo {
  insert();
  getParents();
  getChildren();
  getAncestors();
  getDescendants();
  update();
  delete();
}
