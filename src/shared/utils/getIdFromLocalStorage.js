export const getIdFromLocalStorage = () => {
    let ids = []
    const storedIds = localStorage.getItem("ids")

    if (storedIds) {
        ids = JSON.parse(storedIds)
    }

    return ids;
}