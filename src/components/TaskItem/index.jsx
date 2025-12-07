import { Pressable, StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { IconCheck, IconPencil, IconTrash} from "../Icons"

// Componente que recebe status de conclusão e texto da tarefa
export default function TaskItem( {text, state, onComplete, onDelete, onEdit, }) {
    if (state == true) {
        return (
            <View style={styles.containerTrue}>

            <Text style={styles.trueText}>
                {text}
            </Text>

            <Pressable onPress={onDelete}>
                <IconTrash />   {/* Icone para ação de excluir */}
            </Pressable>
        </View>
        )
    }
    
    else if(state == false){
        return(
            <View style={styles.container}>
            <Pressable onPress={onComplete}> 
                <IconCheck /> {/* Icone para ação de completar */} 
            </Pressable>

            <Text style={styles.text}>
                {text}
            </Text>

            <Pressable onPress={onDelete}>
                <IconTrash />   {/* Icone para ação de excluir */}
            </Pressable>
        </View>
        )
    }

    return null;
}

// Declaração dos estilos usados no card
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: "#B872FF",
        paddingHorizontal: 8,
        paddingVertical: 18,
        justifyContent: 'space-between',
        borderRadius: 8
    },
    containerTrue: {
flexDirection: 'row',
        backgroundColor: "#25c510ff",
        paddingHorizontal: 8,
        paddingVertical: 18,
        justifyContent: 'space-between',
        borderRadius: 8
    },
    text: {
        color: "#021123",
        fontSize: 18
    },
    trueText:{
        color: "#021123",
        fontSize: 18,
        textDecorationLine: 'line-through'
    }
})
