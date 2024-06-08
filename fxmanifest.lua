fx_version "cerulean"

games { "gta5" }

description "Chozo Fivem React lua Boilerplate"

version "0.1.0"

ui_page "nui/dist/index.html"

files {
    "nui/dist/**/*",
}

server_scripts {
    "server/*.lua",
}

client_scripts {
    "client/*.lua"
}