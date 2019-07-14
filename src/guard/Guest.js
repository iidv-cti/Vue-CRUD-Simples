import router from "../router";

const GuestGuard = (to, from, next) => {
    if(localStorage.getItem('user') == 1){
        router.push("/");
    }
}

export default GuestGuard;