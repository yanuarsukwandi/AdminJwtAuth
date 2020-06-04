<template>
    <v-card>

        <v-card-title primary-title>
            <div>
                <h3 class="headLine mb-0">Posts Table</h3>
                <div>This is the length of table : {{this.posts.length}}</div>
            </div>
        </v-card-title>
        <v-card-text>
            <v-data-table
                :headers="headers"
                :items="posts"
                class="elevation-1"
            >
            <template v-slot:item.operation="{ item }">
                <div class="text-center d-flex align-center">
                    <v-tooltip top>
                        <template v-slot:activator="{on}">
                            <v-btn class="v-btn-simple" color="success" icon v-on="on" @click="editPost(item.id)">
                                <v-icon>edit</v-icon>
                            </v-btn>
                        </template>
                        <span>edit</span>
                    </v-tooltip>
                    <v-tooltip top>
                        <template v-slot:activator="{on}">
                            <v-btn class="v-btn-simple" color="error" icon v-on="on" @click="deletePost(item.id)">
                                <v-icon>delete</v-icon>
                            </v-btn>
                        </template>
                        <span>delete</span>
                    </v-tooltip>
                </div>

            </template>

            </v-data-table>
        </v-card-text>
        <v-card-actions>
            <router-link to="/admin/post/">
                <v-btn outlined color="primary">Add New</v-btn>
            </router-link>
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
            {
                text: 'Operate',
                value: 'operation'
            }
        ],
        form: new Form({})
      }
    },
    methods:{
        deletePost(id){
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result)=>{
                this.form.delete('/api/posts/'+id)
                .then((results)=>{
                     Fire.$emit('afterCreate')
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted',
                        'success'
                    )

                })
                .catch((error)=>{
                    Swal.fire({
                        type: 'error',
                        title: 'Ooops',
                        text: error
                    })
                })
            })
        },
        refreshPost(){
            this.$store.dispatch('getPosts')
        },
        editPost(id){
            this.$router.push('/admin/post/'+ id)
        }
    },
    computed:{
        posts(){
            return this.$store.getters.posts
        },

    },
    mounted(){
        if(this.posts.length){
            return;
        }
        this.$store.dispatch('getPosts');
    },
    created(){
        Fire.$on('afterCreate', ()=>{
            this.refreshPost();
        })
         this.refreshPost();
    }
}
</script>
