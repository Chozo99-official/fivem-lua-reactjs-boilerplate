RegisterCommand("testnui", function ()
    SetNuiFocus(true, true)
    SendNUIMessage({
        action = "test",
        data = {
            message = " Hanya Saja"
        }
    })
end, false)

RegisterCommand("closenui", function()
    SetNuiFocus(false,false)
end, false)

RegisterNUICallback("testnuicallback", function (data, cb)
    print("Nui Data", data.message)
    cb({
        message = "Callback From Client Side Script"
    })
end)