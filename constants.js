// Channel chat to listen to
const CHANNEL = 'V4lesti';

// Sprites
const SPRITES_ROOT = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/';
const NAMES_FR = ["Bulbizarre", "Herbizarre", "Florizarre", "Salamèche", "Reptincel", "Dracaufeu", "Carapuce", "Carabaffe", "Tortank", "Chenipan", "Chrysacier", "Papilusion", "Aspicot", "Coconfort", "Dardargnan", "Roucool", "Roucoups", "Roucarnage", "Rattata", "Rattatac", "Piafabec", "Rapasdepic", "Abo", "Arbok", "Pikachu", "Raichu", "Sabelette", "Sablaireau", "Nidoran♀", "Nidorina", "Nidoqueen", "Nidoran♂", "Nidorino", "Nidoking", "Mélofée", "Mélodelfe", "Goupix", "Feunard", "Rondoudou", "Grodoudou", "Nosferapti", "Nosferalto", "Mystherbe", "Ortide", "Rafflesia", "Paras", "Parasect", "Mimitoss", "Aéromite", "Taupiqueur", "Triopikeur", "Miaouss", "Persian", "Psykokwak", "Akwakwak", "Férosinge", "Colossinge", "Caninos", "Arcanin", "Ptitard", "Têtarte", "Tartard", "Abra", "Kadabra", "Alakazam", "Machoc", "Machopeur", "Mackogneur", "Chétiflor", "Boustiflor", "Empiflor", "Tentacool", "Tentacruel", "Racaillou", "Gravalanch", "Grolem", "Ponyta", "Galopa", "Ramoloss", "Flagadoss", "Magnéti", "Magnéton", "Canarticho", "Doduo", "Dodrio", "Otaria", "Lamantine", "Tadmorv", "Grotadmorv", "Kokiyas", "Crustabri", "Fantominus", "Spectrum", "Ectoplasma", "Onix", "Soporifik", "Hypnomade", "Krabby", "Krabboss", "Voltorbe", "Électrode", "Noeunoeuf", "Noadkoko", "Osselait", "Ossatueur", "Kicklee", "Tygnon", "Excelangue", "Smogo", "Smogogo", "Rhinocorne", "Rhinoféros", "Leveinard", "Saquedeneu", "Kangourex", "Hypotrempe", "Hypocéan", "Poissirène", "Poissoroy", "Stari", "Staross", "M. Mime", "Insécateur", "Lippoutou", "Élektek", "Magmar", "Scarabrute", "Tauros", "Magicarpe", "Léviator", "Lokhlass", "Métamorph", "Évoli", "Aquali", "Voltali", "Pyroli", "Porygon", "Amonita", "Amonistar", "Kabuto", "Kabutops", "Ptéra", "Ronflex", "Artikodin", "Électhor", "Sulfura", "Minidraco", "Draco", "Dracolosse", "Mewtwo", "Mew", "Germignon", "Macronium", "Méganium", "Héricendre", "Feurisson", "Typhlosion", "Kaiminus", "Crocrodil", "Aligatueur", "Fouinette", "Fouinar", "Hoothoot", "Noarfang", "Coxy", "Coxyclaque", "Mimigal", "Migalos", "Nostenfer", "Loupio", "Lanturn", "Pichu", "Mélo", "Toudoudou", "Togepi", "Togetic", "Natu", "Xatu", "Wattouat", "Lainergie", "Pharamp", "Joliflor", "Marill", "Azumarill", "Simularbre", "Tarpaud", "Granivol", "Floravol", "Cotovol", "Capumain", "Tournegrin", "Héliatronc", "Yanma", "Axoloto", "Maraiste", "Mentali", "Noctali", "Cornèbre", "Roigada", "Feuforêve", "Zarbi", "Qulbutoké", "Girafarig", "Pomdepik", "Foretress", "Insolourdo", "Scorplane", "Steelix", "Snubbull", "Granbull", "Qwilfish", "Cizayox", "Caratroc", "Scarhino", "Farfuret", "Teddiursa", "Ursaring", "Limagma", "Volcaropod", "Marcacrin", "Cochignon", "Corayon", "Rémoraid", "Octillery", "Cadoizo", "Démanta", "Airmure", "Malosse", "Démolosse", "Hyporoi", "Phanpy", "Donphan", "Porygon2", "Cerfrousse", "Queulorior", "Debugant", "Kapoera", "Lippouti", "Élekid", "Magby", "Écrémeuh", "Leuphorie", "Raikou", "Entei", "Suicune", "Embrylex", "Ymphect", "Tyranocif", "Lugia", "Ho-Oh", "Celebi", "Arcko", "Massko", "Jungko", "Poussifeu", "Galifeu", "Braségali", "Gobou", "Flobio", "Laggron", "Medhyèna", "Grahyèna", "Zigzaton", "Linéon", "Chenipotte", "Armulys", "Charmillon", "Blindalys", "Papinox", "Nénupiot", "Lombre", "Ludicolo", "Grainipiot", "Pifeuil", "Tengalice", "Nirondelle", "Hélédelle", "Goélise", "Bekipan", "Tarsal", "Kirlia", "Gardevoir", "Arakdo", "Maskadra", "Balignon", "Chapignon", "Parecool", "Vigoroth", "Monaflèmit", "Ningale", "Ninjask", "Munja", "Chuchmur", "Ramboum", "Brouhabam", "Makuhita", "Hariyama", "Azurill", "Tarinor", "Skitty", "Delcatty", "Ténéfix", "Mysdibule", "Galekid", "Galegon", "Galeking", "Méditikka", "Charmina", "Dynavolt", "Élecsprint", "Posipi", "Négapi", "Muciole", "Lumivole", "Rosélia", "Gloupti", "Avaltout", "Carvanha", "Sharpedo", "Wailmer", "Wailord", "Chamallot", "Camérupt", "Chartor", "Spoink", "Groret", "Spinda", "Kraknoix", "Vibraninf", "Libégon", "Cacnea", "Cacturne", "Tylton", "Altaria", "Mangriff", "Séviper", "Séléroc", "Solaroc", "Barloche", "Barbicha", "Écrapince", "Colhomard", "Balbuto", "Kaorine", "Lilia", "Vacilys", "Anorith", "Armaldo", "Barpau", "Milobellus", "Morphéo", "Kecleon", "Polichombr", "Branette", "Skelénox", "Téraclope", "Tropius", "Éoko", "Absol", "Okéoké", "Stalgamin", "Oniglali", "Obalie", "Phogleur", "Kaimorse", "Coquiperl", "Serpang", "Rosabyss", "Relicanth", "Lovdisc", "Draby", "Drackhaus", "Drattak", "Terhal", "Métang", "Métalosse", "Regirock", "Regice", "Registeel", "Latias", "Latios", "Kyogre", "Groudon", "Rayquaza", "Jirachi", "Deoxys", "Tortipouss", "Boskara", "Torterra", "Ouisticram", "Chimpenfeu", "Simiabraz", "Tiplouf", "Prinplouf", "Pingoléon", "Étourmi", "Étourvol", "Étouraptor", "Keunotor", "Castorno", "Crikzik", "Mélokrik", "Lixy", "Luxio", "Luxray", "Rozbouton", "Roserade", "Kranidos", "Charkos", "Dinoclier", "Bastiodon", "Cheniti", "Cheniselle", "Papilord", "Apitrini", "Apireine", "Pachirisu", "Mustébouée", "Mustéflott", "Ceribou", "Ceriflor", "Sancoki", "Tritosor", "Capidextre", "Baudrive", "Grodrive", "Laporeille", "Lockpin", "Magirêve", "Corboss", "Chaglam", "Chaffreux", "Korillon", "Moufouette", "Moufflair", "Archéomire", "Archéodong", "Manzaï", "Mime Jr.", "Ptiravi", "Pijako", "Spiritomb", "Griknot", "Carmache", "Carchacrok", "Goinfrex", "Riolu", "Lucario", "Hippopotas", "Hippodocus", "Rapion", "Drascore", "Cradopaud", "Coatox", "Vortente", "Écayon", "Luminéon", "Babimanta", "Blizzi", "Blizzaroi", "Dimoret", "Magnézone", "Coudlangue", "Rhinastoc", "Bouldeneu", "Élekable", "Maganon", "Togekiss", "Yanmega", "Phyllali", "Givrali", "Scorvol", "Mammochon", "Porygon-Z", "Gallame", "Tarinorme", "Noctunoir", "Momartik", "Motisma", "Créhelf", "Créfollet", "Créfadet", "Dialga", "Palkia", "Heatran", "Regigigas", "Giratina", "Cresselia", "Phione", "Manaphy", "Darkrai", "Shaymin", "Arceus", "Victini", "Vipélierre", "Lianaja", "Majaspic", "Gruikui", "Grotichon", "Roitiflam", "Moustillon", "Mateloutre", "Clamiral", "Ratentif", "Miradar", "Ponchiot", "Ponchien", "Mastouffe", "Chacripan", "Léopardus", "Feuillajou", "Feuiloutan", "Flamajou", "Flamoutan", "Flotajou", "Flotoutan", "Munna", "Mushana", "Poichigeon", "Colombeau", "Déflaisan", "Zébibron", "Zéblitz", "Nodulithe", "Géolithe", "Gigalithe", "Chovsourir", "Rhinolove", "Rototaupe", "Minotaupe", "Nanméouïe", "Charpenti", "Ouvrifier", "Bétochef", "Tritonde", "Batracné", "Crapustule", "Judokrak", "Karaclée", "Larveyette", "Couverdure", "Manternel", "Venipatte", "Scobolide", "Brutapode", "Doudouvet", "Farfaduvet", "Chlorobule", "Fragilady", "Bargantua", "Mascaïman", "Escroco", "Crocorible", "Darumarond", "Darumacho", "Maracachi", "Crabicoque", "Crabaraque", "Baggiguane", "Baggaïd", "Cryptéro", "Tutafeh", "Tutankafer", "Carapagos", "Mégapagos", "Arkéapti", "Aéroptéryx", "Miamiasme", "Miasmax", "Zorua", "Zoroark", "Chinchidou", "Pashmilla", "Scrutella", "Mesmérella", "Sidérella", "Nucléos", "Méios", "Symbios", "Couaneton", "Lakmécygne", "Sorbébé", "Sorboul", "Sorbouboul", "Vivaldaim", "Haydaim", "Emolga", "Carabing", "Lançargot", "Trompignon", "Gaulet", "Viskuse", "Moyade", "Mamanbo", "Statitik", "Mygavolt", "Grindur", "Noacier", "Tic", "Clic", "Cliticlic", "Anchwatt", "Lampéroie", "Ohmassacre", "Lewsor", "Neitram", "Funécire", "Mélancolux", "Lugulabre", "Coupenotte", "Incisache", "Tranchodon", "Polarhume", "Polagriffe", "Hexagel", "Escargaume", "Limaspeed", "Limonde", "Kungfouine", "Shaofouine", "Drakkarmin", "Gringolem", "Golemastoc", "Scalpion", "Scalproie", "Frison", "Furaiglon", "Gueriaigle", "Vostourno", "Vaututrice", "Aflamanoir", "Fermite", "Solochi", "Diamat", "Trioxhydre", "Pyronille", "Pyrax", "Cobaltium", "Terrakium", "Viridium", "Boréas", "Fulguris", "Reshiram", "Zekrom", "Démétéros", "Kyurem", "Keldeo", "Meloetta", "Genesect", "Marisson", "Boguérisse", "Blindépique", "Feunnec", "Roussil", "Goupelin", "Grenousse", "Croâporal", "Amphinobi", "Sapereau", "Excavarenne", "Passerouge", "Braisillon", "Flambusard", "Lépidonille", "Pérégrain", "Prismillon", "Hélionceau", "Némélios", "Flabébé", "Floette", "Florges", "Cabriolaine", "Chevroum", "Pandespiègle", "Pandarbare", "Couafarel", "Psystigri", "Mistigrix", "Monorpale", "Dimoclès", "Exagide", "Fluvetin", "Cocotine", "Sucroquin", "Cupcanaille", "Sepiatop", "Sepiatroce", "Opermine", "Golgopathe", "Venalgue", "Kravarech", "Flingouste", "Gamblast", "Galvaran", "Iguolta", "Ptyranidur", "Rexillius", "Amagara", "Dragmara", "Nymphali", "Brutalibré", "Dedenne", "Strassie", "Mucuscule", "Colimucus", "Muplodocus", "Trousselin", "Brocélôme", "Desséliande", "Pitrouille", "Banshitrouye", "Grelaçon", "Séracrawl", "Sonistrelle", "Bruyverne", "Xerneas", "Yveltal", "Zygarde", "Diancie", "Hoopa", "Volcanion", "Brindibou", "Efflèche", "Archéduc", "Flamiaou", "Matoufeu", "Félinferno", "Otaquin", "Otarlette", "Oratoria", "Picassaut", "Piclairon", "Bazoucan", "Manglouton", "Argouste", "Larvibule", "Chrysapile", "Lucanon", "Crabagarre", "Crabominable", "Plumeline", "Bombydou", "Rubombelle", "Rocabot", "Lougaroc", "Froussardine", "Vorastérie", "Prédastérie", "Tiboudet", "Bourrinos", "Araqua", "Tarenbulle", "Mimantis", "Floramantis", "Spododo", "Lampignon", "Tritox", "Malamandre", "Nounourson", "Chelours", "Croquine", "Candine", "Sucreine", "Guérilande", "Gouroutan", "Quartermac", "Sovkipou", "Sarmuraï", "Bacabouh", "Trépassable", "Concombaffe", "Type:0", "Silvallié", "Météno", "Dodoala", "Boumata", "Togedemaru", "Mimiqui", "Denticrisse", "Draïeul", "Sinistrail", "Bébécaille", "Écaïd", "Ékaïser", "Tokorico", "Tokopiyon", "Tokotoro", "Tokopisco", "Cosmog", "Cosmovum", "Solgaleo", "Lunala", "Zéroïd", "Mouscoto", "Cancrelove", "Câblifère", "Bamboiselle", "Katagami", "Engloutyran", "Necrozma", "Magearna", "Marshadow", "Vémini", "Mandrillon", "Ama-Ama", "Pierroteknik", "Zeraora", "Meltan", "Melmetal", "Ouistempo", "Badabouin", "Gorythmic", "Flambino", "Lapyro", "Pyrobut", "Larméléon", "Arrozard", "Lézargus", "Rongourmand", "Rongrigou", "Minisange", "Bleuseille", "Corvaillus", "Larvadar", "Coléodôme", "Astronelle", "Goupilou", "Roublenard", "Tournicoton", "Blancoton", "Moumouton", "Moumouflon", "Khélocrok", "Torgamord", "Voltoutou", "Fulgudog", "Charbi", "Wagomine", "Monthracite", "Verpom", "Pomdrapi", "Dratatin", "Dunaja", "Dunaconda", "Nigosier", "Embrochet", "Hastacuda", "Toxizap", "Salarsen", "Grillepattes", "Scolocendre", "Poulpaf", "Krakos", "Théffroi", "Polthégeist", "Bibichut", "Chapotus", "Sorcilence", "Grimalin", "Fourbelin", "Angoliath", "Ixon", "Berserkatt", "Corayôme", "Palarticho", "M. Glaquette", "Tutétékri", "Crèmy", "Charmilly", "Hexadron", "Wattapik", "Frissonille", "Beldeneige", "Dolman", "Bekaglaçon", "Wimessir", "Morpeko", "Charibari", "Pachyradjah", "Galvagon", "Galvagla", "Hydragon", "Hydragla", "Duralugon", "Fantyrm", "Dispareptil", "Lanssorien", "Zacian", "Zamazenta", "Éthernatos", "Wushours", "Shifours", "Zarude", "Regieleki", "Regidrago", "Blizzeval", "Spectreval", "Sylveroy", "Cerbyllin", "Hachécateur", "Ursaking", "Paragruel", "Farfurex", "Qwilpik", "Amovénus"];

