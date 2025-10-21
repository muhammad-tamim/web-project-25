import toast from "react-hot-toast"
import { getIdFromLocalStorage } from "./getIdFromLocalStorage"

export const setIdToLocalStorage = (AppointmentId) => {
    const ids = getIdFromLocalStorage()

    const isExist = ids.find((id) => id === AppointmentId)

    if (isExist) {
        return toast.error("Already Exist")
    }
    ids.push(AppointmentId)
    localStorage.setItem("ids", JSON.stringify(ids))
    toast.success("Your Appointment is successfully done")
}