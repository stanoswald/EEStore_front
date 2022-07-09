import {router} from './router/index'
import {getToken} from "@/utils/auth";

router.beforeEach((to, from, next) => {
    // 守卫
    if(to.path.indexOf('/user/')!==-1){
        if (getToken('user_token')){
            next(true);
        }else{
            next({path:'login'})
        }
    }else{
        next(true)
    }
})
