module.exports.eagerLoad = function(query, fieldNodes) {
  function __eagerLoad(query, selectionSet, name) {
    for (const selection of selectionSet.selections) {
      if (selection.selectionSet != null) {
        query = query.with(name + selection.name.value)
        query = __eagerLoad(
          query,
          selection.selectionSet,
          name + selection.name.value + '.'
        )
      }
    }
    return query
  }

  return __eagerLoad(query, fieldNodes[0].selectionSet, '')
}
