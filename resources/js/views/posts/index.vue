<template>
    <v-card>

        <v-card-title primary-title>
            <div>
                <h3 class="headLine mb-0">headLine</h3>
                <div>description</div>
            </div>
        </v-card-title>
        <v-card-text>
            <v-data-table
                :headers="headers"
                :items="posts"
                class="elevation-1"
            >
            </v-data-table>
        </v-card-text>
        <v-card-actions>
            <router-link to="/admin/home">
                <v-btn color="primary">Back</v-btn>
            </router-link>
            
            <v-btn color="error">Delete</v-btn>
           <v-btn color="success">Update</v-btn>
        </v-card-actions>
   </v-card>
</template>
<script>
export default {
    data(){
        return {
            headers:[{
                text: 'No',
                value: 'id'
            },
            {
                text: 'Title',
                value: 'title'
            },
            {
                text: 'Content',
                value: 'body'
            },
        ],
      }
    },
    computed:{
        posts(){
            return this.$store.getters.posts
        }
    },
    mounted(){
        if(this.posts.length){
            return;
        }
        this.$store.dispatch('getPosts');
    }
}
</script>
