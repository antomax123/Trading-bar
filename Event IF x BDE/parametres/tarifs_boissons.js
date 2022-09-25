var recreate = true;

if(localStorage.getItem("restaurer_sauvegarde")=="true"){
	boissons = JSON.parse(localStorage.getItem("boissons"));
	var nombre_boissons = parseInt(localStorage.getItem("nombre_boissons"));
	if(boissons !== null){
		recreate = false;
	}
}

if(recreate){
	var boissons = {
		"bet" : {"prix_initial" : 3.0, "prix_krach" : 0.7, "volatilité" : 1, "nom_complet":"Bête"},
		"cht" : {"prix_initial" : 2.5, "prix_krach" : 1.1, "volatilité" : 1, "nom_complet":"Ch'ti"},
		"chr" : {"prix_initial" : 3.0, "prix_krach" : 0.8, "volatilité" : 1, "nom_complet":"Ch'ti Triple"},
		"pxd" : {"prix_initial" : 3.5, "prix_krach" : 0.8, "volatilité" : 1, "nom_complet":"Paix Dieu"},
		"trk" : {"prix_initial" : 3.0, "prix_krach" : 1.7, "volatilité" : 1, "nom_complet":"Triple K"},
		"kwk" : {"prix_initial" : 3.0, "prix_krach" : 1.3, "volatilité" : 1, "nom_complet":"Kwak"},
		"vdk" : {"prix_initial" : 3.0, "prix_krach" : 1.5, "volatilité" : 1, "nom_complet":"Vodka Red-Bull"},
		"wky" : {"prix_initial" : 3.0, "prix_krach" : 1.2, "volatilité" : 1, "nom_complet":"Whisky Coca"},

	}

	var nombre_boissons = 0

	for(let i in boissons){
		boissons[i]["ventes"] = [0];
		boissons[i]["prix"] = [boissons[i]["prix_initial"]];
		nombre_boissons += 1;
	}

	var compteur = 0
	for(let i in boissons){
		if(!boissons[i]["couleur"]){
			boissons[i]["couleur"] = "hsl(" + Math.ceil(compteur * 360 / (nombre_boissons+1)) + ", 56%, 60%)";
		}
		compteur += 1
	}
}
