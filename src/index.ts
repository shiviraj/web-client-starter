import {deleteAPI, get, patch, post, put} from './webclient'

const WebClient = {get, post, patch, delete: deleteAPI, put}

export default WebClient
