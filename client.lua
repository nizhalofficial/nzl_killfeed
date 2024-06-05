RegisterNetEvent('nzl_killfeed:displayKill')
AddEventHandler('nzl_killfeed:displayKill', function(killerName, victimName, weapon)
    SendNUIMessage({
        type = 'displayKill',
        killerName = killerName,
        victimName = victimName,
        weapon = weapon
    })
end)
