import Paging from './Paging.model'

export default interface ApiRequest<T> {
  data: T[]
  paging: Paging
}
