export function findById(entries, id) {
  if (entries[0].id) {
    const object = entries.filter(entry => entry.id === id);
    if (object.length) {
      return object[0];
    }
    return null;
  }
  console.error("Entity don't have 'id' field to do search by entries, please provide properly formatted objects only"); // eslint-disable-line
  return null;
}

export function getById(entries, id, defaultEntity = {}) {
  let entity = defaultEntity;
  if (id && entries.length > 0) {
    entity = findById(entries, id);
  }
  return entity;
}
