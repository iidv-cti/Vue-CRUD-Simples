import router from "../router";

const AuthGuard = function(to, from, next){
    if(localStorage.getItem('user') == 0){
        router.push("/");
    }
}

export default AuthGuard;