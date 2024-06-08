import { useEffect, useRef } from "react"
import { noop } from "../utils/misc"

export const useNuiEvent = (actionName, handler) => {
    const saveHandler = useRef(noop)

    useEffect(() => {
        saveHandler.current = handler
    },[handler])

    useEffect(() => {
        const eventListener = (event) => {
            const {action, data} = event.data

            if (saveHandler.current) {
                if (action == actionName) {
                    saveHandler.current(data)
                }
            }
        }

        window.addEventListener("message", eventListener)

        return () => window.removeEventListener("message", eventListener)
    },[actionName])
}