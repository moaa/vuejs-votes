<template>
  <v-app>
    <v-row align="center">
      <v-row justify="space-around">
        <v-card class="mx-auto" min-width="400" tile>
          <v-toolbar flat dark color="blue-gray">
            <v-toolbar-title>{{ poll.question }} - RESULTS</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <h2> Summary </h2>
            <v-simple-table>
              <thead>
                <th class="text-left">Choice</th>
                <th class="text-left"># of votes</th>
              </thead>
              <tbody>
                <tr v-for="c in poll.choices">
                  <td>{{ c.title }}</td>
                  <td>{{ countVotes(c.id) }}</td>
                </tr>
              </tbody>
            </v-simple-table>
            <v-divider></v-divider>
            <h2> Details </h2>
            <v-simple-table>
              <thead>
                <th class="text-left">Session</th>
                <th class="text-left">IP</th>
                <th class="text-left">UA</th>
                <th class="text-left">Choice</th>
              </thead>
              <tbody>
                <tr v-for="vote in poll.votes">
                  <td>{{ vote.session_id }}</td>
                  <td>{{ vote.user_agent }}</td>
                  <td>{{ vote.voter_ip }}</td>
                  <td>{{ choiceTitle(vote.choice_id) }}</td>
                </tr>
              </tbody>
            </v-simple-table>
            <v-btn absolute dark fab top right color="black" @click="returnHome">
              <v-icon>mdi-home</v-icon>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-row>
    </v-row>
  </v-app>
</template>

<script>
export default {
    data: function() {
        return {
            poll: null,
        }
    },
    methods: {
        countVotes: function(cid) {
            var nvotes = 0
            for (var i=0; i<this.poll.votes.length; i++) {
                if (this.poll.votes[i].choice_id == cid) nvotes++
            }
            return nvotes
        },
        choiceTitle: function(cid) {
            for (var i=0; i<this.poll.choices.length; i++) {
                if (this.poll.choices[i].id == cid){
                    return this.poll.choices[i].title
                }
            }
            return ''
        },
        returnHome: function() {
            window.location.href = '/'
        }
    },
    mounted: function() {
        this.$http.get(window.location.href+'.json').then(resp => {
            console.log(resp)
            this.poll = resp.data
        })
    }
}
</script>
