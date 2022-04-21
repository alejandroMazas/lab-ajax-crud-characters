class APIHandler {
  constructor(baseUrl) {
    this.axiosApp = axios.create({
      baseURL: baseUrl
    })
  }

  getFullList() {
    return this.axiosApp.get('/characters')
  }

  getOneRegister(characterId) {
    return this.axiosApp.get(`/characters/${characterId}`)
  }

  createOneRegister() {
    return this.axiosApp.post(`/characters`)
  }

  updateOneRegister() {
    return this.axiosApp.put(`/characters/${characterId}`)
  }

  deleteOneRegister(characterId) {
    return this.axiosApp.delete(`characters/${characterId}`)
  }
}
