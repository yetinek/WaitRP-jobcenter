ESX = exports["es_extended"]:getSharedObject()

-- Eventy serwerowe
RegisterServerEvent('w_jobcenter:SetPlayerJob')
AddEventHandler('w_jobcenter:SetPlayerJob', function(job)
    local xPlayer = ESX.GetPlayerFromId(source)
    if xPlayer then
        xPlayer.setJob(job, 0)
        TriggerClientEvent('esx:showNotification', source, 'Zostałeś zatrudniony jako ' .. job)
    end
end)
