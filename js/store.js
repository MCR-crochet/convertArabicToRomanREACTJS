(function(Reflux, ConvertActions, global) {
    'use strict';

    var numbers = {
        roman: "",
        arabic: "",
        isError: false,
        error: ""
    };

    global.ConvertStore = Reflux.createStore({
        // Liaison avec les actions
        listenables: [ConvertActions],

        // Implementation des Actions
        onConvertRomanToArabic: function() {
            console.log('Chiffre romain en entrée = ' + numbers.roman);

            numbers.error = "";

            if (numbers.roman === "") {
                numbers.arabic = "";
                numbers.isError = false;
                this.trigger(numbers);
            } else {
                self = this;
                $.ajax({
                    type: "GET",
                    dataType: "json",
                    crossDomain: true,
                    url: "http://localhost:9000/api/convertRomanToArabic?romanNumber=" + numbers.roman,
                    success: function(data) {
                        console.log("success");
                        console.log(JSON.stringify(data));
                        if (data.codeRetour === '0') {
                            numbers.arabic = data.message;
                            numbers.isError = false;
                        } else {
                            numbers.error = data.message;
                            numbers.isError = true;
                        }
                        self.trigger(numbers);
                    },
                    error: function(data) {
                        console.log("error");
                        console.log(JSON.stringify(data));
                        numbers.error = "Erreur du serveur";
                        numbers.isError = true;
                        self.trigger(numbers);
                    }
                });

                self.trigger(numbers);
            }

            console.log('Chiffre arabe en sortie = ' + numbers.arabic);
        },

        onConvertArabicToRoman: function() {
            console.log('Chiffre arabe en entrée = ' + numbers.arabic);

            numbers.error = "";

            if (numbers.arabic === "") {
                numbers.roman = "";
                numbers.isError = false;
                this.trigger(numbers);
            } else {
                self = this;

                self = this;
                $.ajax({
                    type: "GET",
                    dataType: "json",
                    crossDomain: true,
                    url: "http://localhost:9000/api/convertArabicToRoman?arabicNumber=" + numbers.arabic,
                    success: function(data) {
                        console.log("success");
                        console.log(JSON.stringify(data));
                        if (data.codeRetour === '0') {
                            numbers.roman = data.message;
                            numbers.isError = false;
                        } else {
                            numbers.error = data.message;
                            numbers.isError = true;
                        }
                        self.trigger(numbers);
                    },
                    error: function(data) {
                        console.log("error");
                        console.log(JSON.stringify(data));
                        numbers.error = "Erreur du serveur";
                        numbers.isError = true;
                        self.trigger(numbers);
                    }
                });
                self.trigger(numbers);

            }

            console.log('Chiffre romain en sortie = ' + numbers.roman);
        },

        getInitialState: function() {
            return numbers;
        }
    });

})(window.Reflux, window.ConvertActions, window);
