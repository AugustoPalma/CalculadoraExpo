import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RootLayout() {

	const [numeroClicado, setnumeroClicado] = useState<string>("");
  
	

	function Concatenar(valor: string){

		if(valor === "AC"){
			setnumeroClicado("");
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

	function Botao({ label }: { label: string }){
		return(
			<TouchableOpacity style={Styles.Botao} onPress={() => Concatenar(label)}>
				<Text style={Styles.textoBotao}>{label}</Text>
			</TouchableOpacity>
		);
	}

	return (
		
      <View style={Styles.container}> 
		<Text style={Styles.titulo}>
			{numeroClicado === "" ? "0" : numeroClicado}
		</Text>

		<View style={Styles.linha}>

			<Botao label = "AC" />
			<Botao label = "R²" />
			<Botao label = "." />
			<Botao label = "/" />

		</View>

		<View style={Styles.linha}>

		<Botao label = "1" />
		<Botao label = "2" />
		<Botao label = "3" />
		<Botao label = "*" />


		</View>

		<View style={Styles.linha}>

			<Botao label = "4" />
			<Botao label = "5" />
			<Botao label = "6" />
			<Botao label = "-" />

		</View>

		<View style={Styles.linha}>

			<Botao label = "7" />
			<Botao label = "8" />
			<Botao label = "9" />
			<Botao label = "+" />

		</View>

		<View style={Styles.linha}>

			<View style={Styles.botaoVazio} />
			<Botao label = "0" />
			
			<View style={Styles.botaoVazio} />
			<Botao label = "=" />

		</View>
      </View>
		
	);
}

const Styles = StyleSheet.create({

	container: {
		flex: 1,
		justifyContent: "center",
		padding: 20
	},

	titulo: {
		fontSize: 24,
		textAlign: "center",
		marginBottom: 20
	},

	linha: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 10
	},

	Botao: {
		flex: 1,
		backgroundColor: "orange",
		marginHorizontal: 5,
		paddingVertical: 20,
		borderRadius: 15,
		justifyContent: "center",
		alignItems: "center"	
	},

	textoBotao: {
		fontSize: 18,
		fontWeight: "bold",
	},

	botaoVazio: {
		flex: 1, 
		backgroundColor: "gray",
		marginHorizontal: 5,
		paddingVertical: 20,
		borderRadius: 15,
	}

})