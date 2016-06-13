(function(React, ReactRouter, Reflux, ConvertActions, ConvertStore, global) {

    // affichage des inputs de conversion
    var ConvertApp = React.createClass({

        //  Gestion du store
        mixins: [Reflux.connect(ConvertStore, 'numbers')],

        // Appel des actions du store
        convertArabicToRoman: function(e){
            var numbers = this.state.numbers;
            numbers.arabic = e.target.value;
            this.setState({numbers: numbers});
            ConvertActions.convertArabicToRoman();
        },
        convertRomanToArabic: function(e){
            var numbers = this.state.numbers;
            numbers.roman = e.target.value.toUpperCase();
            this.setState({numbers: numbers});
            ConvertActions.convertRomanToArabic();
        },

        // Gestion de l'affichage
        render: function() {
            var number = this.state.numbers;

            var InputGroup = ReactBootstrap.InputGroup;
            var FormControl = ReactBootstrap.FormControl;

            var errorStyle = {
                color: 'red',
                display: number.isError ? 'block' : 'none'
            };

            return (
                <div>
                    <InputGroup>
                        Chiffre arabe : 
                        <FormControl type="text" placeholder="Chiffre arabe" value={number.arabic} onChange={this.convertArabicToRoman}></FormControl>
                        <br/><br/>
                        Chiffre romain :
                        <FormControl type="text" placeholder="Chiffre romain" value={number.roman} onChange={this.convertRomanToArabic}></FormControl>
                        <p style={errorStyle}>{number.error}</p>
                    </InputGroup>
                </div>
            );

        }
    });

    // affichage de la classe ConvertApp dans le div avec l'id app
    ReactDOM.render(<ConvertApp/>, document.getElementById('app'));

})(window.React, window.ReactRouter, window.Reflux, window.ConvertActions, window.ConvertStore, window);
