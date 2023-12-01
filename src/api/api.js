import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "c0f1dcdd-03cd-4919-8d3b-0a1beeca0fa9"
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    unFollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },
    getProfileStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    putProfileStatus(updateStatus) {
        return instance.put(`profile/status/`, { status: updateStatus })
    }

}

export const authMeAPI = {
    getAuth() {
        return instance.get(`auth/me`)
    },
    LogIn(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe })
    },
    LogOut() {
        return instance.delete(`auth/login`)
    }
}