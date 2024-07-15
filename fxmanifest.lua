shared_script '@waitrp_shield2/ai_module_fg-obfuscated.lua'
fx_version 'adamant'
game 'gta5'
lua54 'yes'

shared_scripts {
	'@es_extended/imports.lua',
	'@c11_tokenizer/import.lua',
}

ui_page 'html/dist/index.html'

server_scripts {
	'config.lua',
	'server.lua'
}

client_scripts {
	'client.lua',
	'config.lua',
}

files {
	'html/dist/index.html',
	'html/dist/js/*.js',
	'html/dist/css/*.css',
	'html/dist/img/*.png',
	'html/dist/img/*.svg',
}