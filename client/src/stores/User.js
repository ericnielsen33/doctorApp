import { observable, action } from "mobx";
import { login, registerNewUser } from "../api/Auth";

class UserStore {

    @observable user = null;
    @observable token = null;

    @action registerUser(email, firstName, lastName, password){
        registerNewUser(email, firstName, lastName, password)
            .then(data => {
                this.user = data.user;
                this.token = data.token;
            })
    }

    @action loginUser(email, password){
        login(email, password)
            .then(data => {
                console.log(data);
                this.user = data.user;
                this.token = data.token;
            });
    }

    @action logoutUser = () => {
        this.user = null;
        this.token = null;
    }
}

export default new UserStore();