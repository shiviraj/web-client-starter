import {deleteAPI, get, patch, post, put} from './webclient'
import interceptor from './webclient/interceptor'

const WebClient = {get, post, patch, put, deleteAPI, interceptor}

export default WebClient
