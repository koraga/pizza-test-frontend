import { AxiosPromise } from 'axios'

export interface FunctionRequest<T, R = undefined> {
    (args?: R): AxiosPromise<T>
}
