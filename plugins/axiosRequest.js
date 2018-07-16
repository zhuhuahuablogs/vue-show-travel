import Vue from 'vue';
import {getRequest,uploadbaseToqiniu,postjosnRequest,putjsonRequest,deleteRequest} from '../utils/api';

Vue.prototype.getRequest = getRequest;
Vue.prototype.postjosnRequest = postjosnRequest;
Vue.prototype.putjsonRequest = putjsonRequest;
Vue.prototype.deleteRequest = deleteRequest;
