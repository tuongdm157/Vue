import http from "@/services/http.js";

class BaseService {
    name = ""

    constructor(name) {
        this.name = name
    }

    search(filter = null) {
        return http.get(`/${this.name}/`, {params: filter})
    }

    create(data) {
        return http.get(`/${this.name}/`, data)
    }

    read(id) {
        return http.get(`/${this.name}/${id}`)
    }

    update(id) {
        return http.patch(`/${this.name}/${id}`)
    }

    delete(id) {
        return http.delete(`/${this.name}/${id}`)
    }
}

export default BaseService