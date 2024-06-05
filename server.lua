RegisterServerEvent('nzl_killfeed:playerKilled')
AddEventHandler('nzl_killfeed:playerKilled', function(killerName, victimName, weapon)
    TriggerClientEvent('nzl_killfeed:displayKill', -1, killerName, victimName, weapon)
end)
