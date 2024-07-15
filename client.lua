Citizen.CreateThread(function()
    while not ESX.IsPlayerLoaded() do
        Wait(500)
    end

    blip = AddBlipForCoord(-543.21, -197.63, 38.23)
	SetBlipSprite(blip, 457)
	SetBlipDisplay(blip, 4)
	SetBlipScale(blip, 0.9)
	SetBlipColour(blip, 47)
	SetBlipAsShortRange(blip, true)
	BeginTextCommandSetBlipName('STRING')
	AddTextComponentString('Urząd pracy')
	EndTextCommandSetBlipName(blip)

    exports.ox_target:addBoxZone({
        coords = vector3(-543.21, -197.63, 38.23),
        size = vector3(1.2, 2.4, 1.35),
        rotation = 345,
        debug = false,
        drawSprite = true,
        options = {
            {
                icon = 'fas fa-briefcase',
                label = 'Zatrudnij się',
                onSelect = OpenJobCenter,
                canInteract = function()
                    return true
                end,
                distance = 2.0
            },
            {
                icon = 'fas fa-file',
                label = 'Zakup umowę sprzedaży pojazdu',
                onSelect = function()
                    Tokenizer.TriggerServerEvent('w_jobcenter:BuyContract')
                end,
                canInteract = function()
                    return true
                end,
                distance = 2.0
            }
        }
    })
end)

exports('GetSalary', function(JobName)
    for _, v in pairs(Config.Jobs) do
        if v.JobId == JobName then
            return v.JobSalary
        end
    end
    return 0
end)

OpenJobCenter = function()
    SetNuiFocus(true, true)
    SendNUIMessage({
        action = 'open',
        jobs = Config.jobs
    })
end

RegisterNUICallback('setJob', function(data)
    Tokenizer.TriggerServerEvent('w_jobcenter:SetPlayerJob', data.job)
    SetNuiFocus(false, false)
end)

RegisterNUICallback('close', function()
    SetNuiFocus(false, false)
end)