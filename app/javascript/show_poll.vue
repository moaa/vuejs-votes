<template>
  <v-app>
    <v-row align="center">
      <v-row justify="space-around">
<v-card class="mx-auto" min-width="400" tile>
  <v-toolbar flat dark color="blue-gray">
    <v-toolbar-title>{{ question }}</v-toolbar-title>
  </v-toolbar>
  <v-card-text>
    <v-list dense>
      <v-list-item-group v-model="selectedVote" color="primary">
        <v-list-item v-for="(c, i) in allChoices" :key="i">
          <v-list-item-content>
            <v-list-item-title v-html="c.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-divider class="my-2"></v-divider>
  </v-card-text>
  
  <v-card-actions>
    <div class="flex-grow-1"></div>
    <v-btn color="success" block depressed :disabled="selectedVote == null" @click="saveVote">
      Vote
    </v-btn>
  </v-card-actions>
</v-card>
</v-row>
</v-row>
</v-app>
</template>

<script>
export default {
    data: function() {
        return {
            question: '',
            allChoices: [],
            selectedVote: null,
        }
    },
    methods: {
        saveVote: function() {
            var choice = this.allChoices[this.selectedVote]
            this.$http.post(window.location.href+'/cast_vote', {
                choice_id: choice.id
            }).then( resp => {
                if ( resp.data.status == 'OK' ) {
                    window.location.href = window.location.href + '/results'
                }
            })
        },
    },
    mounted: function() {
        this.$http.get(window.location.href+'.json').then(resp => {
            this.question = resp.data.question
            this.allChoices = resp.data.choices
        })
}
}
</script>
