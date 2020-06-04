
import {REQUESTING,REQUEST_SUCCESS,REQUEST_ERROR} from './mutations-types'

export default {
  [REQUESTING](state){
    state.firstView=false
    state.loading=true
    state.users=[]
    state.errorMsg=''
  },
  [REQUEST_SUCCESS](state,{users}){
      state.loading=false
      state.users=users
  },
  [REQUEST_ERROR](state,{meg}){
    state.loading=false
    state.errorMsg=meg
  }
}
