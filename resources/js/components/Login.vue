<template>

        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="4"
            md="2"
          >

            <v-card class="elevation-12">

              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login form</v-toolbar-title>
                <div class="flex-grow-1"></div>
              </v-toolbar>
              <v-card-text>
                <form @submit.prevent="authenticate">
                  <v-text-field
                  v-model="form.email"
                    label="Login"
                    name="login"
                    prepend-icon="person"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                  v-model="form.password"
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                  ></v-text-field>
                 </form>
              </v-card-text>
              <v-card-actions>
                    <v-spacer></v-spacer>
                <v-btn @click="authenticate" color="primary"> Login</v-btn>
              </v-card-actions>
            </v-card>

          </v-col>
        </v-row>



</template>

<script>
import {login} from '../helpers/auth';
  export default {
    props: {
      source: String,
    },
    data: () =>({
        drawer: null,
        form: new Form({
            email : '',
            password: '',
        })
    }),
    methods: {
     authenticate(){
            login(this.$data.form)
            .then((res)=>{
                this.$router.push('/admin/home')
            })
            .catch((error)=>{

            })
        },
    }
  }
</script>
