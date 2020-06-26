<template>
  <v-container fluid style="">
    <v-row >
      <v-col cols="12" md="12" >
           
            <span>Se déconnecter</span>
            <v-btn icon @click="">
            <v-icon color="red-darken-2">mdi-logout</v-icon>

            </v-btn>
      </v-col>
      <v-col cols="12" md="4">
            <v-card 
            color="rgba(255,255,255,0.5)" >
                    <v-list-item nine-line>
                    <v-list-item-content>
                        <v-list-item-title class="display-1 pt-1">Général</v-list-item-title>
                            <v-list-item-subtitle class="pt-5">
                                Pseudo :  {{ username }}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle class=" pt-1">
                                Email :
                            </v-list-item-subtitle>
                            <v-list-item-title class="display-1 pt-5">Statistique</v-list-item-title>
                            <v-list-item-subtitle class=" pt-1">
                                Gold total :
                            </v-list-item-subtitle>
                            <v-list-item-subtitle class=" pt-1">
                                Gold utilisé :
                            </v-list-item-subtitle>
                            <v-list-item-subtitle class=" pt-1">
                                Temps de jeu :
                            </v-list-item-subtitle>
                            <v-list-item-subtitle class=" pt-1">
                                Total amélioration acheté :
                            </v-list-item-subtitle>
                            <v-list-item-subtitle class=" pt-1">
                                Gold par seconde :
                            </v-list-item-subtitle>
                            <v-list-item-subtitle class=" pt-1">
                                Gold par clique :
                            </v-list-item-subtitle>
                            <v-list-item-subtitle class=" pt-1">
                                Nombre de gold fait en tout grâce au clique :
                            </v-list-item-subtitle>
                            <v-list-item-subtitle class=" pt-1">
                                Nombre de gold fait en tout grâce au amélioration : 
                            </v-list-item-subtitle>
                    </v-list-item-content>
                    </v-list-item>
            </v-card>
        </v-col>
        <v-col cols="12" md="8"> 
            <v-card color="rgba(255,255,255,0.5)">
                    <v-list-item one-line>
                    <v-list-item-content>
                        <v-list-item-title class="display-1 pt-1">Amélioration</v-list-item-title>
                        <v-spacer></v-spacer>

                    </v-list-item-content>
                    </v-list-item>
            </v-card>
        </v-col>
        <v-col cols="12" md="12"> 
            <v-card color="rgba(255,255,255,0.5)">
                    <v-list-item one-line>
                    <v-list-item-content>
                        <v-list-item-title class="display-1 pt-1">Bonus</v-list-item-title>
                        <v-spacer></v-spacer>

                    </v-list-item-content>
                    </v-list-item>
            </v-card>
        </v-col>
        
    </v-row>
  </v-container>
</template>

<script>
import Axios from "axios";
export default {
    name: 'Profil',
  data () {
    return {
      username: "",
      password: "",
      email:""
}
  },
  
  mounted () {
      
      axios
      .get("/users/1")
      .then(response => {
          console.log(response.data)
          this.username = response.data
          
        }).catch(error => {
            
            console.log("error")
        })
  },
}
</script>

<style>
</style>
