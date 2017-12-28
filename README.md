# Eager loading Lucid Model on Apollo Server

example:

```js
const { eagerLoad } = use('apollo-server-adonis-eagerload')

const resolvers = {
  Query: {
    async Event(_, { id }, context, { fieldNodes }) {
      let e = await eagerLoad(Event.query(), fieldNodes)
        .where('id', id)
        .first()
      return e.toJSON()
    }
  }
}
```
