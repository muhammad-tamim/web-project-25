import toast from "react-hot-toast"
import { getIdFromLocalStorage } from "./getIdFromLocalStorage"

export const deleteIdFromLocalStorage = (id) => {
    let ids = getIdFromLocalStorage()
    const remainingIds = ids.filter((i) => i !== id)
    localStorage.setItem("ids", JSON.stringify(remainingIds))
    toast.error("Your Appointment is removed")
}