import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RootLayout() {

	const [numeroClicado, setnumeroClicado] = useState<string>("");
  
	

	function Concatenar(valor: string){

		if(valor === "AC"){
			setnumeroClicado("");
			return;
		}
		
		if(valor === "R²"){
			raizQuadrada();
			return;
		}

		if(valor === "="){
			try{
				const resultado = eval(numeroClicado);
				setnumeroClicado(String(resultado));
			}catch{
				setnumeroClicado("ERRO");
			}
			return;

		}
		
		setnumeroClicado(numeroClicado + valor);
	}


	function raizQuadrada(){
		const numero = parseFloat(numeroClicado);

		if(numero < 0){
			setnumeroClicado("ERRO");
			return;
		}
		let x = numero;
		
		for(let i = 0; i < 10; i++){
			x = (x + numero / x) / 2;
		}
		setnumeroClicado(x.toString());
	}

	function Botao({ label, style }: { label: string, style?: any }){
		return(
			<TouchableOpacity style={[Styles.Botao, style]} onPress={() => Concatenar(label)}>
				<Text style={Styles.textoBotao}>{label}</Text>
			</TouchableOpacity>
		);
	}

	

	return (
	  <View style={Styles.container2}>
        <View style={Styles.container}> 
		<Text style={Styles.titulo}>
			{numeroClicado === "" ? "0" : numeroClicado}
		</Text>

		<View style={Styles.linha}>

			<Botao style={Styles.botaoCinza} label = "AC" />
			<Botao style={Styles.botaoCinza} label = "R²" />
			<Botao style={Styles.botaoCinza} label = "." />
			<Botao style={Styles.botaoAmarelo} label = "/" />

		</View>

		<View style={Styles.linha}>

		<Botao label = "1" />
		<Botao label = "2" />
		<Botao label = "3" />
		<Botao style={Styles.botaoAmarelo} label = "*" />


		</View>

		<View style={Styles.linha}>

			<Botao label = "4" />
			<Botao label = "5" />
			<Botao label = "6" />
			<Botao style={Styles.botaoAmarelo} label = "-" />

		</View>

		<View style={Styles.linha}>

			<Botao label = "7" />
			<Botao label = "8" />
			<Botao label = "9" />
			<Botao style={Styles.botaoAmarelo} label = "+" />

		</View>

		<View style={Styles.linha}>
			
			<Botao label = "0" />
			
			<Botao style={Styles.botaoAmarelo} label = "=" />

		</View>
        </View>
	  </View>
		
	);
}

const Styles = StyleSheet.create({

	container2: {
		backgroundColor: "#DEDEDE",
		flex: 1,

	},

	container: {
		flex: 1,
		marginHorizontal: 550,
		marginVertical: 60,
		borderRadius: 20,
		marginBottom: 50,
		backgroundColor: "#000000",
		justifyContent: "center",
		padding: 40
		
	},

	titulo: {
		fontSize: 25,
		borderRadius: 20,
		padding: 10,
		backgroundColor: "gray",
		textAlign: "center",
		marginBottom: 30
	},

	linha: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 10
	},

	Botao: {
		flex: 1,
		backgroundColor: "#303030",
		marginHorizontal: 5,
		paddingVertical: 20,
		borderRadius: 1000,
		justifyContent: "center",
		alignItems: "center"	
	},

	textoBotao: {
		fontSize: 25,
		fontWeight: "bold",
		color: "white",
		alignItems: "center"
	},

	botaoCinza: {
		backgroundColor: "#67666B"
	},

	botaoAmarelo: {
		backgroundColor: "#FFA809"
	}

	

})