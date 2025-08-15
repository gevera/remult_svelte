import { Entity, Fields } from 'remult'

@Entity('countries', {
  allowApiCrud: true,
})
export class Country {
  @Fields.id()
  id!: string

  @Fields.string()
  name: string = ''

  @Fields.string()
  iso: string = ''

  @Fields.string()
  telephone_code: string = ''

  @Fields.string()
  currency: string = ''

  @Fields.string()
  flag: string = ''

  @Fields.createdAt()
  created_at?: Date
}