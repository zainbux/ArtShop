import { type SchemaTypeDefinition } from 'sanity'

import product from './schemas/product'
import heroImages from './schemas/heroImages'
import category from './schemas/category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, heroImages, category],
}
