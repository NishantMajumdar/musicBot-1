const _0x288ca6=_0x48bd;function _0x48bd(_0x3f3725,_0x3bca80){const _0xe288f3=_0xe288();return _0x48bd=function(_0x48bdf6,_0x39068a){_0x48bdf6=_0x48bdf6-0x12d;let _0x3032b9=_0xe288f3[_0x48bdf6];return _0x3032b9;},_0x48bd(_0x3f3725,_0x3bca80);}(function(_0x33e3c1,_0x12d924){const _0x5e4d35=_0x48bd,_0x57871c=_0x33e3c1();while(!![]){try{const _0x3c1a7b=parseInt(_0x5e4d35(0x1b9))/0x1+-parseInt(_0x5e4d35(0x150))/0x2+parseInt(_0x5e4d35(0x169))/0x3+-parseInt(_0x5e4d35(0x136))/0x4+parseInt(_0x5e4d35(0x160))/0x5*(-parseInt(_0x5e4d35(0x1e6))/0x6)+-parseInt(_0x5e4d35(0x199))/0x7+-parseInt(_0x5e4d35(0x156))/0x8*(-parseInt(_0x5e4d35(0x185))/0x9);if(_0x3c1a7b===_0x12d924)break;else _0x57871c['push'](_0x57871c['shift']());}catch(_0x4a4ce4){_0x57871c['push'](_0x57871c['shift']());}}}(_0xe288,0x3b7f6));const Discord=require('discord.js'),Client=new Discord[(_0x288ca6(0x1cc))]({'intents':0x7fff,'partials':[_0x288ca6(0x1a0),_0x288ca6(0x1f9),_0x288ca6(0x1c2),'REACTION'],'allowedMentions':['']}),config=require(_0x288ca6(0x173)),Axios=require('axios'),Paginator=require(_0x288ca6(0x1b3)),DisTube=require(_0x288ca6(0x191)),Voice=require(_0x288ca6(0x17d)),Errorhandler=require(_0x288ca6(0x1fd));process['on'](_0x288ca6(0x171),_0x5af349=>{const _0x4584c4=_0x288ca6;console[_0x4584c4(0x1ff)](_0x5af349);});const Lyrics=require('lyrics-finder'),Music=new DisTube['default'](Client,{'leaveOnEmpty':![],'emptyCooldown':0x0,'leaveOnFinish':![],'leaveOnStop':!![]}),errorbed=new Discord['MessageEmbed']()['setColor']('RANDOM')[_0x288ca6(0x141)](_0x288ca6(0x133)),help$={'name':_0x288ca6(0x1bf),'description':'Need\x20Some\x20Help?'},play$={'name':'play','description':_0x288ca6(0x1e4)},pause$={'name':_0x288ca6(0x174),'description':_0x288ca6(0x1f1)},resume$={'name':_0x288ca6(0x1aa),'description':_0x288ca6(0x149)},volume$={'name':_0x288ca6(0x195),'description':_0x288ca6(0x161)},skip$={'name':_0x288ca6(0x14f),'description':'Skip\x20Song'},filter$={'name':'filter','description':_0x288ca6(0x193),'options':[{'name':_0x288ca6(0x197),'description':_0x288ca6(0x18c),'required':!![],'type':_0x288ca6(0x1cd),'choices':[{'name':'3d','value':'3d'},{'name':_0x288ca6(0x1df),'value':_0x288ca6(0x1df)},{'name':_0x288ca6(0x1c9),'value':_0x288ca6(0x1c9)},{'name':_0x288ca6(0x1a3),'value':_0x288ca6(0x1a3)},{'name':_0x288ca6(0x1a5),'value':_0x288ca6(0x1a5)},{'name':_0x288ca6(0x1c7),'value':_0x288ca6(0x1c7)},{'name':_0x288ca6(0x16d),'value':_0x288ca6(0x16d)},{'name':'reverse','value':_0x288ca6(0x162)},{'name':'phaser','value':'phaser'},{'name':_0x288ca6(0x1c4),'value':_0x288ca6(0x1c4)}]}]},queue$={'name':_0x288ca6(0x1a8),'description':_0x288ca6(0x196)},stop$={'name':_0x288ca6(0x132),'description':_0x288ca6(0x1be)},shuffle$={'name':_0x288ca6(0x17c),'description':_0x288ca6(0x186)},panel$={'name':_0x288ca6(0x198),'description':_0x288ca6(0x1f4)},lyrics$={'name':_0x288ca6(0x1ef),'description':_0x288ca6(0x18b),'options':[{'name':_0x288ca6(0x1a6),'description':_0x288ca6(0x189),'required':!![],'type':_0x288ca6(0x1cd)},{'name':_0x288ca6(0x1cb),'description':_0x288ca6(0x1a4),'required':!![],'type':_0x288ca6(0x1cd)}]},grab$={'name':_0x288ca6(0x1b4),'description':'Save\x20this\x20song\x20to\x20your\x20DMs'};function _0xe288(){const _0x7d1d89=['voice','Music\x20Control\x20Panel','error','users','vol_up','RED','USER','displayAvatarURL','getString','content','discord-error-handler','SECONDARY','log','n90','Requestor','Music\x20Commands','channels','Thanks','[Click\x20Here](','`↪\x20Stop\x20Music`','MessageActionRow','\x0aBot\x20Code\x20Creator\x20:\x20Nishant#8044\x0aBot\x20Code\x20:\x20GITHUB\x20REPO\x20URL','**Skipped\x20current\x20Song**','member','customId','user','replace','update','Music\x20Stopped','refresh','Likes\x20:\x20','bot','stop','**An\x20Error\x20Occured!\x20Please\x20try\x20again**','includes','Duration','424224WYefNX','min','setThumbnail','**Shuffled\x20Songs\x20Queue**','Added\x20To\x20Queue','collect','guilds','PRIMARY','**Music\x20Control\x20Panel**\x20\x0a\x20Volume\x20:\x20','Using','`↪\x20Get\x20Song\x20lyrics`','setDescription','addComponents','commandName','`↪\x20See\x20Songs\x20Queue`','%**','About\x20Me','play','options','Resume\x20Song','`↪\x20Save\x20song\x20to\x20DM`','commands','guild','n2234','startsWith','skip','190784XCtpIj','**Volume:\x20','tag','`↪\x20Song\x20Control\x20Panel`','getQueue','Now\x20Playing\x20-\x20','1648832lKXmYn','setStatus','`↪\x20Add\x20Song\x20Filter`','setAuthor','createInvite','status6','MessageButton','GUILD_TEXT','guildjoinlog','Page\x202/2','740GGfkwN','Set\x20Song\x20Volume','reverse','LISTENING','song','messageCreate','username','send','SUCCESS','201267rDMlsX','setURL','length','url','flanger','Thanks\x20for\x20using\x20','**Music\x20Stopped**','setFooter','TypeError','ready','./config.json','pause','Page:\x20','get','paused','Log:\x20Queue\x20Shuffled','mentions','Previous','status11','shuffle','@discordjs/voice','status12','setTitle','Stop','push','`↪\x20Plays\x20A\x20Song`','emoji','channel','9bbSPxI','Shuffle\x20Queue\x20Songs','RANDOM','lodash','What\x20is\x20the\x20name\x20of\x20the\x20song','`↪\x20Pauses\x20A\x20Song`','See\x20song\x20lyrics','The\x20Filter\x20To\x20Set','`↪\x20Resumes\x20A\x20Song`','`↪\x20Skip\x20A\x20Song`','LYRICS\x20PANEL\x20OPENED','guildCreate','distube','TOKEN','Add\x20Song\x20Filter','thumbnail','volume','See\x20Songs\x20Queue','filter','panel','14399cFnvQX','substring','🚀\x20','https://cdn.discordapp.com/attachments/873161348694048780/892310990056747028/855561346087387136.gif','reply','setDisabled','Next','CHANNEL','interactionCreate','`↪\x20Sets\x20Song\x20Volume`','echo','What\x20is\x20the\x20name\x20of\x20the\x20song\x20author','bassboost','name','setColor','queue','followUp','resume','Queue\x20is\x20now\x20shuffled!','Views','\x20Is\x20Online\x20🚀','idle','react','setEmoji','songs','set','@koenie06/discord.js-pagination','grab','**Music\x20playing\x20right\x20now\x20is\x20paused**','toString','status3','views','448406AxmbGL','setStyle','\x0a\x20The\x20music\x20was\x20stopped\x20by\x20','cache','setVolume','Stop\x20Music','help','&permissions=8&scope=bot%20applications.commands','n24442','GUILD_MEMBER','\x20is\x20a\x20high\x20quality\x20Music\x20bot.\x0aUse\x20**/help**\x20to\x20get\x20started\x0a\x0aThis\x20bot\x27s\x20owner\x20is\x20','tremolo','871002699221581874','setCustomId','vaporwave','dislikes','karaoke','\x0a```','author','Client','STRING','status4','formattedDuration','For','Guild\x20Name','\x20\x20\x20\x20\x20|\x20\x20\x20\x20Dislikes\x20:\x20','vol_down','Please\x20play\x20music\x20before\x20running\x20this\x20command','```js\x0a','status8','addField','first','status9','createMessageComponentCollector','remove','textChannel','likes','Guild\x20Owner','nightcore','Log:\x20Refreshed,\x20by\x20','playing','\x0a\x20Paused?\x20:\x20','edit','Play\x20A\x20Song','**Music\x20playing\x20right\x20now\x20is\x20Resumed**','11124BEarJh','code\x20by\x20Nishant#8044','setLabel','createMessageCollector','ownerId','150','Welcome\x20to\x20','```','MessageEmbed','lyrics','slice','Pause\x20Song','`↪\x20Shuffle\x20Queue`'];_0xe288=function(){return _0x7d1d89;};return _0xe288();}Client['on'](_0x288ca6(0x172),async()=>{const _0x3ee1e9=_0x288ca6,_0x3dcda1=[''+config['status1'],''+config['status2'],''+config[_0x3ee1e9(0x1b7)],''+config[_0x3ee1e9(0x1ce)],''+config['status5'],''+config[_0x3ee1e9(0x15b)],''+config['status7'],''+config[_0x3ee1e9(0x1d6)],''+config[_0x3ee1e9(0x1d9)],''+config['status10'],''+config[_0x3ee1e9(0x17b)],_0x3ee1e9(0x1e7),''+config[_0x3ee1e9(0x17e)]];let _0x2b76fd=0x0;setInterval(()=>Client[_0x3ee1e9(0x20c)]['setActivity'](''+_0x3dcda1[_0x2b76fd++%_0x3dcda1[_0x3ee1e9(0x16b)]],{'type':_0x3ee1e9(0x163)}),0x2328),Client[_0x3ee1e9(0x13c)][_0x3ee1e9(0x1bc)][_0x3ee1e9(0x176)](_0x3ee1e9(0x1c5))?.[_0x3ee1e9(0x14b)][_0x3ee1e9(0x1b2)]([help$,play$,pause$,resume$,volume$,skip$,filter$,queue$,stop$,shuffle$,panel$,lyrics$,grab$]),Client[_0x3ee1e9(0x20c)][_0x3ee1e9(0x157)](_0x3ee1e9(0x1ae)),console[_0x3ee1e9(0x1ff)](_0x3ee1e9(0x19b)+Client[_0x3ee1e9(0x20c)][_0x3ee1e9(0x166)]+_0x3ee1e9(0x1ad));}),Client['on'](_0x288ca6(0x190),async _0x4ef333=>{const _0x9bdfae=_0x288ca6;_0x4ef333[_0x9bdfae(0x203)][_0x9bdfae(0x1bc)][_0x9bdfae(0x197)](_0x581465=>_0x581465['type']===_0x9bdfae(0x15d))[_0x9bdfae(0x1d8)]()[_0x9bdfae(0x15a)]()['then'](_0x5cab10=>{const _0x244744=_0x9bdfae,_0x249f06=new Discord[(_0x244744(0x1ee))]()[_0x244744(0x1a7)](_0x244744(0x187))[_0x244744(0x1d7)](_0x244744(0x1d1),_0x244744(0x1ed)+_0x4ef333['name']+_0x244744(0x1ed),!![])[_0x244744(0x1d7)]('Guild\x20ID',_0x244744(0x1ed)+_0x4ef333['id']+_0x244744(0x1ed),!![])[_0x244744(0x1d7)](_0x244744(0x1de),_0x244744(0x1ed)+Client['users']['cache'][_0x244744(0x176)](_0x4ef333[_0x244744(0x1ea)])[_0x244744(0x152)]+_0x244744(0x1ed),!![])[_0x244744(0x1d7)]('Guild\x20Invite',_0x244744(0x205)+_0x5cab10[_0x244744(0x16c)]+')',!![]);Client['channels'][_0x244744(0x1bc)][_0x244744(0x176)](config[_0x244744(0x15e)])['send']({'embeds':[_0x249f06]});});}),Client['on'](_0x288ca6(0x165),async _0x311b7c=>{const _0x1682de=_0x288ca6,_0x3efb4e=Client[_0x1682de(0x1f6)][_0x1682de(0x1bc)][_0x1682de(0x176)](config[_0x1682de(0x1ea)]);if(_0x311b7c[_0x1682de(0x1cb)][_0x1682de(0x131)])return;if(_0x311b7c[_0x1682de(0x179)][_0x1682de(0x1f6)]['first']()===Client[_0x1682de(0x20c)]){const _0x434e4d=new Discord[(_0x1682de(0x207))]()['addComponents'](new Discord[(_0x1682de(0x15c))]()['setStyle']('LINK')['setURL']('https://discord.com/oauth2/authorize?client_id='+Client[_0x1682de(0x20c)]['id']+_0x1682de(0x1c0))[_0x1682de(0x1e8)]('Invite\x20Me')),_0x271863=new Discord[(_0x1682de(0x1ee))]()[_0x1682de(0x1a7)]('RANDOM')['setTitle'](_0x1682de(0x146))['setAuthor'](''+Client['user'][_0x1682de(0x166)],Client[_0x1682de(0x20c)][_0x1682de(0x1fa)]({'size':0x400,'dynamic':!![]}))[_0x1682de(0x141)](Client[_0x1682de(0x20c)][_0x1682de(0x166)]+_0x1682de(0x1c3)+_0x3efb4e[_0x1682de(0x166)]);_0x311b7c[_0x1682de(0x19d)]({'embeds':[_0x271863],'components':[_0x434e4d]});}if(!_0x311b7c[_0x1682de(0x1cb)]['id']===_0x3efb4e['id'])return;if(_0x311b7c[_0x1682de(0x1cb)]['id']===_0x3efb4e['id']){if(_0x311b7c[_0x1682de(0x1fc)][_0x1682de(0x14e)]('e\x20')){const _0x57dc43=_0x311b7c[_0x1682de(0x1fc)][_0x1682de(0x20d)]('e\x20','');try{let _0x2eecb0=eval(_0x57dc43);const _0x4f7c06=new Discord[(_0x1682de(0x1ee))]()[_0x1682de(0x1a7)](_0x1682de(0x187))['setDescription'](_0x1682de(0x1d5)+_0x2eecb0+_0x1682de(0x1ca));_0x311b7c[_0x1682de(0x19d)]({'embeds':[_0x4f7c06]});}catch(_0x45d132){const _0x2db6db=new Discord['MessageEmbed']()[_0x1682de(0x1a7)]('RANDOM')[_0x1682de(0x141)](_0x1682de(0x1d5)+_0x45d132+_0x1682de(0x1ca));_0x311b7c[_0x1682de(0x19d)]({'embeds':[_0x2db6db]});}}}else return;}),Client['on'](_0x288ca6(0x1a1),async _0x298c5c=>{const _0x54c2b8=_0x288ca6,_0x2cb607=Client[_0x54c2b8(0x1f6)][_0x54c2b8(0x1bc)][_0x54c2b8(0x176)](config['ownerId']);if(_0x298c5c['isCommand']()){if(_0x298c5c[_0x54c2b8(0x143)]===_0x54c2b8(0x1bf)){const _0x1a622a=new Discord['MessageEmbed']()['setColor'](_0x54c2b8(0x187))[_0x54c2b8(0x17f)](_0x54c2b8(0x1ec)+Client['user'][_0x54c2b8(0x166)]+('\x0aThis\x20is\x20an\x20amazing\x20music\x20bot,\x20created\x20for\x20listening\x20to\x20high\x20quality\x20music!\x20It\x20has\x20multiple\x20commands\x20and\x20can\x20even\x20play\x20in\x20STAGE\x20channels!\x0a\x0aOwner\x20:\x20'+_0x2cb607[_0x54c2b8(0x166)]+_0x54c2b8(0x208)))['setFooter']('Page\x201/2'),_0x2e00fa=new Discord['MessageEmbed']()['setColor'](_0x54c2b8(0x187))[_0x54c2b8(0x17f)](_0x54c2b8(0x202))[_0x54c2b8(0x1d7)](_0x54c2b8(0x147),_0x54c2b8(0x182),!![])[_0x54c2b8(0x1d7)]('pause',_0x54c2b8(0x18a),!![])[_0x54c2b8(0x1d7)](_0x54c2b8(0x1aa),_0x54c2b8(0x18d),!![])[_0x54c2b8(0x1d7)]('volume',_0x54c2b8(0x1a2),!![])[_0x54c2b8(0x1d7)]('skip',_0x54c2b8(0x18e),!![])['addField'](_0x54c2b8(0x197),_0x54c2b8(0x158),!![])['addField'](_0x54c2b8(0x1a8),_0x54c2b8(0x144),!![])['addField'](_0x54c2b8(0x17c),_0x54c2b8(0x1f2),!![])[_0x54c2b8(0x1d7)]('panel',_0x54c2b8(0x153),!![])[_0x54c2b8(0x1d7)](_0x54c2b8(0x1b4),_0x54c2b8(0x14a),!![])['addField']('lyrics',_0x54c2b8(0x140),!![])[_0x54c2b8(0x1d7)]('stop',_0x54c2b8(0x206),!![])[_0x54c2b8(0x170)](_0x54c2b8(0x15f));Paginator['button']({'interaction':_0x298c5c,'pages':[_0x1a622a,_0x2e00fa],'buttons':{'previous':{'label':_0x54c2b8(0x17a),'style':_0x54c2b8(0x13d),'emoji':'👈'},'next':{'label':_0x54c2b8(0x19f),'style':_0x54c2b8(0x13d),'emoji':'👉'},'stop':{'label':_0x54c2b8(0x180),'style':'DANGER','emoji':'✋'}}});}if(_0x298c5c[_0x54c2b8(0x143)]===_0x54c2b8(0x1b4)){let _0x5ed959=Music['getQueue'](_0x298c5c);if(!_0x5ed959)_0x298c5c['reply']({'content':_0x54c2b8(0x1d4),'ephemeral':!![]});else{const _0x232cc1=new Discord[(_0x54c2b8(0x1ee))]()[_0x54c2b8(0x17f)](''+_0x5ed959[_0x54c2b8(0x1b1)][0x0][_0x54c2b8(0x1a6)])[_0x54c2b8(0x1d7)](_0x54c2b8(0x135),''+_0x5ed959['songs'][0x0][_0x54c2b8(0x1cf)],!![])[_0x54c2b8(0x1d7)](_0x54c2b8(0x1ac),''+_0x5ed959[_0x54c2b8(0x1b1)][0x0][_0x54c2b8(0x1b8)],!![])['addField']('ID',''+_0x5ed959[_0x54c2b8(0x1b1)][0x0]['id'],!![])[_0x54c2b8(0x170)](_0x54c2b8(0x130)+_0x5ed959[_0x54c2b8(0x1b1)][0x0][_0x54c2b8(0x1dd)]+_0x54c2b8(0x1d2)+_0x5ed959[_0x54c2b8(0x1b1)][0x0][_0x54c2b8(0x1c8)])['setURL'](''+_0x5ed959[_0x54c2b8(0x1b1)][0x0][_0x54c2b8(0x16c)])[_0x54c2b8(0x138)](''+_0x5ed959['songs'][0x0][_0x54c2b8(0x194)])[_0x54c2b8(0x1a7)](_0x54c2b8(0x187));_0x298c5c[_0x54c2b8(0x19d)]({'content':'Check\x20your\x20DMs','ephemeral':!![]}),_0x298c5c[_0x54c2b8(0x20c)]['send']({'embeds':[_0x232cc1]});}}if(_0x298c5c[_0x54c2b8(0x143)]==='play'){if(!_0x298c5c[_0x54c2b8(0x20a)][_0x54c2b8(0x1f3)][_0x54c2b8(0x184)])return _0x298c5c['reply']({'embeds':[errorbed],'ephemeral':!![]});try{const _0x3a20ce=new Discord[(_0x54c2b8(0x1ee))]()[_0x54c2b8(0x1a7)](_0x54c2b8(0x187))['setDescription']('**To\x20play\x20a\x20song,\x20type\x20its\x20name\x20below**');_0x298c5c[_0x54c2b8(0x19d)]({'embeds':[_0x3a20ce]});const _0xdd848a=_0x375a07=>_0x375a07[_0x54c2b8(0x20a)]['id']===_0x298c5c[_0x54c2b8(0x20a)]['id'],_0xf61741=_0x298c5c[_0x54c2b8(0x184)][_0x54c2b8(0x1e9)]({'filter':_0xdd848a,'time':0x3a98});_0xf61741['on'](_0x54c2b8(0x13b),async _0x2573f4=>{const _0x39d1f6=_0x54c2b8;if(!_0x2573f4[_0x39d1f6(0x20a)]['voice'][_0x39d1f6(0x184)])return;Music[_0x39d1f6(0x147)](_0x2573f4,_0x2573f4[_0x39d1f6(0x1fc)]),_0xf61741[_0x39d1f6(0x132)]();});}catch(_0x491829){return _0x298c5c[_0x54c2b8(0x19d)]({'embeds':[errorbed],'ephemeral':!![]});}}if(_0x298c5c[_0x54c2b8(0x143)]===_0x54c2b8(0x174)){let _0x2ac0f0=Music[_0x54c2b8(0x154)](_0x298c5c);if(!_0x2ac0f0)_0x298c5c['followUp']({'content':_0x54c2b8(0x1d4),'ephemeral':!![]});if(!_0x298c5c['member'][_0x54c2b8(0x1f3)][_0x54c2b8(0x184)])return _0x298c5c[_0x54c2b8(0x19d)]({'embeds':[errorbed],'ephemeral':!![]});if(!_0x298c5c[_0x54c2b8(0x14c)]['me'][_0x54c2b8(0x1f3)][_0x54c2b8(0x184)])return _0x298c5c[_0x54c2b8(0x19d)]({'embeds':[errorbed],'ephemeral':!![]});if(!_0x298c5c[_0x54c2b8(0x20a)][_0x54c2b8(0x1f3)][_0x54c2b8(0x184)]===_0x298c5c[_0x54c2b8(0x14c)]['me'][_0x54c2b8(0x1f3)][_0x54c2b8(0x184)])return _0x298c5c[_0x54c2b8(0x19d)]({'embeds':[errorbed],'ephemeral':!![]});if(_0x2ac0f0['paused'])return _0x298c5c['reply']({'embeds':[errorbed],'ephemeral':!![]});else{Music[_0x54c2b8(0x174)](_0x298c5c);const _0x425d50=new Discord[(_0x54c2b8(0x1ee))]()[_0x54c2b8(0x1a7)](_0x54c2b8(0x187))[_0x54c2b8(0x141)](_0x54c2b8(0x1b5));_0x298c5c[_0x54c2b8(0x19d)]({'embeds':[_0x425d50]});}}if(_0x298c5c[_0x54c2b8(0x143)]===_0x54c2b8(0x1aa)){if(!_0x298c5c[_0x54c2b8(0x20a)][_0x54c2b8(0x1f3)][_0x54c2b8(0x184)])return _0x298c5c[_0x54c2b8(0x19d)]({'embeds':[errorbed],'ephemeral':!![]});if(!_0x298c5c[_0x54c2b8(0x14c)]['me'][_0x54c2b8(0x1f3)][_0x54c2b8(0x184)])return _0x298c5c[_0x54c2b8(0x19d)]({'embeds':[errorbed],'ephemeral':!![]});if(!_0x298c5c[_0x54c2b8(0x20a)]['voice'][_0x54c2b8(0x184)]===_0x298c5c['guild']['me']['voice'][_0x54c2b8(0x184)])return _0x298c5c[_0x54c2b8(0x19d)]({'embeds':[errorbed],'ephemeral':!![]});let _0x498368=Music['getQueue'](_0x298c5c);if(!_0x498368)_0x298c5c[_0x54c2b8(0x1a9)]({'content':_0x54c2b8(0x1d4),'ephemeral':!![]});if(_0x498368[_0x54c2b8(0x177)]){Music[_0x54c2b8(0x1aa)](_0x298c5c);const _0x273a7e=new Discord[(_0x54c2b8(0x1ee))]()[_0x54c2b8(0x1a7)]('RANDOM')[_0x54c2b8(0x141)](_0x54c2b8(0x1e5));_0x298c5c[_0x54c2b8(0x19d)]({'embeds':[_0x273a7e]});}else return _0x298c5c[_0x54c2b8(0x19d)]({'embeds':[errorbed],'ephemeral':!![]});}if(_0x298c5c['commandName']===_0x54c2b8(0x1ef)){const _0xc98ab4=require(_0x54c2b8(0x188));let _0xb0252e=[];_0x298c5c[_0x54c2b8(0x19d)]({'content':_0x54c2b8(0x18f),'ephemeral':!![]});let _0xad3c03=0x0,_0x5e8998=Music['getQueue'](_0x298c5c),_0x369b4d=_0x298c5c[_0x54c2b8(0x148)]['getString'](_0x54c2b8(0x164)),_0x50c275=_0x298c5c[_0x54c2b8(0x148)][_0x54c2b8(0x1fb)](_0x54c2b8(0x1cb)),_0x1435d2=await Lyrics(_0x50c275,_0x369b4d)||'Not\x20Found!';for(let _0x56ff6d=0x0;_0x56ff6d<_0x1435d2[_0x54c2b8(0x16b)];_0x56ff6d+=0x800){let _0x35c1f6=_0x1435d2[_0x54c2b8(0x19a)](_0x56ff6d,Math[_0x54c2b8(0x137)](_0x1435d2[_0x54c2b8(0x16b)],_0x56ff6d+0x7d0)),_0xc95fdc=new Discord[(_0x54c2b8(0x1ee))]()[_0x54c2b8(0x141)](_0x35c1f6);_0xb0252e[_0x54c2b8(0x181)](_0xc95fdc);}const _0x2cb0e9=(_0x5d9f6f,_0x328a01)=>['⬅️','➡️'][_0x54c2b8(0x134)](_0x5d9f6f[_0x54c2b8(0x183)][_0x54c2b8(0x1a6)])&&_0x298c5c[_0x54c2b8(0x20c)]['id']==_0x328a01['id'];let _0x4eb076=await _0x298c5c[_0x54c2b8(0x184)][_0x54c2b8(0x167)]({'content':_0x54c2b8(0x175)+(_0xad3c03+0x1)+'/'+_0xb0252e[_0x54c2b8(0x16b)],'embeds':[_0xb0252e[_0xad3c03]]});await _0x4eb076[_0x54c2b8(0x1af)]('🇱'),await _0x4eb076[_0x54c2b8(0x1af)]('🇾'),await _0x4eb076[_0x54c2b8(0x1af)]('🇷'),await _0x4eb076['react']('🇮'),await _0x4eb076[_0x54c2b8(0x1af)]('🇨'),await _0x4eb076['react']('🇸'),await _0x4eb076[_0x54c2b8(0x1af)]('🇸'),await _0x4eb076['react']('⬅️'),await _0x4eb076[_0x54c2b8(0x1af)]('➡️'),await _0x4eb076[_0x54c2b8(0x1af)]('➡️'),await _0x4eb076['react']('❌'),await _0x4eb076[_0x54c2b8(0x1af)]('❌');let _0xc78141=_0x4eb076['createReactionCollector'](_0x2cb0e9);_0xc78141['on'](_0x54c2b8(0x13b),(_0x390ecf,_0x5837ac)=>{const _0x463b39=_0x54c2b8;_0x390ecf[_0x463b39(0x1f6)][_0x463b39(0x1db)](_0x390ecf[_0x463b39(0x1f6)][_0x463b39(0x1bc)][_0x463b39(0x176)](_0x298c5c[_0x463b39(0x20c)]['id']));if(_0x390ecf[_0x463b39(0x183)][_0x463b39(0x1a6)]=='➡️')_0xad3c03<_0xb0252e[_0x463b39(0x16b)]-0x1&&(_0xad3c03+=0x1,_0x4eb076[_0x463b39(0x1e3)]({'content':'Page:\x20'+(_0xad3c03+0x1)+'/'+_0xb0252e[_0x463b39(0x16b)],'embeds':[_0xb0252e[_0xad3c03]]}));else{if(_0x390ecf['emoji'][_0x463b39(0x1a6)]==='⬅️')_0xad3c03!==0x0&&(_0xad3c03-=0x1,_0x4eb076[_0x463b39(0x1e3)]({'content':_0x463b39(0x175)+(_0xad3c03+0x1)+'/'+_0xb0252e[_0x463b39(0x16b)],'embeds':[_0xb0252e[_0xad3c03]]}));else _0x390ecf[_0x463b39(0x183)][_0x463b39(0x1a6)]==='❌'&&(_0xad3c03-=0x1,_0x4eb076[_0x463b39(0x1e3)]({'content':'Closed\x20LYRICS\x20panel','embeds':[]}));}});}if(_0x298c5c[_0x54c2b8(0x143)]===_0x54c2b8(0x195)){if(!_0x298c5c[_0x54c2b8(0x20a)]['voice']['channel'])return _0x298c5c[_0x54c2b8(0x19d)]({'embeds':[errorbed],'ephemeral':!![]});if(!_0x298c5c[_0x54c2b8(0x14c)]['me'][_0x54c2b8(0x1f3)]['channel'])return _0x298c5c[_0x54c2b8(0x19d)]({'embeds':[errorbed],'ephemeral':!![]});if(!_0x298c5c[_0x54c2b8(0x20a)][_0x54c2b8(0x1f3)][_0x54c2b8(0x184)]===_0x298c5c[_0x54c2b8(0x14c)]['me']['voice']['channel'])return _0x298c5c[_0x54c2b8(0x19d)]({'embeds':[errorbed],'ephemeral':!![]});let _0x24966b=Music[_0x54c2b8(0x154)](_0x298c5c);if(!_0x24966b)_0x298c5c[_0x54c2b8(0x1a9)]({'content':_0x54c2b8(0x1d4),'ephemeral':!![]});const _0x41a5c2=new Discord[(_0x54c2b8(0x207))]()['addComponents'](new Discord[(_0x54c2b8(0x15c))]()[_0x54c2b8(0x1c6)](_0x54c2b8(0x1d3))[_0x54c2b8(0x1ba)](_0x54c2b8(0x13d))[_0x54c2b8(0x1b0)]('🔈'),new Discord[(_0x54c2b8(0x15c))]()['setCustomId'](_0x54c2b8(0x1f7))['setStyle']('PRIMARY')[_0x54c2b8(0x1b0)]('🔊')),_0x195ab3=new Discord[(_0x54c2b8(0x1ee))]()[_0x54c2b8(0x1a7)](_0x54c2b8(0x187))[_0x54c2b8(0x141)]('**Volume:\x20'+_0x24966b['volume']+_0x54c2b8(0x145));_0x298c5c[_0x54c2b8(0x19d)]({'embeds':[_0x195ab3],'components':[_0x41a5c2]});const _0x495d2c=_0xd5930d=>_0xd5930d[_0x54c2b8(0x20a)]['id']===_0x298c5c[_0x54c2b8(0x20a)]['id'],_0x360196=_0x298c5c[_0x54c2b8(0x184)][_0x54c2b8(0x1da)]({'filter':_0x495d2c,'time':0x61a80});_0x360196['on']('collect',async _0x10154d=>{const _0x25ff40=_0x54c2b8;if(!_0x10154d[_0x25ff40(0x20a)][_0x25ff40(0x1f3)][_0x25ff40(0x184)])return _0x10154d[_0x25ff40(0x19d)]({'embeds':[errorbed],'ephemeral':!![]});if(!_0x10154d['guild']['me'][_0x25ff40(0x1f3)]['channel'])return _0x10154d['reply']({'embeds':[errorbed],'ephemeral':!![]});if(!_0x10154d[_0x25ff40(0x20a)][_0x25ff40(0x1f3)][_0x25ff40(0x184)]===_0x298c5c['guild']['me']['voice'][_0x25ff40(0x184)])return _0x10154d['reply']({'embeds':[errorbed],'ephemeral':!![]});if(_0x10154d[_0x25ff40(0x20b)]===_0x25ff40(0x1f7)){let _0x39c2f3=Music[_0x25ff40(0x154)](_0x10154d);if(_0x39c2f3[_0x25ff40(0x195)][_0x25ff40(0x1b6)]()[_0x25ff40(0x14e)](_0x25ff40(0x1eb)))return _0x10154d['reply']({'embeds':[errorbed],'ephemeral':!![]});Music[_0x25ff40(0x1bd)](_0x10154d,_0x39c2f3[_0x25ff40(0x195)]+0x5);let _0x3f0512=Music[_0x25ff40(0x154)](_0x10154d);const _0x3d8247=new Discord[(_0x25ff40(0x1ee))]()[_0x25ff40(0x1a7)](_0x25ff40(0x187))[_0x25ff40(0x141)]('**Volume:\x20'+_0x3f0512[_0x25ff40(0x195)]+_0x25ff40(0x145));await _0x10154d[_0x25ff40(0x12d)]({'embeds':[_0x3d8247]});}if(_0x10154d[_0x25ff40(0x20b)]==='vol_down'){let _0xe89ef1=Music[_0x25ff40(0x154)](_0x10154d);if(_0xe89ef1[_0x25ff40(0x195)]<0x5)return _0x10154d['reply']({'embeds':[errorbed],'ephemeral':!![]});Music[_0x25ff40(0x1bd)](_0x10154d,_0xe89ef1[_0x25ff40(0x195)]-0x5);let _0x2b439f=Music[_0x25ff40(0x154)](_0x10154d);const _0x45bf50=new Discord[(_0x25ff40(0x1ee))]()['setColor'](_0x25ff40(0x187))[_0x25ff40(0x141)](_0x25ff40(0x151)+_0x2b439f[_0x25ff40(0x195)]+_0x25ff40(0x145));await _0x10154d[_0x25ff40(0x12d)]({'embeds':[_0x45bf50]});}});}if(_0x298c5c[_0x54c2b8(0x143)]==='panel'){if(!_0x298c5c[_0x54c2b8(0x20a)]['voice']['channel'])return _0x298c5c[_0x54c2b8(0x19d)]({'embeds':[errorbed],'ephemeral':!![]});if(!_0x298c5c[_0x54c2b8(0x14c)]['me'][_0x54c2b8(0x1f3)]['channel'])return _0x298c5c['reply']({'embeds':[errorbed],'ephemeral':!![]});if(!_0x298c5c['member'][_0x54c2b8(0x1f3)][_0x54c2b8(0x184)]===_0x298c5c['guild']['me'][_0x54c2b8(0x1f3)]['channel'])return _0x298c5c['reply']({'embeds':[errorbed],'ephemeral':!![]});let _0x2069fb=Music['getQueue'](_0x298c5c);if(!_0x2069fb)_0x298c5c[_0x54c2b8(0x1a9)]({'content':_0x54c2b8(0x1d4),'ephemeral':!![]});const _0x2ce443=new Discord['MessageActionRow']()[_0x54c2b8(0x142)](new Discord[(_0x54c2b8(0x15c))]()[_0x54c2b8(0x1c6)]('n1')[_0x54c2b8(0x1ba)](_0x54c2b8(0x1fe))[_0x54c2b8(0x1e8)]('​')[_0x54c2b8(0x19e)](),new Discord[(_0x54c2b8(0x15c))]()[_0x54c2b8(0x1c6)](_0x54c2b8(0x1d3))[_0x54c2b8(0x1ba)](_0x54c2b8(0x13d))[_0x54c2b8(0x1b0)]('🔈'),new Discord[(_0x54c2b8(0x15c))]()[_0x54c2b8(0x1c6)](_0x54c2b8(0x1f7))[_0x54c2b8(0x1ba)]('PRIMARY')[_0x54c2b8(0x1b0)]('🔊'),new Discord[(_0x54c2b8(0x15c))]()[_0x54c2b8(0x1c6)]('n8')['setStyle']('SECONDARY')['setLabel']('​')[_0x54c2b8(0x19e)]()),_0x1e7f00=new Discord[(_0x54c2b8(0x207))]()[_0x54c2b8(0x142)](new Discord[(_0x54c2b8(0x15c))]()[_0x54c2b8(0x1c6)]('n4')[_0x54c2b8(0x1ba)](_0x54c2b8(0x1fe))[_0x54c2b8(0x1e8)]('​')[_0x54c2b8(0x19e)](),new Discord[(_0x54c2b8(0x15c))]()[_0x54c2b8(0x1c6)](_0x54c2b8(0x174))[_0x54c2b8(0x1ba)](0x4)[_0x54c2b8(0x1b0)]('⏸️'),new Discord[(_0x54c2b8(0x15c))]()[_0x54c2b8(0x1c6)](_0x54c2b8(0x147))[_0x54c2b8(0x1ba)](_0x54c2b8(0x168))[_0x54c2b8(0x1b0)]('▶️'),new Discord[(_0x54c2b8(0x15c))]()['setCustomId']('n2')[_0x54c2b8(0x1ba)]('SECONDARY')['setLabel']('​')[_0x54c2b8(0x19e)]()),_0x10ba43=new Discord[(_0x54c2b8(0x207))]()[_0x54c2b8(0x142)](new Discord[(_0x54c2b8(0x15c))]()[_0x54c2b8(0x1c6)]('ne22')['setStyle'](_0x54c2b8(0x1fe))[_0x54c2b8(0x1e8)](_0x54c2b8(0x204))[_0x54c2b8(0x19e)](),new Discord[(_0x54c2b8(0x15c))]()[_0x54c2b8(0x1c6)](_0x54c2b8(0x14d))[_0x54c2b8(0x1ba)](_0x54c2b8(0x1fe))[_0x54c2b8(0x1e8)](_0x54c2b8(0x1d0))['setDisabled'](),new Discord[(_0x54c2b8(0x15c))]()['setCustomId']('n2324')[_0x54c2b8(0x1ba)]('SECONDARY')[_0x54c2b8(0x1e8)](_0x54c2b8(0x13f))[_0x54c2b8(0x19e)](),new Discord['MessageButton']()['setCustomId'](_0x54c2b8(0x1c1))[_0x54c2b8(0x1ba)]('SECONDARY')[_0x54c2b8(0x1e8)](''+Client[_0x54c2b8(0x20c)][_0x54c2b8(0x166)])['setDisabled']()),_0x36a68e=new Discord[(_0x54c2b8(0x207))]()[_0x54c2b8(0x142)](new Discord[(_0x54c2b8(0x15c))]()[_0x54c2b8(0x1c6)]('n3')[_0x54c2b8(0x1ba)]('SECONDARY')['setLabel']('​')['setDisabled'](),new Discord['MessageButton']()[_0x54c2b8(0x1c6)](_0x54c2b8(0x14f))[_0x54c2b8(0x1ba)](0x2)[_0x54c2b8(0x1b0)]('⏩'),new Discord['MessageButton']()[_0x54c2b8(0x1c6)](_0x54c2b8(0x17c))[_0x54c2b8(0x1ba)](0x2)['setEmoji']('🔃'),new Discord['MessageButton']()[_0x54c2b8(0x1c6)]('n5')['setStyle']('SECONDARY')['setLabel']('​')['setDisabled']()),_0x498a81=new Discord[(_0x54c2b8(0x207))]()[_0x54c2b8(0x142)](new Discord[(_0x54c2b8(0x15c))]()[_0x54c2b8(0x1c6)](_0x54c2b8(0x200))[_0x54c2b8(0x1ba)]('SECONDARY')['setLabel']('​')['setDisabled'](),new Discord[(_0x54c2b8(0x15c))]()[_0x54c2b8(0x1c6)]('stop2')[_0x54c2b8(0x1ba)](0x4)[_0x54c2b8(0x1b0)]('🛑'),new Discord[(_0x54c2b8(0x15c))]()[_0x54c2b8(0x1c6)]('refresh')[_0x54c2b8(0x1ba)]('SUCCESS')[_0x54c2b8(0x1b0)]('🔄'),new Discord['MessageButton']()[_0x54c2b8(0x1c6)]('n524')[_0x54c2b8(0x1ba)](_0x54c2b8(0x1fe))[_0x54c2b8(0x1e8)]('​')[_0x54c2b8(0x19e)]()),_0x332645=new Discord['MessageEmbed']()['setColor'](_0x54c2b8(0x187))[_0x54c2b8(0x17f)](_0x54c2b8(0x155)+_0x2069fb[_0x54c2b8(0x1b1)][0x0]['name'])[_0x54c2b8(0x141)](_0x54c2b8(0x13e)+_0x2069fb['volume']+'\x0a\x20Paused?\x20:\x20'+_0x2069fb[_0x54c2b8(0x177)]);_0x298c5c['reply']({'embeds':[_0x332645],'components':[_0x2ce443,_0x1e7f00,_0x36a68e,_0x498a81]});const _0x377841=_0x52b3ba=>_0x52b3ba[_0x54c2b8(0x20a)]['id']===_0x298c5c[_0x54c2b8(0x20a)]['id'],_0x7f66b4=_0x298c5c[_0x54c2b8(0x184)][_0x54c2b8(0x1da)]({'filter':_0x377841,'time':0x61a80});_0x7f66b4['on']('collect',async _0x3171c6=>{const _0x309ac5=_0x54c2b8;if(!_0x3171c6['member'][_0x309ac5(0x1f3)][_0x309ac5(0x184)])return _0x3171c6[_0x309ac5(0x19d)]({'embeds':[errorbed],'ephemeral':!![]});if(!_0x3171c6[_0x309ac5(0x14c)]['me']['voice']['channel'])return _0x3171c6[_0x309ac5(0x19d)]({'embeds':[errorbed],'ephemeral':!![]});if(!_0x3171c6[_0x309ac5(0x20a)][_0x309ac5(0x1f3)]['channel']===_0x298c5c[_0x309ac5(0x14c)]['me']['voice'][_0x309ac5(0x184)])return _0x3171c6['reply']({'embeds':[errorbed],'ephemeral':!![]});if(_0x3171c6[_0x309ac5(0x20b)]===_0x309ac5(0x1f7)){let _0x35d682=Music[_0x309ac5(0x154)](_0x3171c6);if(_0x35d682[_0x309ac5(0x195)][_0x309ac5(0x1b6)]()[_0x309ac5(0x14e)]('150'))return _0x3171c6[_0x309ac5(0x19d)]({'embeds':[errorbed],'ephemeral':!![]});Music[_0x309ac5(0x1bd)](_0x3171c6,_0x35d682[_0x309ac5(0x195)]+0x5);let _0x335c34=Music['getQueue'](_0x3171c6);const _0x26babb=new Discord[(_0x309ac5(0x1ee))]()[_0x309ac5(0x1a7)](_0x309ac5(0x187))[_0x309ac5(0x17f)](_0x309ac5(0x155)+_0x2069fb['songs'][0x0][_0x309ac5(0x1a6)])[_0x309ac5(0x141)](_0x309ac5(0x13e)+_0x2069fb[_0x309ac5(0x195)]+_0x309ac5(0x1e2)+_0x2069fb[_0x309ac5(0x177)]);await _0x3171c6[_0x309ac5(0x12d)]({'embeds':[_0x26babb]});}if(_0x3171c6['customId']===_0x309ac5(0x174)){if(_0x2069fb[_0x309ac5(0x177)])return;else{Music[_0x309ac5(0x174)](_0x298c5c);const _0x148365=new Discord[(_0x309ac5(0x1ee))]()[_0x309ac5(0x1a7)](_0x309ac5(0x187))[_0x309ac5(0x17f)]('Now\x20Playing\x20-\x20'+_0x2069fb[_0x309ac5(0x1b1)][0x0]['name'])[_0x309ac5(0x17f)](_0x309ac5(0x155)+_0x2069fb[_0x309ac5(0x1b1)][0x0][_0x309ac5(0x1a6)])[_0x309ac5(0x141)](_0x309ac5(0x13e)+_0x2069fb[_0x309ac5(0x195)]+_0x309ac5(0x1e2)+_0x2069fb[_0x309ac5(0x177)]);await _0x3171c6[_0x309ac5(0x12d)]({'embeds':[_0x148365]});}}if(_0x3171c6[_0x309ac5(0x20b)]==='play'){if(_0x2069fb[_0x309ac5(0x177)]){Music['resume'](_0x298c5c);const _0x1fee32=new Discord['MessageEmbed']()[_0x309ac5(0x1a7)]('RANDOM')[_0x309ac5(0x141)]('**Music\x20Control\x20Panel**\x20\x0a\x20Volume\x20:\x20'+_0x2069fb['volume']+_0x309ac5(0x1e2)+_0x2069fb[_0x309ac5(0x177)])['setTitle'](_0x309ac5(0x155)+_0x2069fb[_0x309ac5(0x1b1)][0x0][_0x309ac5(0x1a6)]);await _0x3171c6[_0x309ac5(0x12d)]({'embeds':[_0x1fee32]});}else return;}if(_0x3171c6[_0x309ac5(0x20b)]===_0x309ac5(0x17c)){if(_0x2069fb[_0x309ac5(0x1b1)]['length']===0x1)return _0x298c5c[_0x309ac5(0x1a9)]({'embeds':[errorbed],'ephemeral':!![]});Music[_0x309ac5(0x17c)](_0x298c5c);const _0x425c1f=new Discord[(_0x309ac5(0x1ee))]()['setColor'](_0x309ac5(0x187))[_0x309ac5(0x141)]('**Music\x20Control\x20Panel**\x20\x0a\x20Volume\x20:\x20'+_0x2069fb['volume']+_0x309ac5(0x1e2)+_0x2069fb[_0x309ac5(0x177)])['setTitle'](_0x309ac5(0x155)+_0x2069fb['songs'][0x0]['name'])[_0x309ac5(0x170)](_0x309ac5(0x178));await _0x3171c6[_0x309ac5(0x12d)]({'embeds':[_0x425c1f]}),_0x298c5c[_0x309ac5(0x1a9)]({'content':_0x309ac5(0x1ab),'ephemeral':!![]});}if(_0x3171c6[_0x309ac5(0x20b)]===_0x309ac5(0x12f)){const _0x476483=new Discord[(_0x309ac5(0x1ee))]()['setColor']('RANDOM')[_0x309ac5(0x141)](_0x309ac5(0x13e)+_0x2069fb[_0x309ac5(0x195)]+_0x309ac5(0x1e2)+_0x2069fb[_0x309ac5(0x177)])[_0x309ac5(0x17f)](_0x309ac5(0x155)+_0x2069fb['songs'][0x0]['name'])[_0x309ac5(0x170)](_0x309ac5(0x1e0)+_0x3171c6[_0x309ac5(0x20c)][_0x309ac5(0x166)]);await _0x3171c6[_0x309ac5(0x12d)]({'embeds':[_0x476483]}),_0x298c5c[_0x309ac5(0x1a9)]({'content':'Refreshed\x20the\x20panel','ephemeral':!![]});}if(_0x3171c6[_0x309ac5(0x20b)]==='stop2'){Music[_0x309ac5(0x132)](_0x298c5c);const _0x2f861d=new Discord['MessageEmbed']()[_0x309ac5(0x1a7)](_0x309ac5(0x1f8))[_0x309ac5(0x141)](_0x309ac5(0x16e)+Client['user'][_0x309ac5(0x166)]+(_0x309ac5(0x1bb)+_0x3171c6['user'][_0x309ac5(0x166)]));await _0x3171c6[_0x309ac5(0x12d)]({'embeds':[_0x2f861d],'components':[_0x10ba43]}),_0x298c5c[_0x309ac5(0x1a9)]({'content':_0x309ac5(0x12e),'ephemeral':!![]});}if(_0x3171c6['customId']==='skip'){if(_0x2069fb[_0x309ac5(0x1b1)]['length']===0x1)return _0x298c5c[_0x309ac5(0x1a9)]({'embeds':[errorbed],'ephemeral':!![]});try{Music[_0x309ac5(0x14f)](_0x298c5c);const _0x1e0c88=new Discord['MessageEmbed']()['setColor'](_0x309ac5(0x187))[_0x309ac5(0x141)](_0x309ac5(0x13e)+_0x2069fb['volume']+_0x309ac5(0x1e2)+_0x2069fb[_0x309ac5(0x177)])[_0x309ac5(0x17f)](_0x309ac5(0x155)+_0x2069fb['songs'][0x0]['name']);await _0x3171c6['update']({'embeds':[_0x1e0c88]});}catch(_0x35227b){console[_0x309ac5(0x1ff)](_0x35227b);}}if(_0x3171c6['customId']===_0x309ac5(0x1d3)){let _0x947f1e=Music[_0x309ac5(0x154)](_0x3171c6);if(_0x947f1e[_0x309ac5(0x195)]<0x5)return _0x3171c6[_0x309ac5(0x19d)]({'embeds':[errorbed],'ephemeral':!![]});Music[_0x309ac5(0x1bd)](_0x3171c6,_0x947f1e[_0x309ac5(0x195)]-0x5);let _0x1e30ea=Music['getQueue'](_0x3171c6);const _0x246aee=new Discord[(_0x309ac5(0x1ee))]()[_0x309ac5(0x1a7)](_0x309ac5(0x187))[_0x309ac5(0x141)](_0x309ac5(0x13e)+_0x2069fb[_0x309ac5(0x195)]+_0x309ac5(0x1e2)+_0x2069fb[_0x309ac5(0x177)])[_0x309ac5(0x17f)]('Now\x20Playing\x20-\x20'+_0x2069fb[_0x309ac5(0x1b1)][0x0][_0x309ac5(0x1a6)]);await _0x3171c6['update']({'embeds':[_0x246aee]});}});}if(_0x298c5c[_0x54c2b8(0x143)]==='skip'){if(!_0x298c5c[_0x54c2b8(0x20a)][_0x54c2b8(0x1f3)]['channel'])return _0x298c5c[_0x54c2b8(0x19d)]({'embeds':[errorbed],'ephemeral':!![]});if(!_0x298c5c[_0x54c2b8(0x14c)]['me'][_0x54c2b8(0x1f3)][_0x54c2b8(0x184)])return _0x298c5c[_0x54c2b8(0x19d)]({'embeds':[errorbed],'ephemeral':!![]});if(!_0x298c5c['member']['voice'][_0x54c2b8(0x184)]===_0x298c5c[_0x54c2b8(0x14c)]['me'][_0x54c2b8(0x1f3)][_0x54c2b8(0x184)])return _0x298c5c[_0x54c2b8(0x19d)]({'embeds':[errorbed],'ephemeral':!![]});let _0x387119=Music[_0x54c2b8(0x154)](_0x298c5c);if(!_0x387119)_0x298c5c[_0x54c2b8(0x1a9)]({'content':'Please\x20play\x20music\x20before\x20running\x20this\x20command','ephemeral':!![]});if(_0x387119['songs'][_0x54c2b8(0x16b)]===0x1)return _0x298c5c[_0x54c2b8(0x19d)]({'embeds':[errorbed],'ephemeral':!![]});try{Music[_0x54c2b8(0x14f)](_0x298c5c);const _0x1dd2bf=new Discord[(_0x54c2b8(0x1ee))]()[_0x54c2b8(0x1a7)](_0x54c2b8(0x187))[_0x54c2b8(0x141)](_0x54c2b8(0x209));_0x298c5c[_0x54c2b8(0x19d)]({'embeds':[_0x1dd2bf]});}catch(_0x337288){return _0x298c5c[_0x54c2b8(0x19d)]({'embeds':[errorbed],'ephemeral':!![]});}}if(_0x298c5c[_0x54c2b8(0x143)]===_0x54c2b8(0x197)){if(!_0x298c5c[_0x54c2b8(0x20a)][_0x54c2b8(0x1f3)][_0x54c2b8(0x184)])return _0x298c5c[_0x54c2b8(0x19d)]({'embeds':[errorbed],'ephemeral':!![]});if(!_0x298c5c[_0x54c2b8(0x14c)]['me'][_0x54c2b8(0x1f3)][_0x54c2b8(0x184)])return _0x298c5c['reply']({'embeds':[errorbed],'ephemeral':!![]});if(!_0x298c5c[_0x54c2b8(0x20a)]['voice'][_0x54c2b8(0x184)]===_0x298c5c[_0x54c2b8(0x14c)]['me'][_0x54c2b8(0x1f3)][_0x54c2b8(0x184)])return _0x298c5c[_0x54c2b8(0x19d)]({'embeds':[errorbed],'ephemeral':!![]});let _0x41139d=Music['getQueue'](_0x298c5c);if(!_0x41139d)_0x298c5c[_0x54c2b8(0x1a9)]({'content':_0x54c2b8(0x1d4),'ephemeral':!![]});try{const _0x3d863a=Music['setFilter'](_0x298c5c,_0x298c5c['options'][_0x54c2b8(0x1fb)](_0x54c2b8(0x197))),_0x1dc0b7=new Discord['MessageEmbed']()[_0x54c2b8(0x1a7)](_0x54c2b8(0x187))[_0x54c2b8(0x141)]('**Filter:\x20'+_0x3d863a+'**');_0x298c5c[_0x54c2b8(0x19d)]({'embeds':[_0x1dc0b7]});}catch(_0x44a470){return _0x298c5c['reply']({'embeds':[errorbed],'ephemeral':!![]}),conosle[_0x54c2b8(0x1ff)](_0x44a470);}}if(_0x298c5c[_0x54c2b8(0x143)]===_0x54c2b8(0x1a8)){if(!_0x298c5c[_0x54c2b8(0x20a)][_0x54c2b8(0x1f3)][_0x54c2b8(0x184)])return _0x298c5c['reply']({'embeds':[errorbed],'ephemeral':!![]});if(!_0x298c5c[_0x54c2b8(0x14c)]['me'][_0x54c2b8(0x1f3)]['channel'])return _0x298c5c['reply']({'embeds':[errorbed],'ephemeral':!![]});if(!_0x298c5c[_0x54c2b8(0x20a)][_0x54c2b8(0x1f3)][_0x54c2b8(0x184)]===_0x298c5c['guild']['me'][_0x54c2b8(0x1f3)]['channel'])return _0x298c5c[_0x54c2b8(0x19d)]({'embeds':[errorbed],'ephemeral':!![]});const _0x4e149d=Music[_0x54c2b8(0x154)](_0x298c5c);if(!_0x4e149d)_0x298c5c[_0x54c2b8(0x1a9)]({'content':'Please\x20play\x20music\x20before\x20running\x20this\x20command','ephemeral':!![]});if(!_0x4e149d)return _0x298c5c['reply']({'embeds':[errorbed],'ephemeral':!![]});const _0x181c93=new Discord['MessageEmbed']()[_0x54c2b8(0x1a7)]('RANDOM')[_0x54c2b8(0x17f)]('Current\x20Queue\x20of\x20songs')[_0x54c2b8(0x141)](''+_0x4e149d[_0x54c2b8(0x1b1)]['map']((_0x1cb827,_0x1eec62)=>'['+_0x1cb827[_0x54c2b8(0x1a6)]+']('+_0x1cb827[_0x54c2b8(0x16c)]+')')[_0x54c2b8(0x1f0)](0x0,0xa)['join']('\x0a'));_0x298c5c[_0x54c2b8(0x19d)]({'embeds':[_0x181c93]});}if(_0x298c5c['commandName']===_0x54c2b8(0x132)){if(!_0x298c5c[_0x54c2b8(0x20a)][_0x54c2b8(0x1f3)][_0x54c2b8(0x184)])return _0x298c5c[_0x54c2b8(0x19d)]({'embeds':[errorbed],'ephemeral':!![]});if(!_0x298c5c[_0x54c2b8(0x14c)]['me']['voice'][_0x54c2b8(0x184)])return _0x298c5c[_0x54c2b8(0x19d)]({'embeds':[errorbed],'ephemeral':!![]});if(!_0x298c5c[_0x54c2b8(0x20a)][_0x54c2b8(0x1f3)][_0x54c2b8(0x184)]===_0x298c5c[_0x54c2b8(0x14c)]['me']['voice'][_0x54c2b8(0x184)])return _0x298c5c[_0x54c2b8(0x19d)]({'embeds':[errorbed],'ephemeral':!![]});const _0x213150=Music[_0x54c2b8(0x154)](_0x298c5c);if(!_0x213150[_0x54c2b8(0x1e1)])return _0x298c5c[_0x54c2b8(0x19d)]({'embeds':[errorbed],'ephemeral':!![]});Music[_0x54c2b8(0x132)](_0x298c5c);const _0x306f6d=new Discord[(_0x54c2b8(0x1ee))]()['setColor']('RANDOM')['setDescription'](_0x54c2b8(0x16f));_0x298c5c[_0x54c2b8(0x19d)]({'embeds':[_0x306f6d]});}if(_0x298c5c[_0x54c2b8(0x143)]===_0x54c2b8(0x17c)){if(!_0x298c5c[_0x54c2b8(0x20a)][_0x54c2b8(0x1f3)][_0x54c2b8(0x184)])return _0x298c5c[_0x54c2b8(0x19d)]({'embeds':[errorbed],'ephemeral':!![]});if(!_0x298c5c[_0x54c2b8(0x14c)]['me'][_0x54c2b8(0x1f3)]['channel'])return _0x298c5c[_0x54c2b8(0x19d)]({'embeds':[errorbed],'ephemeral':!![]});if(!_0x298c5c[_0x54c2b8(0x20a)]['voice']['channel']===_0x298c5c['guild']['me'][_0x54c2b8(0x1f3)][_0x54c2b8(0x184)])return _0x298c5c[_0x54c2b8(0x19d)]({'embeds':[errorbed],'ephemeral':!![]});const _0x25bd71=Music[_0x54c2b8(0x154)](_0x298c5c);if(!_0x25bd71[_0x54c2b8(0x1e1)])return _0x298c5c[_0x54c2b8(0x19d)]({'embeds':[errorbed],'ephemeral':!![]});if(_0x25bd71[_0x54c2b8(0x1b1)][_0x54c2b8(0x16b)]===0x1)return _0x298c5c[_0x54c2b8(0x19d)]({'embeds':[errorbed],'ephemeral':!![]});Music[_0x54c2b8(0x17c)](_0x298c5c);const _0x530960=new Discord[(_0x54c2b8(0x1ee))]()['setColor']('RANDOM')['setDescription'](_0x54c2b8(0x139));return _0x298c5c[_0x54c2b8(0x19d)]({'embeds':[_0x530960]});}}}),Music['on']('playSong',(_0x427277,_0x247208)=>{const _0x17bf2e=_0x288ca6,_0x112d8f=new Discord[(_0x17bf2e(0x1ee))]()[_0x17bf2e(0x1a7)](_0x17bf2e(0x187))[_0x17bf2e(0x138)](_0x247208[_0x17bf2e(0x194)])[_0x17bf2e(0x159)]('Now\x20Playing',_0x17bf2e(0x19c))['setTitle'](_0x247208[_0x17bf2e(0x1a6)])['setURL'](_0x247208[_0x17bf2e(0x16c)])[_0x17bf2e(0x1d7)](_0x17bf2e(0x135),_0x247208[_0x17bf2e(0x1cf)],!![])[_0x17bf2e(0x1d7)]('Requestor',_0x247208[_0x17bf2e(0x20c)][_0x17bf2e(0x166)],!![]);_0x427277[_0x17bf2e(0x1dc)][_0x17bf2e(0x167)]({'embeds':[_0x112d8f]});}),Music['on']('addSong',(_0xfb6c75,_0x48026b)=>{const _0x425b28=_0x288ca6,_0xc935d4=new Discord[(_0x425b28(0x1ee))]()[_0x425b28(0x1a7)](_0x425b28(0x187))['setThumbnail'](_0x48026b[_0x425b28(0x194)])[_0x425b28(0x159)](_0x425b28(0x13a),_0x425b28(0x19c))[_0x425b28(0x17f)](_0x48026b[_0x425b28(0x1a6)])[_0x425b28(0x16a)](_0x48026b[_0x425b28(0x16c)])['addField']('Duration',_0x48026b[_0x425b28(0x1cf)],!![])[_0x425b28(0x1d7)](_0x425b28(0x201),_0x48026b[_0x425b28(0x20c)][_0x425b28(0x166)],!![]);_0xfb6c75[_0x425b28(0x1dc)]['send']({'embeds':[_0xc935d4]});}),Music['on'](_0x288ca6(0x1f5),(_0x4d7f74,_0x95ac58)=>{return console['log'](_0x95ac58);}),Client['login'](config[_0x288ca6(0x192)]);
