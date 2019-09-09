<template>
  <v-app>
    <v-row align="center">
      <v-row justify="space-around">
        <v-card class="mx-auto" min-width="600" tile>
          <v-toolbar flat color="primary" dark>
            <v-toolbar-title>Dashboard</v-toolbar-title>
          </v-toolbar>
          <v-tabs vertical>
            <v-tab>
              <v-icon left>mdi-account</v-icon>
              My Votes
            </v-tab>
            <v-tab>
              <v-icon left>mdi-plus</v-icon>
              New Vote
            </v-tab>
            <v-tab-item>
              <v-simple-table>
                <thead>
                  <th class="text-left">Question</th>
                  <th class="text-left"># of choices</th>
                  <th class="text-left"># of votes</th>
                  <th class="text-left">View</th>
                </thead>
                <tbody>
                  <tr v-for="poll in myPolls">
                    <td>{{ poll.question }}</td>
                    <td>{{ poll.choices.length }}</td>
                    <td>{{ poll.votes.length }}</td>
                    <td><a :href="'/polls/'+poll.id+'/results'">Results</a></td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-tab-item>
            <v-tab-item>

              <v-card>
                <v-card-text>
                  <v-text-field filled v-model="voteQuestion" label="Question" placeholder="What are we voting on?"></v-text-field>
                  <v-list dense diabled inactive>
                    <v-list-item-group color="primary">
                      <v-list-item v-for="(c, i) in allChoices" :key="i">
                        <v-list-item-content>
                          <v-list-item-title v-html="c.title"></v-list-item-title>
                        </v-list-item-content>
                        <v-list-item-action>
                          <v-btn icon @click="removeChoice(c)">
                            <v-icon color="red">mdi-delete</v-icon>
                          </v-btn>
                        </v-list-item-action>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                  <v-text-field filled label="Add Choice" v-model="voteChoice" placeholder="Choice" @keyup.enter="addChoice" :append-outer-icon="voteChoice ? 'mdi-plus' : ''" @click:append-outer="addChoice"></v-text-field>

                  <v-divider class="my-2"></v-divider>
                </v-card-text>

                <v-card-actions>
                  <div class="flex-grow-1"></div>
                  <v-btn color="success" block depressed @click="savePoll">
                    Create
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-row>
    </v-row>
</v-app>
</template>

<script>
export default {
    data: function () {
        return {
            voteQuestion: '',
            voteChoice: '',
            allChoices: [],
            myPolls: [],
        }
    },
    methods: {
        addChoice: function(choice) {
            var value = this.voteChoice && this.voteChoice.trim()
            if (!value) { return }
            this.allChoices.push({ title: value })
            this.voteChoice = ''
        },
        removeChoice: function(choice) {
            this.allChoices.splice(this.allChoices.indexOf(choice), 1)
        },
        savePoll: function() {
            this.$http.post('/polls', {
                poll: {
                    question: this.voteQuestion,
                    choices: this.allChoices
                }
            }).then( resp => {
                if (resp.data.status == "OK") {
                    window.location = "/polls/" + resp.data.id
                }
            })
            
        }
    },
    mounted: function() {
        this.$http.get(window.location.href+'my_polls').then(resp => {
            console.log(resp)
            this.myPolls = resp.data
        })
    }
}
</script>
