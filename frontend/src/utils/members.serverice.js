export class MemberService {
    url = 'http://localhost:5000/members'

    getMembers() {
        return fetch(this.url)
            .then((res) => res.json())
            .then((result) => result.data.members)
    }

    getMember(id) {
        return fetch(this.url + `/${id}`)
            .then((res) => res.json())
            .then((result) => result.data.member)
    }

    updateMember(id, memberUpdates) {
        const body = JSON.stringify(memberUpdates)
        const headers = { 'content-type': 'application/json' }

        return fetch(this.url + `/${id}`, {
            method: 'PUT',
            body,
            headers,
        })
            .then((res) => res.json())
            .then((result) => result.data.member)
    }

    deleteMember(id) {
        return fetch(this.url + `/${id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((result) => result.data.member)
    }

    createMember(data) {
        const body = JSON.stringify(data)
        const headers = { 'content-type': 'application/json' }
        return fetch(this.url, {
            method: 'POST',
            body,
            headers,
        })
            .then((res) => res.json())
            .then((result) => result.data.member)
    }
}
