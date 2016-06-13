(function(Reflux, global) {
    'use strict';

    // Gestion des actions de l'applications
    global.ConvertActions = Reflux.createActions([
        "convertArabicToRoman",     // convertsion de chiffres arabes en chiffres romains
        "convertRomanToArabic", // convertsion de chiffres romains en chiffres arabes
    ]);

})(window.Reflux, window);
