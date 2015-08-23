(function() {
	// Ciljani iznos je limitiran na troznamenkasti broj
	// zato što veći broj ne stane u sivi okvir koji prikazuje
	// "Target" iznos.
	var target = Math.round(Math.random() * 1000, 10),
		percentage = Math.round(Math.random() * 100, 10),
		reached = Math.round(target * percentage / 100);

	initTargetIndicator(reached, target);	
})();